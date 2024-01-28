import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User registration successful");
        // Handle success case
      } else {
        console.error("Failed to register user");
        // Handle error case
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error case
    }
  };

  return (
    <div className="flex gap-10">
      <form onSubmit={handleSubmit} className="bg-white ml-10 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2">
        <div className="flex flex-col">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            className="border-gray-300 border-2 w-full h-18 rounded-xl p-3 mt-10"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 w-full h-18">Sign Up</button>
        <div className="ml-72 mt-3 -mb-3">OR</div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 w-full h-18">Sign in with Google</button>
      </form>
      <div className="w-1/2 ">
        <img src="../src/assets/final_image.jpeg" alt="" className=" h-full" />
      </div>
    </div>
  );
}

export default Form;
