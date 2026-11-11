const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const serviceMenu = document.querySelector('.service-menu');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (serviceMenu?.hasAttribute('open')) {
      serviceMenu.removeAttribute('open');
      serviceMenu.querySelector('summary')?.focus();
    }
  }
});

document.addEventListener('click', e => {
  if (serviceMenu?.hasAttribute('open') && !serviceMenu.contains(e.target)) {
    serviceMenu.removeAttribute('open');
  }
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
    'Identify where your people need support, then build a programme around sales, branch performance or leadership.',
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

// Helper for field-level validation without discarding user input
function setFieldError(input, message) {
  if (!input) return;
  const label = input.closest('label') || input.parentElement;
  let err = label?.querySelector('.field-error');
  if (!message) {
    input.removeAttribute('aria-invalid');
    if (err) err.remove();
    return;
  }
  input.setAttribute('aria-invalid', 'true');
  if (!err && label) {
    err = document.createElement('span');
    err.className = 'field-error';
    err.setAttribute('role', 'alert');
    label.appendChild(err);
  }
  if (err) err.textContent = message;
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

// Dual-path tab switcher on Contact page
function activateContactPath(targetId) {
  const buttons = document.querySelectorAll('[data-path-tab]');
  const panels = document.querySelectorAll('.path-panel');
  if (!buttons.length || !panels.length) return;
  buttons.forEach(b => {
    const isMatch = b.dataset.pathTab === targetId;
    b.classList.toggle('active', isMatch);
    b.setAttribute('aria-selected', String(isMatch));
  });
  panels.forEach(p => {
    const isMatch = p.id === targetId;
    p.classList.toggle('active', isMatch);
    p.hidden = !isMatch;
  });
}

document.querySelectorAll('[data-path-tab]').forEach(btn => {
  btn.addEventListener('click', () => activateContactPath(btn.dataset.pathTab));
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
  'ai-team': 'AI services: AI Team',
  marketing: 'AI services: Marketing & Social Media',
  'marketing-social-media': 'AI services: Marketing & Social Media',
  platforms: 'AI services walkthrough',
  walkthrough: 'AI services walkthrough',
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

// 1. Client Commercial Brief Form
const form = document.querySelector('#enquiry-form');
if (form) {
  const sp = new URLSearchParams(location.search);
  const rawInterest = (sp.get('interest') || sp.get('service') || sp.get('platform') || '').trim();
  const pathParam = (sp.get('path') || '').trim().toLowerCase();

  if (
    pathParam === 'candidate' ||
    rawInterest.toLowerCase() === 'career conversation' ||
    rawInterest.toLowerCase() === 'candidate' ||
    location.hash === '#candidate-path'
  ) {
    activateContactPath('candidate-path');
  } else {
    activateContactPath('client-path');
  }

  const interestSelect = form.elements.interest;
  const fallbackNote = document.querySelector('#interest-fallback-note');
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

  const programme = (sp.get('programme') || '').trim();
  if (programme && form.elements.message && !form.elements.message.value) {
    form.elements.message.value = `I would like to discuss the ${programme} coaching programme for our team.`;
  }

  const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
  inputs.forEach(inp => inp.addEventListener('input', () => validateField(inp)));

  let isSubmitting = false;
  form.addEventListener('submit', e => {
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

    isSubmitting = true;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn?.innerHTML;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Preparing email draft…';
    }

    const d = new FormData(form);
    const body =
      `Hello Power-Up Talent,\n\n` +
      `I would like to discuss: ${d.get('interest')}\n\n` +
      `Name: ${(d.get('name') || '').toString().trim()}\n` +
      `Business: ${(d.get('company') || '').toString().trim() || 'Not specified'}\n` +
      `Email: ${(d.get('email') || '').toString().trim()}\n\n` +
      `Summary of need:\n${(d.get('message') || '').toString().trim()}\n\n` +
      `Kind regards,\n${(d.get('name') || '').toString().trim()}`;

    const copyEl = document.querySelector('#email-copy');
    const resultEl = document.querySelector('#email-result');
    if (copyEl) copyEl.value = body;
    if (resultEl) {
      resultEl.hidden = false;
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      isSubmitting = false;
      if (submitBtn && originalBtnHtml) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }, 800);

    location.href = `mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent('Website enquiry — ' + d.get('interest'))}&body=${encodeURIComponent(body)}`;
  });

  bindCopyButton('#copy-brief', '#email-copy', '#copy-status');
}

// 2. Confidential Candidate Enquiry Form
const candForm = document.querySelector('#candidate-form');
if (candForm) {
  const inputs = Array.from(candForm.querySelectorAll('input, textarea'));
  inputs.forEach(inp => inp.addEventListener('input', () => validateField(inp)));

  let isSubmittingCand = false;
  candForm.addEventListener('submit', e => {
    e.preventDefault();
    if (isSubmittingCand) return;

    let allValid = true;
    inputs.forEach(inp => {
      if (!validateField(inp)) allValid = false;
    });
    if (!allValid) {
      const firstInvalid = inputs.find(inp => inp.getAttribute('aria-invalid') === 'true');
      firstInvalid?.focus();
      return;
    }

    isSubmittingCand = true;
    const submitBtn = candForm.querySelector('button[type="submit"]');
    const originalHtml = submitBtn?.innerHTML;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Opening email draft…';
    }

    const d = new FormData(candForm);
    const name = (d.get('cand_name') || '').toString().trim();
    const role = (d.get('cand_role') || '').toString().trim() || 'Not specified';
    const contact = (d.get('cand_email') || '').toString().trim();
    const notes = (d.get('cand_notes') || '').toString().trim() || 'Confidential career discussion requested.';

    const body =
      `Hello Power-Up Talent Search Team,\n\n` +
      `I would like to arrange a confidential candidate conversation.\n\n` +
      `Name: ${name}\n` +
      `Current / target role: ${role}\n` +
      `Preferred confidential contact: ${contact}\n\n` +
      `Sector, region & notes:\n${notes}\n\n` +
      `Please do not contact my current employer without my express written consent.\n\n` +
      `Kind regards,\n${name}`;

    const copyEl = document.querySelector('#candidate-email-copy');
    const resultEl = document.querySelector('#candidate-email-result');
    if (copyEl) copyEl.value = body;
    if (resultEl) {
      resultEl.hidden = false;
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      isSubmittingCand = false;
      if (submitBtn && originalHtml) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
    }, 800);

    location.href = `mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent('Confidential Candidate Enquiry — ' + name)}&body=${encodeURIComponent(body)}`;
  });

  bindCopyButton('#copy-candidate-brief', '#candidate-email-copy', '#copy-candidate-status');
}

// 3. Territory Exclusivity Review Request Form
const checkForm = document.querySelector('#territory-check-form');
if (checkForm) {
  const inputs = Array.from(checkForm.querySelectorAll('input, select, textarea'));
  inputs.forEach(inp => inp.addEventListener('input', () => validateField(inp)));

  let isSubmittingCheck = false;
  checkForm.addEventListener('submit', e => {
    e.preventDefault();
    if (isSubmittingCheck) return;

    let allValid = true;
    inputs.forEach(inp => {
      if (!validateField(inp)) allValid = false;
    });
    if (!allValid) {
      const firstInvalid = inputs.find(inp => inp.getAttribute('aria-invalid') === 'true');
      firstInvalid?.focus();
      return;
    }

    isSubmittingCheck = true;
    const submitBtn = checkForm.querySelector('button[type="submit"]');
    const originalHtml = submitBtn?.innerHTML;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Preparing review email…';
    }

    const d = new FormData(checkForm);
    const company = (d.get('company') || '').toString().trim();
    const region = (d.get('region') || '').toString().trim();
    const industry = (d.get('industry') || '').toString().trim();
    const name = (d.get('name') || '').toString().trim();
    const title = (d.get('title') || '').toString().trim() || 'Director';
    const email = (d.get('email') || '').toString().trim();
    const priority = (d.get('priority') || '').toString().trim();
    const plan = (d.get('plan') || '').toString().trim() || 'Please review sector and territory availability.';

    const body =
      `Territory Exclusivity Review Request\n\n` +
      `Name: ${name}\n` +
      `Job Title: ${title}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Industry Sector: ${industry}\n` +
      `Geographic Territory: ${region}\n` +
      `Primary Scope: ${priority}\n\n` +
      `Commercial Context:\n${plan}`;

    const resultBox = document.querySelector('#territory-result');
    const st = document.querySelector('#territory-status-text');
    const copyEl = document.querySelector('#territory-email-copy');
    if (copyEl) copyEl.value = body;
    if (st) {
      st.textContent = `Review request prepared for ${company} (${region} · ${industry}). This page does not confirm live territory availability automatically — please send the draft in your email app (or copy the request below and email info@power-uptalent.co.uk) so a director can check active client mandates and reply within one working day.`;
    }
    if (resultBox) {
      resultBox.hidden = false;
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      isSubmittingCheck = false;
      if (submitBtn && originalHtml) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
    }, 800);

    location.href = `mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent('Territory Exclusivity Review Request — ' + company)}&body=${encodeURIComponent(body)}`;
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
