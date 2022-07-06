import { useEffect, useState } from 'react';

import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [chart, setChart] = useState([])

  useEffect(()=>{
    const chartLS = JSON.parse(localStorage.getItem('chart')) ?? []
    if(chartLS.length !== 0){
      setChart(chartLS)
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('chart', JSON.stringify(chart))
  }, [chart])

  const addToChart = product => {
    if(chart.some(item => item._id === product._id)){
      const updatedChart = chart.map(item => {
        if(item._id === product._id){
          item.quantity += product.quantity
        }
        return item
      })
      setChart(updatedChart)
    }else{
      setChart([...chart, product])
    }
  }

  const updateQuantity = product => {
    const updatedChart = chart.map(item => {
      if(item._id === product._id){
        item.quantity = product.quantity
      }
      return item
    })
    setChart(updatedChart)
  }

  const deleteProduct = id => {
    const updatedChart = chart.filter(item => item._id !== id)
    setChart(updatedChart)
  }

  return <Component {...pageProps}
    addToChart={addToChart}
    updateQuantity={updateQuantity}
    deleteProduct={deleteProduct}
    chart={chart} 
  />
}

export default MyApp
