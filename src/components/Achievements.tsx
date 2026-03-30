import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";

const stats = [
  { number: 54000, suffix: "+", label: "LinkedIn Followers", description: "Built organically from zero", display: "54K" },
  { number: 350, suffix: "+", label: "Consultations", description: "Strategic branding sessions", display: "350" },
  { number: 189, suffix: "+", label: "Global Clients", description: "Founders & C-Suite executives", display: "189" },
];

const useCounter = (target: number, isVisible: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return count;
};

const formatNumber = (n: number) => {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return n.toString();
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCounter(stat.number, isVisible);
  
  return (
    <div
      className={`reveal ${isVisible ? "visible" : ""} text-center p-12 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group`}
      style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <p className="relative font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4">
        {formatNumber(count)}{stat.suffix}
      </p>
      <p className="relative font-heading text-lg font-semibold uppercase tracking-wider text-foreground mb-2">
        {stat.label}
      </p>
      <p className="relative text-muted-foreground text-sm">{stat.description}</p>
    </div>
  );
};

const Achievements = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "hsl(27 28% 50% / 0.06)" }} />

      <div ref={ref} className="container-site relative">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Track Record</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
