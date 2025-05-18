import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles/WindRose.css'
const WindRose = () => {

    const [state, setState] = React.useState({
          
        series: Array.from({ length: 16 }, () => Math.floor(Math.random() * 51) + 50),
        options: {
          chart: {
            width: 500,
            type: 'polarArea'
          },
          labels: [ "0°", "22.5°", "45°", "67.5°", "90°", "112.5°", "135°", "157.5°", 
            "180°", "202.5°", "225°", "247.5°", "270°", "292.5°", "315°", "337.5°"],
          fill: {
            opacity: 0.98,
            colors:['#243073', '#c5d2d9', '#d98348']
          },
          stroke: {
            width: 1,
            colors: ["#909090"]
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              },
              spokes: {
                strokeWidth: 0
              },
            }
          },
          theme: {
            monochrome: {
              enabled: false,
              shadeTo: 'random',
              shadeIntensity: 0.1
            }
          }
        },
      
      
    });
  return (
    <div className='windrose'>
      <ReactApexChart options={state.options} series={state.series} type="polarArea" width={500} />
    </div>
  )
}

export default WindRose
