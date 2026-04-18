import profileImg from "@/assets/mantasha.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { number: "5+", label: "Years Experience" },
  { number: "0 → 50K", label: "Followers Organically" },
  { number: "100+", label: "Clients Worldwide" },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div ref={ref} className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative group reveal-scale ${isVisible ? "visible" : ""}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-foreground/5">
              <img
                src={profileImg}
                alt="Mantasha Anwar"
                className="w-full max-w-md rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div className={`reveal ${isVisible ? "visible" : ""}`}>
              <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                About Me
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-tight">
                I Turn Busy Executives Into LinkedIn's Most{" "}
                <span className="text-gradient">Trusted Voices</span>
              </h2>
            </div>
            <div className={`space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
              <p>
                I am a LinkedIn Personal Branding Strategist and Executive Ghostwriter with a specialisation in B2B Tech and AI. Over the last 5 years, I have helped Founders, CEOs, and C-Suite executives build authoritative LinkedIn presences that generate warm inbound leads — not just likes.
              </p>
              <p>
                I built my own LinkedIn from <span className="text-foreground font-medium">0 to 50,000+ followers</span> in a single year, entirely organically, through strategy, consistency, and content that actually resonates with the right people.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-6 border-t border-border reveal ${isVisible ? "visible" : ""} reveal-delay-3`}>
              {highlights.map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-gradient">{item.number}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
