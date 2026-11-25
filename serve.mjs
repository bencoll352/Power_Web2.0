import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json'
};

// Mirror firebase.json 301 redirects locally so Playwright can verify them
const redirects = {
  '/intelligence': '/platforms',
  '/intelligence.html': '/platforms',
  '/platform': '/platforms',
  '/platform.html': '/platforms',
  '/info': '/information',
  '/info.html': '/information',
  '/insights': '/information',
  '/insights.html': '/information',
  '/academy': '/coaching',
  '/why-us': '/partnerships',
  '/why-us.html': '/partnerships',
  '/claim': '/check',
  '/demo': '/dashboard'
};

// Local synthetic-only test receiver for automated verification (never sends to live inboxes)
const seenSubmissionIds = new Map();

function handleTestEnquiry(req, res) {
  let raw = '';
  req.on('data', chunk => {
    raw += chunk;
    if (raw.length > 65536) req.destroy();
  });
  req.on('end', () => {
    const sendJson = (status, obj) => {
      const body = JSON.stringify(obj);
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) });
      res.end(body);
    };
    if (req.headers['x-test-simulate-error'] === '1') {
      return sendJson(503, { ok: false, error: 'Simulated receiver outage for failure-recovery testing.' });
    }
    let data;
    try {
      data = JSON.parse(raw || '{}');
    } catch {
      return sendJson(400, { ok: false, error: 'Invalid JSON payload.' });
    }
    const type = String(data.type || '');
    if (!['commercial', 'candidate', 'territory'].includes(type)) {
      return sendJson(400, { ok: false, error: 'Unsupported enquiry type.' });
    }
    if (!String(data.name || '').trim()) {
      return sendJson(422, { ok: false, error: 'Name is required.' });
    }
    if (type === 'commercial') {
      const email = String(data.email || '').trim();
      const msg = String(data.message || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return sendJson(422, { ok: false, error: 'A valid work email is required.' });
      if (msg.length < 10) return sendJson(422, { ok: false, error: 'Please include at least 10 characters describing your requirement.' });
    } else if (type === 'candidate') {
      if (!String(data.contact || '').trim()) return sendJson(422, { ok: false, error: 'A confidential email or mobile number is required.' });
    } else if (type === 'territory') {
      const email = String(data.email || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return sendJson(422, { ok: false, error: 'A valid work email is required.' });
      if (!String(data.company || '').trim() || !String(data.industry || '').trim() || !String(data.region || '').trim()) {
        return sendJson(422, { ok: false, error: 'Company, sector and region are required.' });
      }
    }
    const subId = String(data.submissionId || '');
    if (subId && seenSubmissionIds.has(subId)) {
      return sendJson(200, seenSubmissionIds.get(subId));
    }
    const receipt = {
      ok: true,
      synthetic: true,
      type,
      reference: `SYN-${type.slice(0, 3).toUpperCase()}-${String(seenSubmissionIds.size + 1).padStart(3, '0')}`,
      receivedAt: new Date().toISOString()
    };
    if (subId) seenSubmissionIds.set(subId, receipt);
    return sendJson(200, receipt);
  });
}

http.createServer((req, res) => {
  let parsed;
  try {
    parsed = new URL(req.url, 'http://localhost');
  } catch {
    res.writeHead(400);
    return res.end();
  }
  const pathname = decodeURIComponent(parsed.pathname);

  if (req.method === 'POST' && pathname === '/api/test-enquiry') {
    return handleTestEnquiry(req, res);
  }

  if (redirects[pathname]) {
    res.writeHead(301, { Location: redirects[pathname] + parsed.search });
    return res.end();
  }

  let target = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!target.startsWith(root + path.sep)) {
    res.writeHead(403);
    return res.end();
  }
  if (!fs.existsSync(target) && fs.existsSync(target + '.html')) {
    target = target + '.html';
  }

  fs.stat(target, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Page not found');
    }

    const ext = path.extname(target).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    const total = stats.size;
    const range = req.headers.range;

    if (range && ext === '.mp4') {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(target, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType
      });
      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': total,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes'
      });
      fs.createReadStream(target).pipe(res);
    }
  });
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
