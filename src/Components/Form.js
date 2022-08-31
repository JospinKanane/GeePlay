import React from 'react'

function Form() {
  return (
    <div>
      <h2>Welcome to GeePlay</h2>
      <h3>Where musics make live</h3>
      <form id="inputForm">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Tape your Name here" id="name" />

        <label for="email">Mail</label>
        <input type="email" name="email" placeholder="Tape your email here" id="email" />
        <button type="submit">Let's hear it</button>
      </form>
    </div>
  )
}

export default Form