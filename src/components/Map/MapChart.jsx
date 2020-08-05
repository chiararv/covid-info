import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapChart = ({ setTooltipContent, data }) => {

  const [country, setCountry] = useState(null)
  
  // country !== null && country !== undefined && console.log(i)
  /*
  useEffect(() => {
 
  }, [country])*/
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    
                    const { NAME } = geo.properties;
                    const i = data.Countries.find(element => element.Country === NAME)
                   console.log(i)
                    if(i !== null && i !== undefined){
                      setTooltipContent(`${i.Country} - casos confirmados: ${i.TotalConfirmed}`)
                    }else{
                
                      setTooltipContent(`información no disponible`);
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;
