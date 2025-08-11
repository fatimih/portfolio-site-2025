import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ className = '', ...props }, ref) {
  return <input ref={ref} className={styles.root + (className ? ' ' + className : '')} {...props} />;
});

export default Input;
