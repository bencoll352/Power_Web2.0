import { ico } from './icons.mjs';
import { productScreenshot, selectedProductScreens } from './suite-screenshots.mjs';
import { aiGroups, connectedJourneyBand } from './site-offer.mjs';

// Shared British industrial editorial presentation: seven AI & Business Platforms hub,
// early signature visuals, four-scenario guided product demo and 7-platform workspace explorer.
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
export const serviceSlugs = { crm: 'crm', communications: 'communications', sales: 'sales-intelligence', delivery: 'business-delivery', automation: 'automation', 'ai-team': 'ai-team', marketing: 'marketing-social-media' };
const ask = g => `/contact?interest=${encodeURIComponent('AI services: ' + g.title)}`;
const walkthrough = '/contact?interest=AI%20services%20walkthrough';
const icon = (g, size = 28) => `<img src="assets/services-v2/${g.id}.svg" width="${size}" height="${size}" alt="" loading="lazy">`;
const label = t => `<p class="eyebrow"><span></span>${t}</p>`;
const arrow = '<span aria-hidden="true">↗</span>';
const btn = (text, href, secondary = false) => `<a class="button ${secondary ? 'secondary' : ''}" href="${href}">${text}${arrow}</a>`;
const upper = t => esc(t.toUpperCase());

const previewData = {
  crm: { heading: 'Know who needs your attention.', subtitle: 'Sample-data demo of Power CRM Service Desk & Business CRM: owner briefing with overdue cases, missing stage evidence, approval queue, mobile jobs pipeline and separate Personal CRM workspace.', metrics: [['3', 'Overdue cases'], ['2', 'Missing evidence'], ['4', 'Drafts to review']], columns: ['Case / pipeline item', 'Owner briefing & next action', 'Named owner', 'Status'], rows: [['INV-DEMO-42 · Overdue invoice case', 'Overdue · Open source case, record portal check & review draft', 'Alex Morgan', 'review'], ['Mobile jobs pipeline · Commercial Lead', 'Stage move: Vetting -> Submitted (visible confirmation)', 'Ben Colliss', 'active'], ['Apex Commercial Group · Account brief', 'Sourced pre-meeting account brief (Tested locally)', 'Account team', 'active'], ['Personal CRM (Private workspace)', 'Private reconnect cadence · Separate access & data', 'Ben Colliss', 'complete']], activity: ['Owner-only Service Desk briefing flagged overdue cases and missing stage evidence', 'Mobile jobs pipeline added candidate directly to Vetting and confirmed move to Submitted', 'Personal CRM kept strictly isolated from shared Business CRM records'], callout: 'Owner briefing, mobile recruitment pipeline and separate Business & Personal workspaces.', detail: 'See overdue cases, missing stage evidence and drafts awaiting review in the owner-only Power CRM Service Desk briefing, move candidates across the mobile pipeline, and keep Business and Personal workspaces separate.' },
  communications: { heading: 'Give every customer enquiry a next step.', subtitle: 'Sample-data demo of Communications: shared inbox with source-referenced reply drafts, weak-evidence escalation, human takeover and the locally tested Needs human reply filter.', metrics: [['2', 'Needs human reply'], ['2', 'Drafts with citations'], ['1', 'Escalated (weak evidence)']], columns: ['Conversation / case', 'Shared inbox triage & evidence', 'Owner', 'Status'], rows: [['COM-9F42 · Scope & pricing question', 'Needs human reply · Saved draft with source ref awaiting approval', 'Ben Colliss', 'review'], ['COM-8A10 · Reopened client thread', 'Needs human reply · Escalated due to weak source evidence', 'Customer team', 'active'], ['Website chat · Unassigned enquiry', 'Needs human reply · Claim owner & open conversation directly', 'Unassigned', 'active'], ['Approved knowledge reply · Sample', 'Human takeover completed & response approved', 'Reception team', 'complete']], activity: ['Draft generated from approved company knowledge with linked source references', 'Weak-evidence thread escalated automatically for human takeover', 'Needs human reply filter grouped waiting, reopened and unowned threads together'], callout: 'Source-referenced drafts, weak-evidence escalation and the Needs human reply queue.', detail: 'Review reply drafts grounded in approved knowledge with source references, escalate weak-evidence threads to a person, and focus on conversations using the Needs human reply filter.' },
  sales: { heading: 'See which opportunities deserve your next move.', subtitle: 'Sample-data demo of Sales & Intelligence: Opportunity Radar hiring signals, UK Planning Data & Find a Tender search, 14-day stale flags and Delivery proposals for recorded wins.', metrics: [['2', 'Opportunity Radar signals'], ['2', 'Untouched 14+ days'], ['2', 'Delivery proposals ready']], columns: ['Opportunity / signal', 'Evidence, follow-up & proposal status', 'Owner', 'Status'], rows: [['Opportunity Radar · Regional hiring signal', 'Dated source & ranking reason · Accept to add follow-up on matching prospect', 'Hannah Brooks', 'review'], ['NorthGrid Commercial (Fit: 82/100)', 'Flagged: 14 days without record update · Follow up', 'Hannah Brooks', 'active'], ['Apex Group (Recorded win · Scope agreed)', 'Delivery proposal created (owner + start date)', 'Claire Bennett', 'active'], ['Market Intelligence · UK Search', 'Planning Data & Find a Tender source records inspected', 'Sales team', 'complete']], activity: ['Opportunity Radar surfaced dated hiring evidence with ranking reason and source link', 'Accepted signal created a dated follow-up on the matching existing prospect', 'Delivery proposal prepared for recorded win with agreed scope, owner and start date'], callout: 'Turn Opportunity Radar hiring signals and UK public data into owned follow-ups.', detail: 'Review dated hiring evidence in Opportunity Radar and create a dated follow-up on a matching prospect, search UK Planning Data and Find a Tender, spot 14-day stale opportunities and prepare Delivery proposals.' },
  delivery: { heading: 'Start delivery with a clear brief.', subtitle: 'Sample-data demo of Business Delivery: locally tested project plan (deliverables, evidence progress & client feedback) alongside the Live in Power CRM invoice case workflow.', metrics: [['6', 'Active project plans'], ['1', 'Overdue invoice check'], ['0', 'Duplicate retries']], columns: ['Delivery / invoice record', 'Deliverables, evidence & follow-up', 'Delivery owner', 'Status'], rows: [['INV-DEMO-42 · Overdue invoice case', 'Live in Power CRM · Record portal status & send draft to Personal AI Team', 'Alex Morgan', 'review'], ['ONB-2026-041 · Meridian project plan', 'Agreed deliverables & evidence gaps tracked · Structured client feedback', 'Sarah Jenkins', 'active'], ['ONB-2026-039 · Sample Operations Ltd', 'Suggested next action: gather signed kick-off evidence', 'Operations owner', 'active'], ['ONB-2026-031 · Retried approved proposal', 'Stable reference preserved (0 duplicate records)', 'Operations owner', 'complete']], activity: ['Project plan tracked agreed deliverables, owners, due dates and evidence gaps', 'Overdue invoice portal check recorded manually with source link and timestamp', 'Structured client feedback captured alongside evidence-linked milestones'], callout: 'Evidence-linked project plans, structured client feedback and auditable invoice checks.', detail: 'Track agreed deliverables, evidence progress and structured client feedback in the locally tested project plan, and manage overdue invoice checks and follow-up drafts in Power CRM.' },
  automation: { heading: 'Make repeatable work easier to run and review.', subtitle: 'Sample-data demo of Automation Studio & Power CRM briefing: exact-action approval queue, scheduled attention briefings, individual attempt history and safe retry timing.', metrics: [['4', 'Studio approval queue'], ['1', 'Uncertain receipt'], ['3', 'Confirmed attempts']], columns: ['Proposal / handover case', 'Studio approval, attempt history & retry', 'Approver', 'Status'], rows: [['handover-northgrid-commercial · Attempt #2', 'Uncertain outcome · Receipt check needed before retry', 'Claire Davies', 'review'], ['handover-meridian-2026-q4 · Scope edited', 'Changed scope invalidated prior sign-off · Fresh approval needed', 'Ben Colliss', 'active'], ['Scheduled attention briefing · Power CRM', 'Overdue cases & missing evidence surfaced before deadlines slip', 'Ben Colliss', 'active'], ['handover-pharos-2026 · Attempt #1', 'Confirmed outcome receipt · Single Delivery record verified', 'Operations lead', 'complete']], activity: ['Studio approval queue verified exact proposal digest before execution', 'Individual attempt history recorded failure reason and safe retry timing', 'Uncertain outcome flagged for receipt check before any repeat attempt'], callout: 'Studio approval queue, attempt history, retry timing and scheduled briefings.', detail: 'Approve exact actions in Automation Studio, inspect individual attempt history and retry eligibility, check uncertain outcomes, and run scheduled attention briefings in Power CRM.' },
  'ai-team': { heading: 'Give your team more capacity for research and preparation.', subtitle: 'Sample-data demo of Power-Up AI Team: approved source excerpts turned into cited briefs, human revisions and case-linked next-action drafts awaiting staff approval.', metrics: [['3', 'Case-linked drafts'], ['2', 'Cited briefs in review'], ['4', 'Saved source excerpts']], columns: ['Brief / case-linked draft', 'Source citations & human revision', 'Reviewer', 'Status'], rows: [['INV-DEMO-42 · Personal AI Team draft', 'Live in Power CRM · Case-linked invoice follow-up awaiting human approval', 'Alex Morgan', 'review'], ['Cited research brief · Northfield Group', 'Built from approved source excerpts · Human revision saved', 'Commercial lead', 'active'], ['Account Research · Unresolved finding #4', 'Paused mid-session · Resumed with original source citations', 'Research analyst', 'active'], ['Executive brief #12 · Approved', 'Human acceptance recorded against saved source excerpts', 'Managing director', 'complete']], activity: ['Extractive brief compiled from approved source excerpts with inline citations', 'Human revision preserved source links and produced a case-linked follow-up draft', 'Live CRM draft review kept final sign-off strictly under owner control'], callout: 'Approved sources -> cited briefs -> human revision -> case-linked drafts.', detail: 'Turn approved source excerpts into cited briefs, revise them with human judgement and carry decisions into case-linked next-action drafts awaiting staff review.' },
  marketing: { heading: 'See what your marketing turns into.', subtitle: 'Sample-data demo of Marketing & Social Media: browser-local loop from cited competitor/trend observation -> approved test -> social/email/article copy -> campaign outcome comparison.', metrics: [['2', 'Active campaign tests'], ['£37.3k', 'Recorded contribution'], ['1', 'Missing figure (Unknown)']], columns: ['Campaign ID & test', 'Observation, copy & imported outcomes', 'Data completeness', 'Status'], rows: [['CMP-Q4-REG · Competitor trend test', 'Proposal awaiting approval · Missing finance cost kept as Unknown', 'Finance pending', 'review'], ['CMP-EXEC-RT · Executive Roundtable', 'Approved test · Social post, email & article outline repurposed on same ID', 'Verified 2-wk delta', 'active'], ['CMP-REF-02 · Direct Referral Campaign', 'Target vs imported outcomes compared (cost/meeting & cost/win)', 'Verified 2-wk delta', 'active'], ['Unattributed Leads · Reconciled', '4 leads kept visible (duplicate IDs rejected)', '0 duplicate IDs', 'complete']], activity: ['Cited competitor/trend observation turned into a reviewable campaign test proposal', 'Approved test generated social post, email and article outline under the same campaign ID', 'Compared target against imported outcomes while keeping missing figures as Unknown'], callout: 'Research-led campaign tests, copy repurposing and honest outcome tracking on one ID.', detail: 'Log a cited competitor or trend observation, approve a campaign test, draft and repurpose social posts, emails and article outlines, and compare outcomes on the same campaign record.' }
};
const statusText = { review: 'Needs review', active: 'In progress', complete: 'Complete' };

// Early Signature Visuals for each of the 7 platforms (Section 6 table)
function signatureVisual(g) { return productScreenshot(g.id); }

// Guided sample-data workflows
export function guidedScenarioDemo() {
  return `<section class="wrap guided-demo-section" id="guided-demo" data-guided-demo aria-labelledby="guided-demo-heading">
    <div class="section-head">
      <div>
        ${label('SAMPLE-DATA DEMO · FOUR INTERACTIVE SCENARIOS')}
        <h2 id="guided-demo-heading">Try four workflows<br><em>with sample data.</em></h2>
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
      <div class="scenario-tablist" role="tablist" aria-label="Four guided product scenarios">
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
        <button type="button" role="tab" id="scen-tab-invoice" aria-selected="false" aria-controls="scen-panel-invoice" tabindex="-1" data-scenario-tab="invoice">
          <span class="scen-num">SCENARIO 04 · POWER CRM</span>
          <strong>Review an overdue invoice</strong>
          <small>Record evidence and review a draft</small>
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
            <h4>Ref ENQ-402 · Apex Commercial Group (Inbound Call &amp; Client Chat)</h4>
            <p>“Need urgent confirmation on project delivery schedule and client account onboarding for Monday morning.”</p>
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
            <h4>Ref ENQ-402 · Apex Commercial Group — Assigned to Sarah Jenkins</h4>
            <p>Conversation claimed in the shared inbox. Timed callback scheduled for <strong>Today at 14:00</strong> with approved account notes attached.</p>
            <div class="scenario-meta-row">
              <span><strong>New owner:</strong> Sarah Jenkins (Client Desk)</span>
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
            <a class="text-link" href="/communications">Explore Communications page ↗</a>
            <a class="button secondary" href="/contact?interest=AI%20services%3A%20Communications">Request a Communications walkthrough ${arrow}</a>
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
            <h4>Quote #Q-104 · Midlands Commercial Group (£28,400)</h4>
            <p>Assessed in Sales &amp; Intelligence with <strong>ICP Fit: High</strong> and <strong>Data Confidence: Verified</strong>. Quote reminder is surfaced at the top of the Sales Action Queue.</p>
            <div class="scenario-meta-row">
              <span><strong>Quote owner:</strong> J. Morton</span>
              <span><strong>Quote status:</strong> Open / Overdue follow-up</span>
              <span><strong>Campaign source:</strong> Q4 UK Growth Briefing</span>
            </div>
          </div>
        </div>
        <div class="scenario-stage scenario-stage-after" data-scenario-after hidden>
          <div class="scenario-record-card resolved">
            <span class="sig-flag ok">Decision Recorded: Accepted (Won) · Queue Updated</span>
            <h4>Quote #Q-104 · Midlands Commercial Group — Cleared from Overdue Queue</h4>
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
            <a class="text-link" href="/sales-intelligence">Explore Sales &amp; Intelligence page ↗</a>
            <a class="button secondary" href="/contact?interest=AI%20services%3A%20Sales%20%26%20Intelligence">Request a Sales &amp; Intelligence walkthrough ${arrow}</a>
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
            <h4>Handover Ref HO-2026-041 · Midlands Commercial Group</h4>
            <p>Structured Sales handover loaded for operator review. Ready to confirm that the deal is won and scope is agreed, and record the delivery owner and start date.</p>
            <div class="scenario-meta-row">
              <span><strong>Proposed owner:</strong> Tom Vance (Operations Lead)</span>
              <span><strong>Agreed scope:</strong> 3-site commercial rollout &amp; onboarding</span>
              <span><strong>Target start date:</strong> 18 Nov 2026</span>
            </div>
          </div>
        </div>
        <div class="scenario-stage scenario-stage-after" data-scenario-after hidden>
          <div class="scenario-record-card resolved">
            <span class="sig-flag ok">Onboarding Record ONB-041 Created · Repeat-Import Protected</span>
            <h4>ONB-041 · Midlands Commercial Group — Owned by Tom Vance (Starts 18 Nov 2026)</h4>
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
            <a class="text-link" href="/business-delivery">Explore Business Delivery page ↗</a>
            <a class="button secondary" href="/contact?interest=AI%20services%3A%20Business%20Delivery">Request a Business Delivery walkthrough ${arrow}</a>
          </div>
        </div>
      </section>
      <section role="tabpanel" id="scen-panel-invoice" aria-labelledby="scen-tab-invoice" class="scenario-panel" data-scenario-panel="invoice" data-invoice-demo hidden>
        <div class="scenario-top-bar"><div><span class="scenario-step-badge">Sample-data demo</span><h3>Review an overdue invoice</h3></div></div>
        <div class="scenario-stage">
          <div class="scenario-record-card">
            <section data-invoice-step tabindex="-1">
              <h4>Owner briefing</h4><p>Overdue invoice INV-DEMO-42 · Northfield Trade Supplies · Owner Alex Morgan</p>
              <button type="button" class="button" data-invoice-next>Open sample case</button>
            </section>
            <section data-invoice-step tabindex="-1" hidden>
              <h4>Case evidence</h4><p>Choose the status you observed in the fictional portal. The demo records it with the source and check time.</p>
              <p><label>Observed status <select data-invoice-observation><option>Part paid</option><option>Paid</option><option>Disputed</option></select></label></p>
              <button type="button" class="button" data-invoice-next>Record sample evidence</button>
            </section>
            <section data-invoice-step tabindex="-1" hidden>
              <h4>Invoice evidence recorded</h4><p>INV-DEMO-42 · <strong data-invoice-observed>Part paid</strong> · Source: Sample billing portal · Checked today (demo)</p>
              <p>Suggested next action: <span data-invoice-suggestion>Ask for an update on the remaining balance.</span></p>
              <button type="button" class="button" data-invoice-next>Send draft for review</button>
            </section>
            <section data-invoice-step tabindex="-1" hidden>
              <h4>Personal AI Team review</h4><p>Sample draft: <span data-invoice-draft>Could you confirm when we can expect payment of the remaining balance on INV-DEMO-42?</span></p>
              <button type="button" class="button" data-invoice-next>Approve sample follow-up</button>
            </section>
            <section data-invoice-step tabindex="-1" hidden>
              <h4>Sample follow-up approved</h4><p>The owner’s decision is recorded in this demo. No message was sent.</p>
            </section>
          </div>
        </div>
        <p class="sr-only" role="status" data-invoice-status></p>
        <div class="scenario-controls">
          <button type="button" class="button secondary" data-invoice-reset hidden>Reset invoice scenario</button>
          <div class="scenario-links"><a class="text-link" href="/business-delivery">Explore Business Delivery ↗</a>
            <a class="button secondary" href="/contact?interest=AI%20services%3A%20Business%20Delivery">Request a Business Delivery walkthrough ${arrow}</a></div>
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

const serviceCard = g => `<article class="service-directory-card" id="${g.id}" data-outcome-panel="${g.bucket || 'find-win'}"><a class="service-card-main" href="/${serviceSlugs[g.id]}"><span class="service-brand-icon">${icon(g, 34)}</span><span class="platform-status-pill">${esc(g.statusBadge)}</span><h3>${esc(g.displayTitle || g.title)}</h3><dl class="hub-card-dl"><div><dt>Who it helps</dt><dd>${esc(g.bestFor)}</dd></div><div><dt>Problem it solves</dt><dd>${esc(g.hubProblem || g.problemsSolved?.[0] || '')}</dd></div><div><dt>What the workflow does</dt><dd>${esc(g.hubWorkflow || g.cardCopy)}</dd></div><div><dt>What you gain</dt><dd>${esc(g.hubGain || g.benefit)}</dd></div></dl><span class="service-explore">Explore ${esc(g.title)} ${arrow}</span></a><a class="service-preview-link" href="/dashboard?service=${g.id}">Open sample-data demo ${arrow}</a></article>`;
const directoryCta = () => `<article class="service-directory-cta"><div>${label('TAILORED WALKTHROUGH')}<h3>Want to see a specific workflow?</h3><p>Request a walkthrough of any of the seven services — including what is <strong>Live in Power CRM</strong>, what is <strong>Tested locally / walkthrough available</strong>, or any <strong>Sample-data demo</strong> workspace.</p></div><div class="actions">${btn('Request a walkthrough', walkthrough)}${btn('Sample-data demo', '/dashboard', true)}</div></article>`;
const directory = () => `<section class="service-directory" aria-labelledby="service-directory-heading" data-outcome-tabs><div class="wrap"><div class="section-head"><div>${label('SEVEN SEPARATE APPLICATIONS')}<h2 id="service-directory-heading">Compare all seven services<br><em>at a glance.</em></h2></div><div><p>Each card follows the same four-part structure — who it helps, the problem it solves, what the workflow does and what you gain — using plain-language availability labels: <strong>Live in Power CRM</strong>, <strong>Tested locally / walkthrough available</strong>, <strong>Sample-data demo</strong>, <strong>Requires provider setup</strong> and <strong>Planned</strong>.</p></div></div><div class="outcome-tab-bar" role="tablist" aria-label="Filter platforms by commercial outcome"><button type="button" role="tab" aria-selected="true" class="outcome-tab-btn active" data-outcome-tab="all">All 7 Services</button><button type="button" role="tab" aria-selected="false" class="outcome-tab-btn" data-outcome-tab="find-win">1. Find &amp; Win</button><button type="button" role="tab" aria-selected="false" class="outcome-tab-btn" data-outcome-tab="manage-retain">2. Manage &amp; Retain</button><button type="button" role="tab" aria-selected="false" class="outcome-tab-btn" data-outcome-tab="deliver-scale">3. Deliver &amp; Scale</button></div><div class="service-directory-grid">${aiGroups.map(serviceCard).join('')}${directoryCta()}</div></div></section>${guidedScenarioDemo()}`;

export const dashboardPage = `<section class="preview-page-intro"><div class="wrap preview-intro-grid"><div>${label('POWER-UP TALENT | SAMPLE-DATA DEMO')}<h1>Sample-data demo<br><em>across all seven services.</em></h1><p>Try the four guided sample-data workflows first, or explore the full seven-service queue selector below.</p></div><ul class="preview-hints" aria-label="What you can click in this demo"><li><strong>1. Guided workflows</strong><span>Handle an enquiry, follow up a quote, hand over a won deal or review an overdue invoice.</span></li><li><strong>2. Service queues</strong><span>Switch between all 7 services, search sample items or filter by status.</span></li><li><strong>3. Request a walkthrough</strong><span>Use the walkthrough link on any scenario or panel to open Contact with that service pre-selected.</span></li></ul></div><div class="wrap"><p class="preview-scope"><strong>Sample data disclosure:</strong> All companies, figures, quotes and activity items shown on this page are synthetic sample data created to illustrate the product layouts. Interacting with this demo runs in your browser and does not change live records or activate live email, calendar, telephony or payment integrations.</p></div></section>${guidedScenarioDemo()}<div class="dashboard-page-container">${dashboardPreview()}</div><section class="wrap cta cta-signature"><span class="cta-power" aria-hidden="true">${ico('power')}</span><div>${label('WANT A LIVE WALKTHROUGH?')}<h2>See the workflow<br>with your own scenarios.</h2><p>Request a walkthrough of any service or return to the AI Business Services hub to compare all seven applications.</p></div><div class="actions">${btn('Request a walkthrough', walkthrough)}${btn('Back to AI Business Services hub', '/platforms', true)}</div></section>`;

function renderLiveBriefingCallout(g) {
  if (!g.liveBriefing) return '';
  const lb = g.liveBriefing;
  const boundaryLine = lb.boundaryNote || 'Local walkthrough workflows and standalone pilots described below are separate from this live Power CRM feature and are clearly labelled by availability status.';
  return `<section class="wrap section" id="live-power-crm-briefing" aria-labelledby="live-briefing-heading"><div class="live-briefing-card"><div class="live-briefing-head"><span class="platform-status-pill live-pill">${esc(lb.badge)}</span><h2 id="live-briefing-heading">${esc(lb.heading)}</h2><p class="live-briefing-lead">${esc(lb.copy)}</p></div><div class="live-briefing-meta"><p><strong>Where owners run it:</strong> ${esc(lb.accessPath)}</p><p><strong>Verification scope:</strong> ${esc(lb.verificationNote)}</p><p><strong>Product boundary:</strong> ${esc(boundaryLine)}</p></div></div></section>`;
}

function renderBeforeWorkflowResult(g) {
  if (!g.beforeWorkflowResult) return '';
  const { before, workflow, result } = g.beforeWorkflowResult;
  return `<section class="wrap section bwr-section" aria-labelledby="bwr-heading"><div class="section-head"><div>${label('BEFORE → WORKFLOW → RESULT')}<h2 id="bwr-heading">What changes in your<br><em>working day.</em></h2></div><p>Observable workflow improvement showing how the process moves from manual chasing to structured, human-controlled execution.</p></div><div class="bwr-grid"><article class="bwr-card"><span>01 · BEFORE</span><h3>The buyer’s problem</h3><p>${esc(before)}</p></article><article class="bwr-card bwr-mid"><span>02 · WORKFLOW</span><h3>How ${esc(g.title)} works</h3><p>${esc(workflow)}</p></article><article class="bwr-card bwr-result"><span>03 · OBSERVABLE RESULT</span><h3>Clearer daily execution</h3><p>${esc(result)}</p></article></div></section>`;
}

function renderSalesIntelligenceDeepDive(g) {
  if (!g.marketIntelligence || !g.prospectIntelligence) return '';
  const radarCard = g.opportunityRadar ? `<article class="crm-workspace-card" id="opportunity-radar" style="margin-top:24px"><span class="platform-status-pill">${esc(g.opportunityRadar.badge)}</span><h3>${esc(g.opportunityRadar.heading)}</h3><ul class="workspace-feature-list">${g.opportunityRadar.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><div class="in-practice" style="margin-top:18px"><span>${esc(g.opportunityRadar.exampleTitle)}</span><p>${esc(g.opportunityRadar.exampleBody)}</p></div></article>` : '';
  return `<section class="wrap section" id="intelligence-deep-dive" aria-labelledby="intel-deep-heading"><div class="section-head"><div>${label('MARKET, PROSPECT &amp; OPPORTUNITY RADAR')}<h2 id="intel-deep-heading">Local public data meets<br><em>human-reviewed evidence.</em></h2></div><p>Combines live public UK planning and procurement sources with dated company evidence and Opportunity Radar hiring signals reviewed by your commercial team.</p></div><div class="crm-split-grid"><article class="crm-workspace-card" id="market-intelligence"><span class="platform-status-pill">Public UK Sources</span><h3>${esc(g.marketIntelligence.heading)}</h3><ul class="workspace-feature-list">${g.marketIntelligence.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><div class="in-practice" style="margin-top:18px"><span>${esc(g.marketIntelligence.exampleTitle)}</span><p>${esc(g.marketIntelligence.exampleBody)}</p></div></article><article class="crm-workspace-card" id="prospect-intelligence"><span class="platform-status-pill">Human-Reviewed Evidence</span><h3>${esc(g.prospectIntelligence.heading)}</h3><ul class="workspace-feature-list">${g.prospectIntelligence.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><div class="in-practice" style="margin-top:18px"><span>${esc(g.prospectIntelligence.exampleTitle)}</span><p>${esc(g.prospectIntelligence.exampleBody)}</p></div></article></div>${radarCard}<div style="margin-top:32px">${productScreenshot('actionQueue')}</div></section>`;
}

function renderFeatureInventory(g) {
  if (g.workspaces) {
    return `<section class="service-included-band" aria-labelledby="included-heading"><div class="wrap"><div class="section-head"><div>${label('TWO WORKSPACES · SEPARATE DATA ACCESS')}<h2 id="included-heading">Business CRM and<br><em>Personal CRM.</em></h2></div><p>Run the team Business CRM workspace, the private Personal CRM workspace, or keep each on its own separate access and data boundary.</p></div><div class="crm-split-grid">${g.workspaces.map(w => `<article class="crm-workspace-card"><span class="platform-status-pill">${esc(w.badge)}</span><h3>${esc(w.name)}</h3><p>${esc(w.summary)}</p><ul class="workspace-feature-list">${w.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></article>`).join('')}</div><div class="boundary-callout" role="note"><strong>Separate access &amp; data boundary:</strong> ${esc(g.boundaryNote)}</div></div></section>`;
  }
  return `<section class="service-included-band" aria-labelledby="included-heading"><div class="wrap"><div class="section-head"><div>${label('CAPABILITIES &amp; WORKFLOWS')}<h2 id="included-heading">What ${esc(g.title)}<br><em>lets your team do.</em></h2></div><p>${esc(g.extra)}</p></div><div class="feature-group-grid">${g.featureGroups.map(([title, desc], idx) => `<article class="feature-group-card"><span>0${idx + 1}</span><h3>${esc(title)}</h3><p>${esc(desc)}</p></article>`).join('')}</div></div></section>${renderSalesIntelligenceDeepDive(g)}`;
}

function renderProblemsAndOffer(g) {
  if (!g.problemsSolved || !g.whatWeOffer) return '';
  return `<section class="wrap section" aria-labelledby="offer-fit-heading"><div class="crm-split-grid"><article class="crm-workspace-card" id="problems-we-solve"><span class="platform-status-pill">Problems we solve</span><h2 id="offer-fit-heading" style="font-size:24px;margin-top:8px">Where work slows down</h2><ul class="workspace-feature-list">${g.problemsSolved.map(item => `<li>${esc(item)}</li>`).join('')}</ul></article><article class="crm-workspace-card" id="what-we-offer"><span class="platform-status-pill">What we offer</span><h2 style="font-size:24px;margin-top:8px">What your team receives</h2><ul class="workspace-feature-list">${g.whatWeOffer.map(item => `<li>${esc(item)}</li>`).join('')}</ul></article></div></section>`;
}

function renderExampleAndAvailability(g) {
  return `<section class="wrap in-dev-section" aria-labelledby="indev-heading"><div class="in-dev-card"><div class="in-dev-intro">${label('EXAMPLE TO SHOW &amp; AVAILABILITY')}<h2 id="indev-heading">In practice &amp;<br><em>verified scope.</em></h2>${g.exampleToShow ? `<div class="in-practice" style="margin-top:16px"><span>EXAMPLE TO SHOW</span><p>${esc(g.exampleToShow)}</p></div>` : ''}<div class="in-practice" style="margin-top:14px"><span>WORKFLOW DETAIL</span><p>${esc(g.practicalExample)}</p></div><p style="margin-top:14px;font-size:13px">See the <a href="/platforms#evidence-to-action" style="color:#ffe000;text-decoration:underline">evidence-to-action walkthrough ↗</a> and <a href="/platforms#won-deal-handover" style="color:#ffe000;text-decoration:underline">won-deal handover ↗</a> on the hub.</p></div><div><h3 style="color:#ffffff;font-size:17px;margin:0 0 12px">Availability &amp; boundaries</h3><ul class="in-dev-list"><li><span>${esc(g.statusBadge)}</span><p>${esc(g.whatYouCanTry)}</p></li></ul><details class="mobile-disclosure" open><summary>Requires provider setup &amp; planned items (${g.inDevelopment.length})</summary><ul class="in-dev-list" style="margin-top:12px">${g.inDevelopment.map(item => `<li><span>Requires provider setup / Planned</span><p>${esc(item)}</p></li>`).join('')}</ul></details></div></div></section>`;
}

function servicePage(g, index) {
  const d = previewData[g.id];
  const related = (g.relatedIds || []).map(rid => aiGroups.find(x => x.id === rid)).filter(Boolean);
  const ctaText = g.ctaLabel || 'Request a walkthrough';
  return `<section class="service-page-hero"><video autoplay loop muted playsinline preload="metadata" class="hero-video-bg" aria-hidden="true"><source src="assets/videos/ai-hero.mp4" type="video/mp4"></video><div class="video-overlay"></div><div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/platforms">AI Business Services</a><span aria-hidden="true">/</span><span aria-current="page">${esc(g.title)}</span></nav><div class="service-hero-grid"><div>${label('POWER-UP TALENT | ' + upper(g.title))}<h1>${esc(g.title)} — ${g.short}</h1><p>${esc(g.plainBenefit)}</p><div class="actions">${btn(ctaText, ask(g))}${btn('Sample-data demo', `/dashboard?service=${g.id}${g.id === 'delivery' ? '&scenario=invoice#guided-demo' : ''}`, true)}</div><span class="service-hero-note">${esc(g.statusBadge)} · <a href="/platforms" style="color:#ffe000;text-decoration:underline">Back to AI Business Services hub ↗</a></span></div><aside class="service-outcome" aria-label="Who it is for and what is available"><span class="service-brand-icon">${icon(g, 34)}</span><p>WHO IT’S FOR</p><h2 style="font-size:18px;line-height:1.45">${esc(g.roles)}</h2><p style="margin-top:14px">STATUS &amp; WHAT YOU CAN REVIEW</p><span style="display:block;color:rgba(255,255,255,.88);font-size:13.5px;line-height:1.55">${esc(g.whatYouCanTry)}</span></aside></div><div class="signature-visual-wrap">${signatureVisual(g)}</div></div></section>${renderLiveBriefingCallout(g)}${renderBeforeWorkflowResult(g)}${renderProblemsAndOffer(g)}${renderFeatureInventory(g)}${g.id === 'crm' ? `<section class="wrap captured-personal"><h2>Personal CRM — its own private workspace.</h2>${productScreenshot('personal')}</section>` : ''}${renderExampleAndAvailability(g)}<section class="wrap dashboard-feature" id="service-dashboard" aria-labelledby="service-dashboard-heading"><div class="section-head"><div>${label('SAMPLE-DATA DEMO · ' + upper(g.title))}<h2 id="service-dashboard-heading">${d.callout}</h2></div><p>Explore the synthetic sample-data demo for ${esc(g.title)} below, or <a href="/dashboard?service=${g.id}" style="text-decoration:underline;font-weight:700">open the full sample-data demo ↗</a>.</p></div>${dashboardPreview(g.id)}</section><section class="wrap related-services" aria-labelledby="related-heading"><div class="related-head"><div>${label('CONNECTED WORKFLOWS')}<h2 id="related-heading">Related services &amp; hub overview</h2></div><a class="text-link" href="/platforms#won-deal-handover">Back to AI Business Services hub ↗</a></div><div class="crm-split-grid" style="margin-top:18px">${related.map(o => `<article class="crm-workspace-card"><span class="service-brand-icon">${icon(o, 28)}</span><h3><a href="/${serviceSlugs[o.id]}" style="text-decoration:none;color:inherit">${esc(o.title)} — ${esc(o.short)}</a></h3><p>${esc(o.cardCopy)}</p><p style="margin-top:12px"><a class="text-link" href="/${serviceSlugs[o.id]}">Explore ${esc(o.title)} ↗</a></p></article>`).join('')}</div></section><section class="wrap cta cta-signature"><span class="cta-power" aria-hidden="true">${ico('power')}</span><div>${label('NEXT STEP')}<h2>See ${esc(g.title)}<br>around your workflow.</h2><p>Open our enquiry form with <strong>AI services: ${esc(g.title)}</strong> pre-selected so you can tell us what you want to review or pilot.</p></div><div class="actions">${btn(ctaText, ask(g))}${btn('Back to AI Business Services hub', '/platforms', true)}</div></section>`;
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
  const isRecruitmentRoute = ['talent', 'partnerships'].includes(id);
  const recruitmentNavigation = `<details class="service-menu recruitment-menu"><summary${isRecruitmentRoute ? ' aria-current="page"' : ''}>Recruitment &amp; Headhunting <span aria-hidden="true" class="chev">⌄</span></summary><div class="service-menu-panel"><a href="/talent"${id === 'talent' ? ' aria-current="page"' : ''}><span>Recruitment &amp; Headhunting</span></a><a href="/partnerships"${id === 'partnerships' ? ' aria-current="page"' : ''}><span>Partnerships</span></a></div></details>`;
  const serviceNavigation = `<details class="service-menu ai-services-menu"><summary${isPlatformRoute ? ' aria-current="page"' : ''}>AI Business Services <span aria-hidden="true" class="chev">⌄</span></summary><div class="service-menu-panel"><a class="service-menu-overview" href="/platforms">AI Business Services hub (all 7) ↗</a>${aiGroups.map(g => `<a href="/${serviceSlugs[g.id]}"${id === serviceSlugs[g.id] ? ' aria-current="page"' : ''}>${icon(g)}<span>${esc(g.title)}</span></a>`).join('')}<a class="service-menu-overview" href="/dashboard">Sample-data demo ↗</a></div></details>`;
  const footerPlatforms = `<div><h3>AI Business Services</h3><a href="/platforms">AI Business Services hub</a>${aiGroups.map(g => `<a href="/${serviceSlugs[g.id]}">${esc(g.title)}</a>`).join('')}<a href="/dashboard">Sample-data demo</a></div>`;
  if (id === 'platforms' || id === 'intelligence') html = html.replace('</main>', selectedProductScreens() + '</main>');
  return html.replace(/(<nav id="navigation"[^>]*>)([\s\S]*?)(<\/nav>)/, (_, start, links, end) => start + links
    .replace(/<a\s+(?:aria-current="page" )?href="\/?partnerships(?:\.html)?">Partnerships<\/a>/, '')
    .replace(/<a\s+(?:aria-current="page" )?href="\/?talent(?:\.html)?">Recruitment &amp; Headhunting<\/a>/, recruitmentNavigation)
    .replace(/<a\s+(?:aria-current="page" )?href="\/?(?:intelligence|platforms)(?:\.html)?">AI (?:Business Services|&amp; Business Platforms)<\/a>/, serviceNavigation) + end)
    .replace('</head>', '<link rel="stylesheet" href="product-screenshots.css?v=1"><link rel="stylesheet" href="professional.css?v=14.1"><script src="dashboard-preview.js?v=15.1" defer></script></head>')
    .replace(/href="styles\.css\?v=[\d.]+"/, 'href="styles.css?v=14.0"')
    .replace(/href="ai-services\.css\?v=[\d.]+"/, 'href="ai-services.css?v=14.0"')
    .replace('src="app.js"', 'src="enquiry-config.js?v=1" defer></script><script src="app.js?v=3"')
    .replace('<h3>Explore</h3>', '<h3>Explore</h3><a href="/check">Territory exclusivity review</a>')
    .replace('<div><h3>Start a conversation</h3>', footerPlatforms + '<div><h3>Start a conversation</h3>');
}
