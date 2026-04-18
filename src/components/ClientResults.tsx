import result1 from "@/assets/2.png";
import result2 from "@/assets/3.png";
import result3 from "@/assets/4.png";
import result4 from "@/assets/5.png";
import result5 from "@/assets/6.png";
import result6 from "@/assets/7.png";

import result7 from "@/assets/8.png";
import result8 from "@/assets/9.png";
import result9 from "@/assets/10.png";
import result10 from "@/assets/client-result-4.png";
import result11 from "@/assets/client-result-5.png";
import result12 from "@/assets/client-result-6.png";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const images = [
  { src: result1, alt: "Client analytics dashboard showing growth" },
  { src: result2, alt: "Client follower metrics" },
  { src: result3, alt: "Client impressions growth" },
  { src: result4, alt: "Client engagement results" },
  { src: result5, alt: "Client page metrics" },
  { src: result6, alt: "Client page metrics" },

  { src: result7, alt: "Client result" },
  { src: result8, alt: "Client result" },
  { src: result9, alt: "Client result" },
  { src: result10, alt: "Client result" },
  { src: result11, alt: "Client result" },
  { src: result12, alt: "Client result" },
];

const ClientResults = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="results" className="section-padding relative bg-background">
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, visibleCount).map((img, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${isVisible ? "visible" : ""} group relative rounded-2xl bg-background border border-border shadow-sm transition-all duration-500 p-1 
              hover:scale-[1.12] hover:-translate-y-2 hover:z-20 hover:shadow-2xl`}
              style={{ transitionDelay: `${(idx + 1) * 0.04}s` }}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {visibleCount < images.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientResults;