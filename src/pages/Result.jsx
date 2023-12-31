import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Result = ({ totalQuestions, result }) => {
  const [name, setName] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem('highScores')) || []);
  }, []);

  const handleSave = () => {
    const score = {
      name,
      score: result.score,
    };
    const newHighScores = [...highScores, score].sort((a, b) => b.score - a.score);
    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem('highScores', JSON.stringify(newHighScores));
  };

  const handleTryAgain = () => {
    setShowScores(false);
    setHighScores([]);
   
    history('/instruction');
  };

  return (
    <div className="result-container bg-gray-100 p-8 rounded shadow-md gap-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">Result</h3>
        <p className="mb-2">
          Total Question: <span className="font-semibold">{totalQuestions}</span>
        </p>
        <p className="mb-2">
          Total Score: <span className="font-semibold">{result.score}</span>
        </p>
        <p className="mb-2">
          Correct Answers: <span className="font-semibold text-green-500">{result.correctAnswers}</span>
        </p>
        <p className="mb-2">
          Wrong Answers: <span className="font-semibold text-red-500">{result.wrongAnswers}</span>
        </p>
      </div>
      <section className="flex py-3 flex-col items-end justify-center md:justify-end">
        {result.score >= 20 ? (
          <p className="text-3xl font-semibold text-green-500">Outstanding! 🌟</p>
        ) : result.score >= 15 ? (
          <p className="text-3xl font-semibold text-blue-500">Excellent! 👏</p>
        ) : (
          <p className="text-4xl font-semibold text-red-500">Better Luck Next Time! 😢</p>
        )}
        <div className="mt-5">
          <button onClick={handleTryAgain} className="btn px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Try Again
          </button>
        </div>
      </section>

      <div className="py-4 text-black-500 font-semibold">
        {!showScores ? (
          <>
            <h3>Enter your name below to save your score!</h3>
            <input
              className="input"
              placeholder="Eg: Abishek M S"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button className="btn1" onClick={handleSave}>
              save
            </button>
          </>
        ) : (
          <>
            <table className="min-w-full">
              <thead>
                <tr key="">
                  <th className="border px-4 py-2">Ranking</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {highScores.map((highScore, i) => {
                  return (
                    <tr key={`${highScore.score}${highScore.name}${i}`}>
                      <td className="border px-4 py-2">{i + 1}</td>
                      <td className="border px-4 py-2">{highScore.name}</td>
                      <td className="border px-4 py-2">{highScore.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
