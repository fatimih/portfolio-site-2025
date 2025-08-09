import styles from './Button.module.css';

export default function Button({ 
  as = 'button', 
  className = '', 
  variant = 'secondary', 
  children, 
  ...props 
}) {
  const Component = as;
  const variantClass = styles[variant] || '';
  const classes = `${styles.root} ${variantClass}${className ? ' ' + className : ''}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
