import React from 'react'

export default function Iframe({quit,albumId}) {
console.log(albumId)
  return (
      <div>
        <span onClick={quit}>X</span>
        <iframe style={{borderRadius:"12px"}} 
        src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator`} 
        width="270" 
        height="200"  
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
