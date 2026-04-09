import React from 'react'
import styled from 'styled-components'

const Rules = ({ showRules , setshowRules}) => {
  return (
    <RulesContainer>
      <div className="text">
        <h2>Rules of the Game</h2>
      <ul>
        <li>Select a number between 1 and 6.</li>
        <li>Roll the dice and if your selected number matches the dice value, you earn points.</li>
        <li>If your selected number doesn't match, you lose points.</li>
      </ul>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`

  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px; 
  background-color: #f0f0f0;
  padding: 20px;
  h2{
    font-size: 24px;
  }
  .text{
    margin-top: 24px;

  }
`