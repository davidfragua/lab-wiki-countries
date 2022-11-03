import { useState } from "react"
import { useParams } from "react-router-dom"


function CountryDetails(props) {

    // 1. creamos un estado para los detalles del país
    const [ countryInfo, setCountryInfo ] = useState(null)
    // 2. buscamos el nombre del país 
    const { code  } = useParams()
    // 3. contactar con la BD

  return (
    <div>CountryDetails
        {props.alpha3Code}
        
    </div>
  )
}

export default CountryDetails