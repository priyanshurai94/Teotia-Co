import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import pic2 from '../assets/photo/pic2.jpg'

const Leadership = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10 mb-10 text-cyan-700">Our Team</h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Shubham Teotia
            </h1>
            <div className="w-full lg:w-96 text-left">
              <p className="mb-8 leading-relaxed text-justify">
                Mr. Shubham Teotia is the co-founder of the firm. A professional financial consultant with 6 years of experience in Auditing, international Taxation and comprehensive legal advice to corporate and served 150+ clients of various industries.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex items-center  text-sky-400  border-0 py-2 px-6 focus:outline-none hover:text-green-600  rounded text-lg">Read More  <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={pic2} />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={pic2} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Rahul Chaudhary
            </h1>
            <div className="w-full lg:w-96 text-left">
              <p className="mb-8 leading-relaxed text-justify">
                Mr. Rahul Chaudhary is the co-founder of the firm. He is a financial advisor with 6 years of experience primarily in the fields of Internal Audit, Accounting, and Indirect Taxation. He has led teams in conducting operational, financial, and compliance audits, focusing on procurement activities, sales and marketing, logistics management, production, HR, and inventory areas.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex items-center text-sky-400  border-0 py-2 px-6 focus:outline-none hover:text-green-600 rounded text-lg">Read More  <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leadership;
