import React from 'react'
import diceImg from '../images/dices 1.png'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src={diceImg} alt="diceImg" />
      <div className='Content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;

  .Content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }

`;


