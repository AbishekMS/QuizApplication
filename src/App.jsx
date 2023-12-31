import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'

import Instruction from './pages/Instruction'
import Result from './pages/Result'
import Getquiz from './components/Getquiz'
import backgroundImage from './assets/bg.jpg'

const App = () => {
  const backgroundImageStyle = {
    background:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure full viewport height
  };
  return (
    
    <Router>
    <div style={backgroundImageStyle}>
     <Routes>
       <Route path='/' element={<Welcome/>}></Route>
       
       <Route path='/instruction' element={<Instruction/>}></Route>
       <Route path='/quiz' element={<Getquiz/>}></Route>
       <Route path='/result' element={<Result/>}></Route>
       
     </Routes>
     </div>

    </Router>
  
  )
}

export default App