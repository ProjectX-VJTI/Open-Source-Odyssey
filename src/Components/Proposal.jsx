import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import formAnimation from "../assets/Animation.json"; // Replace with your Lottie animation

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    proposal: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, proposal, document } = formData;

    if (!name || !email || !phone || !proposal || !document) {
      toast.error("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("proposal", proposal);
    formDataToSend.append("document", document);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          proposal: "",
          document: null,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting proposal:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full bg-gray-50">
    {/* Left Side - Animation */}
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-3/4">
        <Lottie animationData={formAnimation} loop />
      </div>
    </div>
    {/* Right Side - Form */}
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gradient mb-5">
          Submit Your Proposal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-800 rounded-lg shadow-sm"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-800 rounded-lg shadow-sm"
              placeholder="Your Email"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-800 rounded-lg shadow-sm"
              placeholder="Your Phone Number"
              required
            />
          </div>
          {/* Proposal Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Proposal</label>
            <textarea
              name="proposal"
              value={formData.proposal}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 border border-gray-800 rounded-lg shadow-sm"
              placeholder="Write your proposal..."
              rows="4"
              required
            ></textarea>
          </div>
          {/* Upload Document Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Document
            </label>
            <div className="flex items-center space-x-3">
              <label
                htmlFor="document-upload"
                className="px-4 py-2 text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg cursor-pointer shadow-md hover:shadow-lg"
              >
                Choose File
              </label>
              <input
                id="document-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              {formData.document && (
                <span className="text-sm text-gray-600 truncate max-w-xs">
                  {formData.document.name}
                </span>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:shadow-lg"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default ProposalForm;
