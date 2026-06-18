import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ParticleField } from "@/components/three/ParticleField";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => { document.title = "Contact NEXIS | Next Intelligence Systems"; }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      company: data.get("company") as string,
      industry: data.get("industry") as string,
      product: selectedProduct,
      message: data.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/201b03cc-8c09-4875-bb5f-230ae509df78-ZgCp2C4quo8GTdFHSXFndYjWY5ap9F.png" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/60 to-transparent" />
          <div className="absolute inset-0 opacity-20"><ParticleField nodeCount={40} /></div>
        </div>
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Get in Touch</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Tell us what you need built.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#060C1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-12">
                <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Reach NEXIS</span>
                <h2 className="text-4xl font-serif font-bold text-white mb-6">Let's talk.</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Whether you're fighting a broken Excel GRC process, trying to get ahead of risk before the auditors do, managing insurance the hard way, or looking to automate your accommodation bookings — we have a platform for it. Reach out directly.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-white/8 bg-[#0A1628] mb-8">
                <img src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/6747b22a-c733-4a2c-8bf9-0d2c1e3f62e5-nBU20BhdO6AQfPlydfbck04EcKk2f9.png" alt="Gaborone" className="w-full h-48 object-cover opacity-70" />
                <div className="p-8">
                  <h3 className="font-bold text-white text-lg mb-4">Headquarters</h3>
                  <div className="space-y-3 text-sm text-white/50">
                    <p>Gaborone, Botswana</p>
                    <p><a href="mailto:hello@nexis.co.bw" className="text-[#00D4FF] hover:underline">hello@nexis.co.bw</a></p>
                    <p><a href="tel:+26774097745" className="hover:text-[#00D4FF] transition-colors">+267 74097745</a></p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                {[
                  { product: "RiskSight AI", color: "#00D4FF", desc: "C-Suite risk intelligence" },
                  { product: "Risk-IQ", color: "#4A9EFF", desc: "GRC & compliance platform" },
                  { product: "PrimeCover360", color: "#6C7AFF", desc: "Insurance management" },
                  { product: "BookMate AI", color: "#00CCAA", desc: "Hospitality automation" },
                ].map((p) => (
                  <div key={p.product} className="p-4 bg-[#0A1628] border border-white/8 rounded-xl hover:border-white/15 transition-colors">
                    <div className="w-2 h-2 rounded-full mb-2" style={{ backgroundColor: p.color }} />
                    <p className="font-bold text-white text-sm">{p.product}</p>
                    <p className="text-white/40 text-xs mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-[#0A1628] border border-white/8 p-8 md:p-10 rounded-xl">
                <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Send a Message</span>
                <h2 className="text-2xl font-serif font-bold text-white mb-2">One team. One inbox. One clear response.</h2>
                <p className="text-white/50 text-sm mb-8">We build enterprise AI for Botswana. Tell us your operational challenge and we'll show you exactly how one of our platforms solves it.</p>

                {status === "sent" ? (
                  <div className="p-8 bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-xl text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#00D4FF] text-xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-white/50 text-sm">We'll be in touch shortly. You can also reach us at <a href="mailto:hello@nexis.co.bw" className="text-[#00D4FF]">hello@nexis.co.bw</a></p>
                    <Button variant="outline" className="mt-6 border-white/20 text-white hover:bg-white/5" onClick={() => { setStatus("idle"); setSelectedProduct(""); }}>Send another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/60 text-xs font-medium uppercase tracking-wider">Name</Label>
                        <Input name="name" id="name" required placeholder="Your full name" className="bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/60 text-xs font-medium uppercase tracking-wider">Email</Label>
                        <Input name="email" id="email" type="email" required placeholder="you@company.com" className="bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white/60 text-xs font-medium uppercase tracking-wider">Phone</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+267 ..." className="bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white/60 text-xs font-medium uppercase tracking-wider">Organisation</Label>
                        <Input name="company" id="company" required placeholder="Company or institution" className="bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-white/60 text-xs font-medium uppercase tracking-wider">Industry</Label>
                        <Input name="industry" id="industry" placeholder="e.g. Financial Services" className="bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white/60 text-xs font-medium uppercase tracking-wider">Product of Interest</Label>
                        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                          <SelectTrigger className="bg-[#060C1A] border-white/10 focus:ring-[#00D4FF]/30 text-white">
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0A1628] border-white/10">
                            <SelectItem value="RiskSight AI — Risk Intelligence">RiskSight AI — Risk Intelligence</SelectItem>
                            <SelectItem value="Risk-IQ — GRC Platform">Risk-IQ — GRC Platform</SelectItem>
                            <SelectItem value="PrimeCover360 — Insurance">PrimeCover360 — Insurance</SelectItem>
                            <SelectItem value="BookMate AI — Hospitality">BookMate AI — Hospitality</SelectItem>
                            <SelectItem value="Not sure — advise me">Not sure — advise me</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/60 text-xs font-medium uppercase tracking-wider">What's the challenge?</Label>
                      <Textarea name="message" id="message" required placeholder="Tell us about your operational challenge or what you're trying to solve..." className="min-h-[120px] bg-[#060C1A] border-white/10 focus-visible:ring-[#00D4FF]/30 text-white placeholder:text-white/25" />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Couldn't deliver the message right now. Please email us directly at{" "}
                        <a href="mailto:hello@nexis.co.bw" className="text-[#00D4FF] underline">hello@nexis.co.bw</a>
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="w-full bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#080F1E] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4 block">Before You Write</span>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Common questions.</h2>
              <p className="text-white/50 mb-6">Honest answers about working with NEXIS and what to expect.</p>
              <a href="mailto:hello@nexis.co.bw" className="text-[#00D4FF] hover:underline font-medium text-sm">Ask us anything →</a>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-2">
              {[
                { q: "How long does it take to get a platform live?", a: "BookMate AI: days. RiskSight AI and Risk-IQ: 4–6 weeks for a standard deployment. PrimeCover360 Cloud: 8–12 weeks for full implementation. We don't do 12-month enterprise software rollouts." },
                { q: "Can a small Gaborone team actually handle enterprise-grade AI projects?", a: "Yes. Our lean structure is deliberate. We use AI-assisted development tools throughout our stack (yes, we vibe-code). You get direct access to the engineer who built the platform — not a project manager who has never seen the code." },
                { q: "Do I need a data science team or technical staff to use your platforms?", a: "No. Our platforms abstract the complexity. Your team gets decision-ready dashboards and automated workflows. You don't write queries, train models or maintain pipelines. We do that." },
                { q: "What does support look like after deployment?", a: "Continuous model tuning, platform updates and direct access to the engineering team. We don't hand off a complex tool and disappear. Our clients have our numbers." },
                { q: "Is NEXIS a consulting firm or a product company?", a: "Product company. RiskSight AI, Risk-IQ, PrimeCover360 and BookMate AI are proprietary platforms we license and deploy. We do not build custom bespoke systems for each client — we configure and deploy our existing products." },
                { q: "What sectors do you currently serve in Botswana?", a: "Financial services, insurance, government and parastatals, mining, telecommunications and hospitality. If your sector isn't listed — reach out. Our core platforms (especially Risk-IQ and RiskSight AI) are sector-adaptable." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/8 rounded-xl px-6 bg-[#0A1628] data-[state=open]:border-[#00D4FF]/30">
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-[#00D4FF] transition-colors py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
