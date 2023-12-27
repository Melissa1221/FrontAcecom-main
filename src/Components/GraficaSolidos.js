import React, { useEffect } from 'react'
import {LineStyle, createChart } from 'lightweight-charts'
import { Box } from '@mui/material'



export const GraficaSolidos = (props) => {

  const {data} = props;
  const chartContainerRef = React.useRef();
  const tooltipRef = React.useRef();

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
    lineColor: '#79DBAC',
    topColor: '#79DBAC',
    bottomColor: 'white',
    textColor: 'black',
  } );
  newSeries.setData(data);
  
    
    return () => {
      chart.remove();
      chart.current = undefined
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

 

  


  return (
    <Box className="chart" id='#GraficaResi' sx={{
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