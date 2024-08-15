import { useLayoutEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/elements/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Footer from './components/elements/Footer/Footer';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);



function App() {

  useLayoutEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 0.5,
      effects: true,
    });
  }, [])

  return (
    <>

      <BrowserRouter>
        <Header />
        <div className='wrapper'>
          <div className='content'>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
