import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);

  useEffect(() => {
    // Check if profile exists in local storage; otherwise, initiate profile creation
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedProfile) {
      setProfile(storedProfile);
    } else {
      setIsCreatingProfile(true);
    }
  }, []);

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/profile", {
        fullName,
        dob,
        gender,
      });

      // Store the profile data in local storage and set it in state
      localStorage.setItem("profile", JSON.stringify(response.data.profile));
      setProfile(response.data.profile);
      toast.success("Profile created successfully!");
      setIsCreatingProfile(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create profile. Please try again.");
    }
  };

  if (!isCreatingProfile && profile) {
    // Profile exists, display profile information
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome to your Profile</h2>
          <p>Full Name: {profile.fullName}</p>
          <p>Date of Birth: {profile.dob}</p>
          <p>Gender: {profile.gender}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Create Your Profile</h2>
        <form onSubmit={handleCreateProfile}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
