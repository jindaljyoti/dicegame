import styled  from "styled-components";
import { Button} from "./Button";

const StartGame = ({toggle}) => {
    return (
       <Container>
         <div className="image">
          <img src="images/dice.png"  alt="dice-image" />
          </div>
         <div className="heading">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
            
         </div>
       </Container>
    )
}

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1180px;
 
  .heading {
    h1 {
        font-size: 96px;
        
    } 
  },

  .image {
    img{
        
        width: 330px;
    }
    
  }
`
