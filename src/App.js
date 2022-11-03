import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      
    <Navbar />
    <CountriesList />
    <CountryDetails />

    <Routes>

      <Route path={`/countries/:code`} element={ <CountryDetails CountriesList={CountriesList}/> } />


    </Routes>

    </div>
  );
}

export default App;
