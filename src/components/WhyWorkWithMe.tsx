import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  "AI and branding expertise combined in one person",
  "Voice-matched ghostwriting — sounds just like you, not a robot",
  "Organic growth with no gimmicks, shortcuts, or engagement pods",
  "Results tracked and analysed every month",
  "C-Suite tone mastery built from years of executive writing",
  "Inbound lead gen system built into every engagement",
  "You focus on running your business, I handle the rest",
];

const WhyWorkWithMe = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div ref={ref} className="container-site relative">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
            <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">The Difference</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
              Why Work <span className="text-gradient">With Me</span>
            </h2>
          </div>
          <div className="space-y-3">
            {reasons.map((reason, i) => (
              <div
                key={reason}
                className={`reveal ${isVisible ? "visible" : ""} group flex items-center gap-5 p-5 md:p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 cursor-default`}
                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-500">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-base md:text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
