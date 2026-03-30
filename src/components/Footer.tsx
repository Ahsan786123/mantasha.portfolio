const Footer = () => {
  return (
    <footer className="py-10 relative bg-dark-section">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-bold uppercase tracking-wider text-dark-section-foreground">
          Mantasha<span className="text-primary">.</span>
        </p>
        <p className="text-dark-section-foreground/50 text-sm">
          © {new Date().getFullYear()} Mantasha Anwar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
