import { Link } from "react-router-dom";
import { SectionHeading, Card, Tag, Button } from "@/components/ui";

export default function WorkSection() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
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
  );
}
