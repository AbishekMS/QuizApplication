import React from 'react';
import { Link } from 'react-router-dom';

const Instruction = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Instructions</h1>
        <ul className="text-left mb-4">
          <li className="mb-2">1. You are given 1 minute to answer the questions.</li>
          <li className="mb-2">2. You are not allowed to skip the questions.</li>
          <li className="mb-2">3. All the questions must be answered.</li>
          <li className="mb-2">4. Submitted answers only considered into account.</li>
          <li className="mb-2">5. You are not allowed to go back.</li>
          <li className="mb-2">6. Your score will be displayed at the end.</li>
          
        </ul>
        <Link to="/quiz" className="btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Let's Start
        </Link>
      </div>
    </div>
  );
};

export default Instruction;
