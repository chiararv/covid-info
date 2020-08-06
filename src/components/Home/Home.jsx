import React, { useState } from 'react';
import Buscador from '../Buscador/Buscador';
import ReactTooltip from "react-tooltip";
import MapChart from '../Map/MapChart';
import classes from './Home.module.css'


const Home = ({data}) => {
  const [content, setContent] = useState("");

    return ( 
        
    <main className={classes.container}>
      <header className={classes.header}>
        <div>
          <h1 className={classes.headerTitle}>COVID‑19</h1>
          <p>Haz click en el mapa para ver información de cada país.</p>
        </div>
        <div className={classes.mapContainer}>
          <MapChart data={data} setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        
      </header>
        <section>
          <div className={classes.info}>
            <article className="" style={{width:'600px', margin:'1.5rem'}}>
              <h2>¿Qué es un coronavirus?</h2>
              <div className="" >
                  <p>Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones     respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.</p>
              </div>
            </article>
            <article className="" style={{width:'600px', margin:'1.5rem'}}>
              <h2>¿Qué es la COVID‑19?</h2>
                <div className="" >
                <p>La COVID‑19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente. Tanto este nuevo virus como la enfermedad que provoca eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019. Actualmente la COVID‑19 es una pandemia que afecta a muchos países de todo el mundo.</p>
                </div>
            </article>  
          </div>
          <article >
            <h5 style={{textAlign: 'center', fontSize:'30px'}}>Información Global</h5>
            <div className={classes.globalData}>
              <div>
                <p>Nuevos casos: {data.Global.NewConfirmed}</p>
                <p>Nuevas muertes: {data.Global.NewDeaths}</p> 
                <p>Recuperados: {data.Global.NewRecovered}</p> 
              </div>
              <div>
                <p>Total confirmados: {data.Global.TotalConfirmed}</p> 
                <p>Total muertes: {data.Global.TotalDeaths}</p> 
                <p>Total recuperados: {data.Global.TotalRecovered}</p> 
              </div>
            </div>
          </article>
        </section>

      

     </main>
        
    )
}


export default Home;







