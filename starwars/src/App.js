import React, {useState, useEffect } from 'react';
import axios from 'axios';
import People from './People';
import './App.css';


const sourceData = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [starWarsData, setStarWarsData] = useState();

  useEffect(() => {
    axios.get(sourceData)
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.results);
        setStarWarsData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    }
  , [])

  console.log(starWarsData);

  if (starWarsData) {
    return (
      <div>
        <div className="App">
          <h1 className="Header">React Wars</h1>
        </div>
        <div>
          <h2>Name: {starWarsData[0].name}</h2>
          <p>Height: {starWarsData[0].height}</p>
          <p>Mass: {starWarsData[0].mass}</p>
          <p>Hair colour: {starWarsData[0].hair_color}</p>
          <p>Skin colour: {starWarsData[0].skin_color}</p>
        </div>
        <div>
          <People people={starWarsData} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Waiting for data...</h1>
      </div>
    )
  }

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

}

export default App;
