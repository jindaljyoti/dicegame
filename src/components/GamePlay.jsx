import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "./Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selector, setSelector] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const generateRandom = (min,max) => {
        
    return Math.floor(Math.random() * (max - min) + min);
  
 }
  const rollDice = () => {

  if(!selector){

   setError("You have not selected any number");
    return;
  }
 
   const randomNumber = generateRandom(1,7)
  setDiceNumber(randomNumber);
  if(selector ===  randomNumber){
    setScore(prev => prev + randomNumber);
  }
  else {
    setScore(prev => prev - 2);
  }
  setSelector(undefined);
 }

 const resetScore = () => {
    setScore(0);
 }

 const toggleContent = () => {
    setIsVisible(!isVisible);
 }
    return (
        <MainContainer>
          <div className="main_section">
          <TotalScore score={score} />
          <SelectNumber selector={selector} setSelector={setSelector} error={error} setError={setError}/>
          </div>
          <RollDice diceNumber={diceNumber} rollDice= {rollDice}/>
          <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick = {toggleContent}>
            {isVisible ? "Hide Rules": "Show Rules"}
            </Button>
          </div>
          
          {isVisible && < Rules />}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
 padding-top: 72px;
 .main_section{
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .btns {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
 }
`
