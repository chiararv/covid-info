import React, { useEffect, useState } from 'react'
import { useParams, Route } from 'react-router-dom';
import Axios from 'axios';
import Chart from "../Chart"
import country from '../../countries'
import classes from './Pais.module.css';
import News from '../news/News';
import Loader from '../UI/Loader/Loader';


const Pais = () => {
  const { pais } = useParams();

  const [countryInfo, setCountryInfo] = useState(null)
  const [charInfo, setCharInfo] = useState(null);
  const [news, setNews] = useState(null)

  useEffect( () => {
    Axios
      .get(`https://api.covid19api.com/dayone/country/${pais}`)
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

  useEffect(() => {
    if(!countryInfo) return
    console.log(countryInfo.CountryCode)
    console.log(countryInfo)
    Axios
    .get(`https://newsapi.org/v2/top-headlines?country=${countryInfo.CountryCode}&q=covid&apiKey=72eb89b9bc9e4d63be5c0f5009554d87`)
    .then((response) => {
      
     setNews(response.data)
    })

  }, [countryInfo])
  console.log(news)

  if(!countryInfo && !charInfo && !news) return <Loader />;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.text}>
         <h1>{countryInfo.Country}</h1>
         <p><span className={classes.underlined}>Casos totales:</span> {countryInfo.Confirmed}</p>
        </div>
          {charInfo !== null && <Chart  chartData={charInfo}/> }  
      </div>
      <div className={classes.newsContainer}>
      {
        news !== null && news.articles.map( item => (

          <News
            title={item.title}
            source={item.source.name}
            description={item.description}
            author={item.author}
            img={item.urlToImage}
            web={item.url}
            date={item.publishedAt}
          />
        ))
      }
      </div>
    </div>  
    
  )
}

export default Pais

