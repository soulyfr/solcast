import React, { PureComponent, useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './styles/TemperatureChart.css'
import dataPromise from './getdata';

const sampleData = [
    { sol: 'Sol 1', avg: 5.632, min: 0.228, max: 18.577 },
    { sol: 'Sol 2', avg: 8.632, min: 1.228, max: 12.577 },
    { sol: 'Sol 3', avg: 3.232, min: 2.228, max: 5.577 },
    { sol: 'Sol 4', avg: 9.632, min: -3.228, max: 21.577 },
		{ sol: 'Sol 1', avg: 5.632, min: 0.228, max: 18.577 },
    { sol: 'Sol 2', avg: 8.632, min: 1.228, max: 12.577 },
    { sol: 'Sol 3', avg: 3.232, min: 2.228, max: 5.577 }
  ];

const TemperatureChart = () => {
  const [tempData, setTempData] = useState(null);
	const [average, setAverage] = useState(0);	


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
      const avg = Math.round((total / tempData.length) * 1000) / 1000;
      setAverage(avg);
      console.log(avg);
    }
  }, [tempData]); 
	
	return (
    <div className='temperature-chart'>
      <ResponsiveContainer width="95%" height="95%">
        <BarChart
        data={tempData !== null ? tempData : sampleData}
        margin={10}
				width="100%" 
				height="100%"

        >
        	<CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="sol" />
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="min" fill="#243053" />
					<Bar dataKey="avg" fill="#c5d2d9" />
          <Bar dataKey="max" fill="#d98348" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TemperatureChart
