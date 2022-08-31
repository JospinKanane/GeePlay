import React, { useEffect, useState } from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card}from 'react-bootstrap';




function Main() {
  const [inputValue, setInputValue]=useState('');
  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  }
  const handleClick = (e) => {
    console.log(inputValue)
  }

  return (
    <Container id='main'>
      <InputGroup className='mg-3 mt-5'  size='lg'>
        <FormControl
        className='rounded-2'
          placeholder='Search for an Artist'
          type='text'
          onKeyPress={(e)=>{
            if(e.key){
              console.log('Entering search');
            }
          }}
          onChange={handleOnchange}
        />
        <Button onClick={handleClick} className='ms-3 rounded-2 bg-success h-50 p-3'>Search</Button>
      </InputGroup>  
    </Container>
  )
}

export default Main