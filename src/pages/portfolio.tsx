import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/three/ParticleField";
import { TiltCard } from "@/components/three/TiltCard";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } } as const;
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const products = [
  {
    name: "RiskSight AI",
    label: "Risk Intelligence",
    color: "#00D4FF",
    tagline: "360° Enterprise Intelligence for C-Suite Leaders",
    what: "A multi-tenant SaaS Business Intelligence Dashboard that surfaces organisational anomalies, cost leaks, governance risks and compliance gaps in real time — giving executives the full picture before auditors find it.",
    industries: ["Government & Ministries", "Parastatals", "Financial Services", "Mining & Resources"],
    img: "/risksight-dashboard.png",
    highlights: ["AI anomaly detection", "Cost leak surveillance", "Governance risk monitoring", "One-click audit reports"],
  },
  {
    name: "Risk-IQ",
    label: "GRC Platform",
    color: "#4A9EFF",
    tagline: "End-to-End GRC — From Risk Champion to Board",
    what: "Replaces the endless cycle of Excel-based risk registers with an automated, multi-level GRC platform. Departmental risk champions log risks directly. The Head of Risk sees a live consolidated view. EXCO gets a real-time board-ready dashboard.",
    industries: ["Financial Services", "Government Depts", "Parastatals", "Telecommunications"],
    img: "/riskiq-executives.jpg",
    highlights: ["Multi-level risk workflows", "AI risk scoring", "Regulatory compliance mapping", "EXCO / Board dashboards"],
  },
  {
    name: "PrimeCover360 Cloud",
    label: "Insurance Technology",
    color: "#6C7AFF",
    tagline: "Full-Stack Insurance Management. NBFIRA-Ready.",
    what: "A complete insurance management system for Botswana's short-term and long-term insurers and brokers. Policy issuance, claims processing, underwriting, broker management and NBFIRA compliance — all in one platform, at a price point local operators can actually afford.",
    industries: ["Short-term Insurers", "Life & Long-term Insurers", "Insurance Brokers", "Funeral Assurers"],
    img: "/primecover-dashboard.png",
    highlights: ["Full policy lifecycle", "AI-assisted claims", "NBFIRA compliance", "Embedded BI analytics"],
  },
  {
    name: "BookMate AI",
    label: "Hospitality AI",
    color: "#00CCAA",
    tagline: "WhatsApp-First Accommodation Booking",
    what: "A WhatsApp-native AI booking assistant. Guests scan a QR code, send one message, and BookMate handles the entire booking conversation — availability, pricing, confirmation, and check-in details. No apps, no websites, no manual input.",
    industries: ["Boutique Lodges", "Guesthouses & B&Bs", "Hotel Groups", "Self-Catering & Safari"],
    img: "/bookmate-lodge.png",
    highlights: ["WhatsApp-native UX", "QR code entry point", "AI conversation engine", "Multi-property management"],
  },
];

export default function Portfolio() {
  useEffect(() => { document.title = "Our Products & Work | NEXIS"; }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/b803fc21-220e-4ca1-b68e-37de0f3e8d6b-Obi4FHA5SWrxToddqEgyiXMuQ1XvlQ.png" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/60 to-transparent" />
          <div className="absolute inset-0 z-0 opacity-25"><ParticleField nodeCount={60} /></div>
        </div>
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.span variants={fadeUp} className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">AI at Work</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Four platforms. Built. Deployed. Running.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mt-4 max-w-2xl">
              Every product in our portfolio has been engineered to production-grade standards and deployed in live operational environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT DEEP DIVES ────────────────────────────────────── */}
      <section className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <motion.span variants={fadeUp} className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-3 block">Product Portfolio</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-white">Designed in Gaborone. Built for Africa.</motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Button asChild variant="outline" className="border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/5">
                <a href="mailto:hello@nexis.co.bw">Discuss a deployment</a>
              </Button>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-12">
            {products.map((p, i) => (
              <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <TiltCard className="bg-[#0A1628] border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors" intensity={4}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent lg:hidden" />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border w-fit mb-4" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                        {p.label}
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">{p.name}</h3>
                      <p className="font-semibold mb-4" style={{ color: p.color }}>{p.tagline}</p>
                      <p className="text-white/50 leading-relaxed text-sm mb-6">{p.what}</p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {p.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-white/60">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                            {h}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.industries.map((s) => (
                          <span key={s} className="text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY COVERAGE ─────────────────────────────────────── */}
      <section className="py-24 bg-[#080F1E] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Industry Coverage</span>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Sectors we serve.</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              {[
                "Government & Ministries",
                "Parastatals (BPC · WUC · BURS · BTC · BPOPF)",
                "Financial Services & Banking",
                "Insurance & Assurance",
                "Mining & Resources (Debswana · BCL · Khoemacau)",
                "Telecommunications",
                "Hospitality & Tourism",
                "SMEs & Professional Services",
              ].map((s) => (
                <span key={s} className="px-5 py-2.5 rounded-full border border-white/10 bg-[#0A1628] text-sm text-white/60 hover:border-[#00D4FF]/30 hover:text-[#00D4FF]/80 transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Client Reviews</span>
              <h2 className="text-4xl font-serif font-bold text-white">We ship platforms that work.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { quote: "RiskSight caught a procurement anomaly our internal audit had missed for three consecutive quarters. That single flag saved the organisation more than the annual licence fee.", author: "Head of Risk, Financial Services Institution, Gaborone" },
                { quote: "Risk-IQ replaced nine separate Excel risk registers across our departments. The Head of Risk now has a live consolidated view instead of a weekly email chain.", author: "CFO, Parastatal Organisation, Botswana" },
                { quote: "PrimeCover360 went live in six weeks. Our claims team could see the difference in the first week. Policy issuance time dropped by 65% — with full audit trails for NBFIRA.", author: "Operations Lead, Insurance Company, Gaborone" },
                { quote: "BookMate took over our reservation system and front desk scheduling in one afternoon. Guests scan, WhatsApp back and forth, and they're booked. No staff involvement required.", author: "General Manager, Boutique Lodge, Kasane, Botswana" },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <TiltCard className="p-8 bg-[#0A1628] border border-white/8 rounded-xl h-full hover:border-white/15 transition-colors" intensity={6}>
                    <div className="text-[#00D4FF]/30 text-4xl font-serif leading-none mb-4">"</div>
                    <p className="text-white/70 text-base leading-relaxed mb-6">{t.quote}</p>
                    <p className="text-xs text-white/40">— {t.author}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
