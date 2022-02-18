import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Character from './components/Character'
import Info from './components/Info'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  const openInfo = character => {
    setCurrentCharacter(character);
  }

  const closeInfo = () => {
    setCurrentCharacter(null);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}/people?api_key=${API_KEY}`)
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.length > 0 ? characters.map((character, index) => {
        return <Character info={character} index={index} key={index} openInfo={openInfo} /> 
      }) : <h3>LOADING</h3>}
      {
        currentCharacter && <Info character={currentCharacter} closeInfo={closeInfo} />
      }
    </div>
  );
}

export default App;
