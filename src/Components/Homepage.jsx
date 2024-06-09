import React from 'react'
import '../Homepage.css'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div id='body'>

      <h1>Let's Play Game</h1>
      <div id='gameimg'>
      </div>
      <h3>Click here to play</h3>
      <Link to={'/gaming'}> <div id='play'>
      </div></Link>
    </div>

  )
}

export default Homepage
