import { useEffect, useLayoutEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/elements/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import sliderClasses from './components/pages/MainPage/sections/ArrivalSection/ArrivalSection.module.css'
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
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
