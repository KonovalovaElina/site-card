import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Modal from './components/modal/Modal'

function App() {
  const [isModalVisible, setIsModalVisible] = useState (false);

  return (
    <>
      <Header />
      <Layout>
        <button onClick={() => setIsModalVisible(prev => !prev)}>Связаться со мной</button>
        {isModalVisible && <Modal handleClick={() => setIsModalVisible(prev => !prev)}/>}
      </Layout>
      <Footer />
    </>
  )
}

export default App
