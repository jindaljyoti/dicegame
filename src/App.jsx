import { useState } from 'react'
import './App.css';
import styled from 'styled-components';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`
function App() {

   const [isGameStarted, setIsGameStarted] = useState(true);
  

   const toggleGame = () => {
     
      // setIsGameStarted(prev => !prev);
      setIsGameStarted(!isGameStarted);

   }  
  return (
     
   <div>
       {isGameStarted? <GamePlay />: <StartGame toggle ={toggleGame} />}
    
    </div>
  )
}

export default App
