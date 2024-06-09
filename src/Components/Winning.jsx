import React from 'react'
import '../Winning.css'
import { Link } from 'react-router-dom';
function Winning(props) {
    const {score}=props;
  return (
    <div id='body'>
        <div id='score'>
         <h4 className='scores'>SCORE:{score}</h4>
         <h4>WELL PLAYED</h4>
         <Link to={'/gaming'}><button id='restart'>RESTART</button></Link>
        </div>
      <div className="container">
        <div id="playingimg"></div>
        <div id="scoreboard"></div>
      </div>
      <div className="color"></div>
    </div>
  )
}

export default Winning
