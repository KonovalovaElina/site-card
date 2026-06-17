import close from '../../assets/close.svg'
import styles from './Modal.module.css';

export default function Modal({handleClick}) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.modalCloseButton}
          onClick={handleClick}
          aria-label="Закрыть модальное окно"
        >
          <img src={close} alt="Закрыть модальное окно" />
        </button>
        <h3 className={styles.modalTitle}>Оставьте контактные данные, я свяжусь с Вами</h3>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            aria-label="Контактный телефон"
            placeholder="+7 (999) 999-99-99"
          />
          <input
            type="email"
            aria-label="Email"
            placeholder="example@mail.com"
          />
        </div>
        <textarea 
          className={styles.message}
          aria-label="Сообщение"
          placeholder="Ваше сообщение"
        />
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleClick}
          aria-label="Отправить контактные данные"
        >
          Отправить
        </button>
      </div>
    </div>
  )
}

