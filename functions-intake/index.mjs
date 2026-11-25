import crypto from 'node:crypto';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

if (!getApps().length) {
  initializeApp();
}
const db = getFirestore();

const ALLOWED_ORIGINS = new Set([
  'https://power-up-talent.web.app',
  'https://power-up-talent.firebaseapp.com',
  'https://power-uptalent.co.uk',
  'https://www.power-uptalent.co.uk',
  'http://127.0.0.1:4173',
  'http://localhost:4173'
]);

const COLLECTIONS = {
  commercial: 'public_commercial_enquiries',
  territory: 'public_territory_reviews',
  candidate: 'private_candidate_enquiries'
};

const clean = (val, maxLen = 2000) => String(val ?? '').trim().slice(0, maxLen);
const isValidEmail = val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

function makeDocId(type, rawSubId) {
  const safe = clean(rawSubId, 80).replace(/[^a-zA-Z0-9_-]/g, '');
  if (safe.length >= 6) return safe;
  return `${type}-${crypto.randomBytes(6).toString('hex')}`;
}

function makeReference(type, docId) {
  const prefix = type === 'commercial' ? 'PUT-COM' : type === 'candidate' ? 'PUT-CAN' : 'PUT-TER';
  const suffix = crypto.createHash('sha256').update(docId).digest('hex').slice(0, 6).toUpperCase();
  return `${prefix}-${suffix}`;
}

function validateAndBuildRecord(body) {
  const type = clean(body?.type, 20).toLowerCase();
  if (!['commercial', 'candidate', 'territory'].includes(type)) {
    return { error: 'Unsupported enquiry type.' };
  }

  const name = clean(body?.name, 160);
  if (!name) return { error: 'Please enter your name.' };

  if (type === 'commercial') {
    const email = clean(body?.email, 200);
    const message = clean(body?.message, 4000);
    if (!isValidEmail(email)) return { error: 'Please enter a valid work email address.' };
    if (message.length < 10) return { error: 'Please include at least 10 characters describing your requirement.' };
    return {
      type,
      record: {
        type,
        interest: clean(body?.interest, 160) || 'Growth partnership',
        name,
        company: clean(body?.company, 200),
        email,
        message,
        status: 'new',
        source: 'power-up-talent.web.app'
      }
    };
  }

  if (type === 'candidate') {
    const contact = clean(body?.contact, 200);
    if (!contact) return { error: 'Please provide a preferred confidential email or mobile number.' };
    return {
      type,
      record: {
        type,
        confidential: true,
        accessBoundary: 'private-search-only',
        name,
        role: clean(body?.role, 200),
        contact,
        notes: clean(body?.notes, 4000),
        status: 'new',
        source: 'power-up-talent.web.app'
      }
    };
  }

  // territory
  const email = clean(body?.email, 200);
  const company = clean(body?.company, 200);
  const industry = clean(body?.industry, 200);
  const region = clean(body?.region, 200);
  if (!isValidEmail(email)) return { error: 'Please enter a valid work email address.' };
  if (!company || !industry || !region) {
    return { error: 'Company, industry sector and geographic region are required.' };
  }
  return {
    type,
    record: {
      type,
      name,
      title: clean(body?.title, 160),
      company,
      email,
      industry,
      region,
      priority: clean(body?.priority, 200),
      plan: clean(body?.plan, 4000),
      status: 'pending-director-review',
      source: 'power-up-talent.web.app'
    }
  };
}

export const publicEnquiryIntake = onRequest(
  {
    region: 'europe-west2',
    memory: '256MiB',
    timeoutSeconds: 15,
    maxInstances: 10
  },
  async (req, res) => {
    const origin = req.headers.origin;
    if (origin && ALLOWED_ORIGINS.has(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    res.setHeader('Cache-Control', 'no-store');

    if (req.method === 'OPTIONS') {
      return res.status(204).send('');
    }
    if (req.method !== 'POST') {
      return res.status(405).json({ ok: false, error: 'Method not allowed.' });
    }

    const parsed = validateAndBuildRecord(req.body);
    if (parsed.error) {
      return res.status(422).json({ ok: false, error: parsed.error });
    }

    const { type, record } = parsed;
    const docId = makeDocId(type, req.body?.submissionId);
    const reference = makeReference(type, docId);
    const colName = COLLECTIONS[type];
    const docRef = db.collection(colName).doc(docId);

    try {
      const existing = await docRef.get();
      if (existing.exists) {
        const data = existing.data() || {};
        return res.status(200).json({
          ok: true,
          duplicate: true,
          type,
          reference: data.reference || reference,
          receivedAt: data.receivedAtIso || new Date().toISOString()
        });
      }

      const receivedAtIso = new Date().toISOString();
      await docRef.set({
        ...record,
        reference,
        submissionId: docId,
        receivedAtIso,
        createdAt: FieldValue.serverTimestamp()
      });

      // Log only non-PII operational metadata
      console.info(JSON.stringify({ event: 'public_enquiry_received', type, reference, collection: colName }));

      return res.status(200).json({
        ok: true,
        type,
        reference,
        receivedAt: receivedAtIso
      });
    } catch (err) {
      console.error(JSON.stringify({ event: 'public_enquiry_error', type, code: err?.code || 'unknown' }));
      return res.status(500).json({
        ok: false,
        error: 'Unable to record your enquiry right now. Please try again or use the email draft option.'
      });
    }
  }
);
