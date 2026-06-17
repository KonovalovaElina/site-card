import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ЭК</div>
      <div className={styles.menu}>
        <Link to="/">На главную</Link>
        <Link to="/works">Работы</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/blog">Блог</Link>
      </div>
      <button className={styles.contactButton}>Контакты</button>
    </header>
  );
}