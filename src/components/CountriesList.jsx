import countries from '../countries.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countriesList, setCountriesList] = useState(countries);

  return (
    <div>
      <h2>CountriesList</h2>

      <ul>
        {countriesList.map((eachCountry) => {
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
