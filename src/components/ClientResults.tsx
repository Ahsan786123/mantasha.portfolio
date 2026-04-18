import result1 from "@/assets/client-result-1.png";
import result2 from "@/assets/client-result-2.png";
import result3 from "@/assets/client-result-3.png";
import result4 from "@/assets/client-result-4.png";
import result5 from "@/assets/client-result-5.png";
import result6 from "@/assets/client-result-6.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  { src: result1, alt: "Client analytics dashboard showing growth" },
  { src: result2, alt: "Client follower metrics" },
  { src: result3, alt: "Client impressions growth" },
  { src: result4, alt: "Client engagement results" },
  { src: result5, alt: "Client page metrics" },
  { src: result6, alt: "Client page metrics" },
];

const ClientResults = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="results" className="section-padding relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div ref={ref} className="container-site">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Proof Of Work</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Client <span className="text-gradient">Results</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${isVisible ? "visible" : ""} group rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-lg transition-all duration-500 p-1`}
              style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
