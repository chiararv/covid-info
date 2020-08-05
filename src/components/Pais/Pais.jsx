import React, { useEffect, useState } from 'react'
import { useParams, Route } from 'react-router-dom';
import Axios from 'axios';
import Chart from "../Chart"
import country from '../../countries'
import classes from './Pais.module.css';


const Pais = () => {
  const { pais } = useParams();

  const [countryInfo, setCountryInfo] = useState(null)
  const [charInfo, setCharInfo] = useState(null);

  useEffect( () => {
    Axios
      .get(`https://api.covid19api.com/live/country/${pais}`)
      .then((response) => {
        
        setCountryInfo(response.data[response.data.length - 1]) 
      })
    // setCountryInfo(country)
  },[pais]) 

  useEffect(() => {
    if(countryInfo){

    
    setCharInfo( 
      {
      labels: ['Total muertes', 'Total recuperados', 'casos activos' ],
     datasets: [{
       label: 'population',
       data:[
        countryInfo.Deaths,
        countryInfo.Recovered,
        countryInfo.Active
       ],
       backgroundColor:[
         'rgba(18, 94, 138, 0.5)',
         'rgba(247, 177, 171, 0.5)',
         'rgba(146, 172, 134, 0.5)',
       ]
     }]
    }
   )
  }
  }, [countryInfo])

  if(!countryInfo && !charInfo) return null;

  console.log({countryInfo, charInfo})

  

  return (  
      <div className={classes.container}>
        <div className={classes.text}>
         <h1>{countryInfo.Country}</h1>
         <p>Casos totales:{countryInfo.Confirmed}</p>
        </div>
          {charInfo !== null && <Chart  chartData={charInfo}/> }  
      </div>
    
  )
}

export default Pais

