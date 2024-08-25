import React from "react";
import { Link } from "react-router-dom";
import mainlogo1 from '../assets/icon/mainlogo1.jpg';
import backgroundVideo from '../assets/video/bg-video.mp4'; 

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <header className="bg-indigo-500 text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={mainlogo1} alt="Logo" className="w-16 h-18 p-2 rounded-full" />
            <div className="flex flex-col">
            <span className="ml-4 text-xl">Teotia & Co.</span>
            <span className="ml-4 text-xl">Charted Accountants</span>
            </div>
          </a>
          <nav className="flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">HOME</Link>
            <Link to={'/about'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">ABOUT US</Link>
            <Link to={'/team'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">TEAM</Link>
            <Link to={'/services'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">SERVICES</Link>
            <Link to={'/virtualcfo'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">VIRTUAL CFO</Link>
            <Link to={'/resources'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">RESOURCES</Link>
            <Link to={'/careers'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">CAREERS</Link>
            <Link to={'/contactus'} className="ml-5 hover:text-green-700 cursor-pointer text-lg text-white">CONTACT US</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;