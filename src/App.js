import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import Info from './components/Info'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  const openInfo = id => {
    setCurrentCharacterId(id);
  }

  const closeInfo = () => {
    setCurrentCharacterId(null);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.length > 0 ? characters.map(character => {
        return <Character info={character} key={character.id} openInfo={openInfo} />
      }) : <h1>LOADING</h1>}
      {
        currentCharacterId && <Info characterId={currentCharacterId} closeInfo={closeInfo} />
      }
    </div>
  );
}

export default App;
