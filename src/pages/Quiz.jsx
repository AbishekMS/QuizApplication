import React, { useState, useEffect } from 'react';
import { resultInitalState } from '../components/Constants';

import Result from './Result';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [overallTimer, setOverallTimer] = useState(questions.length*10); 
  
  const questionData = questions[currentQuestion];
  const { question, choices, correctAnswer } = questionData;

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);

    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  useEffect(() => {
    let timerInterval;

    if (overallTimer > 0) {
      timerInterval = setInterval(() => {
        setOverallTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setShowResult(true);
    }
    return () => clearInterval(timerInterval);
  }, [overallTimer]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto justify-center items-center p-8 neo-brutalism-white bg-white rounded shadow-md">
        {!showResult ? (
          <>
            <div className="text-center mb-4">
              <span className="text-gray-600">{currentQuestion + 1}</span>
              <span className="text-gray-600">/{questions.length}</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">{question}</h1>
            <p className="text-xl mb-4">Time remaining: {overallTimer} seconds</p>
            <ul className="space-y-2">
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerClick(answer, index)}
                  key={answer}
                  className={`cursor-pointer p-2 rounded border ${
                    answerIdx === index
                      ? 'bg-violet-200 border-violet-500'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="footer py-5 flex-col">
              <button
                className={`w-full ${
                  answerIdx === null ? 'cursor-not-allowed btn1' : 'btn'
                }`}
                onClick={onClickNext}
                disabled={answerIdx === null}
              >
                {currentQuestion === questions.length - 1
                  ? 'Finish'
                  : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <>
            <Result totalQuestion={questions.length} result={result} />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
