import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError ,error ,selectedNumber , SetSelectedNumber}) => {
  const arr= [1,2,3,4,5,6];

  const handleNumberClick =(value)=>{
    SetSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
    <div className= "flex">
    {arr.map((value , i)=>(
      <Box 
      isselected={value===selectedNumber}
      key={i}
      onClick={()=>handleNumberClick(value)}>
      {value}</Box>
    ))}
    </div>
    Select Number
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  
  .flex{
    display: flex;
    gap: 20px;
  }
  
  .p{
    font-size: 24px;
    font-weight: 700;
  }

  .error{
    color: red;
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=>props.isselected?"black":"white"};
  color: ${(props)=>props.isselected?"white":"black"}
`