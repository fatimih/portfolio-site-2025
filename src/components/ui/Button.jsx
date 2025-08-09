import styles from './Button.module.css';

export default function Button({ as = 'button', className = '', children, ...props }) {
  const Component = as;
  const classes = `${styles.root}${className ? ' ' + className : ''}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
