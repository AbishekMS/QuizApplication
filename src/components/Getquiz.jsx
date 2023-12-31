import React, { useEffect, useState } from 'react'
import Quiz from '../pages/Quiz'
import { jsQuizz } from './Constants'
const Getquiz = () => {
    const [questions,setQuestions]=useState([]);
    useEffect(()=>{
        getQuestions();
    },[]);
    const getQuestions=async()=>{
        try{
            const response=await fetch("https://644982a3e7eb3378ca4ba471.mockapi.io/questions");
            const questionResponse= await response.json();
            setQuestions(questionResponse);

        }catch(error){
            console.log(error);
        }
    };
  return (
   <Quiz questions={jsQuizz.questions}/>
  )
}

export default Getquiz