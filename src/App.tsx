import { useLayoutEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/elements/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';


gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


function App() {
  useLayoutEffect(() => {
    ScrollTrigger.config ({ ignoreMobileResize : true } ) ;  
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true,
    })
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
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
