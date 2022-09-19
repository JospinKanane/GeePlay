import React from 'react'

export default function Iframe({quit,albumId}) {
console.log(albumId)
  return (
      <div>
        <span onClick={quit} id='quit'>X</span>
        <iframe style={{borderRadius:"0px", postion:''}} 
        src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator`} 
        width="220" 
        height="220"  
        allowFullScreen="" 
        allow="autoplay; 
        clipboard-write; 
        encrypted-media; 
        fullscreen; 
        picture-in-picture" 
        loading="lazy"></iframe>
      </div>
  )
}
