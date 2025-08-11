import * as Icons from './index';
import styles from './Icon.module.css';

/**
 * <Icon name="FaArrowRight" size={16} title="Next" />
 * - name: key exported from icons registry (src/components/icons/index.js)
 * - size: pixel size passed to the underlying icon component
 * - title: accessible label; if omitted, icon is aria-hidden
 */
export default function Icon({ name, size = 16, title, className = '', ...props }) {
  const IconComp = Icons[name];
  if (!IconComp) return null;

  const ariaProps = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': true };

  const classes = `${styles.root}${className ? ' ' + className : ''}`;

  return <IconComp size={size} className={classes} {...ariaProps} {...props} />;
}
