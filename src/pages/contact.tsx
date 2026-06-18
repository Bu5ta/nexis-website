import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | NEXIS";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app this would send data, here we just show success state or could trigger mailto
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/201b03cc-8c09-4875-bb5f-230ae509df78-ZgCp2C4quo8GTdFHSXFndYjWY5ap9F.png" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">GET IN TOUCH</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Tell us what you need built.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Intro & Info */}
            <div>
              <div className="mb-12">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">REACH NEXIS</span>
                <h2 className="text-4xl font-serif font-bold text-white mb-6">Get in touch</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you need risk intelligence, AI orchestration or operational automation, we're ready to talk. Reach the NEXIS team directly at <a href="mailto:hello@nexis.co.bw" className="text-primary hover:underline">hello@nexis.co.bw</a> or call <a href="tel:+26774097745" className="text-primary hover:underline">+267 74097745</a>.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden border border-border bg-card mb-8">
                <img 
                  src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/6747b22a-c733-4a2c-8bf9-0d2c1e3f62e5-nBU20BhdO6AQfPlydfbck04EcKk2f9.png" 
                  alt="NEXIS Office" 
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="p-8">
                  <h3 className="font-serif font-bold text-white text-xl mb-4">Headquarters</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Unit 3, Plot 1632<br />Gaborone International Commerce Park<br />Gaborone, Botswana</p>
                    <p><a href="mailto:hello@nexis.co.bw" className="hover:text-primary transition-colors">hello@nexis.co.bw</a></p>
                    <p><a href="tel:+26774097745" className="hover:text-primary transition-colors">+267 74097745</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card border border-border p-8 md:p-10 rounded-lg">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">SEND A MESSAGE</span>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">One team, one inbox, one clear response. Tell us what you need.</h2>
              <p className="text-muted-foreground mb-8">We build enterprise-grade AI platforms from Botswana. Tell us about your operations, and we'll tell you how our tools fit.</p>

              {isSubmitted ? (
                <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="John Doe" className="bg-background border-border focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@company.com" className="bg-background border-border focus-visible:ring-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+267..." className="bg-background border-border focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company name</Label>
                      <Input id="company" required placeholder="Acme Corp" className="bg-background border-border focus-visible:ring-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" required placeholder="e.g. Financial Services" className="bg-background border-border focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Which product are you interested in?</Label>
                      <Select required>
                        <SelectTrigger className="bg-background border-border focus:ring-primary">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="abi">ABI (AI Orchestration)</SelectItem>
                          <SelectItem value="risksight">RiskSight (Risk Intelligence)</SelectItem>
                          <SelectItem value="primecover">PrimeCover (Insurance)</SelectItem>
                          <SelectItem value="bookmate">BookMate (Hospitality)</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required placeholder="Tell us about your operational challenges..." className="min-h-[120px] bg-background border-border focus-visible:ring-primary" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">YOUR QUESTIONS</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">What everyone else promises, we just built.</h2>
            <p className="text-muted-foreground mb-6">Honest answers about our AI platforms, how they work, and what you can expect when you work with us.</p>
            <a href="mailto:hello@nexis.co.bw" className="text-primary hover:underline font-medium">Ask us anything</a>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How long does it take to get a platform like RiskSight or ABI up and running?", a: "Most deployments are live within 4 to 6 weeks, depending on the complexity of your legacy systems and data cleanliness." },
              { q: "Can a small team in Gaborone handle enterprise-grade AI projects?", a: "Yes. Our lean structure is a deliberate choice. We deploy advanced self-healing orchestration to manage scale without bloating headcount. You get direct access to the engineers, not account managers." },
              { q: "What industries do your platforms actually work for?", a: "Our core deployments are in Insurance, Financial Services, Hospitality, Mining, and Telecommunications, though the ABI Orchestrator is industry-agnostic." },
              { q: "Do I need a dedicated data science team to use NEXIS platforms?", a: "No. Our platforms abstract the complexity. Your operational team receives decision-ready outputs without needing to write queries or train models." },
              { q: "What does support look like for a new client?", a: "We provide complete implementation, continuous model tuning, and direct technical support. We don't hand off a complex tool and walk away." },
              { q: "Is NEXIS just a consulting firm that builds custom software?", a: "No. We are a product company. ABI, RiskSight, PrimeCover, and BookMate are proprietary, self-maintained platforms that we license and deploy." }
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
