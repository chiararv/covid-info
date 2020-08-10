import React  from "react";
import { useHistory } from "react-router-dom"
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapChart = ({ setTooltipContent, data }) => {


  let history = useHistory()

  
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
                    const { ISO_A2 } = geo.properties;
                    const i = data.Countries.find(element => element.CountryCode === ISO_A2)
                    setTooltipContent(i ? `${i.Country} - casos confirmados: ${i.TotalConfirmed}` : ` información no disponible`)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ISO_A2 } = geo.properties;
                    const i = data.Countries.find(element => element.CountryCode === ISO_A2)
                    history.push('/pais/' + i.Country)
                    
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
