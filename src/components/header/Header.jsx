import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import useWindowWidth from '../../hooks/useWindowWidth';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

const MOBILE_BREAKPOINT = 768;

export default function Header() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ЭК</div>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <>
          <div className={styles.menu}>
            <Link to="/">На главную</Link>
            <Link to="/works">Работы</Link>
            <Link to="/reviews">Отзывы</Link>
            <Link to="/blog">Блог</Link>
          </div>
          <button
            type="button"
            className={styles.themeButton}
            onClick={toggleTheme}
          >
            {isLightTheme ? 'Тёмная тема' : 'Светлая тема'}
          </button>
          <button type="button" className={styles.contactButton}>Контакты</button>
        </>
      )}
    </header>
  );
}