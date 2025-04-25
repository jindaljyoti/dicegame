import styled from "styled-components";
import SelectNumber from "./SelectNumber";

const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        {/* <SelectNumber /> */}
        </ScoreContainer>
    )
}

export default TotalScore;

const ScoreContainer = styled.div`
  margin-top: 10px;
  max-width: 200px;
  text-align: center;
 h1{
    font-size: 100px;
    line-height: 80px;
 }
 p{
    font-size: 24px;
    font-weight: 500px;

 }
`