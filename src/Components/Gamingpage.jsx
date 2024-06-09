import React, { createContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Gamingpage.css'
import rockimg from '../assets/rock-hand.png'
import paperimg from '../assets/paper-hand.png'
import scissorsimg from '../assets/scissors-hand.png'
// export  const SendingData=createContext(null);
function Gamingpage(props) {
    var[assign,setAssign]=useState(null);
    const[comassign,setComassign]=useState(null);
    const[draw,setDraw]=useState(false);
    const[youwin,setYouwin]=useState(false);
    const[comwin,setComwin]=useState(false);
    var [score,setScore]=useState(0);
    var[life,setLife]=useState(10);
    const navigate=useNavigate()
    
    let randomnum=0;
    function randomnumber(){
      randomnum=Math.floor(Math.random()*3+0)
      setComassign(randomnum)
    }
  
    const array=[`${rockimg}`,`${paperimg}`,`${scissorsimg}`];
const computerSide={
    height: '20rem',
    width: '20rem',
    border: '2px solid blue',
    position: 'absolute',
    top: '7rem',
    right: '10rem',
    backgroundImage: `url(${array[comassign]})`,
    backgroundSize: 'contain',
    backgroundRepeat:'no-repeat',
    backgroundPositionY: '60px',
}

const userSide={
    height: '20rem',
    width: '20rem',
    border: '2px solid red',
    position: 'absolute',
    top: '7rem',
    left: '10rem',
    backgroundImage:`url(${array[assign]})`,
    backgroundSize: 'contain',
    backgroundRepeat:'no-repeat',
    backgroundPositionY: '60px',
}

 function rock(){
  setAssign(0)
    randomnumber();
   
    // setComassign(randomnum)
    check( assign=0,setComassign(randomnum));
   
 }
 function paper(){
     setAssign(1)
     randomnumber();
    //  setComassign(randomnum)
     check(assign=1,setComassign(randomnum));
    
 }
 
 function scissors(){
     setAssign(2)
     randomnumber();
    //  setComassign(randomnum)
     check( assign=2,setComassign(randomnum));
 }
 const check=function(assign,comassign){
  if(assign==randomnum){
    setDraw(true)
  }
  else if(randomnum==2){
   if(assign==1){
    console.log("sciossors win")
    setYouwin(false);
    setDraw(false);
    setComwin(true);
    setLife(life=life-1);
   }
   else{
    console.log("stone win")
    setYouwin(true);
    setDraw(false);
    setComwin(false);
    setScore(score=score+1);
   }
  }
  else if(randomnum==1){
    if(assign==2){
      console.log("sciossors win")
      setYouwin(true);
      setDraw(false);
      setComwin(false);
      setScore(score=score+1);
    }
    else{
      console.log("paper win")
      setYouwin(false);
      setDraw(false);
      setComwin(true);
      setLife(life=life-1);
    }

  }
  else if(randomnum==0){
    if(assign==2){
      console.log("stone win")
      setYouwin(false);
      setDraw(false);
      setComwin(true);
      setLife(life=life-1);
    }
    else{
      console.log("paper win")
      setYouwin(true);
      setDraw(false);
      setComwin(false);
      setScore(score=score+1);
    }
  }
 }
 if(life==0){
  navigate("/winning");
  props.scoreupd(score);
 }
  return (
    <div id='body'>
      <Link to={'/'}><button style={{border:'none',borderRadius:'1rem',height:'1.5rem',width:'3rem',color:'darkblue'}} >Back</button></Link>
      <span style={{color:'red',fontSize:'2rem',position:'absolute',left:'20rem',top:'3rem',backgroundColor:'white',fontWeight:'bold',borderRadius:'1rem'}}>YOU</span>
      <div id='vs'></div>
      <div id='userside'style={userSide} >
      </div>
      <div id='computerside'style={computerSide}></div>
      <div id='rock-logo' onClick={rock}></div>
      <div id='paper-logo' onClick={paper}></div>
      <div id='scissors-logo' onClick={scissors}></div>
      <div id='won'>{draw?"Draw":youwin?"You win":comwin?"Computer win":""}</div>
      <span style={{color:'white',fontSize:'3rem',position:'absolute',top:'1.5rem'}}>Score</span><div className="score">{score}</div>
      <span style={{color:'white',fontSize:'3rem',position:'absolute',top:'1.5rem',right:'9rem'}}>Life</span><div className="life">{life}</div>
    </div>
  )
}

export default Gamingpage
