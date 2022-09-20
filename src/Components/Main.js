import React, { useEffect, useState } from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card}from 'react-bootstrap';
import Aside from './Aside';
import Iframe from './pages/Iframe';
import Logo from '../assets/Logo.png'
import image from '../assets/image.jpg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Artists from './pages/Artists';
import Albums from './pages/Albums';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import Tracks from './pages/Tracks';

function Main() {
  const client_Id = process.env.REACT_APP_SPOTIFY_SECRET_ID ;
  const secret_Id = process.env.REACT_APP_SPOTIFY_SECRET_CODE;
  const [inputValue, setInputValue]=useState("ed sheeran");
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const [play, setPlay]= useState(false);
  const [close, setClose] = useState(true);
  const [albumId, setAlbumId] = useState('');
  const [title, setTitle] = useState('Home');

  useEffect(() => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${client_Id}&client_secret=${secret_Id}`
    };
    fetch('https://accounts.spotify.com/api/token', authParams)
      .then(response => response.json())
      .then(date => setAccessToken(date.access_token));
      search();
  },[])
  console.log(accessToken)
  const searchPams = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
  }

   function search(){
    console.log(`searching for ${inputValue} Songs`)
    
    /** Getting ids of albums, ttracks, artists, playlists from Spotify API **/

    let url = fetch(`https://api.spotify.com/v1/search?q=${inputValue}&type=album,track,artist,playlist&include_external=audio?limit=50`, searchPams)
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
    <img src={Logo} alt='Logo' id='logo'/>
    <Aside />
    <div id='player'>
   { play && 
      <Iframe 
      play={play} 
      quit={quit} 
      player={player} 
      close={close}
      albumId={albumId}/>
    } 
   </div>
   </div>
   <div id='main'>
    <Container className='display-flex align-items-center' id='header'>
      <InputGroup className='mg-3 mt-2 w-50 h-10'  size='sm'>
        <FormControl
        className='rounded-2 '
          placeholder='Search for an artist, album or song'
          type='text'
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <Button onClick={search} className='ms-3 rounded-2 bg-success w-10 h-20 color=#552b66'>Search</Button>
      </InputGroup>
      <div id='userInfo'>
        <div id='userName'>Jospin Kanane</div>
        <img src={image} alt='userImage' id='userImage'></img>

      </div>  
    </Container>
    <h2 className='title'>{title}</h2>
    <Container id='main-container'>
      <Row className='mx-3 mt-3 row row-cols-5 gap-6 text-center' id ='row'>
        {albums.map((album, index) => {
          return <Card key={index} className=' w-13 h-13 ' 
                  onClick={()=>{
                    setPlay(true)
                    setClose(false)
                    setAlbumId(album.id)
                    id="card"
                  }}>
                    <Card.Img src={album.images[0].url} className="rounded-circle w-9 h-9 mt-2 mb-0" id='imageCard'/>
                    {/* <Card.Body className="h-5 w-15">
                      <Card.Title>{album.name}</Card.Title >
                    </Card.Body> */}
                    <span id='name-songs' className='text-center'>{album.name.length > 20 ? `${album.name.slice(0, 19)}...` : album.name}</span>
                 </Card>
        })}
      </Row>
    </Container>

   </div>
   <div>
    <Router>
      <Routes>
        <Route path="/" component={Home}/>
        <Route path="/Tracks" component={Tracks} title={title} setTitle={setTitle}/>
        <Route path="/Albums" component={Albums} />
        <Route path="/Playlists" component={Playlists} />
        <Route path="/Artists" component ={Artists} />
      </Routes>
    </Router>
   </div>
  </section>
  )
}

export default Main