import React, { useState } from "react";
import axios from "axios";
import myHook from "../Context";

const AlumniForm = ({ closeForm, fetchApprovedAlumni }) => {
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    roleInClub: "",
    currentOccupation: "",
    contactInfo: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const { siteMode } = myHook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append("image", imageFile);
   
    try {
      const response = await axios.post("http://localhost:5000/submit-alumni", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Details Uploaded!");
      setUploadedImage(response.data.imageUrl);
      setFormData({
        name: "",
        graduationYear: "",
        roleInClub: "",
        currentOccupation: "",
        contactInfo: "",
      });
      setImageFile(null);
      fetchApprovedAlumni();
      closeForm();
    } catch (error) {
      console.error(error);
      alert("Failed to submit information.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-8"
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${
          siteMode === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Alumni Information
      </h2>
      <div className={`space-y-4 bg-transparent ${siteMode === "dark" ? "text-white" : "text-black"}`}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          value={formData.graduationYear}
          onChange={handleChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
        <input
          type="text"
          name="roleInClub"
          placeholder="Role in Club"
          value={formData.roleInClub}
          onChange={handleChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
        <input
          type="text"
          name="currentOccupation"
          placeholder="Current Occupation"
          value={formData.currentOccupation}
          onChange={handleChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={handleChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            siteMode === "dark" ? "bg-gray-900" : ""
          }`}
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white py-3 font-semibold hover:bg-blue-600 transition"
      >
        Submit
      </button>

      {uploadedImage && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Uploaded Image:</h3>
          <img
            src={`http://localhost:5000${uploadedImage}`}
            alt="Uploaded"
            className="w-full max-w-xs mx-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </form>
  );
};

export default AlumniForm;
