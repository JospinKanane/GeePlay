import React from 'react'
import { BrowserRouter as Rooter, Routes, Route, Link } from 'react-router-dom';
import Tracks from '../pages/Tracks';
import Home from '../pages/Home';
import Playlists from '../pages/Playlists';
import Albums from '../pages/Albums';
import Artists from '../pages/Artists';



export default function Navigation() {
  return (
    <div>
      <Rooter>
        <nav id="nav">
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/Tracks' className='nav-link'>Tracks</Link>
          <Link to='/Albums' className='nav-link'>Albums</Link>
          <Link to='/Playlists' className='nav-link'>Playlists</Link>
          <Link to='/Artists' className='nav-link'>Artists</Link>
        </nav>
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/Tracks" component={Tracks} />
          <Route path="/Albums" component={Albums} />
          <Route path="/Playlists" component={Playlists} />
          <Route path="/Artists" component ={Artists} />
        </Routes>
      </Rooter>
    </div>
  )
}
