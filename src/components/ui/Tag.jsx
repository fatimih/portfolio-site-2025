import React from 'react';
import styles from './Tag.module.css';

/**
 * Tag – small, inline label or badge
 * - Uses CSS Modules for scoped styles
 * - `variant` controls style (default, info, warning, etc.)
 */
export default function Tag({ variant = 'default', className = '', children, ...props }) {
  const classes = `${styles.root} ${styles[variant] || ''}${className ? ` ${className}` : ''}`;
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
