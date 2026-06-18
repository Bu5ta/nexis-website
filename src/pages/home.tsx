import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/three/ParticleField";
import { TiltCard } from "@/components/three/TiltCard";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const products = [
  {
    id: "risksight",
    label: "RISK INTELLIGENCE",
    color: "#00D4FF",
    name: "RiskSight AI",
    tagline: "360° Enterprise Intelligence for C-Suite Leaders",
    desc: "A real-time AI-powered Business Intelligence Dashboard that gives executives a complete view of organisational anomalies, cost leaks, governance risks and compliance gaps — before they become headlines.",
    sectors: ["Government & Ministries", "Parastatals (BPC, WUC, BURS)", "Financial Services", "Mining (Debswana, BCL)"],
    img: "/risksight-dashboard.png",
  },
  {
    id: "riskiq",
    label: "GRC PLATFORM",
    color: "#4A9EFF",
    name: "Risk-IQ",
    tagline: "Kill the Excel Risk Register. For Good.",
    desc: "A multi-tenant SaaS GRC platform that automates the entire risk management lifecycle — from departmental risk champions to the Head of Risk and straight into an EXCO/Board-ready dashboard. AI analytics embedded throughout.",
    sectors: ["Financial Services", "Government Parastatals", "Mining & Resources", "Telecommunications"],
    img: "/riskiq-executives.jpg",
  },
  {
    id: "primecover",
    label: "INSURANCE TECH",
    color: "#6C7AFF",
    name: "PrimeCover360 Cloud",
    tagline: "Full-Stack Insurance Management. NBFIRA-Ready.",
    desc: "A complete insurance management system for underwriters and brokers covering short-term and long-term insurance. AI analytics, full compliance with Botswana regulatory requirements, at a fraction of the cost of incumbent systems.",
    sectors: ["Short-term Insurers", "Long-term Insurers", "Insurance Brokers", "Reinsurance"],
    img: "/primecover-dashboard.png",
  },
  {
    id: "bookmate",
    label: "HOSPITALITY AI",
    color: "#00CCAA",
    name: "BookMate AI",
    tagline: "Scan. Chat. Book. That Simple.",
    desc: "A WhatsApp-first AI accommodation assistant. Guests scan a QR code, text 'Hello', and BookMate handles everything — town, availability, number of guests, price range, confirmation. Zero apps, zero friction.",
    sectors: ["Boutique Lodges", "Guesthouses", "Hotel Groups", "B&Bs"],
    img: "/bookmate-lodge.png",
  },
];

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-serif font-bold text-white mb-2"
      >
        {value}
      </motion.div>
      <div className="text-white/50 uppercase tracking-widest text-xs">{label}</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "NEXIS | Next Intelligence Systems";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "NEXIS builds AI-powered enterprise software for Botswana and Africa — RiskSight AI, Risk-IQ, PrimeCover360 Cloud and BookMate AI.");
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3-D particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleField nodeCount={90} className="opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060C1A]/40 via-transparent to-[#060C1A]" />
        </div>

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.3) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "perspective(600px) rotateX(20deg)",
            transformOrigin: "50% 0%",
          }}
        />

        <div className="container relative z-10 px-6 mx-auto pt-28 pb-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-xs font-bold tracking-widest uppercase bg-[#00D4FF]/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              AI-Powered Enterprise Software · Built in Botswana
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.05]">
              Next-level intelligence.{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #00D4FF, #4A9EFF)" }}>
                Built for Africa.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              NEXIS (Next Intelligence Systems) is a Gaborone-based startup building AI-powered platforms for risk intelligence, GRC, insurance management and hospitality automation — tailored for Botswana's enterprise landscape.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 font-bold tracking-wider hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all">
                <a href="mailto:hello@nexis.co.bw">Request a Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white hover:border-[#00D4FF]/40 transition-all">
                <Link href="/services">Explore Products →</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-white uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── PRODUCTS GRID ────────────────────────────────────────── */}
      <section className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-20">
            <motion.span variants={fadeUp} className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-3 block">Our Flagship Products</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white">Four platforms. One mission.</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 mt-4 max-w-xl mx-auto">Proprietary SaaS solutions engineered from the ground up for the realities of African enterprise.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <TiltCard className="group bg-[#0A1628] border border-white/8 rounded-xl overflow-hidden h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                      {p.label}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1" style={{ color: p.color }}>{p.name}</h3>
                    <p className="text-sm font-semibold text-white/70 mb-4">{p.tagline}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.sectors.map((s) => (
                        <span key={s} className="text-[10px] tracking-wide text-white/40 border border-white/10 px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/5">
              <Link href="/services">Deep dive into each product →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-5">
          <ParticleField nodeCount={40} />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <StatCounter value="4" label="Flagship AI Platforms" />
            <StatCounter value="5+" label="Industries Served" />
            <StatCounter value="100%" label="Built in Botswana" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
              <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-3 block">From the Field</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Real results. Real clients.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "RiskSight flagged a procurement anomaly that our internal audit had missed for two consecutive quarters. That single alert justified the entire pilot budget.", author: "Head of Risk, Financial Services Institution, Gaborone" },
                { quote: "BookMate took over our lodge's reservation system in one afternoon. Guests scan, WhatsApp, and it handles the rest. Check-in time dropped from 12 minutes to under 3.", author: "Operations Manager, Boutique Lodge, Kasane" },
                { quote: "Risk-IQ replaced nine separate Excel risk registers across our departments. The Head of Risk now has a live consolidated view. It would have taken three months to build manually.", author: "CFO, Parastatal Organisation, Botswana" },
              ].map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <TiltCard className="p-8 bg-[#0A1628] border border-white/8 rounded-xl h-full" intensity={6}>
                    <div className="text-[#00D4FF]/40 text-4xl font-serif leading-none mb-4">"</div>
                    <p className="text-white/80 text-base leading-relaxed mb-6">{t.quote}</p>
                    <p className="text-xs text-white/40 font-medium">— {t.author}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/427ae72d-5b89-4461-b1a0-f52737bee921-jg2RkyEf8XWETZWhjfHfZt0ONYdTJ0.png" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#060C1A]/80" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to build with AI?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-10">
              We're a lean, fast-moving team. Tell us your problem — we'll show you exactly which platform solves it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all">
                <a href="mailto:hello@nexis.co.bw">Email us for a demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                <a href="tel:+26774097745">Call +267 74097745</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
