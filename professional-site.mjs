import { productScreenshot, selectedProductScreens } from './suite-screenshots.mjs';
import { aiGroups, connectedJourneyBand } from './site-offer.mjs';

// Shared British industrial editorial presentation: seven AI & Business Platforms hub,
// early signature visuals, 3-scenario guided product demo and 7-platform workspace explorer.
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
export const serviceSlugs = { crm: 'crm', communications: 'communications', sales: 'sales-intelligence', delivery: 'business-delivery', automation: 'automation', 'ai-team': 'ai-team', marketing: 'marketing-social-media' };
const ask = g => `contact.html?interest=${encodeURIComponent('AI services: ' + g.title)}`;
const walkthrough = 'contact.html?interest=AI%20services%20walkthrough';
const icon = (g, size = 28) => `<img src="assets/services-v2/${g.id}.svg" width="${size}" height="${size}" alt="" loading="lazy">`;
const label = t => `<p class="eyebrow"><span></span>${t}</p>`;
const arrow = '<span aria-hidden="true">↗</span>';
const btn = (text, href, secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const upper = t => esc(t.toUpperCase());

const previewData = {
  crm: { heading: 'Know who needs your attention.', subtitle: 'Synthetic Business CRM view: accounts, 30-day renewal flags and owned follow-ups. Personal CRM runs in a separate private workspace.', metrics: [['12', 'Sample accounts'], ['2', 'Renewing in 30 days (no review)'], ['4', 'Follow-ups due']], columns: ['Account / dossier', 'Next step & renewal check', 'Named owner', 'Status'], rows: [['Example Distribution Ltd', 'Renewing in 21 days · book review', 'Account team', 'review'], ['Sample Engineering Group', 'Stage gate: confirm decision-maker', 'Commercial team', 'active'], ['Demo Construction Services', 'Log call notes & next follow-up', 'Account team', 'active'], ['Example Trade Supplies', 'Quarterly review recorded', 'Commercial team', 'complete']], activity: ['30-day renewal flag raised (no review booked)', 'Follow-up task assigned with due date', 'CSV import preview & duplicate check completed'], callout: 'Business CRM and Personal CRM stay separate.', detail: 'Business CRM manages team accounts, pipelines and 30-day renewal flags; Personal CRM keeps individual contacts and reconnect reminders in a separate data boundary.' },
  communications: { heading: 'Give every customer enquiry a next step.', subtitle: 'Synthetic Needs Attention view: live work counts exclude sandbox tests; external channels require a configured connection.', metrics: [['8', 'Active conversations'], ['3', 'Overdue callbacks / cases'], ['2', 'Unassigned enquiries']], columns: ['Conversation / case', 'Next step', 'Owner', 'Status'], rows: [['Inbound call · callback requested', 'Assign owner & confirm callback time', 'Reception team', 'review'], ['Website chat · branch stock query', 'Send approved FAQ answer', 'Customer team', 'active'], ['Shared inbox · account query', 'Human takeover & case due date', 'Customer team', 'active'], ['Appointment request · sample', 'Confirmed via configured calendar', 'Reception team', 'complete']], activity: ['Inbound call captured with UK English voice settings', 'Callback linked to conversation & assigned', 'Sandbox test excluded from live Needs Attention count'], callout: 'Context travels with the conversation.', detail: 'Staff see overdue cases, callbacks and unassigned enquiries in one view. Telephony, WhatsApp, email and calendar adapters are available with a configured connection.' },
  sales: { heading: 'See which opportunities deserve your next move.', subtitle: 'Synthetic Sales & Intelligence view: local public Market Intelligence, human-reviewed Prospect Intelligence, one tracked quote per prospect and JSON handovers.', metrics: [['10', 'Prospects in queue'], ['3', 'Overdue quotes to follow up'], ['4', 'Ready for handover']], columns: ['Prospect / ICP fit', 'Action queue & quote status', 'Owner', 'Status'], rows: [['Example Manufacturing (Fit: High · Data: Missing phone)', 'Quote #Q-104 overdue · follow up', 'Sales team', 'review'], ['Fixture Electrical Distribution (Branch opening · Leeds)', 'Review dated evidence · accept & assign', 'Commercial team', 'active'], ['Demo M&E Contractors (Fit: Medium · Campaign: Q4 Trade)', 'Review outreach preview for approval', 'Commercial team', 'active'], ['Example Regional Projects (Won · Campaign: Q4 Trade)', 'Structured Sales handover exported', 'Sales team', 'complete']], activity: ['Planning Data & Find a Tender searched around Leeds (zero AI credits)', 'Dated expansion evidence reviewed: Accept & assign -> Action Queue', 'Structured handover & Marketing outcomes JSON exported'], callout: 'Evidence, human review and quote discipline before handover.', detail: 'Query UK Planning Data & Find a Tender, review dated prospect evidence separately from contactability, track one active quote per prospect, and export JSON for Delivery and Marketing.' },
  delivery: { heading: 'Start delivery with a clear brief.', subtitle: 'Working pilot (local single-operator onboarding): imports reviewed Sales handovers, confirms won status and blocks duplicate imports.', metrics: [['6', 'Onboarding records (pilot)'], ['2', 'Handovers awaiting confirmation'], ['0', 'Duplicate imports created']], columns: ['Customer / handover ref', 'Agreed scope & start date', 'Delivery owner', 'Status'], rows: [['HO-2026-041 · Example Regional Projects', 'Confirm won deal, scope & start date', 'Delivery lead', 'review'], ['HO-2026-039 · Sample Electrical Group', 'Branch onboarding · starts 18 Nov', 'Operations owner', 'active'], ['HO-2026-036 · Demo Industrial Supplies', 'Initial setup scope · starts 25 Nov', 'Delivery lead', 'active'], ['HO-2026-031 · Repeat import detected', 'Existing onboarding record preserved', 'Operations owner', 'complete']], activity: ['Sales handover HO-2026-041 imported for review', 'Won deal, owner, agreed scope & start date recorded', 'Repeat import of HO-2026-031 detected; existing record kept'], callout: 'A clear handover from sale to delivery.', detail: 'Local single-operator onboarding pilot imports reviewed Sales handovers, confirms won status and agreed scope with start date, and preserves existing records on repeat imports.' },
  automation: { heading: 'Make repeatable work easier to run and review.', subtitle: 'Working pilot (operator CLI handover.js): routes reviewed Sales handovers to Delivery and records created, already_exists, rejected or unconfirmed receipts.', metrics: [['5', 'handover.js CLI runs'], ['1', 'Awaiting operator run'], ['4', 'Recorded receipts']], columns: ['Handover ref / route', 'Run receipt', 'Control mode', 'Status'], rows: [['Ref HO-2026-041 · handover.js -> Delivery', 'Ready for operator execution', 'Operator CLI', 'review'], ['Ref HO-2026-039 · handover.js -> Delivery', 'Receipt: created in Delivery', 'Operator CLI', 'active'], ['Ref HO-2026-038 · Retry with same ref', 'Receipt: already_exists (no duplicate)', 'Operator CLI', 'active'], ['Ref HO-2026-035 · Unconfirmed / incomplete', 'Receipt: unconfirmed · check Delivery', 'Operator CLI', 'complete']], activity: ['Reviewed handover & AI Team instructions loaded into handover.js', 'Run executed under operator control (payloads omitted from logs)', 'Retry with Ref HO-2026-038 returned already_exists receipt'], callout: 'Traceable CLI runs under operator control.', detail: 'Operator CLI tool (handover.js) routes reviewed Sales handovers to Business Delivery and records created, already_exists, rejected or unconfirmed receipts.' },
  'ai-team': { heading: 'Give your team more capacity for research and preparation.', subtitle: 'Working pilot (local extractive milestone): cited briefs from approved sources, human revision rounds and browser handover preparation.', metrics: [['4', 'Scoped assignments'], ['2', 'Awaiting human review'], ['1', 'Delivery brief ready']], columns: ['Assignment / teammate', 'Extractive review & citations', 'Reviewer', 'Status'], rows: [['Delivery brief · Ref HO-2026-041', 'Preview Sales handover & download instructions', 'Operations lead', 'review'], ['Manager account review · Chief of Staff', 'Inspect 3 quoted passages from approved notes', 'Commercial director', 'active'], ['Branch onboarding checklist draft', 'Revision requested on scope wording', 'Branch manager', 'active'], ['Quarterly wholesale review · v2', 'Human acceptance recorded', 'Commercial director', 'complete']], activity: ['Briefed with approved account notes (extractive, no web guessing)', 'Cited passages checked; manager requested scope revision', 'Human acceptance clicked; Delivery brief downloaded for handover.js'], callout: 'Extractive evidence, human revision, explicit acceptance.', detail: 'Prepare extractive briefs directly from approved source documents with quoted citations, run revision rounds, and confirm human acceptance before downloading Delivery instructions.' },
  marketing: { heading: 'See what your marketing turns into.', subtitle: 'Synthetic Campaign Outcomes dashboard: browser import of Sales outcomes JSON with all-leads conversion denominator.', metrics: [['3', 'Source campaigns + Unattributed'], ['18', 'Imported leads (0 duplicates)'], ['4', 'Won deals attributed']], columns: ['Source campaign', 'Funnel: Leads → Qualified → Attended → Won', 'Lead-to-win conversion', 'Status'], rows: [['Unattributed prospects (no campaign recorded)', '4 leads · 2 qualified · 1 attended · 0 won', 'Needs source review (0.0%)', 'review'], ['Q4 Electrical Wholesale Briefing', '8 leads · 5 qualified · 4 attended · 2 won', '25.0% (2 / 8 all leads)', 'active'], ['Regional Branch Manager Roundtable', '6 leads · 4 qualified · 3 attended · 2 won', '33.3% (2 / 6 all leads)', 'active'], ['Duplicate prospect ID check (browser import)', '0 duplicate IDs · file validated', 'Verified clean import', 'complete']], activity: ['Sales & Intelligence outcomes JSON read in browser', 'Lead-to-win calculated using all campaign leads as denominator', 'Unattributed prospects preserved; duplicate ID check passed'], callout: 'Compare lead volume with real sales outcomes.', detail: 'Import Sales outcomes JSON in the browser to compare leads, qualified leads, attended meetings and wins by campaign, while keeping Unattributed prospects visible.' }
};
const statusText = { review: 'Needs review', active: 'In progress', complete: 'Complete' };

// Early Signature Visuals for each of the 7 platforms (Section 6 table)
function signatureVisual(g) { return productScreenshot(g.id); }

// Guided 3-Scenario Product Demo (Monkeytype-inspired single clear action + immediate feedback + reset)
export function guidedScenarioDemo() {
  return `<section class="wrap guided-demo-section" id="guided-demo" data-guided-demo aria-labelledby="guided-demo-heading">
    <div class="section-head">
      <div>
        ${label('GUIDED PRODUCT DEMO · THREE INTERACTIVE SCENARIOS')}
        <h2 id="guided-demo-heading">Try three real workflows<br><em>in one click each.</em></h2>
      </div>
      <div>
        <p>Select a scenario below, trigger the primary action and see how the workspace state updates immediately. Uses local sample data in your browser — never calls live providers or alters real records.</p>
      </div>
    </div>
    <div class="guided-workbench">
      <div class="demo-disclosure">
        <span class="demo-dot" aria-hidden="true"></span>
        <strong>ILLUSTRATIVE GUIDED DEMO (SAMPLE DATA)</strong>
        <span>One clear action per step · Immediate state feedback · Keyboard &amp; touch accessible</span>
      </div>
      <div class="scenario-tablist" role="tablist" aria-label="Three guided product scenarios">
        <button type="button" role="tab" id="scen-tab-enquiry" aria-selected="true" aria-controls="scen-panel-enquiry" tabindex="0" data-scenario-tab="enquiry">
          <span class="scen-num">SCENARIO 01 · COMMUNICATIONS</span>
          <strong>Handle an enquiry</strong>
          <small>Assign an owner &amp; callback time</small>
        </button>
        <button type="button" role="tab" id="scen-tab-quote" aria-selected="false" aria-controls="scen-panel-quote" tabindex="-1" data-scenario-tab="quote">
          <span class="scen-num">SCENARIO 02 · SALES &amp; INTELLIGENCE</span>
          <strong>Follow up a quote</strong>
          <small>Record outcome on overdue Quote #Q-104</small>
        </button>
        <button type="button" role="tab" id="scen-tab-handover" aria-selected="false" aria-controls="scen-panel-handover" tabindex="-1" data-scenario-tab="handover">
          <span class="scen-num">SCENARIO 03 · BUSINESS DELIVERY</span>
          <strong>Hand over a won deal</strong>
          <small>Confirm owner, scope &amp; onboarding record</small>
        </button>
      </div>

      <!-- Scenario 1: Handle an enquiry -->
      <section role="tabpanel" id="scen-panel-enquiry" aria-labelledby="scen-tab-enquiry" class="scenario-panel" data-scenario-panel="enquiry" data-complete-message="Sample enquiry ENQ-402 assigned to Sarah Jenkins with a 14:00 callback. Needs Attention unassigned count reduced from 2 to 1." data-reset-message="Handle an enquiry scenario reset to unassigned sample state.">
        <div class="scenario-top-bar">
          <div>
            <span class="scenario-step-badge" data-scenario-state-badge>Step 1 of 1 · Ready for your action</span>
            <h3>Handle an unassigned customer enquiry in Communications</h3>
          </div>
          <div class="scenario-metric-pill">
            <span>Needs Attention unassigned count:</span>
            <strong data-scenario-counter data-initial-count="2 unassigned" data-updated-count="1 unassigned (updated)">2 unassigned</strong>
          </div>
        </div>
        <div class="scenario-stage" data-scenario-before>
          <div class="scenario-record-card">
            <span class="sig-flag warn">Unassigned · Waiting 14 mins</span>
            <h4>Ref ENQ-402 · Apex M&amp;E Contractors (Inbound Call &amp; Trade Chat)</h4>
            <p>“Need urgent confirmation on 3-phase distribution board stock and trade account delivery for Monday morning.”</p>
            <div class="scenario-meta-row">
              <span><strong>Current owner:</strong> Unassigned</span>
              <span><strong>Next step:</strong> None recorded</span>
              <span><strong>Sandbox filter:</strong> Excluded from live count</span>
            </div>
          </div>
        </div>
        <div class="scenario-stage scenario-stage-after" data-scenario-after hidden>
          <div class="scenario-record-card resolved">
            <span class="sig-flag ok">Owner Assigned · Callback Scheduled</span>
            <h4>Ref ENQ-402 · Apex M&amp;E Contractors — Assigned to Sarah Jenkins</h4>
            <p>Conversation claimed in the shared inbox. Timed callback scheduled for <strong>Today at 14:00</strong> with approved branch stock notes attached.</p>
            <div class="scenario-meta-row">
              <span><strong>New owner:</strong> Sarah Jenkins (Branch Desk)</span>
              <span><strong>Next action:</strong> Callback due Today 14:00</span>
              <span><strong>Queue status:</strong> Moved from Unassigned to Active</span>
            </div>
          </div>
        </div>
        <p class="sr-only" role="status" aria-live="polite" data-scenario-live>Scenario 1 ready: sample enquiry ENQ-402 is currently unassigned.</p>
        <div class="scenario-controls">
          <button type="button" class="button scenario-action-btn" data-scenario-action>Assign to Sarah Jenkins &amp; schedule 14:00 callback →</button>
          <button type="button" class="button secondary scenario-reset-btn" data-scenario-reset hidden>Reset scenario ↺</button>
          <div class="scenario-links">
            <a class="text-link" href="communications.html">Explore Communications page ↗</a>
            <a class="button secondary" href="contact.html?interest=AI%20services%3A%20Communications">Request a Communications walkthrough ${arrow}</a>
          </div>
        </div>
      </section>

      <!-- Scenario 2: Follow up a quote -->
      <section role="tabpanel" id="scen-panel-quote" aria-labelledby="scen-tab-quote" class="scenario-panel" data-scenario-panel="quote" hidden data-complete-message="Sample Quote #Q-104 recorded as Accepted (Won). Overdue quote reminder cleared from the Sales Action Queue and handover JSON prepared." data-reset-message="Follow up a quote scenario reset to overdue sample state.">
        <div class="scenario-top-bar">
          <div>
            <span class="scenario-step-badge" data-scenario-state-badge>Step 1 of 1 · Ready for your action</span>
            <h3>Follow up an overdue quote in the Sales Action Queue</h3>
          </div>
          <div class="scenario-metric-pill">
            <span>Overdue quotes in Action Queue:</span>
            <strong data-scenario-counter data-initial-count="3 overdue quotes" data-updated-count="2 overdue quotes (1 cleared)">3 overdue quotes</strong>
          </div>
        </div>
        <div class="scenario-stage" data-scenario-before>
          <div class="scenario-record-card">
            <span class="sig-flag warn">Overdue by 5 days · 1 Tracked Quote Limit</span>
            <h4>Quote #Q-104 · Midlands Switchgear Ltd (£28,400)</h4>
            <p>Assessed in Sales &amp; Intelligence with <strong>ICP Fit: High</strong> and <strong>Data Confidence: Verified</strong>. Quote reminder is surfaced at the top of the Sales Action Queue.</p>
            <div class="scenario-meta-row">
              <span><strong>Quote owner:</strong> J. Morton</span>
              <span><strong>Quote status:</strong> Open / Overdue follow-up</span>
              <span><strong>Campaign source:</strong> Q4 Electrical Wholesale Briefing</span>
            </div>
          </div>
        </div>
        <div class="scenario-stage scenario-stage-after" data-scenario-after hidden>
          <div class="scenario-record-card resolved">
            <span class="sig-flag ok">Decision Recorded: Accepted (Won) · Queue Updated</span>
            <h4>Quote #Q-104 · Midlands Switchgear Ltd — Cleared from Overdue Queue</h4>
            <p>Customer acceptance recorded. Overdue quote reminder cleared automatically, win milestone logged for Marketing outcomes, and structured Sales handover JSON (<code>Ref HO-2026-041</code>) prepared for Business Delivery.</p>
            <div class="scenario-meta-row">
              <span><strong>Recorded decision:</strong> Accepted (Won)</span>
              <span><strong>Overdue reminder:</strong> Cleared</span>
              <span><strong>Next step:</strong> Export handover Ref HO-2026-041</span>
            </div>
          </div>
        </div>
        <p class="sr-only" role="status" aria-live="polite" data-scenario-live></p>
        <div class="scenario-controls">
          <button type="button" class="button scenario-action-btn" data-scenario-action>Record quote outcome: Accepted (Won) →</button>
          <button type="button" class="button secondary scenario-reset-btn" data-scenario-reset hidden>Reset scenario ↺</button>
          <div class="scenario-links">
            <a class="text-link" href="sales-intelligence.html">Explore Sales &amp; Intelligence page ↗</a>
            <a class="button secondary" href="contact.html?interest=AI%20services%3A%20Sales%20%26%20Intelligence">Request a Sales &amp; Intelligence walkthrough ${arrow}</a>
          </div>
        </div>
      </section>

      <!-- Scenario 3: Hand over a won deal -->
      <section role="tabpanel" id="scen-panel-handover" aria-labelledby="scen-tab-handover" class="scenario-panel" data-scenario-panel="handover" hidden data-complete-message="Reviewed handover Ref HO-2026-041 confirmed. Owned onboarding record ONB-041 created for Tom Vance starting 18 November, with repeat-import protection active." data-reset-message="Hand over a won deal scenario reset to pending review state.">
        <div class="scenario-top-bar">
          <div>
            <span class="scenario-step-badge" data-scenario-state-badge>Step 1 of 1 · Ready for your action</span>
            <h3>Confirm a won-deal handover in Business Delivery (Pilot)</h3>
          </div>
          <div class="scenario-metric-pill">
            <span>Active onboarding list:</span>
            <strong data-scenario-counter data-initial-count="6 records (1 awaiting confirmation)" data-updated-count="7 records (0 duplicate imports)">6 records (1 awaiting confirmation)</strong>
          </div>
        </div>
        <div class="scenario-stage" data-scenario-before>
          <div class="scenario-record-card">
            <span class="sig-flag warn">Awaiting Won-Deal &amp; Scope Confirmation</span>
            <h4>Handover Ref HO-2026-041 · Midlands Switchgear Ltd</h4>
            <p>Structured Sales handover loaded for operator review. Ready to confirm that the deal is won and scope is agreed, and record the delivery owner and start date.</p>
            <div class="scenario-meta-row">
              <span><strong>Proposed owner:</strong> Tom Vance (Operations Lead)</span>
              <span><strong>Agreed scope:</strong> 3-branch supply &amp; onboarding</span>
              <span><strong>Target start date:</strong> 18 Nov 2026</span>
            </div>
          </div>
        </div>
        <div class="scenario-stage scenario-stage-after" data-scenario-after hidden>
          <div class="scenario-record-card resolved">
            <span class="sig-flag ok">Onboarding Record ONB-041 Created · Repeat-Import Protected</span>
            <h4>ONB-041 · Midlands Switchgear Ltd — Owned by Tom Vance (Starts 18 Nov 2026)</h4>
            <p>Won deal and agreed scope confirmed. Added to the single onboarding list. If <code>Ref HO-2026-041</code> is imported or routed again via Automation, Business Delivery detects the reference and preserves this existing record without creating a duplicate.</p>
            <div class="scenario-meta-row">
              <span><strong>Delivery owner:</strong> Tom Vance</span>
              <span><strong>Start date:</strong> 18 Nov 2026</span>
              <span><strong>Idempotency check:</strong> Ref HO-2026-041 locked (0 duplicates)</span>
            </div>
          </div>
        </div>
        <p class="sr-only" role="status" aria-live="polite" data-scenario-live></p>
        <div class="scenario-controls">
          <button type="button" class="button scenario-action-btn" data-scenario-action>Confirm won deal &amp; create onboarding record →</button>
          <button type="button" class="button secondary scenario-reset-btn" data-scenario-reset hidden>Reset scenario ↺</button>
          <div class="scenario-links">
            <a class="text-link" href="business-delivery.html">Explore Business Delivery page ↗</a>
            <a class="button secondary" href="contact.html?interest=AI%20services%3A%20Business%20Delivery">Request a Business Delivery walkthrough ${arrow}</a>
          </div>
        </div>
      </section>
    </div>
  </section>`;
}

function statusMix(rows) {
  const counts = { review: 0, active: 0, complete: 0 };
  rows.forEach(r => counts[r[3]]++);
  const total = rows.length;
  return `<div class="status-mix" aria-label="Sample status mix: ${Object.entries(counts).map(([k, v]) => `${v} ${statusText[k].toLowerCase()}`).join(', ')}"><div class="status-mix-bar" aria-hidden="true">${Object.entries(counts).filter(([, v]) => v).map(([k, v]) => `<span class="mix-${k}" style="width:${(v / total) * 100}%"></span>`).join('')}</div><ul aria-hidden="true">${Object.entries(counts).map(([k, v]) => `<li><span class="mix-dot mix-${k}"></span>${statusText[k]} <strong>${v}</strong></li>`).join('')}</ul></div>`;
}

function panel(g, selected) {
  const d = previewData[g.id];
  const rows = d.rows.map(r => `<tr data-preview-row data-state="${r[3]}"><td data-label="${esc(d.columns[0])}">${esc(r[0])}</td><td data-label="${esc(d.columns[1])}">${esc(r[1])}</td><td data-label="${esc(d.columns[2])}">${esc(r[2])}</td><td data-label="${esc(d.columns[3])}"><span class="status-badge status-${r[3]}">${statusText[r[3]]}</span></td></tr>`).join('');
  return `<section role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}" tabindex="0" ${g.id === selected ? '' : 'hidden'} data-service-panel="${g.id}"><header class="workspace-heading"><div><p>${upper(g.title)} · INTERACTIVE PRODUCT DEMO (SAMPLE DATA)</p><h3>${esc(d.heading)}</h3><span>${esc(d.subtitle)}</span></div><span class="preview-pill">Synthetic sample data</span></header><div class="workspace-metrics">${d.metrics.map(([v, t]) => `<article><span>${t}</span><strong>${v}</strong><small>Synthetic figure</small></article>`).join('')}</div><div class="workspace-content-grid"><div class="workspace-work"><div class="workspace-card-title"><div><h4>Work that needs attention</h4><span>Illustrative work queue</span></div>${statusMix(d.rows)}</div><div class="workspace-filters"><label><span>Search sample items</span><input type="search" placeholder="Search this preview…" autocomplete="off" data-workspace-search></label><label><span>Status</span><select data-workspace-filter><option value="all">All statuses</option><option value="review">Needs review</option><option value="active">In progress</option><option value="complete">Complete</option></select></label><button type="button" class="workspace-reset" data-workspace-reset hidden>Clear</button></div><div class="workspace-table-scroll"><table><caption class="sr-only">${esc(g.title)} sample work queue</caption><thead><tr>${d.columns.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div><div class="workspace-empty" hidden data-preview-empty><strong>No sample items match.</strong><span>Try a different search term or status.</span><button type="button" data-workspace-reset>Clear search and filter</button></div><p class="workspace-result-count" role="status" aria-live="polite" data-preview-count>Showing ${d.rows.length} of ${d.rows.length} sample items</p></div><aside class="workspace-activity" aria-label="Sample activity"><div class="workspace-card-title"><div><h4>Recent activity</h4><span>Illustrative timeline</span></div></div><ol>${d.activity.map((a, i) => `<li><span class="timeline-dot" aria-hidden="true"></span><strong>${a}</strong><small>Sample step ${i + 1}</small></li>`).join('')}</ol><div class="workspace-insight"><span>EXAMPLE IN PRACTICE</span><h4>${d.callout}</h4><p>${esc(g.practicalExample)}</p></div></aside></div><div class="workspace-bottom"><span>Sample-data product demo · not connected to live customer records or external providers.</span><a class="workspace-enquire" href="${ask(g)}">Request a ${esc(g.title)} walkthrough ${arrow}</a></div></section>`;
}

export function dashboardPreview(selected = 'crm', compact = false) {
  const current = aiGroups.find(g => g.id === selected) || aiGroups[0];
  return `<section class="workspace-demo ${compact ? 'workspace-compact' : ''}" data-workspace data-initial-service="${current.id}" aria-label="Power-Up interactive product demo"><div class="demo-disclosure"><span class="demo-dot" aria-hidden="true"></span><strong>SAMPLE DATA NOTICE:</strong><span>This interactive product demo uses synthetic sample data to illustrate how each workflow is organised. It runs in your browser and is not connected to live records.</span></div><div class="workspace-layout"><aside class="workspace-sidebar"><a class="workspace-wordmark" href="dashboard.html">POWER-UP<span>INTERACTIVE PRODUCT DEMO</span></a><p class="workspace-nav-label" id="workspace-nav-label">1. SELECT A PLATFORM</p><div class="workspace-tabs" role="tablist" aria-labelledby="workspace-nav-label" aria-orientation="vertical">${aiGroups.map(g => `<button type="button" role="tab" id="tab-${g.id}" aria-selected="${g.id === current.id}" aria-controls="panel-${g.id}" tabindex="${g.id === current.id ? '0' : '-1'}" data-service-tab="${g.id}">${icon(g, 22)}<span>${esc(g.title)}</span></button>`).join('')}</div><div class="workspace-sidebar-note"><span>How to use this demo</span><p>Click a platform above, filter by status or search term, then use the button at the bottom of the panel to request a live walkthrough.</p></div></aside><div class="workspace-main"><div class="workspace-toolbar"><span class="workspace-crumb">Interactive product demo / <strong data-workspace-title>${esc(current.title)}</strong></span><span class="workspace-toolbar-right"><span class="preview-mode">Sample data</span><span class="demo-avatar" role="img" aria-label="Example team">PT</span></span></div>${aiGroups.map(g => panel(g, current.id)).join('')}</div></div></section>`;
}

const serviceCard = g => `<article class="service-directory-card" id="${g.id}"><a class="service-card-main" href="${serviceSlugs[g.id]}.html"><span class="service-brand-icon">${icon(g, 34)}</span><span class="platform-status-pill">${esc(g.statusBadge)}</span><h3>${esc(g.title)}</h3><p class="service-promise">${g.short}</p><p>${g.cardCopy}</p><p style="font-size:12.5px;color:#1b2429;background:#f8f7f3;padding:10px 12px;border-left:3px solid #edc752;border-radius:4px;margin-top:10px"><strong>What it helps you do:</strong> ${esc(g.actionSummary)}</p><span class="service-explore">Explore ${esc(g.title)} ${arrow}</span></a><a class="service-preview-link" href="dashboard.html?service=${g.id}">Open in interactive product demo ${arrow}</a></article>`;
const directoryCta = () => `<article class="service-directory-cta"><div>${label('TAILORED DEMO')}<h3>Want to see a specific workflow?</h3><p>Tell us whether you are looking at local Market Intelligence, Prospect Intelligence review, customer enquiries, CRM renewals, overdue quotes, delivery handovers or campaign outcomes — we will walk you through what runs today.</p></div><div class="actions">${btn('Request a demo', walkthrough)}${btn('Interactive product demo', 'dashboard.html', true)}</div></article>`;
const directory = () => `<section class="service-directory" aria-labelledby="service-directory-heading"><div class="wrap"><div class="section-head"><div>${label('SEVEN CONNECTED PLATFORMS')}<h2 id="service-directory-heading">Choose a platform<br><em>to explore.</em></h2></div><div><p>Every platform card below includes its customer benefit, a concrete example of what it helps someone do, and a link to its full detail page and signature preview.</p></div></div><div class="service-directory-grid">${aiGroups.map(serviceCard).join('')}${directoryCta()}</div></div></section>${guidedScenarioDemo()}`;

export const dashboardPage = `<section class="preview-page-intro"><div class="wrap preview-intro-grid"><div>${label('POWER-UP TALENT | INTERACTIVE PRODUCT DEMO')}<h1>Interactive product demo<br><em>across all seven platforms.</em></h1><p>Try our guided three-scenario walkthrough first, or explore the full seven-platform queue selector below.</p></div><ul class="preview-hints" aria-label="What you can click in this demo"><li><strong>1. Guided scenarios</strong><span>Step through Handle an enquiry, Follow up a quote and Hand over a won deal with one-click feedback and reset.</span></li><li><strong>2. Platform queues</strong><span>Switch between all 7 platforms, search sample items or filter by status.</span></li><li><strong>3. Request a walkthrough</strong><span>Use the walkthrough CTA on any scenario or panel to open Contact with that platform pre-selected.</span></li></ul></div><div class="wrap"><p class="preview-scope"><strong>Sample data disclosure:</strong> All companies, figures, quotes and activity items shown on this page are synthetic sample data created to illustrate the product layouts. Interacting with this demo does not connect to a database or send live messages.</p></div></section>${guidedScenarioDemo()}<div class="dashboard-page-container">${dashboardPreview()}</div><section class="wrap cta"><div>${label('WANT A LIVE WALKTHROUGH?')}<h2>See the workflow<br>with your own scenarios.</h2><p>Request a walkthrough of any platform or return to the Platforms hub to see how all seven connect from first enquiry to delivery.</p></div><div class="actions">${btn('Request a walkthrough', walkthrough)}${btn('Back to Platforms hub', 'platforms.html', true)}</div></section>`;

function renderSalesIntelligenceDeepDive(g) {
  if (!g.marketIntelligence || !g.prospectIntelligence) return '';
  return `<section class="wrap section" id="intelligence-deep-dive" aria-labelledby="intel-deep-heading"><div class="section-head"><div>${label('MARKET &amp; PROSPECT INTELLIGENCE')}<h2 id="intel-deep-heading">Local public data meets<br><em>human-reviewed evidence.</em></h2></div><p>Implemented and tested on the Market &amp; Prospect Intelligence feature branch using live public UK sources and labelled sample fixtures — without paid API keys or AI credits.</p></div><div class="crm-split-grid"><article class="crm-workspace-card" id="market-intelligence"><span class="platform-status-pill">Working pilot · Public UK sources</span><h3>${esc(g.marketIntelligence.heading)}</h3><ul class="workspace-feature-list">${g.marketIntelligence.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><div class="in-practice" style="margin-top:18px"><span>${esc(g.marketIntelligence.exampleTitle)}</span><p>${esc(g.marketIntelligence.exampleBody)}</p></div></article><article class="crm-workspace-card" id="prospect-intelligence"><span class="platform-status-pill">Working pilot · Feature branch</span><h3>${esc(g.prospectIntelligence.heading)}</h3><ul class="workspace-feature-list">${g.prospectIntelligence.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><div class="in-practice" style="margin-top:18px"><span>${esc(g.prospectIntelligence.exampleTitle)}</span><p>${esc(g.prospectIntelligence.exampleBody)}</p></div></article></div><div style="margin-top:32px">${productScreenshot('actionQueue')}</div></section>`;
}

function renderFeatureInventory(g) {
  if (g.workspaces) {
    return `<section class="service-included-band" aria-labelledby="included-heading"><div class="wrap"><div class="section-head"><div>${label('TWO WORKSPACES · SEPARATE DATA ACCESS')}<h2 id="included-heading">Business CRM and<br><em>Personal CRM.</em></h2></div><p>Run the team Business CRM workspace, the private Personal CRM workspace, or keep each on its own separate access and data boundary.</p></div><div class="crm-split-grid">${g.workspaces.map(w => `<article class="crm-workspace-card"><span class="platform-status-pill">${esc(w.badge)}</span><h3>${esc(w.name)}</h3><p>${esc(w.summary)}</p><ul class="workspace-feature-list">${w.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></article>`).join('')}</div><div class="boundary-callout" role="note"><strong>Separate access &amp; data boundary:</strong> ${esc(g.boundaryNote)}</div></div></section>`;
  }
  return `<section class="service-included-band" aria-labelledby="included-heading"><div class="wrap"><div class="section-head"><div>${label('CAPABILITIES &amp; WORKFLOWS')}<h2 id="included-heading">What ${esc(g.title)}<br><em>lets your team do.</em></h2></div><p>${esc(g.extra)}</p></div><div class="feature-group-grid">${g.featureGroups.map(([title, desc], idx) => `<article class="feature-group-card"><span>0${idx + 1}</span><h3>${esc(title)}</h3><p>${esc(desc)}</p></article>`).join('')}</div></div></section>${renderSalesIntelligenceDeepDive(g)}`;
}

function renderExampleAndAvailability(g) {
  return `<section class="wrap in-dev-section" aria-labelledby="indev-heading"><div class="in-dev-card"><div class="in-dev-intro">${label('WORKED EXAMPLE &amp; HONEST STATUS')}<h2 id="indev-heading">In practice &amp;<br><em>verified scope.</em></h2><div class="in-practice" style="margin-top:16px"><span>CONCRETE EXAMPLE</span><p>${esc(g.practicalExample)}</p></div><p style="margin-top:14px;font-size:13px">See how ${esc(g.title)} connects across the suite in our <a href="platforms.html#connected-journey" style="color:#ffe000;text-decoration:underline">seven-step opportunity-to-delivery route ↗</a>.</p></div><div><h3 style="color:#ffffff;font-size:17px;margin:0 0 12px">Status &amp; boundaries</h3><ul class="in-dev-list"><li><span>Working pilot / Available in a demo</span><p>${esc(g.whatYouCanTry)}</p></li>${g.inDevelopment.map(item => `<li><span>Planned / Configured connection required</span><p>${esc(item)}</p></li>`).join('')}</ul></div></div></section>`;
}

function servicePage(g, index) {
  const d = previewData[g.id];
  const related = (g.relatedIds || []).map(rid => aiGroups.find(x => x.id === rid)).filter(Boolean);
  return `<section class="service-page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="platforms.html">Seven Services</a><span aria-hidden="true">/</span><span aria-current="page">${esc(g.title)}</span></nav><div class="service-hero-grid"><div>${label('POWER-UP TALENT | ' + upper(g.title))}<h1>${esc(g.title)} — ${g.short}</h1><p>${esc(g.plainBenefit)}</p><div class="actions">${btn('Request a demo', ask(g))}${btn('Interactive product demo', `dashboard.html?service=${g.id}`, true)}</div><span class="service-hero-note">${esc(g.statusBadge)}</span></div><aside class="service-outcome" aria-label="Who it is for and what is available"><span class="service-brand-icon">${icon(g, 34)}</span><p>WHO IT’S FOR</p><h2 style="font-size:18px;line-height:1.45">${esc(g.roles)}</h2><p style="margin-top:14px">STATUS &amp; WHAT YOU CAN REVIEW</p><span style="display:block;color:rgba(255,255,255,.88);font-size:13.5px;line-height:1.55">${esc(g.whatYouCanTry)}</span></aside></div><div class="signature-visual-wrap">${signatureVisual(g)}</div></div></section>${renderFeatureInventory(g)}${g.id === 'crm' ? `<section class="wrap captured-personal"><h2>Personal CRM — its own private workspace.</h2>${productScreenshot('personal')}</section>` : ''}${renderExampleAndAvailability(g)}<section class="wrap dashboard-feature" id="service-dashboard" aria-labelledby="service-dashboard-heading"><div class="section-head"><div>${label('INTERACTIVE PRODUCT DEMO · ' + upper(g.title))}<h2 id="service-dashboard-heading">${d.callout}</h2></div><p>Explore the sample-data demo for ${esc(g.title)} below, or <a href="dashboard.html?service=${g.id}" style="text-decoration:underline;font-weight:700">open the full interactive product demo ↗</a>.</p></div>${dashboardPreview(g.id)}</section><section class="wrap related-services" aria-labelledby="related-heading"><div class="related-head"><div>${label('CONNECTED WORKFLOWS')}<h2 id="related-heading">Related services &amp; full suite route</h2></div><a class="text-link" href="platforms.html#connected-journey">View full 7-step journey on the Platforms hub ↗</a></div><div class="crm-split-grid" style="margin-top:18px">${related.map(o => `<article class="crm-workspace-card"><span class="service-brand-icon">${icon(o, 28)}</span><h3><a href="${serviceSlugs[o.id]}.html" style="text-decoration:none;color:inherit">${esc(o.title)} — ${esc(o.short)}</a></h3><p>${esc(o.cardCopy)}</p><p style="margin-top:12px"><a class="text-link" href="${serviceSlugs[o.id]}.html">Explore ${esc(o.title)} ↗</a></p></article>`).join('')}</div></section><section class="wrap cta"><div>${label('REQUEST A DEMO')}<h2>See ${esc(g.title)}<br>around your workflow.</h2><p>Open our enquiry form with <strong>AI services: ${esc(g.title)}</strong> pre-selected so you can tell us what you want to review or pilot.</p></div><div class="actions">${btn('Request a demo', ask(g))}${btn('All 7 services', 'platforms.html', true)}</div></section>`;
}

export const servicePages = aiGroups.map((g, i) => [serviceSlugs[g.id], `${g.title} — ${g.short.replace(/\.$/, '')}`, `${g.plainBenefit}`, servicePage(g, i)]);

export function professionalPage(id, html) {
  if (['intelligence', 'platforms'].includes(id)) {
    html = html.replace(/<section class="ai-overview"[\s\S]*?<\/section>/, directory());
  }
  return html;
}

export function professionalShell(html, id) {
  const isPlatformRoute = ['platforms', 'intelligence', ...Object.values(serviceSlugs)].includes(id);
  const serviceNavigation = `<details class="service-menu"><summary${isPlatformRoute ? ' aria-current="page"' : ''}>AI &amp; Business Platforms <span aria-hidden="true" class="chev">⌄</span></summary><div class="service-menu-panel"><a class="service-menu-overview" href="platforms.html">Platforms hub (all 7) ↗</a>${aiGroups.map(g => `<a href="${serviceSlugs[g.id]}.html"${id === serviceSlugs[g.id] ? ' aria-current="page"' : ''}>${icon(g)}<span>${esc(g.title)}</span></a>`).join('')}<a class="service-menu-overview" href="dashboard.html">Interactive product demo ↗</a></div></details>`;
  const footerPlatforms = `<div><h3>AI &amp; Business Platforms</h3><a href="platforms.html">Platforms hub (Overview)</a>${aiGroups.map(g => `<a href="${serviceSlugs[g.id]}.html">${esc(g.title)}</a>`).join('')}<a href="dashboard.html">Interactive product demo</a></div>`;
  if (id === 'platforms' || id === 'intelligence') html = html.replace('</main>', selectedProductScreens() + '</main>');
  return html.replace(/(<nav id="navigation"[^>]*>)([\s\S]*?)(<\/nav>)/, (_, start, links, end) => start + links.replace(/<a\s+(?:aria-current="page" )?href="(?:intelligence|platforms)\.html">AI (?:Business Services|&amp; Business Platforms)<\/a>/, serviceNavigation) + end)
    .replace('</head>', '<link rel="stylesheet" href="product-screenshots.css?v=1"><link rel="stylesheet" href="professional.css?v=14.0"><script src="dashboard-preview.js?v=14.0" defer></script></head>')
    .replace(/href="styles\.css\?v=[\d.]+"/, 'href="styles.css?v=14.0"')
    .replace(/href="ai-services\.css\?v=[\d.]+"/, 'href="ai-services.css?v=14.0"')
    .replace('<h3>Explore</h3>', '<h3>Explore</h3><a href="check.html">Territory exclusivity review</a>')
    .replace('<div><h3>Start a conversation</h3>', footerPlatforms + '<div><h3>Start a conversation</h3>');
}
