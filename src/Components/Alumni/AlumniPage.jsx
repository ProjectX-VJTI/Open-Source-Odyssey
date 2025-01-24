import React, { useState, useEffect } from "react";
import axios from "axios";
import AlumniForm from "./AlumniForm";
import myHook from "../Context";
const ApprovedAlumni = () => {
  const [approvedAlumni, setApprovedAlumni] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { siteMode } = myHook();
  const fetchApprovedAlumni = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/approved-alumni?status=approved"
      );
      setApprovedAlumni(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const closeForm = () => {
    setShowForm(!showForm);
  };
  useEffect(() => {
    fetchApprovedAlumni();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="h-screen bg-transparent md:p-4">
      
      {showForm && (
        <div className="z-20 fixed w-[100%] h-[100vh]  top-0 left-0 bg-slate-500 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg flex flex-col">
          <div className="flex  w-100 justify-end">
            <button
              className="bg-blue-500  text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={toggleForm}
            >
              {showForm ? "Close " : "Become Alumni"}
            </button>
          </div>
          <AlumniForm
            closeForm={closeForm}
            fetchApprovedAlumni={fetchApprovedAlumni}
          />
        </div>
      )}
      {approvedAlumni.length === 0 ? (
        <p
          className={`${
            siteMode === "dark" ? "text-gray-200" : "text-gray-800"
          } text-center flex justify-center items-center h-[90vh]`}
        >
          No Data Found
        </p>
      ) : (
        <div className="w-[100%] h-[100vh]   flex flex-col justify-center items-center">
          <div className="flex  justify-between items-center md:w-[60%] pb-8">
        <h1
          className={`text-bounce text-6xl md:text-6xl text-center  leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold ${
            siteMode === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {/* <h1 className="text-bounce text-6xl md:text-[6rem] text-center lg:text-[10rem] leading-none font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"></h1> */}
          Alumni
        </h1>
        <button
          className="max-sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white px-4 py-2  transition"
          onClick={toggleForm}
        >
          {showForm ? "Close " : "Become Alumni"}
        </button>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10%] md:w-[70%]  h-[70vh] md:p-5 overflow-y-scroll">
            
            {approvedAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className={`${siteMode ==='dark' ? 'bg-gray-800  border-gray-600':'bg-gray-100 border-gray-200'}  border rounded-xl shadow-lg text-wrap transform hover:scale-105 transition-transform duration-300`}
              >
                
                <div className="p-2 flex items-center justify-center ">
                  <img
                    src={`http://localhost:5000${alumni.imageUrl}` || "https://via.placeholder.com/150"}
                    alt={`${alumni.name}`}
                    className="object-cover h-[270px] w-[270px] rounded-md"
                  />
                </div>

                <div className="p-4 ">
                  <h2 className={`text-lg font-bold ${siteMode === 'dark' ? 'text-gray-200':'text-gray-800'}  mb-2`}>
                    {alumni.name}
                    
                  </h2>
                  <p className={`text-sm ${siteMode === 'dark' ? 'text-gray-200':'text-gray-800'}  mb-1`}>
                    <span className="font-semibold">Graduation Year:</span>{" "}
                    
                    <span className={`text-sm ${siteMode === 'dark' ? 'text-gray-400 ':'text-gray-500'}`}>{alumni.graduationYear}</span>
                  </p>
                  <p className={`text-sm ${siteMode === 'dark' ? 'text-gray-200':'text-gray-800'}  mb-1`}>
                    <span className="font-semibold">Role in Club:</span>{" "}
                  
                    <span className={`text-sm ${siteMode === 'dark' ? 'text-gray-400 ':'text-gray-500'}`}>  {alumni.roleInClub}</span>
                  </p>
                  <p className={`text-sm ${siteMode === 'dark' ? 'text-gray-200':'text-gray-800'}  mb-1`}>
                    <span className="font-semibold">Current Occupation:</span>{" "}
                    
                    <span className={`text-sm ${siteMode === 'dark' ? 'text-gray-400 ':'text-gray-500'}`}>{alumni.currentOccupation}</span>
                  </p>
                  <p className={`text-sm ${siteMode === 'dark' ? 'text-gray-200':'text-gray-800'}  mb-1`}>
                    <span className={`text-sm font-semibold ${siteMode === 'dark' ? 'text-gray-200 ':'text-gray-800'}`}>Contact Info:</span>{" "}
                    
                    <span className={`text-sm ${siteMode === 'dark' ? 'text-gray-400 ':'text-gray-500'}`}>{alumni.contactInfo}</span>
                  </p>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      )}

        <button
          className="fixed right-2 bottom-2  bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white px-4 py-2  transition sm:hidden"
          onClick={toggleForm}
        >
          {showForm ? "Close " : "Become Alumni"}
        </button>
    </div>
  );
};

export default ApprovedAlumni;
