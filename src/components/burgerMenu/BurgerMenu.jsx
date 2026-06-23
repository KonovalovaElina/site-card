import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.burgerMenu}>
      <button
        type="button"
        className={`${styles.burgerButton} ${isOpen ? styles.burgerButtonOpen : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      {isOpen && (
        <nav className={styles.dropdown}>
          <Link to="/" onClick={closeMenu}>На главную</Link>
          <Link to="/works" onClick={closeMenu}>Работы</Link>
          <Link to="/reviews" onClick={closeMenu}>Отзывы</Link>
          <Link to="/blog" onClick={closeMenu}>Блог</Link>
          <button
            type="button"
            className={styles.themeButton}
            onClick={toggleTheme}
          >
            {isLightTheme ? 'Тёмная тема' : 'Светлая тема'}
          </button>
          <button type="button" className={styles.contactButton} onClick={closeMenu}>
            Контакты
          </button>
        </nav>
      )}
    </div>
  );
}
