import { useEffect, useState } from "react";
import profileImg from "@/assets/mantasha-profile.png";
import { Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-dark-section">
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-primary/[0.12] blur-[150px] pointer-events-none transition-transform duration-[2000ms] ease-out"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px] pointer-events-none transition-transform duration-[2000ms] ease-out"
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.08] pointer-events-none" style={{ animation: "spin-slow 60s linear infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/[0.05] pointer-events-none" style={{ animation: "spin-slow 45s linear infinite reverse" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`transition-all duration-1000 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.15] border border-primary/25 text-xs tracking-[0.2em] uppercase text-primary mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LinkedIn Personal Branding Strategist</span>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-100 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[1.05] text-dark-section-foreground">
                Helping Founders Scale Their Business via{" "}
                <span className="text-gradient relative">
                  LinkedIn
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="hsl(27 28% 50%)" strokeWidth="2" strokeLinecap="round" opacity="0.5" strokeDasharray="200" strokeDashoffset="200" style={{ animation: loaded ? "dash 1.5s 1s ease-out forwards" : "none" }} />
                  </svg>
                </span>
              </h1>
            </div>

            <p
              className={`text-dark-section-foreground/60 text-lg md:text-xl max-w-lg leading-relaxed transition-all duration-1000 delay-300 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Turning LinkedIn into a lead machine with content that brings{" "}
              <span className="text-dark-section-foreground font-medium">cash</span>, not just likes.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-[500ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://calendly.com/mantashawrites-personalbranding"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider rounded-full overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Book a Call</span>
                <ArrowDown className="relative w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-dark-section-foreground/15 text-dark-section-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Mini stats */}
            <div
              className={`flex items-center gap-8 pt-4 transition-all duration-1000 delay-[700ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { val: "54K+", label: "Followers" },
                { val: "189+", label: "Clients" },
                { val: "5+", label: "Years" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-xl md:text-2xl font-bold text-gradient">{s.val}</p>
                  <p className="text-dark-section-foreground/40 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1200 delay-300 ease-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-3xl border border-primary/[0.12] float" />
              <div className="absolute -inset-16 rounded-[2rem] border border-primary/[0.06] float-delayed" />

              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/25 to-transparent rounded-2xl" />

              <img
                src={profileImg}
                alt="Mantasha Anwar"
                className="relative w-72 md:w-80 lg:w-96 rounded-2xl object-cover shadow-2xl shadow-black/30"
              />

              {/* Floating badge - Updated text */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-dark-section/80 backdrop-blur-xl border border-primary/20 px-4 py-3 rounded-xl float">
                <p className="text-xs font-heading font-bold text-primary uppercase tracking-wider">Top Voice 🏆</p>
              </div>
              <div className="absolute -top-4 -right-4 md:-right-8 bg-dark-section/80 backdrop-blur-xl border border-primary/20 px-4 py-3 rounded-xl float-delayed">
                <p className="text-xs font-heading font-bold text-dark-section-foreground uppercase tracking-wider">54K+ Followers 🚀</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-[1000ms] ${
            loaded ? "opacity-50" : "opacity-0"
          }`}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-dark-section-foreground/40">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
