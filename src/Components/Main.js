import React, { useEffect, useState } from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card}from 'react-bootstrap';

function Main() {
  const CLIENT_ID ='9325728f503b4089b42eee9fe94f538f';
  const SECRET_ID ='83b2a9526d444810988a7df2d4522e9b';
  const [inputValue, setInputValue]=useState('');
  const [accessToken, setAccessToken] = useState('');
  const [artistAlb, setArtistAlb] = useState([]);
  const [tracksAlb, setTracksAlb] = useState([]);

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
    //An request to get artists id
  const searchPams = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
  }

  async function search(){
    console.log('searching for ' + inputValue + ' Songs')
    //Getting the artists id

    let artistID = await fetch(`https://api.spotify.com/v1/search?q=${inputValue}&type=artist&limit=50\n`, searchPams)
     .then(response => response.json())
     .then(data => {return data.artists.items[0].id})
     console.log("Artist ID is " + artistID);

    //Getting the albums with the artist id

    let album = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50\n', searchPams)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setArtistAlb(data.items)
        return setTracksAlb(data.items[0].id)
      })

    //Getting the playlists from album

    let tracks = await fetch('https://api.spotify.com/v1/artists/' + album + '/albums?album_type=SINGLE&offset=20', searchPams)
      .then(response => response.json())
      .then(data => console.log(data))
  }
  //https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
  console.log(artistAlb);
  console.log("the album ID is: " + tracksAlb)

  function handleClick(){
    console.log("album clicked")
  }

  return (
   <div id='main'>
    <Container>
      <InputGroup className='mg-3 mt-5'  size='lg'>
        <FormControl
        className='rounded-2'
          placeholder='Search for an Artist'
          type='text'
          /*onKeyPress={(e)=>{
            if(e.key){
              search();
            }
          }}*/
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <Button onClick={search} className='ms-3 rounded-2 bg-success h-50 p-3'>Search</Button>
      </InputGroup>  
    </Container>
    <Container id='main-container'>
      <Row className='mx-3 mt-3 row row-cols-5 gap-3'>
        {artistAlb.map((album, index) => {
          return <Card key={index} id='card' onClick={handleClick}>
                    <Card.Img src={album.images[0].url}/>
                    <Card.Body>
                      <Card.Title>{album.name}</Card.Title>
                    </Card.Body>
                 </Card>
        })}
      </Row>
    </Container>
   </div>
  )
}

export default Main