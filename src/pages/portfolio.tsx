import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Portfolio() {
  useEffect(() => {
    document.title = "Work & Deployments | NEXIS";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/b803fc21-220e-4ca1-b68e-37de0f3e8d6b-Obi4FHA5SWrxToddqEgyiXMuQ1XvlQ.png" 
            alt="Portfolio Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">AI AT WORK</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
              Smart AI orchestration. Seamless operations. Uncompromising reliability.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Deployments Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">LIVE DEPLOYMENTS</span>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">4 platforms live across 6 industries</h2>
              <p className="text-xl text-muted-foreground">
                Each NEXIS platform has been successfully deployed and proven in live operational environments.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="mailto:hello@nexis.co.bw">Discuss a deployment with us</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/92d8c3c0-c7d6-4b5a-bbf3-9cec8f3ffcf0-Ex8gpQxYnmgngUeq1LfpFG7rUUxnq2.png",
              "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/9c6c99e2-f703-4891-926d-3b04f2391bf8-mpDcXD2qcPVvtfMbtwFHv0NRqQjNfu.png",
              "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/21d2d5af-ce59-4738-bae7-bde2877252ab-svjGc8Gho4rBVWpaF5CGTd5Js9LKK8.png",
              "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/885305f3-0a52-4ea0-b4f9-a426f563c12b-MCvbCoOydoKKgIyYW9LWYzuf7gxjSy.png",
              "https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-images/18ac66c2-138a-43cf-a42f-bda66f65321f-RUTnbgd8eViwI0FLjhb0X44ecqIVTR.png"
            ].map((img, i) => (
              <div key={i} className={`rounded-lg overflow-hidden border border-border h-64 ${i === 3 || i === 4 ? 'md:col-span-1 lg:col-span-1.5' : ''}`}>
                <img src={img} alt={`Deployment ${i+1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Matrix */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">OUR PORTFOLIO</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Designed in Botswana for global deployment across mission-critical industries.</h2>
            <p className="text-xl text-muted-foreground">
              Early traction with enterprise-grade platforms across Insurance, Financial Services, Hospitality, Mining, Telecommunications and Government.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            {["Insurance", "Financial Services", "Government", "Mining", "Telecommunications", "Hospitality", "SMEs"].map((industry, i) => (
              <div key={i} className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground">
                {industry}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "ABI Orchestrator", subtitle: "AI orchestration", industries: "All" },
              { title: "RiskSight AI", subtitle: "Risk intelligence", industries: "Insurance, Financial Services, Mining" },
              { title: "PrimeCover360", subtitle: "Insurance management", industries: "Insurance" },
              { title: "BookMate AI", subtitle: "Hospitality automation", industries: "Hospitality" }
            ].map((product, i) => (
              <div key={i} className="p-8 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{product.title}</h3>
                <p className="text-primary font-medium mb-6">{product.subtitle}</p>
                <p className="text-sm text-muted-foreground"><strong>Industries:</strong> {product.industries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">CLIENT REVIEWS</span>
            <h2 className="text-4xl font-serif font-bold text-white">We don't collect praise. We ship platforms that work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "We went live with PrimeCover360 in six weeks. Not six months. Our claims team could see the difference in the first week.",
                author: "Thabo M., Operations Lead, Insurance, Gaborone"
              },
              {
                quote: "RiskSight flagged a compliance gap our manual review missed for three quarters. That one alert saved us more than the license cost.",
                author: "Bontle K., Risk Manager, Financial Services, Gaborone"
              },
              {
                quote: "We run a mid-sized hotel group. BookMate replaced three spreadsheets and a shared calendar. Now check-in data flows straight into finance.",
                author: "Lerato S., General Manager, Hospitality, Gaborone"
              },
              {
                quote: "ABI orchestrated a workflow that used to take two people three days. Now it runs in under an hour. No drama. Just data moving.",
                author: "Kealeboga R., Head of Operations, Telecommunications"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 border border-border rounded-lg bg-card">
                <p className="text-lg text-white mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="text-sm font-medium text-muted-foreground">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
