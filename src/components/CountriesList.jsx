import countries from '../countries.json';

import { Link } from 'react-router-dom';

function CountriesList() {


  return (
    <div>
      <h2>CountriesList</h2>

      <ul>
        {countries.map((eachCountry) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-5">
                  {/* Falta meter este estilo en className="col-5" style="max-height: 90vh; overflow: scroll"  */}
                  <div className="list-group">
                    <li
                      className="list-group-item list-group-item-action"
                      key={eachCountry.alpha3Code}
                    >
                      <Link to={`/countries/${eachCountry.alpha3Code}`}>
                        {eachCountry.name.common}
                        {/* no me funciona la interpolación en la url */}
                        {/* <img src=`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code}.png` alt="" /> */}
                        
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
