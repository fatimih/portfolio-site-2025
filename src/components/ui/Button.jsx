import styles from './Button.module.css';
import Icon from '@/components/icons/Icon';

export default function Button({ 
  as = 'button', 
  className = '', 
  variant = 'secondary', 
  children, 
  ...props 
}) {
  const Component = as;
  const variantClass = styles[variant] || '';

  // Added `anim-slide-up` here
  const classes = `${styles.root} ${variantClass} anim-slide-up${className ? ' ' + className : ''}`;

  return (
    <Component className={classes} {...props}>
      {children}
      {/* Decorative icon, aria-hidden by default via <Icon /> */}
      <Icon name="FaArrowRight" className={styles.icon} size={16} />
    </Component>
  );
}


