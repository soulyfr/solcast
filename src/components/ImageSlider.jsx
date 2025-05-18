import React, {useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import './styles/ImageSlider.css'

const images = [
  'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/02c4/live/9e1feac0-f04b-11ef-a819-277e390a7a08.jpg.webp',
  'https://media.cnn.com/api/v1/images/stellar/prod/210330140016-curiosity-selfie.jpg?q=w_1576,c_fill',
  'https://cdn.mos.cms.futurecdn.net/br4FkqpBujNhxsTfxgtXdE-1200-80.jpg'
];
const ImageSlider = () => {
  
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goLeft = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  
  const goRight = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }



    return (
    <div className='image-slider'>

      <button className="slide-button" onClick={goLeft}>←</button>

      <AnimatePresence mode="wait">
          <motion.img
            className='sliding-image'
            key={images[index]}
            src={images[index]}
            alt="slider not working man"
            initial={{ opacity: 0, x: direction * 100 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </AnimatePresence>

      <button className="slide-button" onClick={goRight}>→</button>
    </div>
  )
}

export default ImageSlider
