import React, {useState, useEffect} from 'react'
import './styles/APOD.css'

// const image = fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => response.json()).then(data => data.url);

const APOD = () => {

    const today = new Date().toISOString().split('T')[0];
    const [image, setImage] = useState(() => {
        const savedDate = localStorage.getItem('APOD-DATE');
        return savedDate === today ? localStorage.getItem('APOD-URL') : null;
      });
    
    console.log(localStorage.getItem('APOD-URL'));
    console.log(localStorage.getItem('APOD-DATE'));
    
    useEffect(() => {
        const savedDate = localStorage.getItem('APOD-DATE');
    
        if (savedDate !== today) {
          fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
              setImage(data.url);
              localStorage.setItem('APOD-URL', data.url);
              localStorage.setItem('APOD-DATE', today);
            })
            .catch(error => console.error('Error fetching APOD:', error));
        }
      }, [today]);

  return (
    <div className='apod-box'>
      <img src={image} alt="" className='apod-image' />
      <p>ASTRONOMY PICTURE OF THE DAY</p>
    </div>
  )
}

export default APOD
