import { useState } from "react";
import styled from "styled-components";

const SelectNumber = ({error,setError,selector,setSelector}) => {

    // make an array to reduce repeated code
    const arr = [1,2,3,4,5,6];
    //usestate hook to select the items
    //Move the state to its parent
    
    const numberHandler = (number) => {
       setSelector(number);
       setError("");
    }
    return (
         // use map method to iterate the numbers
         <NumberContainer>
           <p className="error"> {error}</p>
            <div className="flex">
         {arr.map((number,i) => (
           
        <BoxSelector isSelected={number === selector} key={i} onClick ={() => numberHandler(number)} >{number} </BoxSelector>
         ))}
           </div>
           <p>Select Number</p>
        </NumberContainer>
  
    )
}

export default SelectNumber;


const NumberContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;

 .flex {
    display: flex;
     gap: 24px;
 }
 p{
    font-size: 24px;
    font-weight: 700px;
 }
 .error{
   color: red;
   font-size: 18px;
 }
`
const BoxSelector = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
background-color: ${({isSelected}) => isSelected?"black":"white"};
color: ${({isSelected}) => isSelected?"white":"black"}
`