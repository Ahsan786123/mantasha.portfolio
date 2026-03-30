import { User, PenTool, Megaphone, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: User,
    title: "LinkedIn Profile Optimization",
    description: "Transform generic profiles into high-converting authority platforms that attract the right investors, clients, and partnerships.",
  },
  {
    icon: PenTool,
    title: "Executive Content Ghostwriting",
    description: "Thought leadership posts, articles, and content strategies that position you as the go-to authority in B2B Tech and AI.",
  },
  {
    icon: Megaphone,
    title: "LinkedIn Ads Creation & Management",
    description: "LinkedIn ad campaigns built specifically for B2B Tech Founders targeting C-Suite decision-makers.",
  },
  {
    icon: Settings,
    title: "Full End-to-End Profile Management",
    description: "End-to-end management of your entire LinkedIn presence so you stay visible, credible, and consistent.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div ref={ref} className="container-site">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">What I Do</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal ${isVisible ? "visible" : ""} group p-8 md:p-10 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 cursor-default relative overflow-hidden`}
              style={{ transitionDelay: `${(i + 1) * 0.12}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
