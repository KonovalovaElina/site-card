import Layout from "../../layout/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from './Blog.module.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    fetch('http://localhost:3000/api/quotes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Пустой массив зависимостей — выполняется один раз при монтировании

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <Layout>
      <h1>Цитаты на тему IT</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/blog/post/${post.id}`} className={styles.post}>
          <h3>{post.text}</h3>
          <p>Автор: {post.author}</p>
        </Link>
      ))}
    </Layout>
  );
}
