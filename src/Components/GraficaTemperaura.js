import React, { useEffect } from 'react'
import { LineStyle, createChart } from 'lightweight-charts'
import { Box } from '@mui/material'



export const GraficaTemperaura = props => {
  const {data} = props;
  const chartContainerRef = React.useRef();
  const tooltipRef = React.useRef();
  

  console.log(data);

  useEffect( () => {
    const chart = createChart(chartContainerRef.current);
    chart.applyOptions({
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
      layout: {
        background: { color: 'white' },
        textColor: 'black',
    },
    grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
    },
      width : 900,
      height: 400,  
      display: 'flex',
      crosshair: {
        vertLine: {
          width: 5, 
          style: LineStyle.Solid,
        }
      },
  });
  chart.timeScale().applyOptions({
    borderColor: 'rgb(25,24,40)',
  })
  chart.timeScale().applyOptions({
    borderColor: 'rgb(25,24,40)',
  })

  const handleResize = () => {
    chart.applyOptions({
      width:chartContainerRef.current.clientWidth,
    })
  }
  window.addEventListener('resize', handleResize)
    
  const newSeries = chart.addAreaSeries({
    lineColor: '#028090',
    topColor: '#028090',
    bottomColor: 'white',
    textColor: 'black',
  } );
  newSeries.setData(data);

    
    
    return () => {
      chart.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

 

  


  return (
    <Box  id='#GraficaTemp' className="chart" sx={{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      p: 3,
      
      }}
       >
      <div  ref={chartContainerRef} style={{
        alignItems: 'center',
        justifyContent: 'center', 
        display: 'flex',
      }} >
        
      </div>
      
    </Box>
  )
}