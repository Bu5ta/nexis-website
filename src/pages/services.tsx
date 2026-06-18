import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Services() {
  useEffect(() => {
    document.title = "Services & Platforms | NEXIS";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/6464289f-b849-4542-8cb7-25a8f2e3e767-JGrXttODSCgNzLaFUXSGu4XnT6aFvP.png" 
            alt="Services Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">NEXIS PLATFORMS</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Build AI that works for your industry.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ABI Orchestrator */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">AI ORCHESTRATION</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Most platforms just add AI. We orchestrate it.</h2>
            <p className="text-xl text-muted-foreground">
              ABI Orchestrator doesn't bolt on another tool. It connects your data, models, and workflows into a single intelligent chain that runs itself.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Connect any source", desc: "Pull data from spreadsheets, APIs, databases and legacy systems into one pipeline.", img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/c797623e-517c-4f50-9b59-6c1cf5856b4a-h8JFV9huRPRoLEK2qLvtAoa5PbYrsL.png" },
              { title: "Route with rules", desc: "ABI decides which model handles each task, no manual handoffs required.", img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/7b80862f-7a84-4f3b-af3e-0d6c9be30396-j9DDM82mokqcN1Tzc7WfgEgE5AABGH.png" },
              { title: "Monitor in real time", desc: "See every step of the chain, catch errors before they reach end users." },
              { title: "Scale without rewriting", desc: "Add new models or data sources without changing your core orchestration logic." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-card border border-border rounded-lg overflow-hidden group">
                {feature.img && (
                  <div className="h-56 overflow-hidden">
                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RiskSight AI */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#4A9EFF] text-xs font-bold tracking-widest uppercase mb-4 block">RISK INTELLIGENCE</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">RiskSight Ai: The risk intelligence platform your data deserves</h2>
            <p className="text-xl text-muted-foreground">
              RiskSight flags hidden exposures in real time, so your team acts before losses compound. It is built for Botswana's enterprise landscape.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Live exposure mapping", desc: "See risk across all business units on a single, always updated dashboard.", img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/cba4eabf-c989-4ba6-9fb2-cd889555b9d3-TGSLwEkBT4gpBj5hF5klIw4yPb6Zrp.png" },
              { title: "Predictive anomaly detection", desc: "AI that learns your data patterns and warns you before thresholds break.", img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/ecf54450-095e-4ad1-9bed-297948d5578e-Mizsap56kWY5RZsBt9Ft9hmIdJY1IR.png" },
              { title: "Audit-ready reporting", desc: "Generate compliance reports for regulators in minutes, not days.", img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/c19fb541-dcb2-4fcd-bb18-369b03692ec3-AACdEmKZuhKOmWxJlwSRYp5vo2hvjD.png" },
              { title: "Scenario simulation", desc: "Model what-if scenarios — economic shifts, supply chain shocks, regulatory changes — without real-world cost." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-background border border-border rounded-lg overflow-hidden group">
                {feature.img && (
                  <div className="h-56 overflow-hidden">
                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PrimeCover360 Cloud */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#6C7AFF] text-xs font-bold tracking-widest uppercase mb-4 block">PRIMECOVER360 CLOUD</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Insurance management you can see and trust</h2>
            <p className="text-xl text-muted-foreground">
              PrimeCover automates the heavy lifting of insurance administration from policy issuance to claims processing with traceable, auditable AI logic every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Policy issuance in minutes", desc: "Generate and issue compliant policies without manual data entry or approval bottlenecks." },
              { title: "Claims automation", desc: "Route, assess and close claims faster using AI logic trained on your data." },
              { title: "Full audit trails", desc: "Every decision logged, timestamped and ready for regulator review." },
              { title: "Multi-line support", desc: "Handle life, health, motor and commercial lines from a single platform." }
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-card/30">
                <h3 className="text-xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BookMate AI */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#00CCAA] text-xs font-bold tracking-widest uppercase mb-4 block">BOOKMATE AI</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Hospitality automation that guests feel</h2>
            <p className="text-xl text-muted-foreground">
              BookMate connects your front desk, booking engine and operational systems into one responsive platform that runs the repetitive work so your staff handles the exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Instant check-in", desc: "Guests check in from their phone or a kiosk. Front desk time drops by 75%." },
              { title: "Smart availability", desc: "BookMate syncs across OTAs, your website and walk-ins. No double bookings." },
              { title: "Revenue intelligence", desc: "Dynamic pricing nudges based on occupancy, season and competitor rates." },
              { title: "Ops automation", desc: "Housekeeping schedules, maintenance alerts and guest requests managed automatically." }
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-background/50">
                <h3 className="text-xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
