// 1. Seven-platform interactive workspace preview (tabs, search, status filter, reset)
document.querySelectorAll('[data-workspace]').forEach(workspace => {
  const tabs = [...workspace.querySelectorAll('[data-service-tab]')];
  function select(id, focus = false) {
    const active = tabs.find(t => t.dataset.serviceTab === id);
    if (!active) return;
    tabs.forEach(t => {
      const selected = t === active;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
    });
    workspace.querySelectorAll('[data-service-panel]').forEach(p => {
      p.hidden = p.dataset.servicePanel !== id;
    });
    const titleEl = workspace.querySelector('[data-workspace-title]');
    if (titleEl) titleEl.textContent = active.innerText.trim();
    if (focus) active.focus();
  }
  const param = new URLSearchParams(location.search).get('service');
  select(param || workspace.dataset.initialService);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.serviceTab));
    tab.addEventListener('keydown', e => {
      let next;
      if (['ArrowDown', 'ArrowRight'].includes(e.key)) next = (index + 1) % tabs.length;
      if (['ArrowUp', 'ArrowLeft'].includes(e.key)) next = (index - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        e.preventDefault();
        select(tabs[next].dataset.serviceTab, true);
      }
    });
  });
  workspace.querySelectorAll('[data-service-panel]').forEach(panel => {
    const search = panel.querySelector('[data-workspace-search]');
    const filter = panel.querySelector('[data-workspace-filter]');
    const resets = [...panel.querySelectorAll('[data-workspace-reset]')];
    const rows = [...panel.querySelectorAll('[data-preview-row]')];
    const total = rows.length;
    const update = () => {
      let count = 0;
      const q = search.value.trim().toLowerCase();
      const activeFilter = filter.value !== 'all' || q.length > 0;
      rows.forEach(row => {
        const show =
          (filter.value === 'all' || filter.value === row.dataset.state) &&
          row.textContent.toLowerCase().includes(q);
        row.hidden = !show;
        if (show) count++;
      });
      panel.querySelector('[data-preview-empty]').hidden = count !== 0;
      panel.querySelector('[data-preview-count]').textContent = activeFilter
        ? `Showing ${count} of ${total} sample items`
        : `${count} sample item${count === 1 ? '' : 's'}`;
      if (resets[0]) resets[0].hidden = !activeFilter;
    };
    search.addEventListener('input', update);
    filter.addEventListener('change', update);
    resets.forEach(btn =>
      btn.addEventListener('click', () => {
        search.value = '';
        filter.value = 'all';
        update();
        search.focus();
      })
    );
  });
});

// 2. Guided sample-data workflows
document.querySelectorAll('[data-guided-demo]').forEach(demo => {
  const scenarioTabs = [...demo.querySelectorAll('[data-scenario-tab]')];
  const scenarioPanels = [...demo.querySelectorAll('[data-scenario-panel]')];

  function selectScenario(id, focus = false) {
    const activeTab = scenarioTabs.find(t => t.dataset.scenarioTab === id);
    if (!activeTab) return;
    scenarioTabs.forEach(t => {
      const selected = t === activeTab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
    });
    scenarioPanels.forEach(p => {
      p.hidden = p.dataset.scenarioPanel !== id;
    });
    if (focus) activeTab.focus();
  }

  const scenarioParam = new URLSearchParams(location.search).get('scenario');
  if (scenarioParam && scenarioTabs.some(t => t.dataset.scenarioTab === scenarioParam)) {
    selectScenario(scenarioParam);
  }

  scenarioTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScenario(tab.dataset.scenarioTab));
    tab.addEventListener('keydown', e => {
      let next;
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) next = (index + 1) % scenarioTabs.length;
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) next = (index - 1 + scenarioTabs.length) % scenarioTabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = scenarioTabs.length - 1;
      if (next !== undefined) {
        e.preventDefault();
        selectScenario(scenarioTabs[next].dataset.scenarioTab, true);
      }
    });
  });

  scenarioPanels.forEach(panel => {
    if (panel.dataset.multiStepScenario) {
      const stepPanels = [...panel.querySelectorAll('[data-step-panel]')];
      const dots = [...panel.querySelectorAll('[data-step-dot]')];
      const badge = panel.querySelector('[data-step-badge]');
      const counter = panel.querySelector('[data-step-counter]');
      const live = panel.querySelector('[data-step-live]');
      const approveBtn = panel.querySelector('[data-step-approve]');
      const step4Flag = panel.querySelector('[data-step4-flag]');
      const step4State = panel.querySelector('[data-step4-state]');
      const stepLabels = {
        1: ['Step 1 of 4 · Rules-based alert (Sample-data demo)', '1 overdue invoice flagged', 'Step 1 ready: overdue sample invoice INV-2026-108 is flagged in the owner briefing.'],
        2: ['Step 2 of 4 · Staff-entered evidence (Sample-data demo)', 'Source case INV-2026-108 open', 'Step 2: opened case INV-2026-108 with prior check history ready for a portal observation.'],
        3: ['Step 3 of 4 · Evidence saved · AI-assisted draft ready', 'Evidence card logged (2 checks)', 'Step 3: fictional portal observation saved to evidence card; ready to queue sample draft.'],
        4: ['Step 4 of 4 · Separate human approval required', 'Draft in Personal AI Team queue', 'Step 4: sample draft queued in Personal AI Team awaiting separate human approval.']
      };

      const showStep = (stepNum, focusTarget = true) => {
        const s = String(stepNum);
        stepPanels.forEach(sp => { sp.hidden = sp.dataset.stepPanel !== s; });
        dots.forEach(d => {
          const n = Number(d.dataset.stepDot);
          d.classList.toggle('is-active', n === Number(stepNum));
          d.classList.toggle('is-done', n < Number(stepNum));
        });
        const meta = stepLabels[Number(stepNum)];
        if (meta) {
          if (badge) { badge.textContent = meta[0]; badge.className = 'scenario-step-badge'; }
          if (counter) counter.textContent = meta[1];
          if (live) live.textContent = meta[2];
        }
        if (Number(stepNum) === 1) {
          if (approveBtn) approveBtn.hidden = false;
          if (step4Flag) { step4Flag.textContent = 'Separate human approval required · Draft awaiting sign-off'; step4Flag.className = 'sig-flag warn'; }
          if (step4State) step4State.innerHTML = '<strong>Queue state:</strong> Awaiting approval';
        }
        if (focusTarget) {
          const activePanel = stepPanels.find(sp => sp.dataset.stepPanel === s);
          const firstBtn = activePanel?.querySelector('button:not([hidden])');
          firstBtn?.focus();
        }
      };

      panel.querySelectorAll('[data-step-next]').forEach(btn => {
        btn.addEventListener('click', () => showStep(btn.dataset.stepNext, true));
      });
      panel.querySelectorAll('[data-step-reset]').forEach(btn => {
        btn.addEventListener('click', () => showStep(1, true));
      });
      approveBtn?.addEventListener('click', () => {
        approveBtn.hidden = true;
        if (badge) { badge.textContent = 'Completed · Human approval recorded (Sample-data demo)'; badge.className = 'scenario-step-badge completed'; }
        if (counter) counter.textContent = 'Approved by owner (sample state)';
        if (step4Flag) { step4Flag.textContent = 'Approved by human reviewer · Sample state only'; step4Flag.className = 'sig-flag ok'; }
        if (step4State) step4State.innerHTML = '<strong>Queue state:</strong> Approved (sample only — no message sent)';
        if (live) live.textContent = 'Step 4 completed: separate human approval recorded in local sample state. No live CRM record was changed.';
        dots.forEach(d => { d.classList.remove('is-active'); d.classList.add('is-done'); });
        panel.querySelector('[data-step-panel="4"] [data-step-reset]')?.focus();
      });
      return;
    }

    const actionBtn = panel.querySelector('[data-scenario-action]');
    const resetBtn = panel.querySelector('[data-scenario-reset]');
    const beforeBlock = panel.querySelector('[data-scenario-before]');
    const afterBlock = panel.querySelector('[data-scenario-after]');
    const badge = panel.querySelector('[data-scenario-state-badge]');
    const live = panel.querySelector('[data-scenario-live]');
    const countEl = panel.querySelector('[data-scenario-counter]');
    const initialCount = countEl?.dataset.initialCount || '';
    const updatedCount = countEl?.dataset.updatedCount || '';
    const completeMsg = panel.dataset.completeMessage || 'Sample state updated.';
    const resetMsg = panel.dataset.resetMessage || 'Sample scenario reset to starting state.';

    actionBtn?.addEventListener('click', () => {
      panel.classList.add('is-completed');
      if (beforeBlock) beforeBlock.hidden = true;
      if (afterBlock) afterBlock.hidden = false;
      if (actionBtn) actionBtn.hidden = true;
      if (resetBtn) resetBtn.hidden = false;
      if (badge) {
        badge.textContent = 'Completed · Sample state updated';
        badge.className = 'scenario-step-badge completed';
      }
      if (countEl && updatedCount) countEl.textContent = updatedCount;
      if (live) live.textContent = completeMsg;
      resetBtn?.focus();
    });

    resetBtn?.addEventListener('click', () => {
      panel.classList.remove('is-completed');
      if (beforeBlock) beforeBlock.hidden = false;
      if (afterBlock) afterBlock.hidden = true;
      if (actionBtn) actionBtn.hidden = false;
      if (resetBtn) resetBtn.hidden = true;
      if (badge) {
        badge.textContent = 'Step 1 of 1 · Ready for your action';
        badge.className = 'scenario-step-badge';
      }
      if (countEl && initialCount) countEl.textContent = initialCount;
      if (live) live.textContent = resetMsg;
      actionBtn?.focus();
    });
  });
});

document.addEventListener('click', e => {
  document.querySelectorAll('.service-menu[open]').forEach(menu => {
    if (!menu.contains(e.target)) menu.open = false;
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.service-menu[open]').forEach(menu => {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    });
  }
});

// Invoice actions only move between sample steps in the page.
document.querySelectorAll('[data-invoice-demo]').forEach(panel => {
  const steps = [...panel.querySelectorAll('[data-invoice-step]')];
  const reset = panel.querySelector('[data-invoice-reset]');
  const status = panel.querySelector('[data-invoice-status]');
  function showStep(index) {
    steps.forEach((step, position) => { step.hidden = position !== index; });
    reset.hidden = index === 0;
    status.textContent = steps[index].querySelector('h4').textContent;
    steps[index].focus();
  }
  steps.forEach((step, index) => step.querySelector('[data-invoice-next]')?.addEventListener('click', () => showStep(index + 1)));
  reset.addEventListener('click', () => showStep(0));
});
