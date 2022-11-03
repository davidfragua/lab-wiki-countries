import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function CountryDetails(props) {

    console.log("props", props)
    // 1. creamos un estado para los detalles del país
    const [ countryInfo, setCountryInfo ] = useState(null)
    // 2. buscamos el nombre del país 
    const { code  } = useParams()
    // 3. contactar con la BD
    // useEffect(() => {

    //     props.map((eachCountry) =>{
    //         return eachCountry 
    //     })


    // }, [code])

  return (
    <div>CountryDetails
      

        
    </div>
  )
}

export default CountryDetails