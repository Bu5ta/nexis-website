import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  useEffect(() => {
    document.title = "About | NEXIS";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/45959f33-17db-4278-82b0-3fc4e9d6b0a4-fTt9PqJ6ZYP7DSGy1p9JQvuKCFZoC4.png" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">OUR STORY</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Meet the experts behind NEXIS, delivering trusted enterprise AI solutions.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our mission</span>
          <h2 className="text-4xl font-serif font-bold text-white mb-6">What does AI actually do for your operation?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We engineer enterprise platforms that transform complex data into strategic decisions, automate operational workflows with precision and mitigate risk before it impacts your business.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">THE PEOPLE BEHIND THE CODE</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Small team, big reach</h2>
            <p className="text-xl text-muted-foreground">
              What we lack in head count we make up for in precision. Every line of code and every strategy is built by a sharp, focused mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Modise Marumo",
                title: "Founder & Lead Engineer",
                bio: "Modise Marumo architect the ABI Orchestrator, RiskSight Ai, PrimeCover360 Cloud and BookMate Ai platforms bringing enterprise-grade AI to complex industries.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/uploaded-media/IMG_9480-TawbGOzWfm5tc8KIhJfjkrApLIqWO6.JPG"
              },
              {
                name: "Kabelo Sesinyi",
                title: "Data & Risk Analyst",
                bio: "Kabelo Sesinyi sharpens the risk models inside RiskSight and ensures every data pipeline stays clean, fast and auditable for clients.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/generated-media/94eca008-acf1-44ee-a5dd-6f07bced0436-Okw5uBl4u85stDo5ODhd17ERFJ6SdN.png"
              },
              {
                name: "Tshepo Kenosi",
                title: "Business Development - Lead",
                bio: "Tshepo Kenosi leads business development at NEXIS, overseeing client acquisition and strategic customer engagements with a focus on long-term partnership growth.",
                img: "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/9b423be2-e6e5-403e-a18c-ccd32a77dd23-0Pnn2mVnN4n8X84Mepwt3TjMfQSgmc.png"
              }
            ].map((member, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">FROM THE FIELD</span>
            <h2 className="text-4xl font-serif font-bold text-white">What people say about RiskSight</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "RiskSight caught a pattern our spreadsheets had missed for three quarters. That single flag saved us from a bad underwriting decision.",
                author: "Thabo M., Risk Analyst, Insurance, Gaborone"
              },
              {
                quote: "We deployed PrimeCover across two departments in under a week. The claims cycle dropped by nearly half. That is the kind of return we measure.",
                author: "Lerato K., Operations Lead, Financial Services"
              },
              {
                quote: "BookMate took over our booking engine and front desk scheduling in one afternoon. Our guests notice the speed. We notice the zero errors.",
                author: "Bafana D., General Manager, Hospitality, Botswana"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 border border-border rounded-lg bg-card/50">
                <p className="text-lg text-white mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="text-sm font-medium text-muted-foreground">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">FOUR PRODUCTS ONE PLATFORM</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Quick answers about how NEXIS works</h2>
            <p className="text-muted-foreground mb-6">Straight talk on our AI platforms, what they do, and who they serve — no jargon.</p>
            <a href="mailto:hello@nexis.co.bw" className="text-primary hover:underline font-medium">Still have questions? Reach out</a>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What does NEXIS actually do?", a: "We engineer enterprise platforms that transform complex data into strategic decisions, automate operational workflows with precision and mitigate risk before it impacts your business." },
              { q: "Do we need to replace our existing systems?", a: "No. Our platforms are designed to connect with your existing spreadsheets, APIs, databases, and legacy systems." },
              { q: "What industries do you serve?", a: "We primarily serve Insurance, Financial Services, Government, Mining, Telecommunications, and Hospitality." },
              { q: "How fast can we get started?", a: "Many of our deployments go live in a matter of weeks, significantly faster than traditional enterprise software implementations." },
              { q: "Is this built for African enterprise or adapted from Western tools?", a: "Our platforms are built from the ground up in Botswana, specifically engineered for the realities and requirements of African enterprise landscapes." },
              { q: "What support do we get after deployment?", a: "We provide comprehensive monitoring, self-healing pipeline maintenance, and direct support from the engineers who built the platform." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
