import React from 'react';
import styles from './SectionHeading.module.css';

/**
 * SectionHeading – semantic heading for section titles
 * - `level` controls heading level (1–6)
 * - `variant` controls style (default, accent, etc.)
 */
export default function SectionHeading({ 
  level = 2, 
  variant = 'default', 
  className = '', 
  children, 
  ...props 
}) {
  const HeadingTag = `h${level}`;
  const classes = `${styles.root} ${styles[variant] || ''}${className ? ` ${className}` : ''}`;

  return (
    <HeadingTag className={classes} {...props}>
      {children}
    </HeadingTag>
  );
}
