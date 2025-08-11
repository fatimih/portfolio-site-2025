import { Link } from "react-router-dom";
import { SectionHeading, Button } from "@/components/ui";

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <SectionHeading level={2} variant="accent" id="about-heading">About</SectionHeading>
      <p>
        I focus on clean architecture, maintainable CSS, and DX. I like small, well-tested pieces over
        big frameworks-for-everything.
      </p>
      <p>
        <Link to="/about"><Button variant="secondary">More about me</Button></Link>
      </p>
    </section>
  );
}
