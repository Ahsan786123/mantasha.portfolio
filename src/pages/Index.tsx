import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import ClientResults from "@/components/ClientResults";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Services />
      <WhyWorkWithMe />
      <ClientResults />
      <CaseStudy />
      <Testimonials />
      <CTASection />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
