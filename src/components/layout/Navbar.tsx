import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/nexis-logo-mark.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="NEXIS" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 font-bold tracking-wider uppercase text-xs hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
          >
            <a href="mailto:hello@nexis.co.bw">Get a Demo</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-xl">
          <Link href="/about" className="text-lg font-medium text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="text-lg font-medium text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/portfolio" className="text-lg font-medium text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
            Work
          </Link>
          <Link href="/contact" className="text-lg font-medium text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Button
            asChild
            className="bg-[#00D4FF] text-[#060C1A] hover:bg-[#00D4FF]/80 font-bold tracking-wider uppercase text-xs w-full"
          >
            <a href="mailto:hello@nexis.co.bw" onClick={() => setIsOpen(false)}>Get a Demo</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
