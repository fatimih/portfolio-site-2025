import { ContactForm } from '../components/forms';

export default function Contact() {
  return (
    <main className="container">
      <h1>Contact</h1>
      <ContactForm onSubmit={(values) => console.log('Form submitted', values)} />
    </main>
  );
}
