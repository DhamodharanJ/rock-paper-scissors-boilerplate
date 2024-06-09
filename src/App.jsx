import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Gamingpage from './Components/Gamingpage'
import Winning from './Components/Winning'

function App() {
  const[score,setScore]=useState(0);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/gaming' element={<Gamingpage scoreupd={setScore}/>} />
        <Route path='/winning' element={<Winning score={score} />}/>
      </Routes>
    </div>
  )
}

export default App
