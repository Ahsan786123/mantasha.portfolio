import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        <a href="#" className={`font-heading text-xl md:text-2xl font-bold uppercase tracking-wider ${scrolled ? "text-foreground" : "text-dark-section-foreground"}`}>
          Mantasha<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body hover:text-primary transition-colors duration-300 tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-muted-foreground" : "text-dark-section-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/mantashawrites-personalbranding"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-7 py-2.5 text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-dark-section-foreground"}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border border-border px-6 py-6 mt-2 mx-4 rounded-2xl space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-muted-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/mantashawrites-personalbranding"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full text-center mt-2"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
