import { Link } from "react-router-dom";
import { SectionHeading, Button } from "@/components/ui";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <SectionHeading level={2} variant="accent" id="contact-heading">Contact</SectionHeading>
      <p>Got a project or want to say hi?</p>
      <p>
        <Link to="/contact">
          <Button variant="primary">Contact me</Button>
        </Link>
      </p>
    </section>
  );
}
