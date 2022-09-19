import React from 'react'


const authEndPoint ="https://accounts.spotify.com/authorize";
const clientID =process.env.REACT_APP_SPOTIFY_SECRET_ID;
const REDIRECT_URI="http://localhost:3000";
const SCOPE_DELIMITER="%20";
const SCOPE = ["user-read-private",
               "user-read-email",
               "user-read-email",
               "user-read-private",
               "user-modify-playback-state",
               "user-read-playback-state",
               "user-read-currently-playing",
               "user-read-recently-played",
               "user-read-playback-position",
               "user-top-read"
              ];
const SCOPE_URL_PARM = SCOPE.join(SCOPE_DELIMITER);

function Spotify() {

  const handleLogin = () => {
    window.location = `${authEndPoint}?client_id=${clientID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URL_PARM }&response_type=token&show_dialog=true`
  };
  return (
    <div>
        <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  )
}

export default Spotify