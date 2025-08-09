import Button from '../components/ui/Button';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Button>Test Button</Button>
      <Button as="a" href="https://example.com" target="_blank" rel="noreferrer">Visit Link</Button>
    </main>
  );
}

