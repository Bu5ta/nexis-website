import { Link } from "wouter";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/three/ParticleField";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#060C1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <ParticleField nodeCount={40} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060C1A]/80" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 max-w-lg mx-auto"
      >
        <p className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-4">Error 404</p>
        <h1 className="text-8xl font-serif font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-white mb-4">Page not found</h2>
        <p className="text-white/50 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#00D4FF] text-[#060C1A] font-bold tracking-wider text-sm rounded hover:bg-[#00D4FF]/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
