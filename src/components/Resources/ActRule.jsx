import React from 'react';
import { Link } from 'react-router-dom';

const ActRule = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-0 px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Act & Rules</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li>
            <Link to="/direct-taxation" className="block bg-blue-100 p-6 rounded-lg shadow hover:bg-blue-200 transition duration-200 ease-in-out text-center text-xl text-blue-800 font-semibold">
              Direct Taxation
            </Link>
          </li>
          <li>
            <Link to="/indirect-taxation" className="block bg-green-100 p-6 rounded-lg shadow hover:bg-green-200 transition duration-200 ease-in-out text-center text-xl text-green-800 font-semibold">
              Indirect Taxation
            </Link>
          </li>
          <li>
            <Link to="/fema" className="block bg-purple-100 p-6 rounded-lg shadow hover:bg-purple-200 transition duration-200 ease-in-out text-center text-xl text-purple-800 font-semibold">
              FEMA
            </Link>
          </li>
          <li>
            <Link to="/corporate-law" className="block bg-yellow-100 p-6 rounded-lg shadow hover:bg-yellow-200 transition duration-200 ease-in-out text-center text-xl text-yellow-800 font-semibold">
              Corporate Law
            </Link>
          </li>
          <li>
            <Link to="/money-laundering" className="block bg-red-100 p-6 rounded-lg shadow hover:bg-red-200 transition duration-200 ease-in-out text-center text-xl text-red-800 font-semibold">
              Money Laundering
            </Link>
          </li>
          <li>
            <Link to="/black-money-law" className="block bg-teal-100 p-6 rounded-lg shadow hover:bg-teal-200 transition duration-200 ease-in-out text-center text-xl text-teal-800 font-semibold">
              Black Money Law
            </Link>
          </li>
          <li>
            <Link to="/auditing-regulation" className="block bg-indigo-100 p-6 rounded-lg shadow hover:bg-indigo-200 transition duration-200 ease-in-out text-center text-xl text-indigo-800 font-semibold">
              Auditing Regulation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActRule;
