import { useState } from 'react';
import Layout from '../../layout/Layout';
import Modal from '../../components/modal/Modal';
import styles from './Home.module.css';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState (false);
  return (
    <Layout>
      <div className={styles.homeBlock}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Меня зовут Элина,<br />я Веб-разработчик</h1>
          <h2 className={styles.description}>Создам для Вас приложение любой сложности</h2>
          <button className={styles.contactButton} onClick={() => setIsModalVisible(prev => !prev)}>Связаться со мной</button>
          {isModalVisible && <Modal handleClick={() => setIsModalVisible(prev => !prev)}/>}
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.photo} src="/src/assets/photo.jpg" />
        </div>
      </div>
    </Layout>
  )
}


