import React, { useState, useRef } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  const validate = () => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhone = /^\d{10}$/;
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !regexEmail.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.phone || !regexPhone.test(formData.phone)) errors.phone = 'Invalid phone number';
    if (!formData.file) errors.file = 'File is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file' && files && files[0]) {
      setFileName(files[0].name); // Update the file name
    }
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    // Real-time validation
    const newErrors = validate();
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('file', formData.file); // Ensure file is appended
      const response = await axios.post('http://localhost:5000/api/submit-proposal', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct header
        },
      });
      setSuccessMessage(response.data.message);
      // Clear form data and errors
      setFormData({ name: '', email: '', phone: '', file: null });
      setFileName('No file chosen'); // Reset file name
      setErrors({});
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      // Automatically clear success message after 5 seconds with a smooth transition
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting proposal:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-lg shadow-xl space-y-6">
      {successMessage && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded relative transition-opacity duration-500 ease-in-out"
          style={{ opacity: successMessage ? 1 : 0 }}
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-white-700 font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-white-700 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-white-700 font-semibold">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="file" className="block text-white-700 font-semibold">Proposal PDF</label>
        <div className="flex items-center">
          <label
            htmlFor="file"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
          >
            Choose File
          </label>
          <span className="ml-4 text-white-700">{fileName}</span>
        </div>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf"
          onChange={handleChange}
          className="hidden"
          ref={fileInputRef}
        />
        {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};

export default ProposalForm;