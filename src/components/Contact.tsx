import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-500 hover:border-primary/30 shadow-sm";

  return (
    <section id="contact" className="section-padding relative bg-background">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div ref={ref} className="container-site">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
            <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
              Contact <span className="text-gradient">Me</span>
            </h2>
          </div>
          <form
            className={`space-y-6 reveal ${isVisible ? "visible" : ""} reveal-delay-2`}
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`mailto:mantashawrites@gmail.com?subject=Inquiry from ${form.name}&body=${form.message}`, "_blank");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" required />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">Service</label>
              <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                <option value="">Select a service</option>
                <option value="profile-optimization">LinkedIn Profile Optimization</option>
                <option value="ghostwriting">Executive Content Ghostwriting</option>
                <option value="ads">LinkedIn Ads Creation & Management</option>
                <option value="full-management">Full End-to-End Profile Management</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your goals..." required />
            </div>
            <button
              type="submit"
              className="group w-full relative bg-primary text-primary-foreground py-4 font-heading text-sm font-bold uppercase tracking-wider rounded-full overflow-hidden hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative inline-flex items-center gap-2">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </form>
          <div className="mt-10 text-center text-muted-foreground text-sm">
            <p>
              Email:{" "}
              <a href="mailto:mantashawrites@gmail.com" className="text-primary hover:underline transition-colors">
                mantashawrites@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
