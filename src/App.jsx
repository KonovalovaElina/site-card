import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './sections/home/Home';
import Blog from './sections/blog/Blog';
import ModalPost from './components/modal/ModalPost';
import Reviews from './sections/reviews/Reviews';
import Works from './sections/works/Works';
import { ThemeContext } from './context/ThemeContext';
import ThemeWrapper from './components/themeWrapper/ThemeWrapper';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  const themeValue = {
    isLightTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeWrapper theme={isLightTheme}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/post/:id" element={<ModalPost />}/>
        </Routes>
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export default App
