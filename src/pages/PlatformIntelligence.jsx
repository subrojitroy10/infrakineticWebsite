import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import ParallaxCard from '../components/ui/ParallaxCard'
import { KpiTileRow, KpiTile, Sparkline, TrendDelta, SectionHeader } from '../shared/components'
import { StatusBadge } from '../shared/components'
import {
  BrainCircuit,
  Gauge,
  Shield,
  Lock,
  ArrowRight,
  ChevronRight,
  BarChart2,
  Zap,
  Network,
  Server,
  Layers,
} from '../components/ui/Icons'

// Add BrainCircuit to Icons.jsx first - I'll add it via patch
const tierData = [
  {
    id: 'heuristic',
    label: 'Heuristic',
    threshold: '< 30 churn events',
    method: 'Hand-weighted formula (6 components)',
    badge: 'Insufficient history',
    badgeVariant: 'warning',
    color: 'neutral',
    description: 'Asserted weights: subscription 30 / financial 22 / engagement 17 / NPS 10 / onboarding 6 / support 15. No training data required. Serves as cold-start for every tenant.',
    example: 'Health score = 72/100 — "Heuristic — insufficient history"',
    sparklineData: [65, 67, 66, 68, 70, 69, 71, 72],
  },
  {
    id: 'statistical',
    label: 'Statistical',
    threshold: '30–200 churn events',
    method: 'Cox proportional hazards / Kaplan-Meier',
    badge: 'Censored handled correctly',
    badgeVariant: 'positive',
    color: 'violet',
    description: 'Survival analysis handles censored observations — customers who haven\'t churned yet are information, not missing data. Works at genuinely low n where classification fails.',
    example: 'Churn risk: 34% — "Statistical — n=87"',
    sparklineData: [42, 38, 35, 33, 34, 36, 34, 34],
  },
  {
    id: 'learned',
    label: 'Learned',
    threshold: '> 200 churn events',
    method: 'LightGBM + isotonic calibration',
    badge: 'Calibrated 73% ± 4%',
    badgeVariant: 'positive',
    color: 'gold',
    description: 'Gradient-boosted trees, warm-started from public base model. Isotonic calibration + conformal prediction intervals. Capacity scales to tenant data size.',
    example: 'Churn risk: 73% [Learned · n=342 · 90% CI: 69–77%]',
    sparklineData: [78, 75, 74, 73, 72, 73, 72, 73],
  },
]

const shapExample = {
  score: '73%',
  tier: 'Learned',
  sampleSize: 342,
  confidenceInterval: '69–77%',
  factors: [
    { label: 'Payment latency 4→31 days', impact: '+28%', color: 'red' },
    { label: 'Champion inactive 60 days', impact: '+19%', color: 'red' },
    { label: '2 open urgent cases', impact: '+14%', color: 'red' },
    { label: 'Relationship engagement 45/100', impact: '+11%', color: 'violet' },
    { label: 'Onboarding incomplete', impact: '+8%', color: 'violet' },
  ],
}

const intelligenceDifferentiators = [
  {
    icon: Gauge,
    title: 'Three-Tier Degradation',
    desc: 'Heuristic → Statistical → Learned. Automatic fallback if calibration degrades (Brier score >20% worse or AUC >0.05 worse). Never serves confident nonsense.',
    color: 'gold',
  },
  {
    icon: BarChart2,
    title: 'Conformal Prediction Intervals',
    desc: 'Distribution-free, valid at small n. Honest interval (69–77%) not a point estimate dressed as certainty. Coverage target 90%.',
    color: 'violet',
  },
  {
    icon: BrainCircuit,
    title: 'SHAP Explanations in Business Language',
    desc: '"Payment latency increased from 4 to 31 days" not "feature_12: 0.28". The explanation is the product; the probability is just the sort key.',
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Strict Per-Tenant Isolation',
    desc: 'The scoring pipeline can never bypass tenant isolation, by design — not by convention. Standing test: the model for tenant A produces identical output whether tenant B\'s rows exist or not. DPDP 2023 compliant by architecture, not policy.',
    color: 'violet',
  },
  {
    icon: Zap,
    title: 'Calibration Monitoring Built-In',
    desc: 'Brier score + reliability curve (10 bins) computed per training run. Reliability curve stored and surfaced in calibration dashboard. Active artifact swap on degradation.',
    color: 'violet',
  },
  {
    icon: Layers,
    title: 'UI Contract: Every Number Shows Provenance',
    desc: 'Mode (heuristic/statistical/learned), confidence interval, sample size. No number appears without its provenance. Members see one number; managers see comparison.',
    color: 'gold',
  },
]

const mlPipeline = [
  { step: 1, title: 'Resolve Tier', desc: 'Per tenant, count real churn events (backfilled=false). <30 → heuristic, 30–200 → statistical, >200 → learned.' },
  { step: 2, title: 'Train Blended', desc: 'Load public base model (public-cx-churn-v1), warm-start LightGBM on tenant data, isotonic calibrate, conformal intervals, SHAP.' },
  { step: 3, title: 'Tenant-Only Audit', desc: 'Optional, monthly. Only if audit switch ON AND >200 events. Trains from scratch, compares metrics vs blended.' },
  { step: 4, title: 'Inference', desc: 'Scores current orgs against active blended artifact. Writes entity_scores (churn_risk, computed_by=ml, model_run_id).' },
  { step: 5, title: 'Calibration Check', desc: 'New run Brier/AUC vs previous. If degraded → new artifact inactive, previous stays active. Fallback is automatic.' },
]

export default function PlatformIntelligence() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="eyebrow">Platform Intelligence</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              Intelligence That\'s Honest About Uncertainty
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Every prediction shows its provenance: mode, confidence interval, sample size. Three-tier model degrades truthfully — small tenants get an honest 'insufficient history' label, not a borrowed prediction.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gold-300">
              <StatusBadge value="heuristic" family="lifecycle" size="sm" dot />
              <StatusBadge value="statistical" family="lifecycle" size="sm" dot />
              <StatusBadge value="learned" family="lifecycle" size="sm" dot />
              <span className="text-white/50">Per-tenant. Never pooled.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three-Tier Model */}
      <Section
        id="three-tier"
        eyebrow="Three-Tier Model"
        title="Model Tier by Data Volume — Not by Plan"
        lead="Tier is determined by your tenant's own churn history, not your subscription. No tenant is forced into a learned model they can't support."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {tierData.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <StatusBadge
                      value={tier.badge}
                      family="lifecycle"
                      size="sm"
                      variant={tier.badgeVariant}
                    />
                  </div>
                  <h3 className="heading-serif text-xl text-white">{tier.label}</h3>
                  <p className="mt-2 text-sm text-white/50">{tier.threshold}</p>
                  <p className="mt-1 text-xs text-white/40 font-mono">{tier.method}</p>
                  
                  <div className="mt-6 h-20">
                    <Sparkline
                      data={tier.sparklineData}
                      color={tier.color === 'gold' ? 'gold-300' : tier.color === 'violet' ? 'violet-400' : 'white/40'}
                      width={200}
                      height={50}
                    />
                  </div>
                  
                  <p className="mt-4 text-sm text-white/60">{tier.description}</p>
                  <p className="mt-3 text-xs font-medium text-white/50 italic">"{tier.example}"</p>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* SHAP Example */}
        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={18} className="p-6 md:p-8 border-gold-300/30 bg-gold-300/[0.04]">
            <h3 className="heading-serif text-2xl mb-6">SHAP Explanation — The Product, Not the Probability</h3>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <StatusBadge value={shapExample.tier.toLowerCase()} family="lifecycle" size="md" dot />
                </div>
                <p className="text-5xl font-semibold tracking-tight text-white mb-1">{shapExample.score}</p>
                <p className="text-sm text-white/50">
                  Churn Risk · {shapExample.tier} · n={shapExample.sampleSize} · 90% CI: {shapExample.confidenceInterval}
                </p>
                <p className="mt-4 text-xs text-white/40">
                  Per-tenant. Never pooled. DPDP 2023 compliant by architecture.
                </p>
              </div>
              <div className="space-y-3">
                {shapExample.factors.map((factor, i) => (
                  <motion.div
                    key={factor.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-white/80">{factor.label}</span>
                      <span className={`font-semibold ${factor.color === 'red' ? 'text-red-400' : 'text-violet-300'}`}>
                        {factor.impact}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${Math.abs(parseInt(factor.impact, 10))}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full ${factor.color === 'red' ? 'bg-red-400' : 'bg-violet-400'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      {/* Differentiators */}
      <Section
        id="differentiators"
        eyebrow="Intelligence Differentiators"
        title="Six Reasons This Isn't Another 'AI Feature'"
        lead="Calibration, conformal, SHAP, isolation, monitoring, provenance — not marketing checkboxes, architectural guarantees."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceDifferentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6">
                  <div className={`mb-4 grid h-10 w-10 place-items-center rounded-lg border ${item.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                    <item.icon size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ML Pipeline */}
      <Section
        id="pipeline"
        eyebrow="ML Pipeline"
        title="Nightly Training. Detached Processes. EventBridge Triggered."
        lead="Follows the proven polynovea-payroll-compute pattern. EC2, not Lambda — once-daily job doesn't need on-demand elasticity."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="space-y-4">
            {mlPipeline.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="p-4 md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 grid h-10 w-10 place-items-center rounded-lg border border-gold-300/30 bg-gold-300/[0.08] text-gold-300 font-bold text-xl">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-white/50">{step.desc}</p>
                    </div>
                  </div>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Visibility Split */}
      <Section
        id="visibility"
        eyebrow="Visibility Split"
        title="Role-Gated Access — Real Roles, Not Invented Ones"
        lead="Checked against actual role hierarchy (master_admin > admin > manager > member). No 'team lead' role that doesn't exist."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                role: 'Member (Default CS Rep)',
                desc: 'Sees ONE number — the production blended model\'s prediction, scoped to accounts they have access to. No model-selection UI, no comparison, just the answer and its SHAP explanation.',
                items: ['Single churn risk number', 'SHAP explanation', 'Confidence interval', 'Sample size', 'Tier badge (heuristic/statistical/learned)'],
              },
              {
                role: 'Manager + (Admin, Master Admin)',
                desc: 'Sees BOTH models and the comparison, for tenants where the audit switch is ON and volume floor (>200) is cleared. This is for deciding whether to flip the warm-start config flag.',
                items: ['Blended vs tenant-only metrics side-by-side', 'Calibration dashboard access', 'Audit switch toggle (admin only)', 'Fallback status visibility'],
              },
            ].map((item, i) => (
              <ParallaxCard key={item.role} depth={14 + i * 2} className="p-6">
                <h3 className="text-base font-semibold text-gold-300 mb-3">{item.role}</h3>
                <p className="text-sm text-white/60 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((sub) => (
                    <span key={sub} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/60">
                      {sub}
                    </span>
                  ))}
                </div>
              </ParallaxCard>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Tenant Isolation */}
      <Section
        id="isolation"
        eyebrow="Tenant Isolation"
        title="Structural Enforcement — Not a Code Convention"
        lead="Cross-tenant ML pooling is permanently excluded (DPDP 2023). The rule is structural at every layer."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/40 uppercase tracking-wider text-xs">
                  <th className="pb-3 pr-6 w-48">Layer</th>
                  <th className="pb-3">Enforcement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { layer: 'Query', enforcement: 'Every training/inference query filters tenant_id = $1. Lambda receives exactly one tenantId per invocation — no code path iterates tenants.' },
                  { layer: 'DB Role', enforcement: 'The scoring service always connects through the restricted, tenant-scoped role — never an elevated one. A missing tenant filter returns zero rows, not everyone\'s data.' },
                  { layer: 'Artifacts', enforcement: 'Trained models stored per tenant (model_artifacts.tenant_id NOT NULL). Never merged. Never used as initialization for another tenant.' },
                  { layer: 'Job Table', enforcement: 'ml_inference_jobs.tenant_id NOT NULL + RLS. A job is scoped to one tenant by construction.' },
                  { layer: 'Verification', enforcement: 'Standing test: model trained for tenant A produces identical output whether tenant B rows exist or not. Runs on every deploy.' },
                ].map((row) => (
                  <tr key={row.layer} className="hover:bg-white/[0.02]">
                    <td className="py-4 pr-6 font-mono text-gold-300">{row.layer}</td>
                    <td className="py-4 text-white/60">{row.enforcement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={12} className="rounded-2xl border border-violet-400/30 bg-violet-400/[0.04] p-6 md:p-8">
            <h3 className="heading-serif text-xl mb-4">Accepted Trade-Off: Small Tenants Stay on Heuristic Longer</h3>
            <p className="text-white/60">
              A tenant with 20 customers gets an honest "insufficient history" label rather than a confident prediction borrowed from someone else's business.
              This is the correct trade. Pooling would materially improve small-tenant accuracy, and that is exactly the pressure this rule exists to resist.
            </p>
          </ParallaxCard>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        align="center"
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              See It in Action
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Request a platform briefing to see calibrated churn intelligence live.
            </h3>
            <a href="/briefing" className="btn-primary inline-flex">
              Request briefing
              <ArrowRight size={15} />
            </a>
          </ParallaxCard>
        </Reveal>
      </Section>
    </div>
  )
}