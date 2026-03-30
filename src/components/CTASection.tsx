import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden bg-dark-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.1] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/[0.08] pointer-events-none" style={{ animation: "spin-slow 40s linear infinite" }} />

      <div ref={ref} className={`container-site relative text-center space-y-10 reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold uppercase text-dark-section-foreground max-w-4xl mx-auto leading-tight">
          Ready to Become LinkedIn's Most{" "}
          <span className="text-gradient">Trusted Voice?</span>
        </h2>
        <p className="text-dark-section-foreground/60 text-lg md:text-xl max-w-xl mx-auto">
          Let's build a LinkedIn presence that generates leads, builds authority, and scales your business.
        </p>
        <a
          href="https://calendly.com/mantashawrites-personalbranding"
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 font-heading text-base font-bold uppercase tracking-wider rounded-full overflow-hidden hover:-translate-y-1 transition-all duration-300 pulse-ring shadow-lg shadow-primary/25"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative">Book a Call</span>
          <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
