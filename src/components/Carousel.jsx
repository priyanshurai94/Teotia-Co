import React, { useState, useEffect } from 'react';
import fundraising from '../assets/photo/fundraising.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Direct tax', description: 'Description of Service 1 ', imageUrl: fundraising },
  { title: 'Indirect tax', description: 'Description of Service 2', imageUrl: fundraising },
  { title: 'Accounting & Bookkeeping', description: 'Description of Service 3', imageUrl: fundraising },
  { title: 'Audit & Assurance', description: 'Description of Service 4', imageUrl: fundraising },
  { title: 'Corporate Laws', description: 'Description of Service 5', imageUrl: fundraising },
  { title: 'Fundraising', description: 'Description of Service 6', imageUrl: fundraising },
  { title: 'Management Consulting', description: 'Description of Service 7', imageUrl: fundraising },
  { title: 'FEMA/ International Transaction', description: 'Description of Service 8', imageUrl: fundraising },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Function to update the carousel index
  const updateCarousel = (newIndex) => {
    if (newIndex < 0) {
      newIndex = services.length - 1;
    } else if (newIndex >= services.length) { 
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  // Automatically change carousel slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(index + 1);
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [index]); // Depend on index to reset interval when index changes

  // Function to handle click on left arrow button
  const goToPrevious = () => {
    updateCarousel(index - 1);
  };

  // Function to handle click on right arrow button
  const goToNext = () => {
    updateCarousel(index + 1);
  };

  return (
    <div className="relative overflow-hidden bg-white shadow-lg rounded-lg mx-auto max-w-full">
      <div className="flex" style={{ transform: `translateX(${-index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
        {services.map((service, idx) => (
          <div key={idx} className="p-8 text-center min-w-full box-border relative" style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="relative text-white z-10">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{service.title}</h2>
              <p className="text-gray-200">{service.description}</p>
              <button className='mt-4 text-sky-400 hover:text-green-300'>Explore More  <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-sky-400 hover:bg-green-700 text-white px-3 py-2 rounded-full shadow-md focus:outline-none">
        ←
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-sky-400 hover:bg-green-700 text-white px-3 py-2 rounded-full shadow-md focus:outline-none">
        →
      </button>
    </div>
  );
};

export default Carousel;
