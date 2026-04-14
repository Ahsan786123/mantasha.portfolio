import result1 from "@/assets/client-result.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ClientResults = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="results" className="section-padding relative bg-background">
      
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />

      <div ref={ref} className="container-site">

        {/* Heading */}
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">
            Proof Of Work
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Client <span className="text-gradient">Results</span>
          </h2>

        </div>

        {/* Main Image */}
        <div className={`reveal-scale ${isVisible ? "visible" : ""} mt-10`}>
          
          <img
            src={result1}
            alt="Client Results"
            className="w-full max-w-7xl mx-auto rounded-2xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default ClientResults;