import { useState } from 'react';
import styles from './ContactForm.module.css';
import Input from './Input';
import Textarea from './Textarea';
import Button from '../ui/Button';

export default function ContactForm({ onSubmit }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Please enter your name.';
      case 'email': {
        if (!value.trim()) return 'Please enter your email.';
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return ok ? '' : 'Enter a valid email address.';
      }
      case 'message':
        return value.trim() ? '' : 'Please enter a message.';
      default:
        return '';
    }
  }

  function validateAll(vals) {
    const next = {
      name: validateField('name', vals.name),
      email: validateField('email', vals.email),
      message: validateField('message', vals.message),
    };
    // remove empty errors
    Object.keys(next).forEach(k => { if (!next[k]) delete next[k]; });
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    const msg = validateField(name, value);
    setErrors(prev => {
      const copy = { ...prev };
      if (msg) copy[name] = msg; else delete copy[name];
      return copy;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      if (onSubmit) onSubmit(values);
      console.log('Contact form submitted:', values);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.root} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <div id="name-error" className={styles.error} role="alert">
            {errors.name}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <Input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="you@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <div id="email-error" className={styles.error} role="alert">
            {errors.email}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Say hello…"
          rows={6}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <div id="message-error" className={styles.error} role="alert">
            {errors.message}
          </div>
        )}
      </div>

      <Button type="submit" variant="primary">Send</Button>
    </form>
  );
}
