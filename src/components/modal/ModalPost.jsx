import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import close from '../../assets/close.svg'
import styles from './Modal.module.css';

export default function ModalPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`http://localhost:3000/api/quotes/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Пост не найден');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleClose = () => {
    navigate('/blog'); // Возвращаемся к списку постов
  };

  if (!id) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modalCloseButton}
          onClick={handleClose}
          aria-label="Закрыть модальное окно"
        >
          <img src={close} alt="Закрыть модальное окно" />
        </button>
        {loading && <div className={styles.loading}>Загрузка...</div>}

        {error && <div className={styles.error}>Ошибка: {error}</div>}

        {!loading && !error && post && (
          <div>
            <h3 className={styles.modalTitle}>Цитата #{id}</h3>
            <h4>{post.text || 'Текст цитаты не указан'}</h4>
            <p className={styles.author}>Автор: {post.author || 'Неизвестен'}</p>
          </div>
        )}
      </div>
    </div>
  )
}