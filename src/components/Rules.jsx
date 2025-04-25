import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to Play dice Game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get same point as dice.</p>
                <p>if you get wrong guess then 2 points will be deducted</p>

                 </div>
        </RulesContainer>
    )
}

export default Rules;

const RulesContainer = styled.div `
 background-color: #fbf1b1;
 max-width: 800px;
 margin: 0 auto;
 h2{
    font-size: 24px;
    margin-top: 20px;
    padding: 10px;
 }
 .text {
    padding: 10px;
 }
`;