import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Welcome = () => {
    
  return (
    <div className='flex flex-col h-screen justify-center items-center'  >
    <div className='py-10 flex flex-col'><h1 className='head-text'>Welcome To The <span className="text-transparent  bg-gradient-to-r from-violet-600 to-indigo-800 bg-clip-text">Questionnaire</span></h1></div>
    <div className='text-4xl'>Click Here To Enter</div>
    <div className='py-8 items-center'>
  <FaArrowAltCircleDown className='text-6xl text-violet-500' />
</div>
<Link to='/instruction' className='btn p-4 text-lg'>Click here</Link>
 </div>
  )
} 

export default Welcome