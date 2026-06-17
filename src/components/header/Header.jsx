import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Элина Коновалова</div>
      <div className={styles.menu}>
        <a href="/">На главную</a>
        <a href="/works">Работы</a>
        <a href="/reviews">Отзывы</a>
        <a href="/blog">Блог</a>
      </div>
      <button className={styles.contactButton}>Контакты</button>
    </header>
  );
}