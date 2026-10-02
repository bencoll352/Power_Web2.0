/* ==========================================================================
   POWER-UP TALENT - CLIENT INTERACTIVITY SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavScroll();
  initAccordions();
  initModals();
  initTerritoryChecker();
  initStandaloneCheckForm();
  initScarcityCalculator();
  initCounters();
  initCurrentYear();
  initToolsPageTabs();
  initInteractiveUKMap();
  initRoiCalculator();
  initSalaryBenchmark();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Retrieve stored theme or match system
  const savedTheme = localStorage.getItem('powerup_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  html.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('powerup_theme', next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

/* --------------------------------------------------------------------------
   ACCORDION (CURRICULUM)
   -------------------------------------------------------------------------- */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isExpanded = item.classList.contains('active');

      // Optional: Close others
      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherHeader = other.querySelector('.accordion-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('active');
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

/* --------------------------------------------------------------------------
   NAVIGATION & ACTIVE STATES
   -------------------------------------------------------------------------- */
function initNavScroll() {
  const header = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  });

  // Mobile menu toggle
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   MODALS
   -------------------------------------------------------------------------- */
function initModals() {
  const claimModal = document.getElementById('territoryModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalForm = document.getElementById('modalClaimForm');

  const triggerButtons = [
    'heroCheckBtn',
    'adoptionWalkthroughBtn',
    'charterCheckBtn'
  ];

  triggerButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (claimModal) {
          e.preventDefault();
          openModal(claimModal);
        } else {
          // Navigate to contact form page
          window.location.href = 'contact.html';
        }
      });
    }
  });

  if (closeBtn && claimModal) {
    closeBtn.addEventListener('click', () => closeModal(claimModal));
  }

  window.addEventListener('click', (e) => {
    if (claimModal && e.target === claimModal) closeModal(claimModal);
    const detailsModal = document.getElementById('detailsModal');
    if (detailsModal && e.target === detailsModal) closeModal(detailsModal);
  });

  // Details modal close button
  const detailsCloseBtn = document.getElementById('detailsModalCloseBtn');
  if (detailsCloseBtn) {
    detailsCloseBtn.addEventListener('click', () => {
      closeModal(document.getElementById('detailsModal'));
    });
  }

  // Explore button
  const exploreBtn = document.getElementById('exploreDetailBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      window.location.href = 'coaching.html';
    });
  }

  if (modalForm && claimModal) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('mCompany').value;
      const territory = document.getElementById('mTerritory').value;
      
      closeModal(claimModal);
      modalForm.reset();
      
      showToast(`Territory reservation requested for ${company} (${territory}). An executive partner will reach out under NDA.`);
    });
  }
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* --------------------------------------------------------------------------
   DETAILS MODAL INJECTION
   -------------------------------------------------------------------------- */
const CAPABILITY_DETAILS = {
  talent: {
    title: 'Headhunting',
    subtitle: 'Precision search for top 1% non-active candidates.',
    content: `
      <p style="margin-bottom: 1.25rem; color: var(--text-secondary); line-height: 1.65;">
        Standard recruitment agencies post job ads and send you active CVs on job boards. We operate on direct, peer-vetted headhunting of key performers currently hitting high quotas or leading projects at direct market competitors.
      </p>
      <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">What is included in the Talent Pillar:</h4>
        <ul style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.925rem; color:var(--text-secondary);">
          <li>• <strong>Executive Search:</strong> C-suite, VP, and Director-level placements with technical and cultural alignment testing.</li>
          <li>• <strong>Passive Talent Mapping:</strong> Comprehensive ecosystem maps of all senior talent in your industry and region.</li>
          <li>• <strong>Technical DNA Vetting:</strong> Rigorous competency benchmarking before any candidate introduction.</li>
          <li>• <strong>Guaranteed Exclusivity:</strong> Candidate introductions are locked solely to your organization.</li>
        </ul>
      </div>
      <a class="btn btn-primary w-full" href="check.html">
        Request Confidential Talent Audit
      </a>
    `
  },
  coaching: {
    title: 'Coaching',
    subtitle: 'Elevating existing teams to match elite new hires.',
    content: `
      <p style="margin-bottom: 1.25rem; color: var(--text-secondary); line-height: 1.65;">
        A high-performer placed into an unprepared system creates friction. Our commercial academy embeds high-performance sales frameworks, leadership coaching, and operational playbooks to ensure your entire team scales together.
      </p>
      <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Academy Modules:</h4>
        <ul style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.925rem; color:var(--text-secondary);">
          <li>• <strong>Sales & Account Mastery:</strong> Converting enterprise pipeline and negotiation training.</li>
          <li>• <strong>Leadership Development:</strong> Managing high-output teams and retention leadership.</li>
          <li>• <strong>Branch Performance Accelerators:</strong> Standardizing multi-location excellence.</li>
          <li>• <strong>Custom Playbooks:</strong> Tailored objection-handling and client acquisition manuals.</li>
        </ul>
      </div>
      <a class="btn btn-primary w-full" href="coaching.html">
        Explore Academy Programs
      </a>
    `
  },
  platform: {
    title: 'Intelligence',
    subtitle: 'The governed commercial operating system.',
    content: `
      <p style="margin-bottom: 1.25rem; color: var(--text-secondary); line-height: 1.65;">
        CorePlatform gives your organization automated inbound qualification, AI-powered outbound outreach, 24/7 intelligent voice response, and weighted predictive forecasting without risking data privacy.
      </p>
      <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">CorePlatform Features:</h4>
        <ul style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.925rem; color:var(--text-secondary);">
          <li>• <strong>24/7 AI Receptionist & Voice Agent:</strong> Never miss high-value incoming inquiries or prospect calls.</li>
          <li>• <strong>Autonomous Lead Enrichment:</strong> Verified contact data, executive bios, and intent triggers.</li>
          <li>• <strong>Human-in-the-Loop Governance:</strong> Strict approval gates before messaging or updates dispatch.</li>
          <li>• <strong>Defensible Pipeline Forecasting:</strong> Real activity-backed predictive analytics.</li>
        </ul>
      </div>
      <a class="btn btn-primary w-full" href="check.html">
        Book CorePlatform Live Demo
      </a>
    `
  }
};

window.openDetailsModal = function(type) {
  const data = CAPABILITY_DETAILS[type];
  if (!data) {
    window.location.href = 'coaching.html';
    return;
  }
  const container = document.getElementById('detailsModalContent');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-header">
      <div class="eyebrow-tag"><span class="dash">—</span> CAPABILITY ARCHITECTURE</div>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-desc">${data.subtitle}</p>
    </div>
    <div class="modal-body">
      ${data.content}
    </div>
  `;

  openModal(document.getElementById('detailsModal'));
};

/* --------------------------------------------------------------------------
   INTERACTIVE TERRITORY CHECKER (HOME EMBED)
   -------------------------------------------------------------------------- */
function initTerritoryChecker() {
  const form = document.getElementById('territoryCheckForm');
  const resultBox = document.getElementById('checkerResult');

  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const industry = document.getElementById('industrySelect').value;
    const region = document.getElementById('regionInput').value;
    const company = document.getElementById('companyInput').value;

    resultBox.classList.remove('hidden', 'checker-result-available', 'checker-result-locked');
    resultBox.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span class="pulse-dot" style="background:#f59e0b; box-shadow:0 0 8px #f59e0b;"></span>
        <span>Scanning territory registry for <strong>${industry}</strong> in <strong>${region}</strong>...</span>
      </div>
    `;

    setTimeout(() => {
      const isAvailable = !(region.toLowerCase().includes('manchester central') && industry.includes('Finance'));

      if (isAvailable) {
        resultBox.className = 'checker-result-box checker-result-available';
        resultBox.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.5rem; font-weight:700; font-size:1.1rem;">
              <span class="pulse-dot"></span> Territory OPEN: ${industry} (${region})
            </div>
            <p style="font-size:0.95rem; line-height:1.5;">
              Good news for <strong>${company}</strong>. No competing firm currently holds exclusivity for your sector in ${region}.
            </p>
            <div>
              <a href="check.html" class="btn btn-primary btn-sm">
                Lock This Territory Now
              </a>
            </div>
          </div>
        `;
      } else {
        resultBox.className = 'checker-result-box checker-result-locked';
        resultBox.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.5rem; font-weight:700; font-size:1.1rem;">
              <span style="color:#ef4444;">●</span> Territory Currently Locked: ${industry} (${region})
            </div>
            <p style="font-size:0.95rem; line-height:1.5;">
              Another partner holds exclusive rights in this sector. You may apply for the priority waitlist or request an adjacent territory audit.
            </p>
            <div>
              <a href="check.html" class="btn btn-secondary-dark btn-sm">
                Join Priority Exclusivity Waitlist
              </a>
            </div>
          </div>
        `;
      }
    }, 600);
  });
}

/* --------------------------------------------------------------------------
   STANDALONE CHECK FORM (CHECK.HTML)
   -------------------------------------------------------------------------- */
function initStandaloneCheckForm() {
  const form = document.getElementById('standaloneCheckForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const company = document.getElementById('cCompany').value;
    const region = document.getElementById('cRegion').value;
    const industry = document.getElementById('cIndustry').value;

    showToast(`Thank you, ${name}. Availability audit initiated for ${company} in ${industry} (${region}). We will confirm status within 1 working day.`);
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   METRIC COUNTER ANIMATIONS
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500;
          const start = 0;
          const stepTime = Math.abs(Math.floor(duration / 50));
          let current = start;

          const timer = setInterval(() => {
            current += Math.ceil(target / 50);
            if (current >= target) {
              counter.innerText = target >= 1000 ? target.toLocaleString() : target;
              clearInterval(timer);
            } else {
              counter.innerText = current >= 1000 ? current.toLocaleString() : current;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-grid');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION HELPER
   -------------------------------------------------------------------------- */
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/* --------------------------------------------------------------------------
   CURRENT YEAR
   -------------------------------------------------------------------------- */
function initCurrentYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   UK ELECTRICAL SECTOR SCARCITY & SALARY BENCHMARKING CALCULATOR
   -------------------------------------------------------------------------- */
function initScarcityCalculator() {
  const calcForm = document.getElementById('scarcityCalcForm');
  if (!calcForm) return;

  const roleSelect = document.getElementById('scarcityRole');
  const sectorSelect = document.getElementById('scarcitySector');
  const regionSelect = document.getElementById('scarcityRegion');

  const scarcityVal = document.getElementById('calcScarcityVal');
  const salaryVal = document.getElementById('calcSalaryVal');
  const timeframeVal = document.getElementById('calcTimeframeVal');
  const candidatePoolVal = document.getElementById('calcCandidatePoolVal');

  const benchmarks = {
    'branch_mgr': {
      salary: { 'M4': '£60k - £80k + OTE', 'Midlands': '£52k - £68k + OTE', 'North': '£50k - £65k + OTE', 'Scotland': '£52k - £67k + OTE' },
      scarcity: '94% (Extreme Passive Scarcity)',
      timeframe: '14 - 21 Days',
      pool: '38 Mapped Competitor Managers'
    },
    'comm_dir': {
      salary: { 'M4': '£85k - £120k + Equity', 'Midlands': '£75k - £105k + Bonus', 'North': '£70k - £98k + Bonus', 'Scotland': '£72k - £100k + Bonus' },
      scarcity: '97% (High Executive Scarcity)',
      timeframe: '14 - 28 Days',
      pool: '24 Mapped Commercial Directors'
    },
    'tech_design': {
      salary: { 'M4': '£58k - £75k + Package', 'Midlands': '£50k - £65k + Package', 'North': '£48k - £62k + Package', 'Scotland': '£50k - £64k + Package' },
      scarcity: '91% (High Technical Scarcity)',
      timeframe: '14 - 21 Days',
      pool: '46 Mapped Engineers'
    },
    'trade_counter': {
      salary: { 'M4': '£38k - £50k + Bonus', 'Midlands': '£32k - £42k + Bonus', 'North': '£30k - £40k + Bonus', 'Scotland': '£32k - £41k + Bonus' },
      scarcity: '86% (Moderate Local Scarcity)',
      timeframe: '10 - 18 Days',
      pool: '64 Mapped Operatives'
    },
    'quantity_surv': {
      salary: { 'M4': '£65k - £85k + Car Allowance', 'Midlands': '£55k - £72k + Car Allowance', 'North': '£52k - £68k + Car Allowance', 'Scotland': '£54k - £70k + Car Allowance' },
      scarcity: '95% (High Contracting Scarcity)',
      timeframe: '14 - 21 Days',
      pool: '31 Mapped QS / Site Leads'
    }
  };

  function updateResults() {
    const role = roleSelect.value;
    const region = regionSelect.value;

    const data = benchmarks[role] || benchmarks['branch_mgr'];
    const sal = data.salary[region] || data.salary['M4'];

    if (scarcityVal) scarcityVal.textContent = data.scarcity;
    if (salaryVal) salaryVal.textContent = sal;
    if (timeframeVal) timeframeVal.textContent = data.timeframe;
    if (candidatePoolVal) candidatePoolVal.textContent = data.pool;
  }

  roleSelect.addEventListener('change', updateResults);
  sectorSelect.addEventListener('change', updateResults);
  regionSelect.addEventListener('change', updateResults);

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateResults();
    showToast('Benchmarking updated with live UK Electrical market telemetry.');
  });

  updateResults();
}

/* --------------------------------------------------------------------------
   SERVICE DEEP DIVE TABS & SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Service Deep Dive Tabs
  const deepTabs = document.querySelectorAll('.deep-dive-tab');
  const deepPanes = document.querySelectorAll('.deep-tab-pane');

  if (deepTabs.length > 0) {
    deepTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');

        deepTabs.forEach(t => t.classList.remove('active'));
        deepPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  // Scroll Reveal Observer for Sections & Cards
  const revealElements = document.querySelectorAll('.section, .pillar-card, .value-card, .diff-card, .hybrid-card, .value-card-light, .key-deliverables-card');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }
});

/* ==========================================================================
   INTERACTIVE COMMERCIAL TOOLS:
   1. UK TERRITORY INTERACTIVE MAP
   2. EXECUTIVE SEARCH ROI CALCULATOR
   3. SALARY & COMPENSATION BENCHMARK TOOL
   ========================================================================== */

/* --------------------------------------------------------------------------
   TOOLS PAGE TAB SWITCHER
   -------------------------------------------------------------------------- */
function initToolsPageTabs() {
  const tabBtns = document.querySelectorAll('.tools-tab-btn');
  const panels = document.querySelectorAll('.tool-section-panel');

  if (tabBtns.length === 0) return;

  function switchTab(targetTab) {
    tabBtns.forEach(btn => {
      const isMatch = btn.getAttribute('data-tab') === targetTab;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    panels.forEach(panel => {
      const isMatch = panel.getAttribute('id') === `panel-${targetTab}`;
      panel.classList.toggle('active', isMatch);
    });

    if (history.replaceState) {
      history.replaceState(null, null, `#${targetTab}`);
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      switchTab(target);
    });
  });

  // Handle URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && ['map', 'roi', 'salary'].includes(hash)) {
    switchTab(hash);
  }
}

/* --------------------------------------------------------------------------
   1. UK TERRITORY INTERACTIVE MAP & SECTOR REGISTER
   -------------------------------------------------------------------------- */
const UK_TERRITORIES_DATA = {
  'scotland': {
    name: 'Scotland',
    sectors: {
      'electrical': { status: 'open', pool: '640+ vetted managers', speed: '19 days', note: 'Available across Glasgow, Edinburgh, Aberdeen & Highlands wholesale trade networks.' },
      'me': { status: 'open', pool: '510+ M&E directors', speed: '18 days', note: 'Open for commercial M&E and building services contracting partners.' },
      'switchgear': { status: 'held', pool: '390+ engineers', speed: '21 days', note: 'Mandate Held: Exclusively locked with contracted switchgear OEM.' },
      'renewables': { status: 'open', pool: '780+ clean tech PMs', speed: '17 days', note: 'Open for offshore wind, BESS and grid infrastructure specialists.' },
      'hvac': { status: 'open', pool: '340+ specialists', speed: '20 days', note: 'Open for commercial HVAC & refrigeration distributors.' },
      'construction': { status: 'open', pool: '820+ commercial leads', speed: '22 days', note: 'Open for regional and tier-1 main contractors.' }
    }
  },
  'northeast': {
    name: 'North East',
    sectors: {
      'electrical': { status: 'open', pool: '410+ wholesale managers', speed: '18 days', note: 'Open across Newcastle, Sunderland, Durham, and Teesside.' },
      'me': { status: 'open', pool: '330+ M&E specialists', speed: '19 days', note: 'Open for regional building services contractors.' },
      'switchgear': { status: 'open', pool: '280+ power engineers', speed: '22 days', note: 'Open for industrial OEM and control panel builders.' },
      'renewables': { status: 'open', pool: '520+ clean tech leads', speed: '16 days', note: 'Open across Tees Valley industrial decarbonisation hub.' },
      'hvac': { status: 'open', pool: '260+ HVAC specialists', speed: '19 days', note: 'Open for commercial climate solutions.' },
      'construction': { status: 'open', pool: '460+ project leaders', speed: '21 days', note: 'Open for commercial building contractors.' }
    }
  },
  'northwest': {
    name: 'North West',
    sectors: {
      'electrical': { status: 'open', pool: '980+ wholesale managers', speed: '17 days', note: 'Open across Manchester, Liverpool, Cheshire, and Lancashire hubs.' },
      'me': { status: 'open', pool: '850+ M&E directors', speed: '18 days', note: 'Open for major Northern Powerhouse building services contractors.' },
      'switchgear': { status: 'open', pool: '620+ automation specialists', speed: '20 days', note: 'Open for switchboard manufacturers & systems integrators.' },
      'renewables': { status: 'open', pool: '710+ EV & solar leads', speed: '19 days', note: 'Open for commercial EV charging and rooftop solar EPCs.' },
      'hvac': { status: 'held', pool: '480+ building services leads', speed: '21 days', note: 'Mandate Held: Contracted exclusively with regional building services group.' },
      'construction': { status: 'open', pool: '1,150+ commercial leads', speed: '22 days', note: 'Open for regional commercial contractors.' }
    }
  },
  'yorkshire': {
    name: 'Yorkshire & Humber',
    sectors: {
      'electrical': { status: 'open', pool: '680+ wholesale specialists', speed: '18 days', note: 'Open across Leeds, Sheffield, Hull, and Doncaster hubs.' },
      'me': { status: 'open', pool: '590+ contracting leads', speed: '19 days', note: 'Open for regional M&E engineering contractors.' },
      'switchgear': { status: 'open', pool: '440+ manufacturing engineers', speed: '20 days', note: 'Open for LV distribution & panel builder leaders.' },
      'renewables': { status: 'open', pool: '560+ green energy leads', speed: '18 days', note: 'Open across Humber energy & industrial transition cluster.' },
      'hvac': { status: 'open', pool: '390+ HVAC engineers', speed: '19 days', note: 'Open for commercial facilities and HVAC distributors.' },
      'construction': { status: 'open', pool: '750+ construction leaders', speed: '23 days', note: 'Open for regional main contractors.' }
    }
  },
  'westmidlands': {
    name: 'West Midlands',
    sectors: {
      'electrical': { status: 'open', pool: '1,120+ wholesale managers', speed: '18 days', note: 'Open across Birmingham, Coventry, Black Country, and Stoke.' },
      'me': { status: 'open', pool: '890+ M&E directors', speed: '19 days', note: 'Open for major infrastructure and building contractors.' },
      'switchgear': { status: 'open', pool: '780+ power engineers', speed: '19 days', note: 'Open across UK manufacturing heartland power & automation.' },
      'renewables': { status: 'open', pool: '690+ EV & grid leads', speed: '17 days', note: 'Open for fleet electrification and commercial solar.' },
      'hvac': { status: 'open', pool: '520+ HVAC engineers', speed: '19 days', note: 'Open for regional distribution and systems integrators.' },
      'construction': { status: 'held', pool: '980+ civil & build leads', speed: '21 days', note: 'Mandate Held: Contracted exclusively to tier-1 infrastructure partner.' }
    }
  },
  'eastmidlands': {
    name: 'East Midlands',
    sectors: {
      'electrical': { status: 'open', pool: '580+ branch directors', speed: '18 days', note: 'Open across Nottingham, Leicester, Derby, and Northampton.' },
      'me': { status: 'open', pool: '490+ M&E specialists', speed: '19 days', note: 'Open for building services and mechanical contractors.' },
      'switchgear': { status: 'open', pool: '380+ controls leads', speed: '21 days', note: 'Open for automation and industrial components.' },
      'renewables': { status: 'open', pool: '510+ clean energy leads', speed: '18 days', note: 'Open for solar farms and logistics park electrification.' },
      'hvac': { status: 'open', pool: '360+ refrigeration leads', speed: '20 days', note: 'Open for commercial cold storage and HVAC.' },
      'construction': { status: 'open', pool: '690+ logistics build leads', speed: '22 days', note: 'Open for big-box logistics and industrial construction.' }
    }
  },
  'eastengland': {
    name: 'East of England',
    sectors: {
      'electrical': { status: 'open', pool: '520+ branch managers', speed: '19 days', note: 'Open across Cambridge, Norwich, Ipswich, and Peterborough.' },
      'me': { status: 'open', pool: '470+ technical managers', speed: '20 days', note: 'Open for biotech, life science facility and M&E contracting.' },
      'switchgear': { status: 'open', pool: '320+ power leads', speed: '22 days', note: 'Open for precision power and automation.' },
      'renewables': { status: 'open', pool: '620+ offshore & solar PMs', speed: '17 days', note: 'Open across East Coast offshore energy hub.' },
      'hvac': { status: 'open', pool: '310+ HVAC leads', speed: '20 days', note: 'Open for cleanroom and commercial HVAC.' },
      'construction': { status: 'open', pool: '590+ project leaders', speed: '21 days', note: 'Open for life sciences and commercial development.' }
    }
  },
  'london': {
    name: 'Greater London',
    sectors: {
      'electrical': { status: 'open', pool: '1,450+ wholesale & spec leaders', speed: '16 days', note: 'Open across City, West End, Docklands, and outer boroughs.' },
      'me': { status: 'held', pool: '1,320+ major project directors', speed: '19 days', note: 'Mandate Held: Contracted exclusively to commercial M&E contractor.' },
      'switchgear': { status: 'open', pool: '840+ critical power experts', speed: '18 days', note: 'Open for data center power, LV/HV switchboards, and UPS specialists.' },
      'renewables': { status: 'open', pool: '920+ urban clean energy leads', speed: '16 days', note: 'Open for commercial fleet charging and retrofit projects.' },
      'hvac': { status: 'open', pool: '780+ commercial HVAC directors', speed: '18 days', note: 'Open for high-rise commercial and district energy networks.' },
      'construction': { status: 'open', pool: '1,680+ boardroom leaders', speed: '20 days', note: 'Open for major London commercial developments.' }
    }
  },
  'southeast': {
    name: 'South East',
    sectors: {
      'electrical': { status: 'held', pool: '1,180+ wholesale managers', speed: '19 days', note: 'Mandate Held: Contracted exclusively with regional wholesale distributor.' },
      'me': { status: 'open', pool: '920+ M&E directors', speed: '18 days', note: 'Open across Brighton, Southampton, Reading, and Kent corridor.' },
      'switchgear': { status: 'open', pool: '580+ distribution engineers', speed: '21 days', note: 'Open for manufacturing and substation engineering.' },
      'renewables': { status: 'open', pool: '840+ solar & BESS specialists', speed: '17 days', note: 'Open across solar PV farms and commercial charging networks.' },
      'hvac': { status: 'open', pool: '560+ HVAC specialists', speed: '19 days', note: 'Open for commercial climate solutions.' },
      'construction': { status: 'open', pool: '1,050+ residential & commercial leads', speed: '22 days', note: 'Open for regional housebuilders and main contractors.' }
    }
  },
  'southwest': {
    name: 'South West',
    sectors: {
      'electrical': { status: 'open', pool: '650+ wholesale leaders', speed: '18 days', note: 'Open across Bristol, Exeter, Plymouth, Gloucester, and Swindon.' },
      'me': { status: 'open', pool: '530+ M&E specialists', speed: '19 days', note: 'Open for defense, aerospace, and commercial building contractors.' },
      'switchgear': { status: 'open', pool: '410+ power systems leads', speed: '21 days', note: 'Open for grid connection and industrial automation.' },
      'renewables': { status: 'open', pool: '740+ solar & marine engineers', speed: '16 days', note: 'Open across UK solar heartland and floating offshore wind.' },
      'hvac': { status: 'open', pool: '380+ building services leads', speed: '20 days', note: 'Open for regional distributors and installers.' },
      'construction': { status: 'open', pool: '720+ infrastructure leaders', speed: '22 days', note: 'Open for Hinkley Point supply chain and regional building.' }
    }
  },
  'wales': {
    name: 'Wales',
    sectors: {
      'electrical': { status: 'open', pool: '390+ branch managers', speed: '19 days', note: 'Open across Cardiff, Swansea, Newport, and North Wales.' },
      'me': { status: 'open', pool: '320+ M&E specialists', speed: '20 days', note: 'Open for public sector, health, and commercial building services.' },
      'switchgear': { status: 'open', pool: '270+ controls specialists', speed: '22 days', note: 'Open for heavy industry and switchgear manufacturing.' },
      'renewables': { status: 'open', pool: '490+ wind & grid leads', speed: '18 days', note: 'Open across Celtic Sea offshore energy and onshore renewables.' },
      'hvac': { status: 'open', pool: '240+ HVAC engineers', speed: '21 days', note: 'Open for commercial building contractors.' },
      'construction': { status: 'open', pool: '430+ civil engineering leads', speed: '22 days', note: 'Open for Welsh infrastructure and commercial development.' }
    }
  },
  'northernireland': {
    name: 'Northern Ireland',
    sectors: {
      'electrical': { status: 'open', pool: '290+ wholesale specialists', speed: '19 days', note: 'Open across Belfast, Derry, and Craigavon corridors.' },
      'me': { status: 'open', pool: '260+ M&E export specialists', speed: '18 days', note: 'Open for UK/Ireland cross-border contracting specialists.' },
      'switchgear': { status: 'open', pool: '240+ panel manufacturing leads', speed: '20 days', note: 'Open for world-class switchgear and crushing/screening OEMs.' },
      'renewables': { status: 'open', pool: '310+ wind & biomass engineers', speed: '19 days', note: 'Open for grid integration and renewable developers.' },
      'hvac': { status: 'open', pool: '190+ HVAC specialists', speed: '20 days', note: 'Open for commercial building contractors.' },
      'construction': { status: 'open', pool: '380+ international contractors', speed: '21 days', note: 'Open for UK/EU main contracting groups.' }
    }
  }
};

let currentMapSector = 'electrical';
let currentSelectedRegion = 'london';

function initInteractiveUKMap() {
  const mapContainer = document.getElementById('ukMapInteractiveContainer');
  if (!mapContainer) return;

  const sectorBtns = document.querySelectorAll('.map-sector-btn');
  const regionGroups = document.querySelectorAll('.uk-region-group');
  const regionTitle = document.getElementById('inspectorRegionTitle');
  const sectorName = document.getElementById('inspectorSectorName');
  const statusBadge = document.getElementById('inspectorStatusBadge');
  const poolVal = document.getElementById('inspectorCandidatePool');
  const speedVal = document.getElementById('inspectorSpeed');
  const descVal = document.getElementById('inspectorDescription');
  const lockBtn = document.getElementById('inspectorLockBtn');

  function updateRegionDisplay(regionKey, sectorKey) {
    const reg = UK_TERRITORIES_DATA[regionKey];
    if (!reg) return;
    const sec = reg.sectors[sectorKey] || reg.sectors['electrical'];

    currentSelectedRegion = regionKey;

    if (regionTitle) regionTitle.textContent = reg.name;
    if (sectorName) sectorName.textContent = getSectorLabel(sectorKey);
    
    if (statusBadge) {
      statusBadge.className = 'inspector-status-badge ' + sec.status;
      if (sec.status === 'open') {
        statusBadge.innerHTML = `<span class="legend-dot open"></span> OPEN FOR SINGLE PARTNER`;
      } else {
        statusBadge.innerHTML = `<span class="legend-dot locked"></span> MANDATE EXCLUSIVELY HELD`;
      }
    }

    if (poolVal) poolVal.textContent = sec.pool;
    if (speedVal) speedVal.textContent = sec.speed;
    if (descVal) descVal.textContent = sec.note;

    if (lockBtn) {
      if (sec.status === 'open') {
        lockBtn.textContent = `Reserve ${reg.name} Territory`;
        lockBtn.className = 'btn btn-primary w-full';
        lockBtn.onclick = () => openTerritoryReservation(reg.name, getSectorLabel(sectorKey));
      } else {
        lockBtn.textContent = `Join ${reg.name} Priority Waitlist`;
        lockBtn.className = 'btn btn-secondary-dark w-full';
        lockBtn.onclick = () => openTerritoryReservation(reg.name, getSectorLabel(sectorKey), true);
      }
    }

    // Update active SVG classes
    regionGroups.forEach(grp => {
      const rId = grp.getAttribute('data-region');
      const isSelected = rId === regionKey;
      grp.classList.toggle('selected', isSelected);

      const rData = UK_TERRITORIES_DATA[rId];
      if (rData && rData.sectors[sectorKey]) {
        grp.classList.toggle('status-locked', rData.sectors[sectorKey].status === 'held');
      }
    });
  }

  function getSectorLabel(key) {
    const labels = {
      'electrical': 'Electrical Wholesale & Distribution',
      'me': 'Mechanical & Electrical (M&E) Contracting',
      'switchgear': 'Switchgear, Power Systems & Automation',
      'renewables': 'Renewables, Solar & EV Charging',
      'hvac': 'HVAC & Commercial Refrigeration',
      'construction': 'Construction & Civil Contracting'
    };
    return labels[key] || 'Electrical Wholesale';
  }

  sectorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sectorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMapSector = btn.getAttribute('data-sector');
      updateRegionDisplay(currentSelectedRegion, currentMapSector);
    });
  });

  regionGroups.forEach(grp => {
    grp.addEventListener('click', () => {
      const rId = grp.getAttribute('data-region');
      updateRegionDisplay(rId, currentMapSector);
    });
  });

  // Initial load
  updateRegionDisplay(currentSelectedRegion, currentMapSector);
}

function openTerritoryReservation(regionName, sectorName, isWaitlist = false) {
  const modal = document.getElementById('territoryModal');
  const regionInput = document.getElementById('mTerritory');
  const companyInput = document.getElementById('mCompany');

  if (regionInput) {
    regionInput.value = `${regionName} — ${sectorName}`;
  }

  if (modal) {
    openModal(modal);
    if (companyInput) companyInput.focus();
  } else {
    window.location.href = `check.html?region=${encodeURIComponent(regionName)}&industry=${encodeURIComponent(sectorName)}`;
  }
}

/* --------------------------------------------------------------------------
   2. EXECUTIVE SEARCH ROI & BAD-HIRE COST CALCULATOR
   -------------------------------------------------------------------------- */
function initRoiCalculator() {
  const container = document.getElementById('roiCalculatorContainer');
  if (!container) return;

  const roleSelect = document.getElementById('roiRoleSelect');
  const salarySlider = document.getElementById('roiSalarySlider');
  const salaryDisplay = document.getElementById('roiSalaryDisplay');
  const revenueSlider = document.getElementById('roiRevenueSlider');
  const revenueDisplay = document.getElementById('roiRevenueDisplay');
  const vacancySlider = document.getElementById('roiVacancySlider');
  const vacancyDisplay = document.getElementById('roiVacancyDisplay');
  const upliftSlider = document.getElementById('roiUpliftSlider');
  const upliftDisplay = document.getElementById('roiUpliftDisplay');

  // Outputs
  const netBenefitEl = document.getElementById('roiNetBenefit');
  const roiMultiplierEl = document.getElementById('roiMultiplierVal');
  const vacancyCostEl = document.getElementById('roiVacancyCostVal');
  const badHireEl = document.getElementById('roiBadHireVal');
  const revenueUpliftEl = document.getElementById('roiRevenueUpliftVal');
  const paybackEl = document.getElementById('roiPaybackVal');
  const chartPowerUpBar = document.getElementById('chartPowerUpBar');
  const exportBtn = document.getElementById('roiExportBtn');

  function calculate() {
    const baseSalary = parseInt(salarySlider.value, 10);
    const revenue = parseInt(revenueSlider.value, 10);
    const vacancyMonths = parseFloat(vacancySlider.value);
    const upliftPct = parseInt(upliftSlider.value, 10);

    // Formatted labels
    if (salaryDisplay) salaryDisplay.textContent = `£${baseSalary.toLocaleString('en-GB')}`;
    if (revenueDisplay) revenueDisplay.textContent = `£${(revenue / 1000000).toFixed(1)}M`;
    if (vacancyDisplay) vacancyDisplay.textContent = `${vacancyMonths} months`;
    if (upliftDisplay) upliftDisplay.textContent = `+${upliftPct}%`;

    // Mathematical metrics
    const grossMargin = 0.24; // 24% typical wholesale/engineering gross margin
    const traditionalDaysVacant = Math.round(vacancyMonths * 30.5);
    const powerUpDaysVacant = 19;
    const daysSaved = Math.max(0, traditionalDaysVacant - powerUpDaysVacant);

    const dailyMargin = (revenue * grossMargin) / 365;
    const totalVacancyCost = Math.round(dailyMargin * traditionalDaysVacant);
    const vacancySavings = Math.round(dailyMargin * daysSaved);

    // Standard industry mis-hire cost is 2.8x base salary (fees + salary + onboarding + account churn)
    const badHireRisk = Math.round(baseSalary * 2.8);

    // Uplift delivered by top 1% performer
    const annualGrossUplift = Math.round(revenue * (upliftPct / 100));
    const annualMarginUplift = Math.round(annualGrossUplift * grossMargin);

    // Total net business gain
    const netCommercialGain = annualMarginUplift + vacancySavings;
    const powerUpRetainer = Math.round(baseSalary * 0.28);
    const roiMultiplier = ((netCommercialGain - powerUpRetainer) / powerUpRetainer).toFixed(1);
    const paybackDays = Math.max(14, Math.round((powerUpRetainer / (annualMarginUplift / 365))));

    // Update UI
    if (netBenefitEl) netBenefitEl.textContent = `+£${netCommercialGain.toLocaleString('en-GB')}`;
    if (roiMultiplierEl) roiMultiplierEl.textContent = `${roiMultiplier}x ROI`;
    if (vacancyCostEl) vacancyCostEl.textContent = `-£${totalVacancyCost.toLocaleString('en-GB')}`;
    if (badHireEl) badHireEl.textContent = `£${badHireRisk.toLocaleString('en-GB')}`;
    if (revenueUpliftEl) revenueUpliftEl.textContent = `+£${annualGrossUplift.toLocaleString('en-GB')}`;
    if (paybackEl) paybackEl.textContent = `${paybackDays} Days`;

    if (chartPowerUpBar) {
      chartPowerUpBar.style.width = '100%';
    }
  }

  // Pre-sets based on role select
  if (roleSelect) {
    roleSelect.addEventListener('change', () => {
      const r = roleSelect.value;
      if (r === 'branch_mgr') {
        salarySlider.value = 65000;
        revenueSlider.value = 4500000;
        vacancySlider.value = 3.5;
        upliftSlider.value = 22;
      } else if (r === 'comm_dir') {
        salarySlider.value = 110000;
        revenueSlider.value = 14000000;
        vacancySlider.value = 4.5;
        upliftSlider.value = 25;
      } else if (r === 'reg_vp') {
        salarySlider.value = 140000;
        revenueSlider.value = 22000000;
        vacancySlider.value = 5.0;
        upliftSlider.value = 28;
      } else if (r === 'tech_sales') {
        salarySlider.value = 55000;
        revenueSlider.value = 2800000;
        vacancySlider.value = 3.0;
        upliftSlider.value = 20;
      } else if (r === 'estimator') {
        salarySlider.value = 60000;
        revenueSlider.value = 6000000;
        vacancySlider.value = 3.5;
        upliftSlider.value = 18;
      }
      calculate();
    });
  }

  [salarySlider, revenueSlider, vacancySlider, upliftSlider].forEach(sl => {
    if (sl) sl.addEventListener('input', calculate);
  });

  if (exportBtn) {
    exportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openBoardroomReportModal();
    });
  }

  calculate();
}

/* --------------------------------------------------------------------------
   3. UK ELECTRICAL & ENGINEERING SALARY BENCHMARK TOOL
   -------------------------------------------------------------------------- */
const SALARY_BENCHMARK_DB = {
  'branch_mgr': {
    title: 'Electrical Wholesale Branch Manager',
    base: { q1: 52000, median: 64000, q3: 78000 },
    bonus: '+25% - 45% uncapped branch net profit share',
    perks: 'Executive Company Car or £650/mo EV scheme, Private Health (Bupa), 5-8% matched pension',
    scarcity: 9.3,
    passivePct: '91% passive / not actively on job boards',
    certifications: 'EDA Commercial Framework, Level 4 Leadership, Full P&L Ownership'
  },
  'trade_counter': {
    title: 'Trade Counter / Assistant Branch Manager',
    base: { q1: 34000, median: 40000, q3: 48000 },
    bonus: '+12% - 20% annual branch quota bonus',
    perks: 'Performance bonus, store discounts, life assurance',
    scarcity: 8.4,
    passivePct: '84% passive / word-of-mouth hires',
    certifications: 'EDA Product Knowledge Certificates, Trade POS systems (Kerridge, Intact)'
  },
  'external_sales': {
    title: 'External Sales Representative / Key Account Manager',
    base: { q1: 45000, median: 54000, q3: 65000 },
    bonus: '+30% - 60% margin-linked commission structure',
    perks: 'Company EV (Tesla/Polestar/BMW), Phone, Laptop, Expense allowance',
    scarcity: 8.9,
    passivePct: '88% passive / competitor account holders',
    certifications: 'Contractor ledger relationship history, Technical product specification'
  },
  'comm_dir': {
    title: 'Commercial Director / Head of Sales',
    base: { q1: 95000, median: 115000, q3: 145000 },
    bonus: '+40% - 70% EBITDA & Revenue Growth bonus + LTIP/Equity',
    perks: 'Car allowance £900/mo, Family healthcare, Executive pension, Equity participation',
    scarcity: 9.7,
    passivePct: '96% passive / discrete peer-to-peer approach only',
    certifications: 'Boardroom governance, Tier-1 contractor negotiations, Multi-branch P&L'
  },
  'regional_dir': {
    title: 'Regional Operations Director (Multi-Branch)',
    base: { q1: 85000, median: 105000, q3: 130000 },
    bonus: '+35% - 50% regional EBITDA bonus',
    perks: 'Premium car allowance, Executive healthcare, Senior pension',
    scarcity: 9.5,
    passivePct: '94% passive / retained search required',
    certifications: '10+ branch network oversight, logistics & margin optimization'
  },
  'estimator': {
    title: 'Senior M&E Estimator / Quantity Surveyor',
    base: { q1: 58000, median: 68000, q3: 82000 },
    bonus: '+15% - 25% project win & margin retention bonus',
    perks: 'Car allowance £600/mo, hybrid working flexibility, professional subscription paid',
    scarcity: 9.4,
    passivePct: '92% passive / highly entrenched in existing firms',
    certifications: 'C&G 2391/2382, HNC/HND Electrical, Trimble/Ensign software mastery'
  },
  'switchgear_spec': {
    title: 'Switchgear & Power Distribution Technical Specialist',
    base: { q1: 55000, median: 66000, q3: 80000 },
    bonus: '+20% - 35% technical sales bonus',
    perks: 'Car allowance, technical training budget, private medical',
    scarcity: 9.2,
    passivePct: '90% passive / OEM design & spec engineers',
    certifications: 'BS EN 61439, LV/MV switchboard design, AutoCAD/EPLAN'
  },
  'ev_renewables': {
    title: 'EV Infrastructure & Solar BD Manager',
    base: { q1: 52000, median: 65000, q3: 82000 },
    bonus: '+30% - 50% MW/charger rollout commission',
    perks: 'Electric vehicle scheme, green tech incentives, flexible working',
    scarcity: 9.1,
    passivePct: '89% passive / high market movement',
    certifications: 'EVCP regulations, DNO grid connection knowledge, C&I solar'
  }
};

const REGIONAL_WEIGHTS = {
  'london': 1.18,
  'midlands': 1.00,
  'north': 0.94,
  'scotland': 0.93
};

const COMPANY_SIZE_WEIGHTS = {
  'small': 0.92,
  'mid': 1.00,
  'large': 1.12,
  'enterprise': 1.22
};

function initSalaryBenchmark() {
  const container = document.getElementById('salaryBenchmarkContainer');
  if (!container) return;

  const roleSelect = document.getElementById('benchRole');
  const regionSelect = document.getElementById('benchRegion');
  const sizeSelect = document.getElementById('benchSize');

  const q1Val = document.getElementById('benchQ1Val');
  const medianVal = document.getElementById('benchMedianVal');
  const q3Val = document.getElementById('benchQ3Val');
  const bonusVal = document.getElementById('benchBonusVal');
  const perksVal = document.getElementById('benchPerksVal');
  const certsVal = document.getElementById('benchCertsVal');
  const scarcityScore = document.getElementById('benchScarcityScore');
  const scarcityBar = document.getElementById('benchScarcityBar');
  const passiveRatio = document.getElementById('benchPassiveRatio');

  function update() {
    const roleKey = roleSelect ? roleSelect.value : 'branch_mgr';
    const regionKey = regionSelect ? regionSelect.value : 'midlands';
    const sizeKey = sizeSelect ? sizeSelect.value : 'mid';

    const roleData = SALARY_BENCHMARK_DB[roleKey] || SALARY_BENCHMARK_DB['branch_mgr'];
    const rWeight = REGIONAL_WEIGHTS[regionKey] || 1.0;
    const sWeight = COMPANY_SIZE_WEIGHTS[sizeKey] || 1.0;
    const combinedWeight = rWeight * sWeight;

    const q1 = Math.round(roleData.base.q1 * combinedWeight / 500) * 500;
    const median = Math.round(roleData.base.median * combinedWeight / 500) * 500;
    const q3 = Math.round(roleData.base.q3 * combinedWeight / 500) * 500;

    if (q1Val) q1Val.textContent = `£${q1.toLocaleString('en-GB')}`;
    if (medianVal) medianVal.textContent = `£${median.toLocaleString('en-GB')}`;
    if (q3Val) q3Val.textContent = `£${q3.toLocaleString('en-GB')}`;

    if (bonusVal) bonusVal.textContent = roleData.bonus;
    if (perksVal) perksVal.textContent = roleData.perks;
    if (certsVal) certsVal.textContent = roleData.certifications;

    if (scarcityScore) scarcityScore.textContent = `${roleData.scarcity} / 10`;
    if (scarcityBar) scarcityBar.style.width = `${roleData.scarcity * 10}%`;
    if (passiveRatio) passiveRatio.textContent = roleData.passivePct;
  }

  [roleSelect, regionSelect, sizeSelect].forEach(el => {
    if (el) el.addEventListener('change', update);
  });

  update();
}

/* --------------------------------------------------------------------------
   BOARDROOM EXECUTIVE SUMMARY REPORT MODAL
   -------------------------------------------------------------------------- */
function openBoardroomReportModal() {
  let modal = document.getElementById('boardroomReportModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'boardroomReportModal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-content print-report-container" style="max-width: 680px; padding: 2.5rem;">
        <button class="modal-close-btn" onclick="closeModal(document.getElementById('boardroomReportModal'))" aria-label="Close modal">×</button>
        <div style="border-bottom: 2px solid var(--accent-primary); padding-bottom: 1rem; margin-bottom: 1.5rem; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <h3 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:800; color:var(--text-primary); margin-bottom:0.25rem;">
              Executive Search Business Case
            </h3>
            <p style="font-size:0.875rem; color:var(--text-muted);">Confidential Boardroom Investment Appraisal</p>
          </div>
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">POWER-UP TALENT LTD</span>
        </div>
        <div id="boardroomReportBody" style="display:flex; flex-direction:column; gap:1.25rem; font-size:0.925rem; color:var(--text-secondary); margin-bottom:2rem;">
          <!-- Dynamically filled -->
        </div>
        <div style="display:flex; gap:1rem; justify-content:flex-end;">
          <button class="btn btn-secondary-dark btn-sm" onclick="window.print()">Print / Save PDF</button>
          <a href="contact.html" class="btn btn-primary btn-sm">Submit to Executive Partner</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const roleName = document.getElementById('roiRoleSelect')?.selectedOptions[0]?.text || 'Senior Leadership Mandate';
  const salary = document.getElementById('roiSalaryDisplay')?.textContent || '£75,000';
  const quota = document.getElementById('roiRevenueDisplay')?.textContent || '£4.5M';
  const netGain = document.getElementById('roiNetBenefit')?.textContent || '+£850,000';
  const vacancyLoss = document.getElementById('roiVacancyCostVal')?.textContent || '-£120,000';
  const badHireRisk = document.getElementById('roiBadHireVal')?.textContent || '£210,000';
  const payback = document.getElementById('roiPaybackVal')?.textContent || '28 Days';

  const body = document.getElementById('boardroomReportBody');
  if (body) {
    body.innerHTML = `
      <div style="background:var(--bg-surface-subtle); padding:1rem 1.25rem; border-radius:8px; border:1px solid var(--border-card);">
        <p><strong>Proposed Role:</strong> ${roleName}</p>
        <p><strong>Base Remuneration:</strong> ${salary} | <strong>Annual Quota / Revenue:</strong> ${quota}</p>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
        <div style="padding:1rem; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:6px;">
          <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:#dc2626; margin-bottom:0.25rem;">Cost of Desk Vacancy</div>
          <div style="font-size:1.2rem; font-weight:800; color:#dc2626;">${vacancyLoss}</div>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Cumulative gross margin lost across agency delay period.</p>
        </div>
        <div style="padding:1rem; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:6px;">
          <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:#dc2626; margin-bottom:0.25rem;">Bad Hire Exposure</div>
          <div style="font-size:1.2rem; font-weight:800; color:#dc2626;">${badHireRisk}</div>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Standard cost of a failed hire (2.8x base salary).</p>
        </div>
      </div>
      <div style="padding:1.25rem; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); border-radius:6px;">
        <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:#059669; margin-bottom:0.25rem;">Projected Net Value with Power-Up Talent</div>
        <div style="font-size:1.75rem; font-weight:800; color:#059669; line-height:1.2;">${netGain}</div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.5rem;">
          Includes revenue acceleration (+top decile performer), 19-day average mandate completion, and 12-month single-partner exclusivity guarantee. Estimated investment payback: <strong>${payback}</strong>.
        </p>
      </div>
    `;
  }

  openModal(modal);
}


