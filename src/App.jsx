import { useEffect, useState } from 'react'
import Spinner from "./components/utils/Spinner";
import './App.css'
import LoadCountries from './components/LoadCountries'

function App() {
  const [countries, setCountries] = useState([])

  let loadCountries = null


  useEffect(() => {
   fetch("https://restcountries.com/v3.1/all")
   .then(res => res.json())
   .then(data => {
   // console.log(data);
    setCountries(data);
   }) 

  }, [])

   if (countries.length === 0) {
     loadCountries = <Spinner />;
   } else {
     loadCountries = <LoadCountries countries={countries} />;
   }

 
  // console.log(countries);

  return (
    <div className="App">
      <div className="container"> 
          <h1>Rest Countries</h1>
      </div>
      <div className="countries"> 
        {loadCountries}
      </div>
      
    </div>
  )
}





export default App
