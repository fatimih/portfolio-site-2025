import { Link } from "react-router-dom";
import { SectionHeading, Button } from "@/components/ui";
import { AboutSection, WorkSection, ContactSection } from "@/components/sections";

export default function Home() {
  return (
    <main id="home" className="home">
      {/* Hero */}
      <header className="home-hero" role="banner">
        <SectionHeading level={1} variant="default">Hi, I’m [Your Name]</SectionHeading>
        <p className="home-hero__intro">
          I build performant, accessible web apps. This site showcases selected work and how I think.
        </p>
        <p className="home-hero__cta">
          <Link to="/work">
            <Button variant="primary">View Work</Button>
          </Link>
          <Link to="/contact" className="ml-2">
            <Button variant="secondary">Get in Touch</Button>
          </Link>
        </p>
      </header>

      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
