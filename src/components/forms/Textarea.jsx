import { forwardRef } from 'react';
import styles from './Textarea.module.css';

const Textarea = forwardRef(function Textarea(
  { className = '', rows = 6, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={styles.root + (className ? ' ' + className : '')}
      {...props}
    />
  );
});

export default Textarea;
