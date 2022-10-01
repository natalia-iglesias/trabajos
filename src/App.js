import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import City from './components/City';








function App() {

  const[cities, setCities]=useState([]);

  const apiKey='580f0fe070502423ce14339b2828bd1f';

  function onSearch(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((response) => {
        if(response.main !== undefined ){
         
          const ciudad= {
            min:Math.round(response.main.temp_min),
            max:Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          const reapeatedCity = cities.find((city)=> city.id === ciudad.id);
          if(!reapeatedCity){
            setCities((oldCities) => [...oldCities, ciudad]);
          }else {
            alert("La cuidad ya fue agregada");
          }
          
        } else{
          alert("cuidad no encontrada");
        }

      });
    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onFilter(cuidadId){
      let cuidad = cities.filter(c => c.id === parseInt(cuidadId));
      if(cuidad.length > 0){
        return cuidad[0];
      }else{
        return null;
      }
    }

     
  return (
   
    <div >  
      <Route path='/' render={()=> <Nav onSearch={onSearch}/>}/>
      <Route path='/about' component={About}/>
      <Route exact path='/' render={()=> <Cards cities={cities} onClose={onClose}/>}/>
      <Route exact path='/cuidad/:cuidadId'
             render={({match})=> (<City city={onFilter(match.params.cuidadId)}/>)}/>
    </div>
   
  );
}


export default App;







































