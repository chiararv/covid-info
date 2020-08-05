import React, { useState } from "react";
import { useHistory } from "react-router-dom"


const Buscador = ({paises}) => {
  let history = useHistory()

  const [target, setTarget] = useState("")
     
  const handleCategories = () => {
 
    history.push('/pais/' + target)
    // alert('j')
  
  }

  const handleEnter = (e) =>{
    
    if(e.key === 'Enter'){
      e.preventDefault();
   
      
      handleCategories()
    }
    
  }
    // console.log(paises)
    return (
      <div className="col-lg-4">
          <input placeholder="Buscar por país" type="text" list="countries" onChange={(e) => setTarget(e.target.value)} onKeyPress={(e) => handleEnter(e)} />
          <datalist  id="countries"  className="form-control">
          {
              paises.map((pais, index) => <option  key={index} value={pais.Slug}>{pais.Country}</option>)
          }
          </datalist>
      </div>
  
    )
}


export default Buscador;
