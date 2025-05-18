import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import QuickNav from './components/QuickNav'
import APOD from './components/APOD'
import ImageSlider from './components/ImageSlider' 
import TemperatureChart from './components/TemperatureChart'
import AvgTemp from './components/AvgTemp'
import WindRose from './components/WindRose'

function App() {
  
  
  useEffect(() => {
  document.title = "Solcast";
  }, []);
  
  return (
    <>
      <Navbar/>
      <div className="header">
        <p className="section-title">Featured</p>
      </div>
      <div className="main">
        <div className="content">
          <div className="featured-content">
            <div className="images">
              <APOD/>
              <ImageSlider/>
              <QuickNav/>
            </div>
          </div>
          <div className="section">
            <div className="section-header">
              <p className="section-title">Martian Climate</p>
            </div>
            <div className="section-content">
                <TemperatureChart/>
                <AvgTemp/>
                <WindRose/>
            </div>
          </div>
        </div>
        
      </div>
      <footer></footer>
    </>
  )
}

export default App
