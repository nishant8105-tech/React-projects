import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({currentdice , rolldice}  ) => {

  return (
    <DiceContainer>
      <div className='Dice'
      onClick={rolldice}>
        <img src={`../images/Dices/dice_${currentdice}.png`} alt="" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p{
    font-size: 24px;
  }

  .Dice{
    cursor: pointer;

  }
`