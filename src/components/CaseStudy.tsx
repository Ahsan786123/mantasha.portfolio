import caseImg from "@/assets/MANTASHA Portfolio.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CaseStudy = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "hsl(27 28% 50% / 0.06)" }} />

      <div ref={ref} className="container-site relative">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Featured</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Special Client <span className="text-gradient">Win</span>
          </h2>
        </div>
        <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-2 grid lg:grid-cols-2 gap-12 items-center`}>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-lg transition-all duration-500 p-1 group">
              <img src={caseImg} alt="Client case study results" className="w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
            </div>
           
          </div>
          <div className="space-y-8">
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-foreground">
              Top #100 VC Voice <span className="text-gradient">Globally</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Within 4 months of working on her profile, my client got ranked as the{" "}
                <span className="text-gradient font-semibold">Top #100 VC voice globally</span>.
              </p>
              <p>Profile grew exponentially. The leads kept flowing for their services.</p>
              <p className="text-foreground font-medium text-lg md:text-xl">
                That's what I can do for your brand as well.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-gradient">47,120</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Total Followers</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-gradient">3,296</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">New Followers / Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
