import React, { useState } from 'react'
import TotalScore from "../components/TotalScore.jsx";
import NumberSelector from "../components/NumberSelector.jsx";
import styled from 'styled-components';
import Rolldice from "../components/Rolldice.jsx";
import { Button, OutlineButton } from '../styled/Button.js';
import Rules from '../components/Rules.jsx'


const GamePlay = () => {
  const [score , setScore] = useState(0)
  const [selectedNumber, SetSelectedNumber]= useState();
  const [currentdice , setCurrentDice] = useState(1)
  const [error, setError] = useState()
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  const resetScore=()=>{
      setScore(0);
    }
   
  const rolldice =() =>{

    if(!selectedNumber){
      setError("You have not selected any Number");
      return
    }


    const randomNumber = generateRandomNumber(1,6);
      setCurrentDice((prev)=>randomNumber);
    
      if(selectedNumber === randomNumber){
        setScore((prev)=>prev+randomNumber);
      }else{
        setScore((prev)=>prev-2);
      }

      SetSelectedNumber(undefined);
  }

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}></TotalScore>
      <NumberSelector
      error = {error}
      setError = {setError} 
      selectedNumber={selectedNumber}
      SetSelectedNumber={SetSelectedNumber}></NumberSelector>
      </div>
      <Rolldice
      currentdice = {currentdice}
      rolldice = {rolldice}></Rolldice>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules(prev => !prev)}>
          {
            showRules ? "Hide ": "Show "
          }
          Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }

  .btns{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
  }
`