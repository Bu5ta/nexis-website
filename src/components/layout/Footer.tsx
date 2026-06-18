import { Link } from "wouter";
import Logo from "@/assets/nexis-logo.svg";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={Logo} alt="NEXIS" className="h-10 mb-6" />
            <p className="text-muted-foreground max-w-md">
              NEXT INTELLIGENCE SYSTEMS · AI-Powered Intelligence Platforms · Botswana & Africa
            </p>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Work</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Products</h4>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <span>ABI</span>
              <span>RiskSight</span>
              <span>PrimeCover</span>
              <span>BookMate</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            <a href="mailto:hello@nexis.co.bw" className="hover:text-primary transition-colors mr-6">hello@nexis.co.bw</a>
            <a href="tel:+26774097745" className="hover:text-primary transition-colors">+267 74097745</a>
          </div>
          <div className="text-center md:text-right">
            <p>Unit 3, Plot 1632, Gaborone International Commerce Park, Gaborone</p>
            <p className="mt-2">© 2025 NEXIS (Next Intelligence Systems). All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
