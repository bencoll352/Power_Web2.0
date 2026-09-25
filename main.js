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
    title: 'Elite Talent Headhunting & RPO',
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
    title: 'Commercial Coaching & Academy',
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
    title: 'CorePlatform™ AI & Growth Intelligence',
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

