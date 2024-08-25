import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
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

    emailjs.send("service_msnl66j", "template_1te13i2", formData, "4TyeH8cJYE7Jcq0zj")
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
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
      <form className="list-none mb-2" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
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
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
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
          <label htmlFor="serviceRequired" className="leading-7 text-sm text-gray-600">Service Required</label>
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
          <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
