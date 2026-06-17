import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './sections/home/Home';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home />
        }
      />
    </Routes>
  );
}

export default App
