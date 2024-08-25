import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import mainlogo1 from '../assets/icon/mainlogo1.jpg';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceRequired: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_msnl66j",
        "template_1te13i2",
        formData,
        "4TyeH8cJYE7Jcq0zj"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Submited successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
      setFormData({  
        name: "",
        email: "",
        serviceRequired: "",
        location: "",
    })
    
  };
  return (
    <div>
      <footer className="text-gray-600 body-font bg-slate-400">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={mainlogo1} alt="Logo" className="w-16 h-18 p-2 rounded-full" />
            <div className="flex flex-col">
            <span className="ml-4 text-xl">Teotia & Co.</span>
            <span className="ml-4 text-xl">Charted Accountants</span>
            </div>
            </a>
            <p className="mt-4 text-base text-gray-500 font-bold tracking-wide">
              Address
            </p>
            <p className="mt-2 text-sm text-gray-500">
              204-B Gardenia Grace, Sector-61 Noida
            </p>
            <p className="mt-4 text-base text-gray-500 font-bold tracking-wide">
              Contact
            </p>
            <p className="mt-2 text-sm text-gray-500 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
              8178858176
            </p>
            <p className="mt-4 text-base text-gray-500 font-bold tracking-wide">
              Email
            </p>
            <p className="mt-2 text-sm text-gray-500 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
              8178858176
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                IMPORTANT LINKS
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    First Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fifth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Sixth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                RECENT NEWSFLASHES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    First Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fifth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Sixth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                POPULAR SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer ">
                    First Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Fifth Link
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-gray-600 hover:text-green-700 cursor-pointer">
                    Sixth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT US
              </h2>
              <form className="list-none mb-2" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="serviceRequired"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Service Required
                  </label>
                  <input
                    type="text"
                    id="serviceRequired"
                    name="serviceRequired"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="location"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Teotia & Co. —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @copyright
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500 hover:text-blue-800 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 hover:text-blue-800 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 hover:text-blue-800 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/teotia-co/"
                className="ml-3 text-gray-500 hover:text-blue-800 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
