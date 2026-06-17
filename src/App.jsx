import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './sections/home/Home';
import Blog from './sections/blog/Blog';
import ModalPost from './components/modal/ModalPost';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/blog/post/:id" element={<ModalPost />} />
    </Routes>
  );
}

export default App
