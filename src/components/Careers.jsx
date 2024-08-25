import React, { useState } from "react";
import emailjs from "emailjs-com";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceRequired: "",
    location: "",
    contact: "",
    qualification: {
      course: "",
      institute: "",
      year: ""
    },
    certification: "",
    experience: "",
    positionApplied: "",
    coverLetter: null,
    cv: null,
    workMode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You would typically want to send files separately to emailjs
    emailjs.send("service_msnl66j", "template_1te13i2", formData, "4TyeH8cJYE7Jcq0zj")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Submitted successfully!");
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
      contact: "",
      qualification: {
        course: "",
        institute: "",
        year: ""
      },
      certification: "",
      experience: "",
      positionApplied: "",
      coverLetter: null,
      cv: null,
      workMode: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-200 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Join Our Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Qualification</label>
              <input
                type="text"
                name="qualification.course"
                placeholder="Course (e.g., MCA, BCA)"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.qualification.course}
                onChange={handleChange}
              />
              <input
                type="text"
                name="qualification.institute"
                placeholder="Institute/University"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.qualification.institute}
                onChange={handleChange}
              />
              <input
                type="text"
                name="qualification.year"
                placeholder="Year/Level"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.qualification.year}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="certification" className="block text-sm font-medium text-gray-700">Certification</label>
              <input
                type="text"
                id="certification"
                name="certification"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.certification}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="positionApplied" className="block text-sm font-medium text-gray-700">Position Applied</label>
              <input
                type="text"
                id="positionApplied"
                name="positionApplied"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.positionApplied}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Work Mode</label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="workMode"
                    value="Physical"
                    checked={formData.workMode === "Physical"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Physical</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="workMode"
                    value="Hybrid"
                    checked={formData.workMode === "Hybrid"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Hybrid</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
              <input
                type="file"
                id="coverLetter"
                name="coverLetter"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careers;
