import React, { useEffect, useState } from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card}from 'react-bootstrap';

function Main() {
  const CLIENT_ID ='9325728f503b4089b42eee9fe94f538f'
  const SECRET_ID ='83b2a9526d444810988a7df2d4522e9b'
  const [inputValue, setInputValue]=useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + SECRET_ID
    };
    fetch('https://accounts.spotify.com/api/token', authParams)
      .then(response => response.json())
      .then(date => setAccessToken(date.access_token))
  },[])

  async function search(){
    //An request to get artists id

    const artistPams = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + accessToken
      },
    }
    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + inputValue + '&type=artist', artistPams)
     .then(response => response.json())
     .then(data => console.log(data))
  }

  return (
   <div id='main'>
    <Container>
      <InputGroup className='mg-3 mt-5'  size='lg'>
        <FormControl
        className='rounded-2'
          placeholder='Search for an Artist'
          type='text'
          onKeyPress={(e)=>{
            if(e.key){
              search();
            }
          }}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <Button onClick={search} className='ms-3 rounded-2 bg-success h-50 p-3'>Search</Button>
      </InputGroup>  
    </Container>
    <Container>
      <Row className='mx-3 mt-3 row row-cols-5 gap-3' size='lg'>
      <Card>
          <Card.Img src='#'/>
          <Card.Body>
            <Card.Title>Album Name here</Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
   </div>
  )
}

export default Main