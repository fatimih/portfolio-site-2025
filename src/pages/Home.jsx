import { Link } from "react-router-dom";
import { SectionHeading, Card, Tag, Button } from "@/components/ui";

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

      {/* About teaser */}
      <section className="about-section" aria-labelledby="about-heading">
        <SectionHeading level={2} variant="accent" id="about-heading">About</SectionHeading>
        <p>
          I focus on clean architecture, maintainable CSS, and DX. I like small, well-tested pieces over
          big frameworks-for-everything.
        </p>
        <p><Link to="/about"><Button variant="secondary">More about me</Button></Link></p>
      </section>

      {/* Featured Work */}
      <section className="work-section" aria-labelledby="work-heading">
        <SectionHeading level={2} variant="accent" id="work-heading">Selected Work</SectionHeading>

        <div className="work-section__grid">
          <Card>
            <Tag>Case Study</Tag>
            <h3 className="work-section__item-title">Project Alpha</h3>
            <p className="work-section__item-desc">Short one-liner about the impact/result.</p>
            <Link to="/work"><Button variant="secondary">Read more</Button></Link>
          </Card>

          <Card>
            <Tag>Open Source</Tag>
            <h3 className="work-section__item-title">Library Beta</h3>
            <p className="work-section__item-desc">What it solves and why it exists.</p>
            <Link to="/work"><Button variant="secondary">Read more</Button></Link>
          </Card>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="contact-section" aria-labelledby="contact-heading">
        <SectionHeading level={2} variant="accent" id="contact-heading">Contact</SectionHeading>
        <p>Got a project or want to say hi?</p>
        <p><Link to="/contact"><Button variant="primary">Contact me</Button></Link></p>
      </section>
    </main>
  );
}
