import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function CountryDetails(props) {

    console.log("props", props)
    // 1. creamos un estado para los detalles del país
    // const [ countryInfo, setCountryInfo ] = useState(null)
    // // 2. buscamos el nombre del país 
    const { code  } = useParams()
    // 3. contactar con la BD
    const oneCountry = props.countries.filter((eachCountry)=> {
    return  eachCountry.alpha3Code === code
    })
    console.log("oneCountry", oneCountry) // veo que devuelve un array del objeto 

  return (
    <div>Country Details
        {/* intento acceder a las propiedades del objeto */}
        {/* {oneCountry.map((eachCountry)=> {
          return  <p>{eachCountry[0].alpha3Code}</p>
              
        })} */}
       <p>prueba</p>

        
    </div>
  )
}

export default CountryDetails