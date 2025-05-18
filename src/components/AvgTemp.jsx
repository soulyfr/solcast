import React, { useState, useEffect } from 'react'
import './styles/AvgTemp.css'
import dataPromise from './getdata';

// const avg = 40;
// const min = -25;
// const max = 61;
// const fillRate = 100 - Math.round((avg-min)/(max-min) * 100);
// const tempColor = fillRate > 50 ? '#243073' : '#d98348';

const AvgTemp = () => {

  const [tempData, setTempData] = useState(null);
	const [average, setAverage] = useState(0);	
  const [min, setMin] = useState(99);
  const [max, setMax] = useState(-99);
  const [fillRate, setFillRate] = useState(0);
  const [tempColor, setTempColor] = useState('#FFFFFF');

  useEffect(() => {
    dataPromise.then((data) => {
      // console.log("api works");
      if (data) {
        let lastWeeksTemp = [];
        for (let i = 0; i < 7; i++) {
          const index = data.sol_keys[data.sol_keys.length - 7 + i];
          const day = data[index];
          const dayTemp = day["AT"];
          const {av, ct, mn, mx} = dayTemp;
          const formattedDayTemp = {sol: "Sol " + (index), avg: av, min: mn, max: mx};
          lastWeeksTemp.push(formattedDayTemp);
          console.log("day temp: ", formattedDayTemp);
        }
        setTempData(lastWeeksTemp);}
    });
  }, []);


  
  useEffect(() => {
    if (tempData) {
      const total = tempData.reduce((sum, entry) => sum + entry.avg, 0);
      const avg = Math.round((total / tempData.length) * 100) / 100;
      for (let i = 0; i < 7; i++) {
        const day = tempData[i];
        if (day.max > max) {
          setMax(day.max);
        }
        if (day.min < min) {
          setMin(day.min);
        }
      }
      setAverage(avg);
      setFillRate(100 - Math.round((avg-min)/(max-min) * 100));
      setTempColor(fillRate > 50 ? '#243073' : '#d98348');
      console.log(avg);
    }
  }, [tempData]); 
  
  return (
    <div className="avg-temp">
        <div className='thermometer'>
        <div className="thermo-fill" style={{height: `${fillRate}%`}}></div>
        </div>
        <p className="temp-text" style={{top: `${fillRate-6}%`}}> --- <span style={{fontSize: '1.2em',fontWeight: 'bold', color: tempColor}}>{average}°C</span> Weekly average</p>
    </div>
  )
}

export default AvgTemp
