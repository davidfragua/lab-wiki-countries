import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from "./countries.json"

function App() {
  return (
    <div className="App">
      
    <Navbar />
    <CountriesList />
  

    <Routes>

      <Route path={`/countries/:code`} element={ <CountryDetails countries={countries}/> } />


    </Routes>

    </div>
  );
}

export default App;
