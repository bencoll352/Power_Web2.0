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

// 2. Guided 3-Scenario Product Demo (Monkeytype-inspired single clear action + immediate feedback + reset)
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
