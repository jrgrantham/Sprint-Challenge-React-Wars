import React, {useState, useEffect } from 'react';
import axios from 'axios';
import People from './People';
import AwaitingData from './AwaitingData';
import DynamicTitle from './DynamicTitle';
import './App.css';

const url = 'https://swapi.co/api/';
const subject = 'people';
const sourceData = `${url}${subject}/`;
// console.log(sourceData);

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
          <DynamicTitle subject={subject}/>
        </div>
        <div>
          <People people={starWarsData} />
        </div>
      </div>
    )
  } else {
    return (
      <AwaitingData />
      // <div>
      //   <h1>Waiting for data...</h1>
      // </div>
    )
  }

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

}

export default App;
