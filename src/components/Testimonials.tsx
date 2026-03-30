import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mantasha transformed my LinkedIn presence completely. Within 3 months, I was getting inbound leads from my ideal clients.",
    name: "Tech Founder",
    role: "B2B SaaS CEO",
  },
  {
    quote: "Her ghostwriting sounds exactly like me. My network can't tell the difference. The engagement on my posts has 10x'd.",
    name: "AI Startup Executive",
    role: "C-Suite Leader",
  },
  {
    quote: "I went from posting randomly to having a full content strategy that generates real business conversations every week.",
    name: "Venture Capitalist",
    role: "VC Partner",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div ref={ref} className="container-site">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Client Love</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Testimonials
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${isVisible ? "visible" : ""} p-8 md:p-10 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 flex flex-col relative overflow-hidden group`}
              style={{ transitionDelay: `${(i + 1) * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground leading-relaxed flex-1 mb-8 relative">{t.quote}</p>
              <div className="pt-6 border-t border-border relative">
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
