import React, { useState, useEffect } from "react";
import axios from "axios";
import myHook from "../Context";
import AlumniForm from "./AlumniForm";
const AdminDash = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [viewMode, setViewMode] = useState("pending");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is authenticated
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { siteMode } = myHook();

  const correctPassword = "admin123";

  const closeForm = () => {
    setShowForm(!showForm);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };


  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      alert("Login Successful");
    } else {
      alert("Incorrect password! Access denied.");
    }
  };

  const fetchAlumni = async (status) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/alumni?status=${status}`
      );
      setAlumniList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAlumni2 =async(status)=>{
    fetchAlumni(viewMode)
  }
  const approveAlumni = async (id) => {
    try {
      await axios.put(`http://localhost:5000/approve-alumni/${id}`);
      alert("Alumni approved successfully!");
      fetchAlumni(viewMode);
    } catch (error) {
      console.error(error);
      alert("Failed to approve alumni.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAlumni(viewMode);
    }
  }, [viewMode, isAuthenticated]);
  
  return (
    <div>
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
            fetchApprovedAlumni={fetchAlumni2}
          />
        </div>
      )}
      {!isAuthenticated ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Enter Password
            </h2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`h-[90vh] p-8 ${
            siteMode === "dark" ? " text-white" : " text-gray-900"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
          <div className="mb-4 flex gap-4">
            <button
              onClick={() => setViewMode("pending")}
              className={`px-4 py-2 rounded ${
                viewMode === "pending"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-900"
              }`}
            >
              View Pending Alumni
            </button>
            <button
              onClick={() => setViewMode("approved")}
              className={`px-4 py-2 rounded ${
                viewMode === "approved"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-900"
              }`}
            >
              View Approved Alumni
            </button>
            <button
              className="max-sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-gradient-to-l duration-300 text-white px-4 py-2  transition"
              onClick={toggleForm}
            >
              {showForm ? "Close " : "Become Alumni"}
            </button>
          </div>
          {alumniList.length === 0 ? (
            <p className="text-lg font-medium">No {viewMode} alumni.</p>
          ) : (
            <div className="overflow-x-auto overflow-y-scroll h-[70vh] border-b">
              <table className="w-full border border-gray-300">
                <thead
                  className={`sticky top-0  ${
                    siteMode === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
                >
                  <tr>
                    <th className="p-4 border border-gray-300">Name</th>
                    <th className="p-4 border border-gray-300">Image</th>
                    <th className="p-4 border border-gray-300">
                      Graduation Year
                    </th>
                    <th className="p-4 border border-gray-300">Role in Club</th>
                    <th className="p-4 border border-gray-300">
                      Current Occupation
                    </th>
                    <th className="p-4 border border-gray-300">Contact Info</th>
                    <th className="p-4 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {alumniList.map((alumni, index) => (
                    <tr key={alumni.id}>
                      <td className="p-4 border border-gray-300">
                        {alumni.name}
                      </td>
                      <td className="p-4 border border-gray-300 w-[100px] h-[100px]">
                        <img
                          src={`http://localhost:5000${alumni.imageUrl}`}
                          alt="Alumni"
                          className="w-full h-full object-cover rounded"
                        />
                      </td>
                      <td className="p-4 border border-gray-300">
                        {alumni.graduationYear}
                      </td>
                      <td className="p-4 border border-gray-300">
                        {alumni.roleInClub}
                      </td>
                      <td className="p-4 border border-gray-300">
                        {alumni.currentOccupation}
                      </td>
                      <td className="p-4 border border-gray-300">
                        {alumni.contactInfo}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {alumni.status === "approved" ? (
                          <button className="px-4 py-2 text-sm font-medium text-white bg-green-400 rounded cursor-none">
                            Approved
                          </button>
                        ) : (
                          <button
                            onClick={() => approveAlumni(alumni.id)}
                            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
                          >
                            Approve
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

export default AdminDash;
