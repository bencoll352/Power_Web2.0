const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const serviceMenus = [...document.querySelectorAll('.service-menu')];

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
});

serviceMenus.forEach(menu => {
  menu.addEventListener('toggle', () => {
    if (menu.open) {
      serviceMenus.forEach(other => {
        if (other !== menu && other.open) other.removeAttribute('open');
      });
    }
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    serviceMenus.forEach(menu => {
      if (menu.hasAttribute('open')) {
        menu.removeAttribute('open');
        menu.querySelector('summary')?.focus();
      }
    });
  }
});

document.addEventListener('click', e => {
  serviceMenus.forEach(menu => {
    if (menu.hasAttribute('open') && !menu.contains(e.target)) {
      menu.removeAttribute('open');
    }
  });
});

// Challenge finder on legacy/interactive blocks
const challenges = {
  hire: [
    'A focused search.<br>A clearer hiring brief.',
    'Start with the commercial need behind the vacancy. We’ll define the role, map relevant talent and agree a discreet search approach.',
    'talent.html',
    'Explore headhunting'
  ],
  team: [
    'Practical coaching.<br>Stronger everyday habits.',
    'Identify where your people need support, then build a programme around sales, operational performance or leadership.',
    'coaching.html',
    'Explore coaching'
  ],
  market: [
    'Seven platforms.<br>Practical workflows.',
    'Start with the platform you need most across CRM, Communications, Sales & Intelligence, Delivery, Automation, AI Team and Marketing.',
    'platforms.html',
    'Explore the platforms'
  ],
  growth: [
    'Connected support.<br>A lasting partnership.',
    'Bring recurring hiring, development and business platforms together around your priorities, with clear responsibilities and regular reviews.',
    'partnerships.html',
    'Explore partnerships'
  ]
};

document.querySelectorAll('[data-challenge]').forEach(b =>
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-challenge]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const item = challenges[b.dataset.challenge];
    if (!item) return;
    const [title, text, url, label] = item;
    const titleEl = document.querySelector('#finder-title');
    const textEl = document.querySelector('#finder-text');
    const linkEl = document.querySelector('#finder-link');
    if (titleEl) titleEl.innerHTML = title;
    if (textEl) textEl.textContent = text;
    if (linkEl) {
      linkEl.href = url;
      linkEl.textContent = label + ' ↗';
    }
  })
);

// Helper for accessible field-level validation without discarding user input
function setFieldError(input, message) {
  if (!input) return;
  const label = input.closest('label') || input.parentElement;
  const errId = `err-${(input.form?.id || 'form')}-${input.name || 'field'}`;
  let err = label?.querySelector('.field-error');
  if (!message) {
    input.removeAttribute('aria-invalid');
    if (input.getAttribute('aria-describedby') === errId) input.removeAttribute('aria-describedby');
    if (err) err.remove();
    return;
  }
  input.setAttribute('aria-invalid', 'true');
  if (!err && label) {
    err = document.createElement('span');
    err.id = errId;
    err.className = 'field-error';
    err.setAttribute('role', 'alert');
    label.appendChild(err);
  }
  if (err) {
    err.id = errId;
    err.textContent = message;
    input.setAttribute('aria-describedby', errId);
  }
}

function validateField(input) {
  if (!input) return true;
  const val = (input.value || '').trim();
  if (input.hasAttribute('required') && !val) {
    setFieldError(input, 'Please complete this field.');
    return false;
  }
  if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    setFieldError(input, 'Please enter a valid email address (for example, name@company.co.uk).');
    return false;
  }
  if (input.name === 'message' && val && val.length < 10) {
    setFieldError(input, 'Please add a short summary (at least 10 characters) so we can direct your enquiry.');
    return false;
  }
  setFieldError(input, '');
  return true;
}

function isAllowedEndpoint(url, requirePrivate, isPrivateFlag) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (requirePrivate && !isPrivateFlag) return false;
  try {
    const parsed = new URL(trimmed, location.origin);
    const isLocalTest = parsed.hostname === '127.0.0.1' || parsed.hostname === 'localhost';
    return parsed.protocol === 'https:' || (parsed.protocol === 'http:' && isLocalTest);
  } catch {
    return false;
  }
}

function getEnquiryConfig() {
  const cfg = window.POWERUP_ENQUIRY_CONFIG || {};
  return {
    commercialEndpoint: String(cfg.commercialEndpoint || '').trim(),
    candidateEndpoint: String(cfg.candidateEndpoint || '').trim(),
    candidateChannelPrivate: Boolean(cfg.candidateChannelPrivate),
    territoryEndpoint: String(cfg.territoryEndpoint || '').trim(),
    timeoutMs: Number(cfg.timeoutMs) > 0 ? Number(cfg.timeoutMs) : 12000,
    extraHeaders: cfg.extraHeaders && typeof cfg.extraHeaders === 'object' ? cfg.extraHeaders : {}
  };
}

function ensureFeedbackBox(form, id) {
  let box = form.querySelector(`#${id}`);
  if (!box) {
    box = document.createElement('div');
    box.id = id;
    box.hidden = true;
    box.className = 'enquiry-status-box';
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn && submitBtn.parentElement) {
      submitBtn.insertAdjacentElement('afterend', box);
    } else {
      form.appendChild(box);
    }
  }
  return box;
}

function createSubmissionId(type) {
  return `${type}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

async function postEnquiryPayload(endpoint, payload, timeoutMs, extraHeaders) {
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...extraHeaders },
      body: JSON.stringify(payload),
      ...(ctrl ? { signal: ctrl.signal } : {})
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data.ok) {
      throw new Error(data.error || `The receiving service returned HTTP ${resp.status}.`);
    }
    return data;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function bindCopyButton(btnSelector, textareaSelector, statusSelector) {
  const btn = document.querySelector(btnSelector);
  const text = document.querySelector(textareaSelector);
  const status = document.querySelector(statusSelector);
  if (!btn || !text) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text.value);
      if (status) status.textContent = 'Copied to clipboard. Paste it into an email to info@power-uptalent.co.uk.';
    } catch {
      text.focus();
      text.select();
      if (status) status.textContent = 'Text selected above — press Ctrl+C (or Cmd+C) to copy.';
    }
  });
}

// Dual-path tab switcher on Contact page (with keyboard arrow support)
function activateContactPath(targetId) {
  const buttons = document.querySelectorAll('[data-path-tab]');
  const panels = document.querySelectorAll('.path-panel');
  if (!buttons.length || !panels.length) return;
  buttons.forEach(b => {
    const isMatch = b.dataset.pathTab === targetId;
    b.classList.toggle('active', isMatch);
    b.setAttribute('aria-selected', String(isMatch));
    b.setAttribute('tabindex', isMatch ? '0' : '-1');
  });
  panels.forEach(p => {
    const isMatch = p.id === targetId;
    p.classList.toggle('active', isMatch);
    p.hidden = !isMatch;
  });
}

const pathTabButtons = Array.from(document.querySelectorAll('[data-path-tab]'));
pathTabButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => activateContactPath(btn.dataset.pathTab));
  btn.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const next = pathTabButtons[(idx + (e.key === 'ArrowRight' ? 1 : -1) + pathTabButtons.length) % pathTabButtons.length];
      activateContactPath(next.dataset.pathTab);
      next.focus();
    }
  });
});

// Interest normalization map for incoming product/service CTAs
const interestAliases = {
  crm: 'AI services: CRM',
  communications: 'AI services: Communications',
  sales: 'AI services: Sales & Intelligence',
  'sales-intelligence': 'AI services: Sales & Intelligence',
  delivery: 'AI services: Business Delivery',
  'business-delivery': 'AI services: Business Delivery',
  automation: 'AI services: Automation',
  'ai-team': 'AI services: AI Team & Power Command Centre',
  'ai services: ai team': 'AI services: AI Team & Power Command Centre',
  'ai team': 'AI services: AI Team & Power Command Centre',
  marketing: 'AI services: Marketing & Social Media',
  'marketing-social-media': 'AI services: Marketing & Social Media',
  platforms: 'AI services walkthrough',
  walkthrough: 'AI services walkthrough',
  demo: 'AI services walkthrough',
  'request-a-demo': 'AI services walkthrough',
  pilot: 'Platform pilot discussion',
  talent: 'Critical hire',
  headhunting: 'Critical hire',
  hire: 'Critical hire',
  embedded: 'Embedded hiring',
  coaching: 'Coaching',
  partnership: 'Growth partnership',
  partnerships: 'Growth partnership',
  territory: 'Territory exclusivity audit',
  exclusivity: 'Territory exclusivity audit'
};

function consumeSessionHandoff() {
  try {
    const raw = sessionStorage.getItem('pu_concierge_handoff');
    if (!raw) return {};
    sessionStorage.removeItem('pu_concierge_handoff');
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

// Scrub any accidental personal contact query params from the address bar immediately
(function scrubPiiQueryParams() {
  const sp = new URLSearchParams(location.search);
  const piiKeys = ['name', 'email', 'phone', 'mobile', 'cand_name', 'cand_email', 'cand_notes'];
  let changed = false;
  piiKeys.forEach(k => {
    if (sp.has(k)) {
      sp.delete(k);
      changed = true;
    }
  });
  if (changed && typeof history !== 'undefined' && history.replaceState) {
    const qs = sp.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }
})();

function wireDirectOrDraftForm({
  form,
  type,
  getEndpoint,
  requirePrivate = false,
  getIsPrivate = () => false,
  buildPayload,
  buildDraft,
  copySelector,
  resultSelector,
  statusTextSelector,
  statusCopyBtn,
  directLabel,
  draftLabel
}) {
  if (!form) return;
  const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedbackBox = ensureFeedbackBox(form, `${form.id}-feedback`);

  const syncButtonLabel = () => {
    const cfg = getEnquiryConfig();
    const canDirect = isAllowedEndpoint(getEndpoint(cfg), requirePrivate, getIsPrivate(cfg));
    if (submitBtn) {
      submitBtn.innerHTML = `${canDirect ? directLabel : draftLabel} <span aria-hidden="true">↗</span>`;
      submitBtn.dataset.mode = canDirect ? 'direct' : 'draft';
    }
  };
  syncButtonLabel();

  let submissionId = createSubmissionId(type);
  let lastAcceptedId = null;
  let isSubmitting = false;

  inputs.forEach(inp => {
    inp.addEventListener('input', () => {
      validateField(inp);
      if (lastAcceptedId) {
        submissionId = createSubmissionId(type);
        lastAcceptedId = null;
      }
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (isSubmitting) return;

    let allValid = true;
    inputs.forEach(inp => {
      if (!validateField(inp)) allValid = false;
    });
    if (!allValid) {
      const firstInvalid = inputs.find(inp => inp.getAttribute('aria-invalid') === 'true');
      firstInvalid?.focus();
      return;
    }

    const cfg = getEnquiryConfig();
    const endpoint = getEndpoint(cfg);
    const canDirect = isAllowedEndpoint(endpoint, requirePrivate, getIsPrivate(cfg));
    const draft = buildDraft();
    const copyEl = document.querySelector(copySelector);
    const resultEl = document.querySelector(resultSelector);
    if (copyEl) copyEl.value = draft.body;

    if (!canDirect) {
      // Honest fallback mode: never show a "sent" confirmation when only opening an email draft
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.textContent = 'Opening email draft…';
      }
      if (statusTextSelector) {
        const st = document.querySelector(statusTextSelector);
        if (st && draft.statusNote) st.textContent = draft.statusNote;
      }
      feedbackBox.hidden = true;
      if (resultEl) {
        resultEl.hidden = false;
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      setTimeout(() => {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
          syncButtonLabel();
        }
      }, 600);
      location.href = `mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
      return;
    }

    if (lastAcceptedId === submissionId) {
      feedbackBox.hidden = false;
      feedbackBox.setAttribute('role', 'status');
      feedbackBox.className = 'enquiry-status-box is-success';
      feedbackBox.innerHTML = '<strong>Already received.</strong> Edit any field above if you need to send a separate enquiry.';
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = 'Submitting enquiry…';
    }
    feedbackBox.hidden = false;
    feedbackBox.setAttribute('role', 'status');
    feedbackBox.className = 'enquiry-status-box is-pending';
    feedbackBox.textContent = 'Sending your enquiry securely…';

    try {
      const payload = { ...buildPayload(), type, submissionId };
      const receipt = await postEnquiryPayload(endpoint, payload, cfg.timeoutMs, cfg.extraHeaders);
      lastAcceptedId = submissionId;
      if (resultEl) resultEl.hidden = true;
      feedbackBox.hidden = false;
      feedbackBox.setAttribute('role', 'status');
      feedbackBox.className = 'enquiry-status-box is-success';
      feedbackBox.innerHTML = `<strong>Enquiry received${receipt.reference ? ` (Ref: ${receipt.reference})` : ''}.</strong> Thank you — our team will review your details and respond within one working day.`;
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (err) {
      // Preserve every entered field value and offer both retry and clearly labelled email draft fallback
      feedbackBox.hidden = false;
      feedbackBox.setAttribute('role', 'alert');
      feedbackBox.className = 'enquiry-status-box is-error';
      const msg = err?.name === 'AbortError'
        ? 'The request timed out before confirmation was received.'
        : (err?.message || 'Unable to reach the enquiry service right now.');
      feedbackBox.innerHTML = `<strong>We could not confirm delivery yet.</strong> ${msg} Your details are still preserved above — you can try submitting again, or open an email draft below.`;
      if (resultEl) resultEl.hidden = false;
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        syncButtonLabel();
      }
    }
  });

  if (statusCopyBtn) bindCopyButton(statusCopyBtn, copySelector, `${statusCopyBtn}-status`.replace('#copy-', '#copy-'));
}

// 1. Client Commercial Brief Form
const form = document.querySelector('#enquiry-form');
if (form) {
  const sp = new URLSearchParams(location.search);
  const handoff = consumeSessionHandoff();
  const rawInterest = (sp.get('interest') || sp.get('service') || sp.get('platform') || '').trim();
  const pathParam = (sp.get('path') || '').trim().toLowerCase();

  if (
    pathParam === 'candidate' ||
    rawInterest.toLowerCase() === 'career conversation' ||
    rawInterest.toLowerCase() === 'confidential candidate' ||
    rawInterest.toLowerCase() === 'candidate' ||
    location.hash === '#candidate-path'
  ) {
    activateContactPath('candidate-path');
  } else {
    activateContactPath('client-path');
  }

  const interestSelect = form.elements.interest;
  const fallbackNote = document.querySelector('#interest-fallback-note');
  const intentBanner = document.querySelector('#selected-intent-banner');
  const syncIntentBanner = () => {
    if (intentBanner && interestSelect) {
      intentBanner.textContent = `Selected enquiry topic: ${interestSelect.value}`;
    }
  };

  if (rawInterest && interestSelect && rawInterest.toLowerCase() !== 'career conversation') {
    const options = Array.from(interestSelect.options);
    const aliasTarget = interestAliases[rawInterest.toLowerCase()] || rawInterest;
    const exactMatch = options.find(o => o.value.toLowerCase() === aliasTarget.toLowerCase());
    if (exactMatch) {
      interestSelect.value = exactMatch.value;
      if (fallbackNote) fallbackNote.hidden = true;
    } else {
      interestSelect.value = 'Growth partnership';
      if (fallbackNote) {
        fallbackNote.textContent = `We selected "Growth partnership" as a starting point because "${rawInterest}" was not recognised. You can change the requirement type below.`;
        fallbackNote.hidden = false;
      }
    }
  }
  syncIntentBanner();
  interestSelect?.addEventListener('change', syncIntentBanner);

  const programme = (sp.get('programme') || '').trim();
  const qSector = (sp.get('sector') || handoff.sector || '').trim();
  const qRole = (sp.get('role') || handoff.role || '').trim();
  const qTerritory = (sp.get('territory') || handoff.territory || '').trim();
  const qNote = (handoff.note || '').trim();

  if (programme && form.elements.message && !form.elements.message.value) {
    form.elements.message.value = `I would like to discuss the ${programme} coaching programme for our team.`;
  } else if ((qSector || qRole || qTerritory || qNote) && form.elements.message && !form.elements.message.value) {
    const parts = [];
    if (qSector) parts.push(`Industry Sector: ${qSector}`);
    if (qRole) parts.push(`Role Level: ${qRole}`);
    if (qTerritory) parts.push(`UK Territory: ${qTerritory}`);
    if (qNote) parts.push(`Details: ${qNote}`);
    form.elements.message.value = parts.join('\n');
  }

  wireDirectOrDraftForm({
    form,
    type: 'commercial',
    getEndpoint: cfg => cfg.commercialEndpoint,
    buildPayload: () => {
      const d = new FormData(form);
      return {
        interest: String(d.get('interest') || '').trim(),
        name: String(d.get('name') || '').trim(),
        company: String(d.get('company') || '').trim(),
        email: String(d.get('email') || '').trim(),
        message: String(d.get('message') || '').trim()
      };
    },
    buildDraft: () => {
      const d = new FormData(form);
      const interest = String(d.get('interest') || '').trim();
      const name = String(d.get('name') || '').trim();
      const company = String(d.get('company') || '').trim() || 'Not specified';
      const email = String(d.get('email') || '').trim();
      const message = String(d.get('message') || '').trim();
      return {
        subject: `Website enquiry — ${interest}`,
        body:
          `Hello Power-Up Talent,\n\n` +
          `I would like to discuss: ${interest}\n\n` +
          `Name: ${name}\n` +
          `Business: ${company}\n` +
          `Email: ${email}\n\n` +
          `Summary of need:\n${message}\n\n` +
          `Kind regards,\n${name}`
      };
    },
    copySelector: '#email-copy',
    resultSelector: '#email-result',
    directLabel: 'Send commercial enquiry',
    draftLabel: 'Open email draft'
  });

  bindCopyButton('#copy-brief', '#email-copy', '#copy-status');
}

// 2. Confidential Candidate Enquiry Form
const candForm = document.querySelector('#candidate-form');
if (candForm) {
  wireDirectOrDraftForm({
    form: candForm,
    type: 'candidate',
    getEndpoint: cfg => cfg.candidateEndpoint,
    requirePrivate: true,
    getIsPrivate: cfg => cfg.candidateChannelPrivate,
    buildPayload: () => {
      const d = new FormData(candForm);
      return {
        name: String(d.get('cand_name') || '').trim(),
        role: String(d.get('cand_role') || '').trim(),
        contact: String(d.get('cand_email') || '').trim(),
        notes: String(d.get('cand_notes') || '').trim()
      };
    },
    buildDraft: () => {
      const d = new FormData(candForm);
      const name = String(d.get('cand_name') || '').trim();
      const role = String(d.get('cand_role') || '').trim() || 'Not specified';
      const contact = String(d.get('cand_email') || '').trim();
      const notes = String(d.get('cand_notes') || '').trim() || 'Confidential career discussion requested.';
      return {
        subject: `Confidential Candidate Enquiry — ${name}`,
        body:
          `Hello Power-Up Talent Search Team,\n\n` +
          `I would like to arrange a confidential candidate conversation.\n\n` +
          `Name: ${name}\n` +
          `Current / target role: ${role}\n` +
          `Preferred confidential contact: ${contact}\n\n` +
          `Sector, region & notes:\n${notes}\n\n` +
          `Please do not contact my current employer without my express written consent.\n\n` +
          `Kind regards,\n${name}`
      };
    },
    copySelector: '#candidate-email-copy',
    resultSelector: '#candidate-email-result',
    directLabel: 'Send confidential enquiry',
    draftLabel: 'Open email draft'
  });

  bindCopyButton('#copy-candidate-brief', '#candidate-email-copy', '#copy-candidate-status');
}

// 3. Territory Exclusivity Review Request Form
const checkForm = document.querySelector('#territory-check-form');
if (checkForm) {
  wireDirectOrDraftForm({
    form: checkForm,
    type: 'territory',
    getEndpoint: cfg => cfg.territoryEndpoint,
    buildPayload: () => {
      const d = new FormData(checkForm);
      return {
        name: String(d.get('name') || '').trim(),
        title: String(d.get('title') || '').trim(),
        company: String(d.get('company') || '').trim(),
        email: String(d.get('email') || '').trim(),
        industry: String(d.get('industry') || '').trim(),
        region: String(d.get('region') || '').trim(),
        priority: String(d.get('priority') || '').trim(),
        plan: String(d.get('plan') || '').trim()
      };
    },
    buildDraft: () => {
      const d = new FormData(checkForm);
      const company = String(d.get('company') || '').trim();
      const region = String(d.get('region') || '').trim();
      const industry = String(d.get('industry') || '').trim();
      const name = String(d.get('name') || '').trim();
      const title = String(d.get('title') || '').trim() || 'Director';
      const email = String(d.get('email') || '').trim();
      const priority = String(d.get('priority') || '').trim();
      const plan = String(d.get('plan') || '').trim() || 'Please review sector and territory availability.';
      return {
        subject: `Territory Exclusivity Review Request — ${company}`,
        statusNote: `Email draft opened for ${company} (${region} · ${industry}). Nothing has been sent yet — review and press Send in your email app (or copy the request below and email info@power-uptalent.co.uk) so a director can check active client mandates and reply within one working day.`,
        body:
          `Territory Exclusivity Review Request\n\n` +
          `Name: ${name}\n` +
          `Job Title: ${title}\n` +
          `Company: ${company}\n` +
          `Email: ${email}\n` +
          `Industry Sector: ${industry}\n` +
          `Geographic Territory: ${region}\n` +
          `Primary Scope: ${priority}\n\n` +
          `Commercial Context:\n${plan}`
      };
    },
    copySelector: '#territory-email-copy',
    resultSelector: '#territory-result',
    statusTextSelector: '#territory-status-text',
    directLabel: 'Submit territory review request',
    draftLabel: 'Open email draft'
  });

  bindCopyButton('#copy-territory-brief', '#territory-email-copy', '#copy-territory-status');
}

// Intelligence tabs & outcome stepper (where present)
document.querySelectorAll('[data-intel-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-intel-tab]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    const targetId = btn.dataset.intelTab;
    document.querySelectorAll('.intel-panel').forEach(p => {
      p.hidden = p.id !== targetId;
    });
  });
});

document.querySelectorAll('[data-step-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    const stepNum = btn.dataset.stepBtn;
    document.querySelectorAll('[data-step-btn]').forEach(b => b.classList.toggle('active', b === btn));
    for (let i = 1; i <= 4; i++) {
      const panel = document.querySelector('#outcome-step-' + i);
      if (panel) panel.hidden = String(i) !== String(stepNum);
    }
  });
});
document.querySelectorAll('[data-goto-step]').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetStep = btn.dataset.gotoStep;
    const targetBtn = document.querySelector(`[data-step-btn="${targetStep}"]`);
    targetBtn?.click();
  });
});

// Commercial Outcome Tabs (3 buckets across 7 services)
document.querySelectorAll('[data-outcome-tabs]').forEach(group => {
  const tabs = Array.from(group.querySelectorAll('[data-outcome-tab]'));
  const panels = Array.from(group.querySelectorAll('[data-outcome-panel]'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.outcomeTab;
      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      panels.forEach(p => {
        p.hidden = target !== 'all' && p.dataset.outcomePanel !== target;
      });
    });
  });
});

// Interactive Sector Exclusivity & Talent Checker (#sector-checker)
const sectorChecker = document.querySelector('#sector-checker');
if (sectorChecker) {
  const sectorSel = sectorChecker.querySelector('#sc-sector');
  const otherWrap = sectorChecker.querySelector('#sc-other-wrap');
  const otherInp = sectorChecker.querySelector('#sc-other-sector');
  const roleSel = sectorChecker.querySelector('#sc-role');
  const territorySel = sectorChecker.querySelector('#sc-territory');
  const checkBtn = sectorChecker.querySelector('#sc-check-btn');
  const outputCard = sectorChecker.querySelector('#sc-output');
  const statusEl = sectorChecker.querySelector('#sc-status');
  const windowEl = sectorChecker.querySelector('#sc-window');
  const scarcityEl = sectorChecker.querySelector('#sc-scarcity');
  const summaryEl = sectorChecker.querySelector('#sc-summary');
  const lockCta = sectorChecker.querySelector('#sc-lock-cta');

  const updateSectorChecker = (focusResult = false) => {
    const rawSector = sectorSel?.value || 'Electrical Wholesale';
    const isOther = rawSector === 'Other UK Sector';
    if (otherWrap) otherWrap.hidden = !isOther;
    const chosenSector = isOther ? ((otherInp?.value || '').trim() || 'Other UK Sector') : rawSector;
    const chosenRole = roleSel?.value || 'Commercial / Sales Director';
    const chosenTerritory = territorySel?.value || 'Nationwide UK';
    const isCSuite = chosenRole.includes('C-Suite') || chosenRole.includes('Managing Director');
    const shortlistWindow = isCSuite ? '21–28 Days' : '14–21 Days';

    if (statusEl) statusEl.textContent = 'Territory Check Ready — Provisional Slot Open (Subject to NDA Verification)';
    if (windowEl) windowEl.textContent = shortlistWindow;
    if (scarcityEl) scarcityEl.textContent = 'High — 82%+ Passive Market (Job Boards Ineffective)';
    if (summaryEl) summaryEl.textContent = `${chosenSector} · ${chosenRole} · ${chosenTerritory}`;

    if (lockCta) {
      const qs = new URLSearchParams({
        interest: 'Territory exclusivity audit',
        sector: chosenSector,
        role: chosenRole,
        territory: chosenTerritory
      });
      lockCta.href = `contact.html?${qs.toString()}`;
    }
    if (outputCard) {
      outputCard.hidden = false;
      if (focusResult) outputCard.focus?.();
    }
  };

  sectorSel?.addEventListener('change', () => updateSectorChecker(false));
  otherInp?.addEventListener('input', () => updateSectorChecker(false));
  roleSel?.addEventListener('change', () => updateSectorChecker(false));
  territorySel?.addEventListener('change', () => updateSectorChecker(false));
  checkBtn?.addEventListener('click', () => updateSectorChecker(true));
  updateSectorChecker(false);
}
