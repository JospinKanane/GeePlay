import React from 'react'
import { BrowserRouter as Rooter, Link } from 'react-router-dom';
import { useRef } from 'react';
// import Tracks from '../pages/Tracks';
// import Home from '../pages/Home';
// import Playlists from '../pages/Playlists';
// import Albums from '../pages/Albums';
// import Artists from '../pages/Artists';



export default function Navigation({title, setTitle}) {
  const track = (e)=> {
    setTitle('Tracks')
  }
  
  return (
    <div>
      <Rooter>
        <nav id="nav">
          <Link to='/' className='navLink'>Home</Link>
          <Link to='/Tracks' className='navLink' onClick={track}>Tracks</Link>
          {/* <Link to='/Albums' className='navLink'>Albums</Link> */}
          <Link to='/Playlists' className='navLink'>Playlists</Link>
          <Link to='/Artists' className='navLink'>Artists</Link>
        </nav>
      </Rooter>
    </div>
  )
}
