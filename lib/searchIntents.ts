export interface SearchIntentPage {
  slug: string
  eyebrow: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  lead: string
  capabilities: { title: string; description: string }[]
  useCases: { title: string; description: string }[]
  connections: string[]
  evaluation: string[]
  evidence: { title: string; description: string }[]
  relatedGuides: { label: string; href: string }[]
  relatedIntents: string[]
  faq: { question: string; answer: string }[]
}

export const searchIntents: SearchIntentPage[] = [
  {
    slug: 'crm-software',
    eyebrow: 'CRM Software',
    metaTitle: 'CRM Software for Sales & Revenue Operations',
    metaDescription:
      'Manage organizations, contacts, opportunities, quotes, renewals, agreements, campaign attribution, and sales handoffs in one connected CRM environment.',
    heroTitle: 'CRM software that keeps the customer connected beyond the pipeline.',
    lead:
      'Infrakinetic brings organizations, contacts, opportunities, quotes, agreements, renewals, and customer history into one commercial operating layer, then carries that context into finance, workflow, documents, customer success, and operations.',
    capabilities: [
      { title: 'Organizations and contacts', description: 'Maintain a unified account and contact record with history, roles, custom fields, agreements, and connected business activity.' },
      { title: 'Opportunity pipeline', description: 'Track stages, win probability, expected close date, deal value, next steps, new business, renewals, and expansion.' },
      { title: 'Quotes and deal conversion', description: 'Build multi-line quotes, maintain product and pricing context, and carry accepted commercial work into downstream execution.' },
      { title: 'Renewal operations', description: 'Bring upcoming renewals back into the pipeline with governed churn reasons and lifecycle continuity.' },
    ],
    useCases: [
      { title: 'Sales pipeline management', description: 'Give sales teams one place to manage accounts, contacts, opportunities, next steps, values, stages, quotes, and renewal work.' },
      { title: 'Account and relationship management', description: 'Keep the commercial record connected to agreements, campaign attribution, customer lifecycle activity, invoices, and downstream ownership.' },
      { title: 'Revenue handoff', description: 'Carry a won opportunity into billing, finance, documents, customer success, workflow, and operations without rebuilding the customer context.' },
      { title: 'Renewal and expansion', description: 'Treat renewal and expansion as governed commercial motions rather than spreadsheet reminders or disconnected tasks.' },
    ],
    connections: ['Finance and billing handoff after commercial events', 'Customer success lifecycle context', 'Workflow and approval routing', 'Documents, agreements, and audit history'],
    evaluation: [
      'Can account, contact, opportunity, agreement, and renewal history stay connected?',
      'Can a won deal trigger governed downstream work without manual re-entry?',
      'Can sales activity connect to billing and finance without turning finance into a CRM field?',
      'Can renewal activity return to the pipeline with governed outcome reasons?',
      'Can permissions, approvals, documents, and audit evidence use the same business context?',
    ],
    evidence: [
      { title: 'Canonical ownership', description: 'Commercial owns organizations and contacts while Sales owns opportunities and pipeline state, keeping writable business ownership explicit.' },
      { title: 'Connected lifecycle', description: 'Commercial records connect to agreements, sales opportunities, billing handoffs, customer success, workflow, and operational events.' },
      { title: 'Governed work', description: 'Approvals, workflow, tickets, documents, and audit evidence operate as shared platform capabilities rather than separate CRM add-ons.' },
    ],
    relatedGuides: [
      { label: 'How to prevent CRM data drift', href: '/guides/preventing-crm-data-drift' },
      { label: 'Sales to finance handoff', href: '/guides/sales-to-finance-handoff' },
      { label: 'CRM data migration checklist', href: '/guides/crm-migration-checklist' },
    ],
    relatedIntents: ['crm-data-migration', 'finance-software', 'workflow-automation-software', 'business-management-software'],
    faq: [
      { question: 'Is Infrakinetic CRM software?', answer: 'Yes. Infrakinetic includes CRM capabilities for organizations, contacts, opportunities, quotes, agreements, renewals, attribution, and commercial handoffs. CRM is one operating domain inside the broader Infrakinetic platform.' },
      { question: 'Does the CRM connect to finance and billing?', answer: 'Yes. Commercial events can hand off into billing, finance, workflow, documents, and customer-success processes through governed engine contracts and shared business context.' },
      { question: 'Can Infrakinetic handle renewals and expansion?', answer: 'Yes. Renewal and expansion are first-class opportunity types, with renewal windows feeding opportunities back into the commercial lifecycle.' },
      { question: 'Can Infrakinetic manage accounts and contacts?', answer: 'Yes. The Commercial engine owns the master record for organizations and contacts and connects those records to opportunities, agreements, campaign attribution, billing, and customer lifecycle activity.' },
      { question: 'What makes Infrakinetic CRM different from a standalone CRM?', answer: 'The CRM function does not stop at the pipeline. Customer context can continue into finance, billing, documents, approvals, workflow, customer success, and operations inside the same product environment.' },
    ],
  },
  {
    slug: 'erp-software',
    eyebrow: 'ERP Software',
    metaTitle: 'ERP Software for Finance, HR & Operations',
    metaDescription:
      'Connect finance, billing, people, payroll, approvals, workflow, documents, governance, and commercial operations on one business platform.',
    heroTitle: 'ERP software for connected finance, people, workflow, and operations.',
    lead:
      'Infrakinetic covers core ERP-style operating needs across finance, billing, people, payroll, governance, documents, approvals, workflow, and commercial operations while keeping each business domain explicitly owned and connected.',
    capabilities: [
      { title: 'Finance and control', description: 'Budgets, journals, ledger controls, reconciliation, reporting, multi-currency context, and guided accounting setup.' },
      { title: 'People and payroll', description: 'Recruitment, HR, workforce, compensation, payroll, performance, equity, and governed employee lifecycle changes.' },
      { title: 'Workflow and approvals', description: 'Reusable approval routing, workflow stages, SLA handling, tickets, automation, and governed decision history.' },
      { title: 'Commercial operations', description: 'Organizations, contacts, opportunities, quotes, agreements, renewals, and connected customer lifecycle context.' },
    ],
    useCases: [
      { title: 'Financial operations', description: 'Run accounting controls, budgets, reconciliation, reporting, customer billing handoffs, and payment context without treating operational systems as accounting truth.' },
      { title: 'People operations', description: 'Connect recruitment, employment, compensation, payroll, workforce, performance, and equity through a governed employee context.' },
      { title: 'Cross-functional process control', description: 'Use shared approvals, workflow, tickets, documents, automation, and governance across departmental processes.' },
      { title: 'Operational consolidation', description: 'Replace repeated data re-entry and departmental handoffs with explicit engine contracts inside one operating environment.' },
    ],
    connections: ['Shared identity and tenant context', 'Governance-aware authority', 'Documents and evidence', 'Connected reporting and operational events'],
    evaluation: [
      'Are finance, billing, payments, payroll, and commercial state clearly separated by ownership?',
      'Can approvals and workflow span departments without rebuilding routing logic in every module?',
      'Can historical financial and people records preserve point-in-time context?',
      'Can the platform scale by enabling engines without creating another integration layer?',
      'Can operational reporting trace back to governed source activity?',
    ],
    evidence: [
      { title: 'Distinct financial engines', description: 'Billing, Payments, and Finance are separate canonical engines so billing lifecycle, payment lifecycle, and accounting truth remain explicit.' },
      { title: 'Six people engines', description: 'HR, Recruitment, Workforce, Payroll, Performance, and Equity are separate but connected parts of the people domain.' },
      { title: 'Shared platform infrastructure', description: 'Workflow, Approval, Automation, Tickets, Documents, Migration, identity, and governance support cross-functional execution.' },
    ],
    relatedGuides: [
      { label: 'Why ERP implementations fail', href: '/guides/erp-implementation-failure-rate' },
      { label: 'What a unified business data model means', href: '/guides/unified-business-data-model' },
      { label: 'Business software for multiple departments', href: '/guides/business-software-for-multiple-departments' },
    ],
    relatedIntents: ['finance-software', 'hr-software', 'workflow-automation-software', 'business-operating-system'],
    faq: [
      { question: 'Is Infrakinetic an ERP?', answer: 'Infrakinetic includes ERP-style finance, people, payroll, workflow, governance, and operating capabilities, but it is positioned more broadly as a connected Business Operating System rather than a traditional ERP alone.' },
      { question: 'Does Infrakinetic include finance and payroll?', answer: 'Yes. Finance and Payroll are distinct canonical engines, with Billing and Payments also independently owned so financial truth, customer billing, payment lifecycle, and payroll remain explicit.' },
      { question: 'Can different departments share one operating context?', answer: 'Yes. The platform shares identity, tenant context, governance, approvals, documents, events, and navigation while maintaining explicit ownership boundaries between engines.' },
      { question: 'Does Infrakinetic include workflow and approvals?', answer: 'Yes. Workflow, Approval, Automation, and Tickets are shared platform engines used across commercial, finance, people, documents, and governance processes.' },
      { question: 'Can Infrakinetic support phased adoption?', answer: 'Engine entitlement and access controls allow capabilities to be enabled according to tenant configuration while continuing to use the same operating foundation.' },
    ],
  },
  {
    slug: 'hr-software',
    eyebrow: 'HR Software',
    metaTitle: 'HR Software for Hiring, Workforce & Payroll',
    metaDescription:
      'Run recruitment, onboarding, employee records, compensation, leave, performance, payroll, and governed people operations in one connected platform.',
    heroTitle: 'HR software that keeps the employee lifecycle connected from hiring onward.',
    lead:
      'Infrakinetic connects Recruitment, HR, Workforce, Payroll, Performance, and Equity as separately owned people engines that share governed employee context instead of passing the same person through disconnected systems.',
    capabilities: [
      { title: 'Recruitment and hiring', description: 'Manage requisitions, applications, interviews, offers, approval gates, and hire conversion into employment records.' },
      { title: 'Employee lifecycle', description: 'Maintain positions, reporting lines, onboarding context, leave, workforce records, and governed changes over time.' },
      { title: 'Compensation', description: 'Use versioned salary structures, formulas, pay bands, revision approvals, retroactive adjustments, and total rewards context.' },
      { title: 'Performance and equity', description: 'Keep performance and equity context connected to the wider people record and governance model.' },
    ],
    useCases: [
      { title: 'Recruitment to onboarding', description: 'Move an accepted offer into employment, position, reporting-line, compensation, documents, and onboarding workflow without re-keying the employee record.' },
      { title: 'Compensation changes', description: 'Route salary revisions through manager approval while preserving version history, effective dates, and historical payroll context.' },
      { title: 'Leave and workforce operations', description: 'Manage leave requests, balances, approval routing, reporting lines, and workforce context on the same people foundation.' },
      { title: 'Employee history', description: 'Keep historical employment, compensation, payroll, performance, and governance evidence connected over time.' },
    ],
    connections: ['Payroll and statutory processing', 'Org structure and approval routing', 'Finance posting and reconciliation', 'Onboarding workflow and documents'],
    evaluation: [
      'Does an accepted offer become a governed employee record without duplicate entry?',
      'Can compensation changes preserve effective dates and approval evidence?',
      'Can reporting lines drive approvals and access decisions?',
      'Can payroll use historical compensation and statutory context?',
      'Can onboarding, documents, leave, payroll, and performance share one employee context?',
    ],
    evidence: [
      { title: 'Separate people ownership', description: 'Recruitment, HR, Workforce, Payroll, Performance, and Equity keep distinct ownership while sharing governed people context.' },
      { title: 'Approval-gated compensation', description: 'Salary revisions can require the affected employee’s manager to approve before changes take effect.' },
      { title: 'Point-in-time history', description: 'Compensation and statutory rules preserve effective-period context for historical and backdated payroll calculations.' },
    ],
    relatedGuides: [
      { label: 'Employee onboarding workflow', href: '/guides/employee-onboarding-workflow' },
      { label: 'HR and payroll integration', href: '/guides/hr-payroll-integration' },
      { label: 'Leave approval workflow', href: '/guides/leave-approval-workflow' },
    ],
    relatedIntents: ['payroll-software', 'workflow-automation-software', 'document-management-software', 'business-management-software'],
    faq: [
      { question: 'What HR functions does Infrakinetic cover?', answer: 'Infrakinetic covers recruitment, HR, workforce management, compensation, leave, payroll, performance, equity, onboarding, reporting-line context, and governed people changes.' },
      { question: 'Does HR connect directly to payroll?', answer: 'Yes. The people engines share governed employee context so hiring, compensation, employment changes, and payroll can operate without rebuilding the employee record through manual handoffs.' },
      { question: 'Can salary changes require approval?', answer: 'Yes. Compensation revisions can be approval-gated, with version history and point-in-time context preserved for historical payroll accuracy.' },
      { question: 'Does Infrakinetic support recruitment and onboarding?', answer: 'Yes. Requisitions, applications, interviews, offers, hire conversion, employment setup, compensation context, and onboarding workflow can remain connected.' },
      { question: 'Can HR workflows use the organization hierarchy?', answer: 'Yes. Reporting lines, positions, teams, and governance context can drive approval routing, access, escalation, and accountable work.' },
    ],
  },
  {
    slug: 'payroll-software',
    eyebrow: 'Payroll Software',
    metaTitle: 'Payroll Software for Governed Payroll Operations',
    metaDescription:
      'Run payroll with compensation formulas, approvals, historical rates, payslips, arrears, off-cycle runs, reconciliation, and multi-country legal-entity context.',
    heroTitle: 'Payroll software built around governed calculation and historical truth.',
    lead:
      'Infrakinetic Payroll connects employee context, versioned compensation, approvals, statutory rules, payslips, reconciliation, and finance posting while preserving the rule and rate context that produced each payroll outcome.',
    capabilities: [
      { title: 'Payroll computation', description: 'Calculate compensation components in dependency order with pre-run validation and review before lock.' },
      { title: 'Approvals and locking', description: 'Use governed review and approval before a payroll run becomes locked and immutable.' },
      { title: 'Historical accuracy', description: 'Resolve compensation and statutory rules by effective period so backdated and off-cycle runs use the correct historical context.' },
      { title: 'Advanced payroll', description: 'Support payslips, arrears, off-cycle bonuses, full-and-final settlement, historical imports, and multi-country legal-entity rules.' },
    ],
    useCases: [
      { title: 'Monthly payroll processing', description: 'Validate inputs, compute salary components, review the run, route approvals, lock results, generate payslips, and hand off governed finance entries.' },
      { title: 'Backdated compensation', description: 'Recalculate historical periods using effective-dated compensation and statutory context rather than today’s rules.' },
      { title: 'Off-cycle and settlement runs', description: 'Handle bonuses, arrears, and full-and-final settlement as governed payroll outcomes with traceable calculation context.' },
      { title: 'Payroll reconciliation', description: 'Check payroll totals against finance posting and preserve the evidence required to explain what was calculated and why.' },
    ],
    connections: ['HR and workforce records', 'Finance journals and reconciliation', 'Approval routing', 'Documents and employee access'],
    evaluation: [
      'Can payroll explain which formula and rate version produced a historical result?',
      'Can a payroll run be reviewed and approved before it becomes locked?',
      'Can backdated changes produce explicit adjustment items instead of silently rewriting history?',
      'Can payroll post into finance while remaining a distinct engine?',
      'Can payslips, statutory context, arrears, and settlement remain attached to the employee record?',
    ],
    evidence: [
      { title: 'Versioned compensation', description: 'Salary structures can change by effective date while older versions remain available for retroactive calculations.' },
      { title: 'Governed lock state', description: 'Payroll runs move through review and approval before becoming locked, preserving the calculation and decision context.' },
      { title: 'Finance handoff', description: 'Payroll can post journal entries into Finance while Payroll remains owner of payroll state and Finance remains owner of accounting truth.' },
    ],
    relatedGuides: [
      { label: 'Payroll approval workflow', href: '/guides/payroll-approval-workflow' },
      { label: 'Payroll reconciliation', href: '/guides/payroll-reconciliation' },
      { label: 'HR and payroll integration', href: '/guides/hr-payroll-integration' },
    ],
    relatedIntents: ['hr-software', 'finance-software', 'workflow-automation-software', 'document-management-software'],
    faq: [
      { question: 'Does Infrakinetic support multi-country payroll?', answer: 'The product supports country and legal-entity-specific statutory context so payroll rules do not have to be forced through one global template.' },
      { question: 'Can Infrakinetic handle backdated payroll changes?', answer: 'Yes. Versioned compensation and point-in-time statutory resolution are designed so backdated or off-cycle calculations can use the rule set that was in force for the relevant period.' },
      { question: 'Are payroll runs auditable?', answer: 'Yes. Payroll review, approval, lock state, calculation context, historical compensation rules, payslips, and downstream finance posting are designed to preserve evidence.' },
      { question: 'Does payroll connect to HR?', answer: 'Yes. Payroll uses governed employee, employment, compensation, and workforce context rather than requiring a separate employee copy.' },
      { question: 'Can payroll be reconciled with finance?', answer: 'Yes. Payroll totals and downstream journal entries can be reconciled while Payroll and Finance retain separate ownership responsibilities.' },
    ],
  },
  {
    slug: 'finance-software',
    eyebrow: 'Finance Software',
    metaTitle: 'Finance Software for Ledger & Reconciliation',
    metaDescription:
      'Manage journals, ledger controls, budgets, bank reconciliation, reporting, accounting setup, multi-currency context, billing handoffs, and financial evidence.',
    heroTitle: 'Finance software designed around accounting truth, control, and reconciliation.',
    lead:
      'Infrakinetic Finance owns accounting policy, journals, ledger and posting, fiscal controls, reconciliation decisions, and reporting while Billing and Payments remain distinct engines for their own operational lifecycles.',
    capabilities: [
      { title: 'Ledger and journals', description: 'Use append-only financial discipline, explicit reversals, cryptographic integrity evidence, and traceable posting context.' },
      { title: 'Budgets and controls', description: 'Plan departmental, project, or campaign budgets with allocations, limits, approvals, and budget-versus-actual visibility.' },
      { title: 'Bank reconciliation', description: 'Match imported bank statement lines against ledger entries and keep unresolved lines visibly open.' },
      { title: 'Reporting', description: 'Support Trial Balance, General Ledger, P&L, Balance Sheet, aging, cash flow, budget reporting, and reconciliation APIs.' },
    ],
    useCases: [
      { title: 'Accounting control', description: 'Maintain journals, ledger postings, fiscal periods, reversals, and evidence without letting operational modules overwrite accounting truth.' },
      { title: 'Budget governance', description: 'Route allocations through approvals, enforce spending controls, and compare planned versus actual activity.' },
      { title: 'Bank reconciliation', description: 'Match statement lines against ledger activity and keep unresolved items visible instead of silently absorbing differences.' },
      { title: 'Cross-engine financial handoff', description: 'Receive governed facts from payroll, billing, commercial, and marketing processes while Finance retains accounting ownership.' },
    ],
    connections: ['Billing and invoicing lifecycle', 'Payments observations and settlement context', 'Payroll posting', 'Commercial agreements and revenue handoffs'],
    evaluation: [
      'Is accounting truth owned separately from billing and payment-provider observations?',
      'Are reversals explicit rather than edits that erase the original entry?',
      'Can bank reconciliation expose unmatched lines until they are resolved?',
      'Can budgets use approvals and hard controls rather than passive reporting only?',
      'Can reports remain legal-entity and currency scoped?',
    ],
    evidence: [
      { title: 'Append-only discipline', description: 'Financial records use append-only controls and explicit reversing entries instead of editing posted history.' },
      { title: 'Distinct ownership', description: 'Finance owns accounting policy, journals, ledger, fiscal controls, and reconciliation while Billing and Payments own their respective operational lifecycles.' },
      { title: 'Reconciliation-first controls', description: 'Bank, payroll, invoice, payment, and migration processes can be checked against expected totals and relationships.' },
    ],
    relatedGuides: [
      { label: 'CRM to accounting sync errors', href: '/guides/crm-accounting-sync-errors' },
      { label: 'Invoice approval workflow', href: '/guides/invoice-approval-workflow' },
      { label: 'Payroll reconciliation', href: '/guides/payroll-reconciliation' },
    ],
    relatedIntents: ['erp-software', 'payroll-software', 'workflow-automation-software', 'business-management-software'],
    faq: [
      { question: 'What does Infrakinetic Finance include?', answer: 'Finance covers accounting policy, journals, ledger and posting, budgets, bank reconciliation, fiscal controls, reporting, multi-currency context, and reconciliation decisions.' },
      { question: 'Are Billing and Finance the same module?', answer: 'No. Billing, Payments, and Finance are distinct canonical engines. Billing owns customer billing lifecycle, Payments owns provider and payment lifecycle, and Finance owns accounting truth and fiscal controls.' },
      { question: 'Can finance activity be reconciled?', answer: 'Yes. Reconciliation is a first-class control for bank activity, financial reporting, migration, and cross-engine financial handoffs.' },
      { question: 'Does Infrakinetic support budgets and approvals?', answer: 'Yes. Budgets can be created for departments, projects, or campaigns, with allocation requests routed through approvals and spending controls applied against allocations.' },
      { question: 'Can Finance work without collapsing Billing and Payments into the ledger?', answer: 'Yes. Billing, Payments, and Finance remain separate owners and exchange governed facts rather than treating every financial-looking state as the same record.' },
    ],
  },
  {
    slug: 'document-management-software',
    eyebrow: 'Document Management Software',
    metaTitle: 'Document Management Software for Business Records',
    metaDescription:
      'Generate, store, version, govern, search, approve, and trace business documents while keeping document lifecycle evidence connected to the owning business process.',
    heroTitle: 'Document management software connected to the business process each document supports.',
    lead:
      'Infrakinetic Documents owns document lifecycle and governance evidence while the originating business engine keeps ownership of the underlying invoice, agreement, payslip, employment, or other business state.',
    capabilities: [
      { title: 'Templates and generation', description: 'Generate business documents from governed templates and structured operating data.' },
      { title: 'Versioning and lifecycle', description: 'Maintain document versions, lifecycle state, governance evidence, and controlled transitions.' },
      { title: 'Storage and search', description: 'Keep documents in managed storage with searchable content and connected business context.' },
      { title: 'Approval and evidence', description: 'Connect document workflows to approval, audit, and originating-engine lifecycle controls.' },
    ],
    useCases: [
      { title: 'Commercial agreements', description: 'Keep agreement generation, versions, signatory context, approval evidence, and commercial readiness connected.' },
      { title: 'Payslips and employment documents', description: 'Generate and govern employee documents without transferring ownership of payroll or employment business state to the Documents engine.' },
      { title: 'Invoices and financial documents', description: 'Apply document lifecycle semantics to issued and voided invoice documents while Billing retains invoice lifecycle ownership.' },
      { title: 'Policy and approval workflows', description: 'Route controlled documents through shared approval and workflow infrastructure with traceable decision evidence.' },
    ],
    connections: ['Commercial agreements', 'Payroll and payslips', 'Billing and invoices', 'Approval, workflow, and audit evidence'],
    evaluation: [
      'Can documents be generated from governed structured data?',
      'Can document versions and lifecycle transitions preserve evidence?',
      'Can approval decisions remain attached to the document and its originating business process?',
      'Can search and storage operate without disconnecting the file from the record it belongs to?',
      'Does the document engine avoid taking ownership of invoice, payroll, or agreement business state?',
    ],
    evidence: [
      { title: 'Document lifecycle ownership', description: 'Documents owns document-governance semantics and evidence while domain engines continue to own their business lifecycles.' },
      { title: 'Cross-domain adoption', description: 'Document lifecycle integration covers employment documents, payslips, commercial agreements, and invoice document semantics.' },
      { title: 'Shared approval infrastructure', description: 'Documents can use the same governed Approval and Workflow engines as other operating domains.' },
    ],
    relatedGuides: [
      { label: 'Document approval workflow', href: '/guides/document-approval-workflow' },
      { label: 'Document management with approvals', href: '/guides/document-management-with-approvals' },
      { label: 'Approval workflow management system', href: '/guides/approval-workflow-management-system' },
    ],
    relatedIntents: ['workflow-automation-software', 'hr-software', 'finance-software', 'business-management-software'],
    faq: [
      { question: 'What is document management software?', answer: 'Document management software organizes the creation, storage, versioning, search, lifecycle, governance, and retrieval of business documents. Infrakinetic connects those controls to the wider business process.' },
      { question: 'Does the Documents engine own invoices and payslips?', answer: 'No. Documents owns document-governance semantics and evidence. Billing remains owner of invoice business lifecycle and Payroll remains owner of payroll business state.' },
      { question: 'Can documents be approval-gated?', answer: 'Yes. Document lifecycle can connect with the shared Approval and Workflow engines so decisions and evidence stay attached to the business context.' },
      { question: 'Can Infrakinetic generate documents from templates?', answer: 'Yes. The Documents capability includes template-driven generation from structured business data with governed lifecycle and version history.' },
      { question: 'Can documents stay linked to the business record they came from?', answer: 'Yes. The architecture is designed so document governance remains connected to the originating domain record rather than becoming an isolated file repository.' },
    ],
  },
  {
    slug: 'workflow-automation-software',
    eyebrow: 'Workflow Automation Software',
    metaTitle: 'Workflow Automation Software for Approvals',
    metaDescription:
      'Automate approvals, workflow stages, tickets, SLA handling, event-driven actions, routing, and governed business processes across departments.',
    heroTitle: 'Workflow automation software for work that crosses departments.',
    lead:
      'Infrakinetic connects Workflow, Approval, Automation, and Tickets as first-class platform engines so routing, decisions, work items, business events, and SLA controls can operate across commercial, finance, people, documents, and governance processes.',
    capabilities: [
      { title: 'Approval routing', description: 'Route decisions by manager, role, authority, condition, governance structure, or explicit assignee with full decision history.' },
      { title: 'Workflow stages', description: 'Define process stages, start governed workflow instances, and control transitions through explicit contracts.' },
      { title: 'Event automation', description: 'Trigger permitted actions from cataloged business events with configurable conditions and logged execution.' },
      { title: 'Tickets and SLA', description: 'Track accountable work items, assignment, escalation, organization-unit ownership, activity history, and SLA handling.' },
    ],
    useCases: [
      { title: 'Approval workflow management', description: 'Route budget, leave, contract, compensation, document, and ad hoc decisions through one governed approval framework.' },
      { title: 'Cross-functional workflow', description: 'Start downstream work when business events occur, while preserving engine ownership and the source business transaction.' },
      { title: 'SLA and escalation', description: 'Track deadlines, reassign unavailable approvers, and escalate work according to governed organizational authority.' },
      { title: 'No-code tenant automation', description: 'Configure event triggers, conditions, and permitted actions without rebuilding the source business process.' },
    ],
    connections: ['Finance and budget approvals', 'HR and leave workflows', 'Commercial and customer handoffs', 'Documents, notifications, and audit history'],
    evaluation: [
      'Can approvals route from real organizational hierarchy rather than hardcoded names?',
      'Can workflows react to business events without blocking the source transaction?',
      'Can conditional routing use the request’s own data?',
      'Can tickets, approvals, and workflow-stage work appear in one accountable work plane?',
      'Can SLA breaches and unavailable approvers trigger governed escalation?',
    ],
    evidence: [
      { title: 'Shared approval authority', description: 'Approval is a platform primitive used across business domains rather than a separate implementation per module.' },
      { title: 'Cataloged events', description: 'Automations react to defined business events and log each run, including failure without blocking the original business action.' },
      { title: 'Governance-aware assignment', description: 'Routine work, escalation, team accountability, hierarchy, and authority are connected instead of treated as unrelated workflow settings.' },
    ],
    relatedGuides: [
      { label: 'Approval workflow management system', href: '/guides/approval-workflow-management-system' },
      { label: 'Invoice approval workflow', href: '/guides/invoice-approval-workflow' },
      { label: 'Employee onboarding workflow', href: '/guides/employee-onboarding-workflow' },
    ],
    relatedIntents: ['document-management-software', 'hr-software', 'finance-software', 'business-management-software'],
    faq: [
      { question: 'What can Infrakinetic workflow automation handle?', answer: 'It can handle approvals, workflow stages, tickets, event-triggered automations, conditions, escalations, assignment, SLA controls, notifications, and connected downstream actions.' },
      { question: 'Can approvals route based on organizational hierarchy?', answer: 'Yes. Approval routing can use reporting lines, roles, teams, governance structure, and configured conditions instead of hardcoded individual approvers.' },
      { question: 'Can workflow automation cross departments?', answer: 'Yes. The workflow plane is designed as shared operating infrastructure across commercial, finance, people, documents, governance, and other engines.' },
      { question: 'What is an approval workflow management system?', answer: 'It is software that controls how a request is routed, who can decide it, what conditions change the route, what happens after the decision, and what evidence is retained. Infrakinetic provides this through its shared Approval and Workflow engines.' },
      { question: 'Do automation failures block the original business action?', answer: 'The tenant automation design records a failing automation and skips it rather than blocking the business action that emitted the event.' },
    ],
  },
  {
    slug: 'crm-data-migration',
    eyebrow: 'CRM Data Migration',
    metaTitle: 'CRM Data Migration: Mapping & Validation',
    metaDescription:
      'Migrate CRM accounts, contacts, deals, custom fields, relationships, and history with governed mapping, staging, validation, reconciliation, and verification.',
    heroTitle: 'CRM data migration that preserves relationships, not just rows.',
    lead:
      'Infrakinetic treats CRM migration as a governed systems problem: discover the source schema, map entities and relationships, stage the result away from production, execute in dependency order, reconcile the destination, and require explicit verification.',
    capabilities: [
      { title: 'Schema discovery', description: 'Profile source objects, fields, relationships, identities, and unsupported structures before production data is touched.' },
      { title: 'Governed mapping', description: 'Separate direct mappings, transformations, human-confirmation items, and explicit dispositions.' },
      { title: 'Staged execution', description: 'Validate data in a governed airlock and execute dependency-ordered writes with checkpointing and fault containment.' },
      { title: 'Reconciliation and verification', description: 'Compare counts, relationships, totals, and unresolved exceptions before a permitted person signs off.' },
    ],
    useCases: [
      { title: 'CRM migration project planning', description: 'Inventory entities, custom fields, ownership, historical activity, relationships, attachments, and target-state decisions before moving data.' },
      { title: 'Complex custom-field migration', description: 'Separate direct mappings from transformations, review-required decisions, and fields that need explicit disposition.' },
      { title: 'Relationship-preserving migration', description: 'Move accounts, contacts, deals, owners, history, and dependent records in an order that preserves their links.' },
      { title: 'Migration verification', description: 'Prove the destination is consistent through reconciliation and explicit sign-off rather than relying on an import-complete message.' },
    ],
    connections: ['Commercial organizations and contacts', 'Sales opportunities and history', 'Finance and billing references', 'Documents, ownership, and audit evidence'],
    evaluation: [
      'Does the migration discover relationships and custom structures before mapping begins?',
      'Can ambiguous mappings be surfaced for human confirmation instead of silently guessed?',
      'Is data staged away from production until readiness checks pass?',
      'Can writes execute in dependency order with checkpointing and per-record fault containment?',
      'Does completion require reconciliation and explicit verification?',
    ],
    evidence: [
      { title: 'Production execution benchmark', description: 'A 30,000-row, 30-column cross-engine benchmark mapped 900,000 source data points into 120,714 governed staging projections and executed all 107,114 eligible records with zero execution failures at the execution layer.' },
      { title: 'Evidence gates remain separate', description: 'Execution completion is not represented as final migration completion. Reconciliation and human verification remain distinct evidence gates.' },
      { title: 'Governed staging', description: 'Source snapshots, mapping evidence, staging, dependency-aware execution, reconciliation, and verification are separate parts of the migration lifecycle.' },
    ],
    relatedGuides: [
      { label: 'CRM migration checklist', href: '/guides/crm-migration-checklist' },
      { label: 'CRM migration project plan', href: '/guides/crm-migration-project-plan' },
      { label: 'CRM data mapping', href: '/guides/crm-data-mapping' },
    ],
    relatedIntents: ['crm-software', 'business-management-software', 'erp-software', 'document-management-software'],
    faq: [
      { question: 'What data is included in CRM migration?', answer: 'CRM migration commonly includes organizations, contacts, opportunities or deals, activities, ownership, custom fields, stage history, relationships, and related business context.' },
      { question: 'Why is CSV import not enough for CRM migration?', answer: 'CSV import can move rows, but CRM data is relational. Accounts have contacts, deals have owners and stages, custom fields need semantic mapping, and historical activity needs to remain attached to the correct entities.' },
      { question: 'How does Infrakinetic verify a migration?', answer: 'The migration pipeline uses staging, validation, dependency-aware execution, reconciliation, and explicit human verification. A worker finishing is not treated as proof that the destination is correct.' },
      { question: 'What should a CRM migration checklist include?', answer: 'At minimum: source inventory, entity and relationship discovery, field mapping, identity rules, duplicate strategy, ownership mapping, historical activity, custom-field decisions, staging, validation, reconciliation, and sign-off.' },
      { question: 'Can Infrakinetic migrate custom CRM fields?', answer: 'The mapping model distinguishes direct mappings, transformations, items requiring human confirmation, and fields with no direct equivalent so custom structures are not silently discarded.' },
    ],
  },
  {
    slug: 'business-management-software',
    eyebrow: 'Business Management Software',
    metaTitle: 'Business Management Software for Connected Operations',
    metaDescription:
      'Run CRM, finance, billing, HR, payroll, documents, workflow, approvals, governance, customer success, and migration on one connected business platform.',
    heroTitle: 'Business management software for the work that happens between departments.',
    lead:
      'Infrakinetic connects commercial, finance, people, documents, workflow, approvals, governance, customer success, migration, and operational context so the business does not have to rebuild the same facts at every handoff.',
    capabilities: [
      { title: 'Commercial management', description: 'Organizations, contacts, sales pipeline, quotes, agreements, renewals, and customer lifecycle context.' },
      { title: 'Finance and billing', description: 'Accounting truth, budgets, reconciliation, customer billing, payments context, and financial reporting.' },
      { title: 'People operations', description: 'Recruitment, HR, workforce, compensation, payroll, performance, equity, and governed employee lifecycle.' },
      { title: 'Operating controls', description: 'Workflow, approvals, tickets, documents, governance, automation, identity, tenant context, and audit evidence.' },
    ],
    useCases: [
      { title: 'Multi-department operations', description: 'Connect sales, finance, HR, documents, workflow, governance, and customer success without forcing every team into an isolated system.' },
      { title: 'Company-wide approvals', description: 'Use one governed approval plane for budget, leave, compensation, documents, contracts, requisitions, and ad hoc decisions.' },
      { title: 'Shared operational context', description: 'Carry customer, employee, agreement, project, finance, document, and ownership context across the work that depends on it.' },
      { title: 'System consolidation', description: 'Reduce structural friction created by duplicated records, manual handoffs, inconsistent approval logic, and after-the-fact reporting.' },
    ],
    connections: ['One product shell and identity context', 'Shared operating primitives', 'Explicit canonical engine ownership', 'Connected events, evidence, and reporting'],
    evaluation: [
      'Can the business adopt multiple functions without rebuilding identity and permissions each time?',
      'Can cross-functional work preserve ownership, approvals, documents, and history?',
      'Can each domain keep clear business ownership while sharing operating context?',
      'Can reporting trace back to source workflows and decisions?',
      'Can new operating domains reuse the same platform primitives instead of adding another control plane?',
    ],
    evidence: [
      { title: 'One connected product experience', description: 'The platform shares identity, tenant context, governance, work, approvals, documents, events, and navigation across canonical engines.' },
      { title: 'Explicit engine boundaries', description: 'Each writable aggregate has a canonical owner and other engines use approved contracts rather than private persistence coupling.' },
      { title: 'Reusable operating infrastructure', description: 'Workflow, Approval, Automation, Tickets, Documents, Migration, governance, and audit evidence are shared capabilities across business domains.' },
    ],
    relatedGuides: [
      { label: 'Business software for multiple departments', href: '/guides/business-software-for-multiple-departments' },
      { label: 'What to do when disconnected software stops scaling', href: '/guides/outgrowing-disconnected-business-software' },
      { label: 'Business process automation software', href: '/guides/business-process-automation-software' },
    ],
    relatedIntents: ['business-operating-system', 'crm-software', 'erp-software', 'workflow-automation-software'],
    faq: [
      { question: 'What is business management software?', answer: 'Business management software brings multiple operating functions such as sales, finance, HR, workflow, documents, and reporting into one environment. Infrakinetic extends that idea with explicit engine ownership and shared governance.' },
      { question: 'Is Infrakinetic a suite of separate products?', answer: 'No. It is one product platform with distinct canonical engines connected through shared identity, tenant context, governance, work, approvals, documents, events, and explicit contracts.' },
      { question: 'Can companies adopt only the functions they need?', answer: 'The platform uses engine entitlement and access controls so independently owned capabilities can be enabled, embedded, or exposed according to tenant configuration while sharing the same operating foundation.' },
      { question: 'Does Infrakinetic support CRM, finance, HR, and workflow together?', answer: 'Yes. Those functions operate as connected domains on the same product foundation, with explicit ownership rather than one undifferentiated data model.' },
      { question: 'Why use business management software instead of more point tools?', answer: 'The value is not fewer logos by itself. The goal is to reduce duplicated records, manual handoffs, inconsistent approvals, disconnected documents, and reporting reconstructed after the work happened.' },
    ],
  },
  {
    slug: 'business-operating-system',
    eyebrow: 'Business Operating System',
    metaTitle: 'Business Operating System for Enterprise Operations',
    metaDescription:
      'Infrakinetic is a connected Business Operating System spanning CRM, finance, HR, payroll, documents, workflow, governance, customer success, and migration.',
    heroTitle: 'A Business Operating System for connected enterprise operations.',
    lead:
      'Infrakinetic is designed as one connected product experience over independently owned canonical engines. The platform shares identity, tenant context, governance, approvals, documents, events, work, and navigation without treating a shared database as permission for every engine to own every record.',
    capabilities: [
      { title: 'Connected business domains', description: 'Commercial, Sales, Customer Success, Finance, Billing, Payments, People, Marketing, Operations, and other engines operate within one product environment.' },
      { title: 'Shared platform engines', description: 'Tickets, Workflow, Approval, Automation, Documents, Migration, governance primitives, and operating evidence connect cross-functional work.' },
      { title: 'Explicit ownership', description: 'Each writable business aggregate has a canonical owner. Other engines use approved contracts instead of private persistence coupling.' },
      { title: 'Governed operating context', description: 'Identity, tenant context, access, approvals, documents, events, and audit evidence remain connected across the product.' },
    ],
    useCases: [
      { title: 'Revenue operations', description: 'Connect commercial records, pipeline, agreements, billing handoff, customer lifecycle, workflow, and reporting.' },
      { title: 'People operations', description: 'Connect recruitment, employment, workforce, compensation, payroll, performance, equity, documents, and approvals.' },
      { title: 'Financial control', description: 'Connect billing, payments observations, accounting truth, budgets, reconciliation, payroll posting, and governed approvals.' },
      { title: 'Company-wide operating infrastructure', description: 'Reuse workflow, approvals, tickets, documents, automation, governance, identity, and audit evidence across domains.' },
    ],
    connections: ['CRM and revenue operations', 'Finance, billing, and payments', 'HR, payroll, and workforce', 'Workflow, documents, governance, and migration'],
    evaluation: [
      'Does “unified” mean shared operating context rather than unrestricted data ownership?',
      'Can each business domain keep a clear canonical owner?',
      'Can shared platform primitives support multiple departments consistently?',
      'Can events and contracts connect engines without private cross-engine writes?',
      'Can the customer experience remain one product while backend ownership remains explicit?',
    ],
    evidence: [
      { title: 'Canonical engine model', description: 'Infrakinetic is structured as independently owned canonical engines connected by shared platform primitives and explicit contracts.' },
      { title: 'Shared control plane', description: 'Identity, tenant context, entitlements, governance, approvals, documents, events, work, and navigation provide the common operating foundation.' },
      { title: 'Contract and wiring plane', description: 'Public services, commands, events, outbox and inbox patterns, projections, and migration contracts are used to connect engine boundaries.' },
    ],
    relatedGuides: [
      { label: 'What a unified business data model means', href: '/guides/unified-business-data-model' },
      { label: 'Business software for multiple departments', href: '/guides/business-software-for-multiple-departments' },
      { label: 'Why API-first is not enough', href: '/guides/why-api-first-isnt-enough' },
    ],
    relatedIntents: ['business-management-software', 'erp-software', 'crm-software', 'workflow-automation-software'],
    faq: [
      { question: 'What is a Business Operating System?', answer: 'A Business Operating System is a software environment that connects the operating functions of a company rather than treating CRM, finance, HR, workflow, documents, and governance as unrelated islands.' },
      { question: 'Why does Infrakinetic use the Business Operating System category?', answer: 'Because the product spans multiple business domains while sharing identity, governance, work, approvals, documents, events, and operating context. The category describes the whole product rather than any one module.' },
      { question: 'Does unified mean every engine shares ownership of every record?', answer: 'No. Infrakinetic keeps explicit canonical engine ownership and uses public contracts between engines. Unified refers to the product experience and shared operating primitives, not unrestricted cross-engine persistence access.' },
      { question: 'Is a Business Operating System the same as an ERP?', answer: 'There is overlap in finance, people, workflow, and operations, but Infrakinetic uses Business Operating System to describe a broader connected operating environment spanning commercial, customer, governance, documents, migration, workflow, and other domains.' },
      { question: 'Can the system remain modular while still being one product?', answer: 'Yes. Engine identity, entitlement, access, and navigability are separate concepts. A capability can be independently owned or entitled while still participating in one product experience.' },
    ],
  },
]

export const searchIntentBySlug = Object.fromEntries(
  searchIntents.map((intent) => [intent.slug, intent])
) as Record<string, SearchIntentPage>
