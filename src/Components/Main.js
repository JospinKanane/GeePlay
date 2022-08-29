import React from 'react'

const client_id = '9325728f503b4089b42eee9fe94f538f';
//var client_secret = '9325728f503b4089b42eee9fe94f538f';
const redirect_uri = 'http://localhost:3000';

function Main() {

  fetch('https://open.spotify.com/track/6kLCHFM39wkFjOuyPGLGeQ')
    .then((answer) => answer.json()).then((data) => console.log(data))

  return (
    <div id='main'>
        
    </div>
  )
}

export default Main