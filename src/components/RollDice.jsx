import { useState } from "react";
import styled from "styled-components";


const RollDice = ({diceNumber,rollDice}) => {
 
    // use the useState hook to change the image
    //move the state to its parent 
    // make function to generate random number between two values
   
    return (
        <RollContainer>
            <div className="dice" onClick={rollDice}>
              <img src={`images/dice/dice_${diceNumber}.png`} alt="Dice Image" />
             
              </div>
             <p>Click on Dice to roll </p>
             
           
        </RollContainer>
    )
}

export default RollDice;

const RollContainer = styled.div`
  display:flex;
  align-items: center;
  margin-top: 42Px;
  flex-direction: column;
  
 .dice {
   cursor: pointer;
   }
  p{
    font-size: 24px;   
 }
`
const Button = styled.button`

`