import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

export default function Home() {
  useEffect(() => {
    document.title = "NEXIS | Risk Intelligence Engine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "NEXIS delivers decision-centric analytics and risk intelligence for enterprise platforms.");
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/427ae72d-5b89-4461-b1a0-f52737bee921-jg2RkyEf8XWETZWhjfHfZt0ONYdTJ0.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto pt-20">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded text-primary text-xs font-bold tracking-widest uppercase bg-primary/10">
              RISK INTELLIGENCE ENGINE
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Most data tells you what happened. We focus on what happens next.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              We deliver decision-centric analytics that eliminate dashboard noise. Our self-maintaining data pipelines ensure integrity at scale, while advanced models detect emerging anomalies before they escalate — producing clear, actionable outputs your team can rely on.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                <a href="mailto:hello@nexis.co.bw">Email us for a demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-white/5 text-white">
                <a href="tel:+26774097745">Call +26774097745</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Live anomaly detection",
                desc: "Models that flag outliers in real time, not at the next quarterly review.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-media/df67810a-bc4b-443f-a502-344a459d963f-guHzF3E5KxFCMl7YD59JxWChrgSSJP.png"
              },
              {
                title: "Self-healing pipelines",
                desc: "Data ingestion that adapts to schema changes without breaking your flow.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/5e791b31-0e2c-499b-883e-67781b7cf231-5wmEAXOM7dL4gWtcAzhTYbpboz7QlE.png"
              },
              {
                title: "Decision-ready outputs",
                desc: "Dashboards that don't hide the signal behind noise and complex filters.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-media/5228ed5c-4cf9-4713-b1d9-604ae73489d9-c8tbH7spBFrq9NPBLEQJKjiaa4dFnR.png"
              },
              {
                title: "Cross-source unification",
                desc: "One view across CRM, ERP, and operational logs without weeks of ETL work.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/973a5e04-4637-4c5d-98c8-838798df88d7-3DQdTMfIgZiDFubbMPE3KvxGPngVU3.png"
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="group bg-card border border-card-border rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden relative">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-y border-border bg-background/50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Early results</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-2xl">Our first client already has a sharper edge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "RiskSight caught a data anomaly our manual checks missed for three quarters. It flagged it in under an hour. That alone justified the pilot.",
                author: "Elena M., Risk Analyst, Financial Services"
              },
              {
                quote: "We deployed BookMate for a two-week trial at our lodge. Check-in time dropped from 12 minutes to under 3. Guests noticed. Reservations picked up.",
                author: "Thato K., Operations Manager, Boutique Lodge"
              },
              {
                quote: "ABI cut our model training pipeline from 6 hours to 45 minutes. That kind of speed shift changes how your team schedules the day.",
                author: "Daniel S., Data Engineer, Telecommunications"
              }
            ].map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-8 bg-card border border-border rounded-lg">
                <p className="text-lg text-white mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="text-sm font-medium text-muted-foreground">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/427ae72d-5b89-4461-b1a0-f52737bee921-jg2RkyEf8XWETZWhjfHfZt0ONYdTJ0.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">RISK CONTROL</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">How RiskSight changes the math</h2>
            <p className="text-xl text-muted-foreground mb-8">From fragmented alerts to decisive action — our platform delivers real-time intelligence that sharpens your strategic advantage.</p>
            <a href="mailto:hello@nexis.co.bw" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
            {[
              { stat: "60%", label: "Fewer risk events" },
              { stat: "3x", label: "Faster threat identification" },
              { stat: "90%", label: "Compliance checks passed" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-serif font-bold text-white mb-2">{s.stat}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Start building with a demo of ABI.</h2>
          <p className="text-xl text-muted-foreground mb-10">We'll walk through your data workflow and show you what the platform can do for your team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:hello@nexis.co.bw">Email us for a demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-white/5 text-white">
              <a href="tel:+26774097745">Call +26774097745</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">What does AI look like in African enterprise? Here is a window into it.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert insights and practical guidance in applied data analytics, risk management and operational automation while empowering organizations to eliminate operational inefficiencies and prevent financial leakage.
          </p>
        </div>
      </section>
    </div>
  );
}
