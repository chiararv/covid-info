import React, { useEffect, useState } from 'react';
import axios from "axios";
import Home from "../../Home/Home"
import Buscador from "../../Buscador/Buscador"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useParams
} from "react-router-dom"
import Prevencion from '../../Prevencion/Prevencion';
import Pais from '../../Pais/Pais'
import './NavItems.css'



function NavItems() {
const [data, setData] = useState(null);
const [countries, setCountries] = useState(null);



useEffect( () => {

  axios
    .get('https://api.covid19api.com/summary')
    .then((response) => {

      setData(response.data)
    })

},[]) 

useEffect( () => {

  axios
    .get(`https://api.covid19api.com/countries`)
    .then((response) => {

      setCountries(response.data) 
    })

},[]) 


return (

    <>
        <ul className="NavigationItems">
          <li className="NavigationItem">
            <Link to="/">Home</Link>
          </li>
          <li className="NavigationItem">
            <Link to="/prevencion">Prevencion</Link>
          </li>
          <li className="NavigationItem NavigationItem--search">
          { countries && <Buscador paises={countries}/> }
          </li>
        </ul>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
    
    </>

);
}


export default NavItems;


/*
https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z



*/