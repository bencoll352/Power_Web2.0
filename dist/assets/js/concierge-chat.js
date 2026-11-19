window.POWERUP_CHAT_CONFIG = window.POWERUP_CHAT_CONFIG || {
  webhookUrl: '',
  aiEndpoint: ''
};

(() => {
  if (document.querySelector('[data-pu-concierge]')) return;

  const STORAGE_KEY = 'powerup_concierge_transcript_v1';
  const state = {
    open: false,
    flow: null,
    step: 0,
    data: {},
    transcript: []
  };

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'pu-chat-launcher';
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'pu-concierge-panel');
  launcher.setAttribute('aria-label', 'Open Sector & Hiring Concierge');
  launcher.setAttribute('data-pu-concierge', 'launcher');
  launcher.innerHTML =
    '<span class="pu-chat-launcher-dot" aria-hidden="true"></span>' +
    '<svg class="pu-chat-launcher-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5A8.5 8.5 0 1 1 21 12Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>' +
    '<span class="pu-chat-launcher-label">Sector &amp; Hiring Concierge</span>';

  const panel = document.createElement('section');
  panel.id = 'pu-concierge-panel';
  panel.className = 'pu-chat-panel';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Power-Up Talent Sector & Hiring Concierge');
  panel.setAttribute('data-pu-concierge', 'panel');
  panel.innerHTML =
    '<header class="pu-chat-head">' +
      '<div><h2 class="pu-chat-title">Sector &amp; Hiring Concierge</h2><p class="pu-chat-sub">UK Exclusive Partner · NDA-Protected</p></div>' +
      '<div class="pu-chat-head-actions">' +
        '<button type="button" class="pu-chat-icon-btn" data-pu-reset title="Restart conversation">Reset</button>' +
        '<button type="button" class="pu-chat-icon-btn" data-pu-close aria-label="Close concierge">✕</button>' +
      '</div>' +
    '</header>' +
    '<div class="pu-chat-log" role="log" aria-live="polite" data-pu-log></div>' +
    '<form class="pu-chat-form" data-pu-form>' +
      '<input class="pu-chat-input" type="text" placeholder="Type a question or reply…" aria-label="Message Power-Up Talent Concierge" autocomplete="off">' +
      '<button class="pu-chat-send" type="submit">Send</button>' +
    '</form>';

  document.body.append(launcher, panel);

  const logEl = panel.querySelector('[data-pu-log]');
  const formEl = panel.querySelector('[data-pu-form]');
  const inputEl = formEl.querySelector('.pu-chat-input');
  const closeBtn = panel.querySelector('[data-pu-close]');
  const resetBtn = panel.querySelector('[data-pu-reset]');

  const saveTranscript = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ flow: state.flow, data: state.data, transcript: state.transcript }));
    } catch {}
  };

  const addMessage = (sender, text, extraEl = null) => {
    state.transcript.push({ sender, text, at: new Date().toISOString() });
    saveTranscript();
    const bubble = document.createElement('div');
    bubble.className = `pu-chat-msg ${sender}`;
    bubble.textContent = text;
    if (extraEl) bubble.appendChild(extraEl);
    logEl.appendChild(bubble);
    logEl.scrollTop = logEl.scrollHeight;
  };

  const renderOptions = items => {
    const wrap = document.createElement('div');
    wrap.className = 'pu-chat-options';
    items.forEach(({ label, onClick }) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pu-chat-opt';
      b.textContent = label;
      b.addEventListener('click', () => {
        wrap.remove();
        onClick();
      });
      wrap.appendChild(b);
    });
    logEl.appendChild(wrap);
    logEl.scrollTop = logEl.scrollHeight;
  };

  const buildContactUrl = (interest, extra = {}) => {
    const qs = new URLSearchParams({ interest, ...extra });
    return `contact.html?${qs.toString()}`;
  };

  const submitLeadPayload = async (interest, summaryText, extraParams = {}) => {
    const payload = {
      source: 'concierge-chat',
      flow: state.flow,
      interest,
      ...state.data,
      transcript: state.transcript
    };
    const cfg = window.POWERUP_CHAT_CONFIG || {};
    if (cfg.webhookUrl) {
      try {
        await fetch(cfg.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch {}
    }

    const ctaWrap = document.createElement('div');
    ctaWrap.className = 'pu-chat-cta-row';

    const contactLink = document.createElement('a');
    contactLink.className = 'pu-chat-cta-btn primary';
    contactLink.href = buildContactUrl(interest, extraParams);
    contactLink.textContent = 'Send to Power-Up Team ↗';

    const mailLink = document.createElement('a');
    mailLink.className = 'pu-chat-cta-btn secondary';
    mailLink.href = `mailto:info@power-uptalent.co.uk?subject=${encodeURIComponent(interest + ' — Concierge Brief')}&body=${encodeURIComponent(summaryText)}`;
    mailLink.textContent = 'Email directly';

    ctaWrap.append(contactLink, mailLink);
    addMessage('bot', summaryText, ctaWrap);
  };

  const startPath1 = () => {
    state.flow = 'exclusivity';
    state.step = 1;
    state.data = {};
    addMessage('user', 'Check Sector Exclusivity / Hire a Leader');
    addMessage('bot', 'Understood. All searches operate under strict single-client sector exclusivity and NDA. Which UK industry sector are you hiring in?');
  };

  const startPath2 = () => {
    state.flow = 'platforms';
    state.step = 1;
    state.data = {};
    addMessage('user', 'Explore Commercial Coaching & AI Platforms');
    addMessage('bot', 'What is your biggest bottleneck right now?');
    renderOptions([
      {
        label: 'Quote Follow-Up & Margin',
        onClick: () => finishPath2('Quote Follow-Up & Margin', 'sales', 'AI services: Sales & Intelligence')
      },
      {
        label: 'CRM & Shared Enquiries',
        onClick: () => finishPath2('CRM & Shared Enquiries', 'crm', 'AI services: CRM')
      },
      {
        label: 'Sales-to-Delivery Handovers',
        onClick: () => finishPath2('Sales-to-Delivery Handovers', 'delivery', 'AI services: Business Delivery')
      },
      {
        label: 'Multi-Branch RPO',
        onClick: () => finishPath2('Multi-Branch RPO', null, 'Embedded hiring')
      }
    ]);
  };

  const finishPath2 = (bottleneck, serviceKey, interestLabel) => {
    state.data.bottleneck = bottleneck;
    state.step = 2;
    addMessage('user', bottleneck);
    const wrap = document.createElement('div');
    wrap.className = 'pu-chat-cta-row';
    if (serviceKey) {
      const demoLink = document.createElement('a');
      demoLink.className = 'pu-chat-cta-btn primary';
      demoLink.href = `dashboard.html?service=${encodeURIComponent(serviceKey)}`;
      demoLink.textContent = 'Open matching view ↗';
      wrap.appendChild(demoLink);
    } else {
      const coachLink = document.createElement('a');
      coachLink.className = 'pu-chat-cta-btn primary';
      coachLink.href = 'partnerships.html';
      coachLink.textContent = 'View Multi-Branch RPO ↗';
      wrap.appendChild(coachLink);
    }
    const briefLink = document.createElement('a');
    briefLink.className = 'pu-chat-cta-btn secondary';
    briefLink.href = buildContactUrl(interestLabel, { note: `Bottleneck: ${bottleneck}` });
    briefLink.textContent = 'Request tailored walkthrough';
    wrap.appendChild(briefLink);

    addMessage('bot', `You can inspect the ${bottleneck} workflow directly or leave your work email below for a tailored walkthrough.`, wrap);
  };

  const startPath3 = () => {
    state.flow = 'candidate';
    state.step = 1;
    state.data = {};
    addMessage('user', 'Approached by Us? (Confidential Candidate)');
    addMessage('bot', 'Strict NDA discretion applies — we never spray CVs or contact your current employer without written consent. What is your name?');
  };

  const startPath4 = () => {
    state.flow = 'discovery';
    state.step = 1;
    state.data = {};
    addMessage('user', 'Book a 15-Min Discovery Call');
    addMessage('bot', 'Certainly. What is your name and company?');
  };

  const showWelcome = () => {
    logEl.innerHTML = '';
    state.flow = null;
    state.step = 0;
    state.data = {};
    state.transcript = [];
    addMessage('bot', 'Welcome to Power-Up Talent. We partner with one organisation per UK sector and territory at a time. How can I direct you?');
    renderOptions([
      { label: '1. Check Sector Exclusivity / Hire a Leader', onClick: startPath1 },
      { label: '2. Explore Commercial Coaching & AI Platforms', onClick: startPath2 },
      { label: '3. Approached by Us? (Confidential Candidate)', onClick: startPath3 },
      { label: '4. Book a 15-Min Discovery Call', onClick: startPath4 }
    ]);
  };

  const handleIntentFallback = async text => {
    const cfg = window.POWERUP_CHAT_CONFIG || {};
    if (cfg.aiEndpoint) {
      try {
        const res = await fetch(cfg.aiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, transcript: state.transcript })
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.reply) {
            addMessage('bot', data.reply);
            return;
          }
        }
      } catch {}
    }

    const q = text.toLowerCase();
    if (/exclusiv|sector|competitor|territory/.test(q)) {
      addMessage('bot', 'We work with strictly one client per UK sector and territory under written exclusivity. You can check availability in the Sector Checker on our homepage or start a Territory Check below.');
      renderOptions([{ label: 'Check Sector Exclusivity now', onClick: startPath1 }]);
      return;
    }
    if (/28|time|fast|how long|shortlist|days/.test(q)) {
      addMessage('bot', 'Average time to placement is 28 days, with NDA-vetted shortlists delivered in 14–21 days (21–28 days for C-Suite). Would you like to check availability for a role?');
      renderOptions([{ label: 'Check Sector Exclusivity / Hire a Leader', onClick: startPath1 }]);
      return;
    }
    if (/rpo|multi|branch|coaching|crm|ai|platform|automation|sales|marketing/.test(q)) {
      addMessage('bot', 'We pair exclusive hiring with commercial coaching and 7 AI & business systems across Find & Win, Manage & Retain, and Deliver & Scale.');
      renderOptions([{ label: 'Explore Coaching & AI Platforms', onClick: startPath2 }]);
      return;
    }
    if (/nda|candidate|cv|approach|confidential|privacy|salary/.test(q)) {
      addMessage('bot', 'Every candidate conversation is strictly NDA-protected. We never forward CVs or contact an employer without explicit permission.');
      renderOptions([{ label: 'Open Confidential Candidate route', onClick: startPath3 }]);
      return;
    }
    addMessage('bot', 'We cover all UK sectors and territories, combining exclusive headhunting with coaching and commercial AI systems. Choose a route below or share your name and work email for a director callback.');
    renderOptions([
      { label: 'Check Sector Exclusivity / Hire a Leader', onClick: startPath1 },
      { label: 'Book a 15-Min Discovery Call', onClick: startPath4 }
    ]);
  };

  const handleFlowInput = async text => {
    if (state.flow === 'exclusivity') {
      if (state.step === 1) {
        state.data.sector = text;
        state.step = 2;
        addMessage('bot', 'Thank you. What Role Level and UK Territory are you targeting?');
        return;
      }
      if (state.step === 2) {
        state.data.roleTerritory = text;
        state.step = 3;
        addMessage('bot', 'Please share your Name and Work Email or Phone so a director can verify exclusivity under NDA.');
        return;
      }
      if (state.step === 3) {
        state.data.contact = text;
        state.flow = null;
        const summary = `NDA Exclusivity Check Summary:\nSector: ${state.data.sector}\nRole & Territory: ${state.data.roleTerritory}\nContact: ${state.data.contact}`;
        await submitLeadPayload('Territory exclusivity audit', summary, {
          sector: state.data.sector,
          role: state.data.roleTerritory,
          note: `Contact from concierge: ${state.data.contact}`
        });
        return;
      }
    }

    if (state.flow === 'platforms' && state.step === 2) {
      state.data.contact = text;
      state.flow = null;
      const summary = `Tailored Walkthrough Request:\nBottleneck: ${state.data.bottleneck}\nWork Email/Contact: ${text}`;
      await submitLeadPayload('AI services walkthrough', summary, {
        note: `Bottleneck: ${state.data.bottleneck}\nContact: ${text}`
      });
      return;
    }

    if (state.flow === 'candidate') {
      if (state.step === 1) {
        state.data.name = text;
        state.step = 2;
        addMessage('bot', 'What is your current sector and role?');
        return;
      }
      if (state.step === 2) {
        state.data.role = text;
        state.step = 3;
        addMessage('bot', 'Please share your LinkedIn URL or private email address.');
        return;
      }
      if (state.step === 3) {
        state.data.email = text;
        state.step = 4;
        addMessage('bot', 'When is the best confidential callback window for you?');
        return;
      }
      if (state.step === 4) {
        state.data.callback = text;
        state.flow = null;
        const summary = `Confidential Candidate Enquiry (NDA):\nName: ${state.data.name}\nCurrent Sector/Role: ${state.data.role}\nLinkedIn/Email: ${state.data.email}\nPreferred Callback: ${state.data.callback}`;
        await submitLeadPayload('Confidential Candidate', summary, {
          name: state.data.name,
          role: state.data.role,
          email: state.data.email,
          note: `Preferred callback: ${state.data.callback}`
        });
        return;
      }
    }

    if (state.flow === 'discovery') {
      if (state.step === 1) {
        state.data.nameCompany = text;
        state.step = 2;
        addMessage('bot', 'Which UK sector do you operate in, and what is your work email or phone?');
        return;
      }
      if (state.step === 2) {
        state.data.sectorContact = text;
        state.step = 3;
        addMessage('bot', 'What is your preferred 15-minute time window?');
        return;
      }
      if (state.step === 3) {
        state.data.window = text;
        state.flow = null;
        const summary = `15-Min Discovery Call Request:\nName & Company: ${state.data.nameCompany}\nSector & Contact: ${state.data.sectorContact}\nPreferred Window: ${state.data.window}`;
        await submitLeadPayload('Growth partnership', summary, {
          note: summary
        });
        return;
      }
    }

    await handleIntentFallback(text);
  };

  const setOpen = open => {
    state.open = open;
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open) {
      if (!logEl.children.length) showWelcome();
      setTimeout(() => inputEl.focus(), 40);
    } else {
      launcher.focus();
    }
  };

  launcher.addEventListener('click', () => setOpen(!state.open));
  closeBtn.addEventListener('click', () => setOpen(false));
  resetBtn.addEventListener('click', () => {
    showWelcome();
    inputEl.focus();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.open) setOpen(false);
  });

  formEl.addEventListener('submit', async e => {
    e.preventDefault();
    const val = inputEl.value.trim();
    if (!val) return;
    inputEl.value = '';
    addMessage('user', val);
    await handleFlowInput(val);
  });
})();
