import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <main className="container">
      <h1>Home Page</h1>

      <Card>
        <h2>Card Title</h2>
        <p>This Card uses base.css tokens for background, text, and border.</p>
        <div>
          <Button variant="primary">Primary Button</Button>{' '}
          <Button variant="secondary" as="a" href="https://example.com" target="_blank" rel="noreferrer">
            Visit Link
          </Button>
        </div>
      </Card>
    </main>
  );
}
