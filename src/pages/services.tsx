import { useEffect } from "react";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/three/ParticleField";
import { TiltCard } from "@/components/three/TiltCard";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } } as const;
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function Services() {
  useEffect(() => { document.title = "Products | NEXIS — Next Intelligence Systems"; }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/6464289f-b849-4542-8cb7-25a8f2e3e767-JGrXttODSCgNzLaFUXSGu4XnT6aFvP.png" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/60 to-transparent" />
          <div className="absolute inset-0 z-0 opacity-20"><ParticleField nodeCount={50} /></div>
        </div>
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Our Flagship Platforms</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Four products. Zero fluff.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              Each platform solves a real, painful enterprise problem — built from scratch for Botswana's industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 1. RISKSIGHT AI ───────────────────────────────────────── */}
      <section id="risksight" className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-3xl mb-16">
              <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-3 block">Product 01 · Risk Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">RiskSight AI</h2>
              <p className="text-xl text-[#00D4FF]/80 font-medium mb-4">360° Enterprise Intelligence Dashboard for C-Suite & Senior Leadership</p>
              <p className="text-white/60 text-lg leading-relaxed">
                Your finance team found a cost leak — six months after it started. Your internal audit flagged a governance gap — after the regulator did. RiskSight AI changes that. It's a multi-tenant SaaS platform that gives executives a complete, real-time view of organisational anomalies, cost leaks, compliance risks and operational irregularities across every business unit — before they escalate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <motion.div variants={fadeUp}>
                <img src="/risksight-dashboard.png" alt="RiskSight AI Dashboard" className="rounded-xl border border-[#00D4FF]/20 w-full object-cover shadow-[0_0_40px_rgba(0,212,255,0.1)] hover:shadow-[0_0_60px_rgba(0,212,255,0.2)] transition-all" />
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 gap-4">
                {[
                  { feat: "Executive 360° View", detail: "One dashboard showing anomalies, cost overruns, procurement irregularities and governance gaps across all departments and entities." },
                  { feat: "AI Anomaly Detection", detail: "Models trained on your data flag unusual patterns — duplicate payments, unexplained variances, budget deviations — in real time, not at year-end audit." },
                  { feat: "Cost Leak Surveillance", detail: "Automatically tracks where money is leaking: ghost vendors, inflated contracts, unapproved expenditure, subsidy abuse." },
                  { feat: "Governance Risk Monitoring", detail: "Tracks compliance obligations, board resolutions, policy adherence and regulatory deadlines — and escalates non-compliance automatically." },
                  { feat: "Audit-Ready Reports", detail: "One-click compliance reports formatted for PPADB, NBFIRA, DCEC or internal audit committees. No more spreadsheet marathons." },
                ].map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="p-5 bg-[#0A1628] border border-[#00D4FF]/10 rounded-lg hover:border-[#00D4FF]/30 transition-colors">
                    <h4 className="font-bold text-white mb-1">{f.feat}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{f.detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="p-6 bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-xl">
              <p className="text-sm font-bold text-[#00D4FF] uppercase tracking-widest mb-3">Who it's built for</p>
              <div className="flex flex-wrap gap-3">
                {["Government Ministries (Finance, Health, Education)", "Parastatals — BPC, WUC, BURS, BTC, BPOPF", "Banks & Financial Institutions — BNDB, BBS, ABsa BW", "Mining Sector — Debswana, BCL, Khoemacau", "Insurance Companies", "Large Private Sector Groups"].map((s) => (
                  <span key={s} className="text-xs text-[#00D4FF]/80 border border-[#00D4FF]/20 px-3 py-1 rounded-full bg-[#00D4FF]/5">{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. RISK-IQ ────────────────────────────────────────────── */}
      <section id="riskiq" className="py-28 bg-[#080F1E] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-3xl mb-16">
              <span className="text-[#4A9EFF] text-xs font-bold tracking-widest uppercase mb-3 block">Product 02 · GRC Platform</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Risk-IQ</h2>
              <p className="text-xl text-[#4A9EFF]/80 font-medium mb-4">End-to-End GRC Platform — From Risk Champion to Board Dashboard</p>
              <p className="text-white/60 text-lg leading-relaxed">
                Every organisation in Botswana managing risk still runs on spreadsheets. A different Excel file per department, emailed to a risk champion, who consolidates into another Excel for the Head of Risk, who then manually extracts for the EXCO deck. Risk-IQ automates the entire GRC lifecycle — with AI analytics embedded at every level — so that risk data flows from the frontline to the boardroom in real time, not quarterly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <motion.div variants={stagger} className="grid grid-cols-1 gap-4 order-2 lg:order-1">
                {[
                  { feat: "Departmental Risk Registers", detail: "Each department manages its risks directly in the platform. No more emailed Excel files, version confusion or data loss." },
                  { feat: "Risk Champion Workflows", detail: "Designated risk champions receive automated task assignments, review cycles and escalation alerts — all tracked and auditable." },
                  { feat: "Head of Risk Consolidated View", detail: "A live consolidated risk register with heat maps, trends, overdue items and risk appetite breaches — updated in real time by all departments." },
                  { feat: "EXCO / Board Dashboard", detail: "Executive-level visualisations: top risks, risk trajectory, control effectiveness, KRI breaches and regulatory compliance status." },
                  { feat: "AI Risk Scoring", detail: "Machine learning models score and prioritise risks based on historical patterns, industry benchmarks and your organisation's risk appetite." },
                  { feat: "Regulatory Compliance Mapping", detail: "Maps obligations to Bank of Botswana, NBFIRA, DCEC and sector-specific regulators. Tracks due dates, ownership and evidence." },
                ].map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="p-5 bg-[#0A1628] border border-[#4A9EFF]/10 rounded-lg hover:border-[#4A9EFF]/30 transition-colors">
                    <h4 className="font-bold text-white mb-1">{f.feat}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{f.detail}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="order-1 lg:order-2">
                <img src="/riskiq-executives.jpg" alt="Risk-IQ — African professionals in a GRC governance meeting" className="rounded-xl border border-[#4A9EFF]/20 w-full object-cover shadow-[0_0_40px_rgba(74,158,255,0.1)] hover:shadow-[0_0_60px_rgba(74,158,255,0.2)] transition-all" />
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="p-6 bg-[#4A9EFF]/5 border border-[#4A9EFF]/20 rounded-xl">
              <p className="text-sm font-bold text-[#4A9EFF] uppercase tracking-widest mb-3">Who it replaces Excel for</p>
              <div className="flex flex-wrap gap-3">
                {["Financial Services & Banks", "Government Departments & Ministries", "Parastatals with multiple risk units", "Mining & Energy Sector", "Telecommunications Operators", "Large Insurance Groups"].map((s) => (
                  <span key={s} className="text-xs text-[#4A9EFF]/80 border border-[#4A9EFF]/20 px-3 py-1 rounded-full bg-[#4A9EFF]/5">{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRIMECOVER360 CLOUD ────────────────────────────────── */}
      <section id="primecover" className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-3xl mb-16">
              <span className="text-[#6C7AFF] text-xs font-bold tracking-widest uppercase mb-3 block">Product 03 · Insurance Technology</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">PrimeCover360 Cloud</h2>
              <p className="text-xl text-[#6C7AFF]/80 font-medium mb-4">Full-Stack Insurance Management. NBFIRA-Compliant. Cost-Effective.</p>
              <p className="text-white/60 text-lg leading-relaxed">
                Incumbent insurance management systems in Botswana are expensive, complex to implement and built for foreign markets. PrimeCover360 Cloud is a multi-tenant SaaS insurance management platform built specifically for Botswana's short-term and long-term insurers and brokers — with full NBFIRA compliance, AI-powered analytics and reporting, at a price point that makes sense for local operators.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <img src="/primecover-dashboard.png" alt="PrimeCover360 Cloud Dashboard" className="rounded-xl border border-[#6C7AFF]/20 w-full object-cover shadow-[0_0_40px_rgba(108,122,255,0.1)] hover:shadow-[0_0_60px_rgba(108,122,255,0.2)] transition-all" />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Policy Management", desc: "Issue, endorse, renew and lapse policies across all classes of business. Short-term (motor, property, liability) and long-term (life, group life, funeral) in one platform." },
                { title: "Claims Processing", desc: "Full claims lifecycle management: first notification, assessment, adjudication, settlement and recovery. AI-assisted fraud detection flags suspicious claims patterns." },
                { title: "Underwriting Engine", desc: "Configurable underwriting rules, premium calculation, rating tables and risk acceptance criteria — managed by your team without developer intervention." },
                { title: "Broker Management", desc: "Multi-broker portal with commission tracking, business submission, portfolio reporting and performance dashboards for each broker." },
                { title: "Reinsurance Module", desc: "Facultative and treaty reinsurance tracking, bordereau generation and recoveries management — all automated and audit-trailed." },
                { title: "NBFIRA Compliance", desc: "Built-in regulatory reporting for the Non-Bank Financial Institutions Regulatory Authority. Solvency monitoring, statutory returns and prescribed investment tracking." },
                { title: "AI Analytics & Reporting", desc: "Embedded BI dashboards: loss ratios, combined ratios, claims frequency, reserve adequacy, portfolio mix analysis — updated in real time." },
                { title: "Client Portal", desc: "Self-service client portal for policy documents, claims status, premium receipts and endorsement requests — branded to your company." },
                { title: "Integration-Ready", desc: "REST APIs for connecting to payment gateways, banks, external assessors, medical aid schemes and third-party data sources." },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <TiltCard className="p-6 bg-[#0A1628] border border-[#6C7AFF]/15 rounded-xl hover:border-[#6C7AFF]/40 transition-colors h-full" intensity={8}>
                    <h4 className="font-bold text-white mb-2">{f.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="p-6 bg-[#6C7AFF]/5 border border-[#6C7AFF]/20 rounded-xl">
              <p className="text-sm font-bold text-[#6C7AFF] uppercase tracking-widest mb-3">Designed for</p>
              <div className="flex flex-wrap gap-3">
                {["Short-term Insurers", "Long-term / Life Insurers", "Composite Insurance Groups", "Insurance Brokers & Agents", "Funeral Assurers", "Micro-insurance Operators"].map((s) => (
                  <span key={s} className="text-xs text-[#6C7AFF]/80 border border-[#6C7AFF]/20 px-3 py-1 rounded-full bg-[#6C7AFF]/5">{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. BOOKMATE AI ────────────────────────────────────────── */}
      <section id="bookmate" className="py-28 bg-[#080F1E] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="text-[#00CCAA] text-xs font-bold tracking-widest uppercase mb-3 block">Product 04 · Hospitality AI</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">BookMate AI</h2>
                <p className="text-xl text-[#00CCAA]/80 font-medium mb-6">WhatsApp-First Accommodation Scheduling. Scan. Chat. Booked.</p>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Guests don't download apps. Guests don't fill in web forms. Guests open WhatsApp. BookMate AI meets them exactly there. Scan the QR code, text "Hello", and an AI assistant handles the full booking conversation — town, accommodation type, number of guests, price range, dates and confirmation. Automated. Instant. No staff required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { feat: "WhatsApp-Native", detail: "Zero app downloads. Guests use WhatsApp — Africa's most-used messaging platform." },
                    { feat: "AI Conversation Engine", detail: "Natural language understanding handles queries, availability checks, price quotes and confirmations automatically." },
                    { feat: "QR Code Access", detail: "Place the QR code at your front desk, on your marketing material or in listings. One scan starts the booking flow." },
                    { feat: "Multi-Property Ready", detail: "Manage availability across multiple properties, rooms or unit types from one dashboard." },
                    { feat: "Instant Confirmation", detail: "Guests receive booking confirmation, property details and check-in instructions automatically via WhatsApp." },
                    { feat: "Smart Filters", detail: "BookMate qualifies guests by location preference, number of guests, budget and dates — before a human ever gets involved." },
                  ].map((f, i) => (
                    <div key={i} className="p-4 bg-[#0A1628] border border-[#00CCAA]/15 rounded-lg hover:border-[#00CCAA]/40 transition-colors">
                      <h4 className="font-bold text-white text-sm mb-1">{f.feat}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl opacity-20 blur-xl" style={{ background: "radial-gradient(circle, #00CCAA, transparent)" }} />
                  <div className="relative bg-[#0A1628] border border-[#00CCAA]/30 rounded-2xl p-8 text-center">
                    <p className="text-[#00CCAA] text-xs font-bold tracking-widest uppercase mb-4">Try BookMate AI</p>
                    <div className="w-48 h-48 mx-auto rounded-lg border border-[#00CCAA]/30 bg-[#0A1628] flex flex-col items-center justify-center gap-2 px-4 text-center">
                      <span className="text-[#00CCAA]/70 text-xs uppercase tracking-widest">QR code coming soon</span>
                      <a href="mailto:hello@nexis.co.bw" className="text-white/60 text-xs underline hover:text-[#00CCAA] transition-colors">Message us for early access</a>
                    </div>
                    <p className="text-white/60 text-sm mt-4">Scan on mobile · Text "Hello" · Get booked</p>
                  </div>
                </div>

                <div className="p-6 bg-[#00CCAA]/5 border border-[#00CCAA]/20 rounded-xl w-full">
                  <p className="text-sm font-bold text-[#00CCAA] uppercase tracking-widest mb-3">Who it's for</p>
                  <div className="flex flex-wrap gap-2">
                    {["Boutique Lodges", "Guesthouses & B&Bs", "Safari Camps", "Hotel Groups", "Self-Catering Units", "Student Accommodation"].map((s) => (
                      <span key={s} className="text-xs text-[#00CCAA]/80 border border-[#00CCAA]/20 px-3 py-1 rounded-full bg-[#00CCAA]/5">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. ABI V1.0 (INTERNAL) ────────────────────────────────── */}
      <section id="abi" className="py-20 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-3 block">Internal System · Not for Sale</span>
              <h2 className="text-3xl font-serif font-bold text-white/60 mb-4">Abi v1.0</h2>
              <p className="text-white/40 leading-relaxed max-w-2xl mx-auto">
                Abi is NEXIS's internal AI orchestrator — the intelligence layer that powers our operations, coordinates our development pipelines and keeps us moving faster than a team ten times our size. Think Jarvis, built for a product company. Abi is not available externally.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Not sure which product fits?</h2>
          <p className="text-white/60 text-lg mb-8">Tell us your problem. We'll tell you exactly which platform solves it — and show you a live demo.</p>
          <a href="mailto:hello@nexis.co.bw" className="inline-block px-8 py-4 rounded font-bold tracking-wider text-sm bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all">
            Book a Discovery Call
          </a>
        </div>
      </section>

    </div>
  );
}
