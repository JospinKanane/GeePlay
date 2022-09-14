import React, { useEffect, useState } from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card}from 'react-bootstrap';
import Aside from './Aside';
import Iframe from './pages/Iframe';
// import Artists from './pages/Artists';
// import Albums from './pages/Albums';
// import Home from './pages/Home';
// import Playlists from './pages/Playlists';
// import Tracks from './pages/Tracks';

function Main() {
  const CLIENT_ID =process.env.REACT_APP_SECRET_ID;
  const SECRET_ID =process.env.REACT_APP_SECRET_CODE;
  const [inputValue, setInputValue]=useState("Ed sheeran");
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const [play, setPlay]= useState(false);
  const [close, setClose] = useState(true);
  const [albumId, setAlbumId] = useState('');

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
      .then(date => setAccessToken(date.access_token));
      search();
  },[])

  const searchPams = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
  }

   function search(){
    console.log('searching for ' + inputValue + ' Songs')
    
    /** Getting ids of albums, ttracks, artists, playlists from Spotify API **/

    let url = fetch(`https://api.spotify.com/v1/search?q=${inputValue}&type=album,track,artist,playlist,show,episode&include_external=audio?limit=20`, searchPams)
     .then(response => response.json())
     .then(data => {
      console.log(data);
      setTracks(data.tracks.items);
      setPlaylists(data.playlists.items);
      setAlbums(data.albums.items);
      setArtists(data.artists.items);
      return data;
    })
  }

  console.log('requete pour les chansons')
  console.log(tracks)
  console.log('requete pour les artistes' )
  console.log(artists)
  console.log('requete pour les playlists')
  console.log(playlists)
  console.log('requete pour les albums')
  console.log(albums)
  console.log("id de l'album est " + albumId)

/** Function that shows the iFrame spotify **/
  const player=()=>{
    setPlay(true)
    setClose(false)
    setAlbumId(album.id)
}

/** Function that shows off the iFrame spotify **/
const quit=()=>{
    setPlay(false)
    setClose(true)
}

return (
  <section id='container'>
   <div id='aside'>
    <Aside />
    { play && 
      <Iframe 
      play={play} 
      quit={quit} 
      player={player} 
      close={close}
      albumId={albumId}/>
    } 
   </div>
   <div id='main'>
    <Container className='display-flex align-items-center'>
      <InputGroup className='mg-3 mt-2 w-50 h-10'  size='sm'>
        <FormControl
        className='rounded-2 '
          placeholder='Search for an Artist'
          type='text'
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <Button onClick={search} className='ms-3 rounded-2 bg-success w-10 h-20'>Search</Button>
      </InputGroup>  
    </Container>
    <Container id='main-container'>
      <Row className='mx-3 mt-3 row row-cols-5 gap-3'>
        {albums.map((album, index) => {
          return <Card key={index} className=' w-15 h-15' 
                  onClick={()=>{
                    setPlay(true)
                    setClose(false)
                    setAlbumId(album.id)
                  }}>
                    <Card.Img src={album.images[0].url} className="rounded-circle w-10 h-10 mt-2 mb-0"/>
                    <Card.Body className="h-5 w-15">
                      <Card.Title>{album.name}</Card.Title >
                    </Card.Body>
                 </Card>
        })}
      </Row>
    </Container>

   </div>
  </section>
  )
}

export default Main