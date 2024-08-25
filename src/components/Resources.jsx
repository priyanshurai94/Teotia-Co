import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="min-h-screen  from-indigo-500 to-purple-500 flex flex-col justify-center items-center py-5 px-4">
      <div className="w-full max-w-3xl bg-slate-100 rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Resources</h1>
          <p className="text-gray-600 text-center">
            Explore various resources to enhance your knowledge and stay updated.
          </p>
        </div>
        <div className="space-y-6">
          <Link to="/act-rules" className="block">
            <div className="bg-indigo-100 p-4 rounded-lg shadow-sm hover:bg-indigo-200 transition duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 text-center">Act / Rules</h2>
            </div>
          </Link>
          <Link to="/newsletter" className="block">
            <div className="bg-indigo-100 p-4 rounded-lg shadow-sm hover:bg-indigo-200 transition duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 text-center">News Letter</h2>
            </div>
          </Link>
          <Link to="/article" className="block">
            <div className="bg-indigo-100 p-4 rounded-lg shadow-sm hover:bg-indigo-200 transition duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 text-center">Article</h2>
            </div>
          </Link>
          <Link to="/case-study" className="block">
            <div className="bg-indigo-100 p-4 rounded-lg shadow-sm hover:bg-indigo-200 transition duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 text-center">Case Study</h2>
            </div>
          </Link>
          <Link to="/books-study-materials" className="block">
            <div className="bg-indigo-100 p-4 rounded-lg shadow-sm hover:bg-indigo-200 transition duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 text-center">Books & Study Materials</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
