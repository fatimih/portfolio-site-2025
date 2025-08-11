import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
