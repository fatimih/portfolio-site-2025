import React from 'react';
import styles from './Card.module.css';

/**
 * Card – neutral container component
 * - Uses CSS Modules for scoped styles
 * - `as` lets you choose the semantic element (div/section/article)
 */
export default function Card({
  as: Comp = 'div',
  className = '',
  children,
  ...props
}) {
  const classes = `${styles.root}${className ? ` ${className}` : ''}`;
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}
