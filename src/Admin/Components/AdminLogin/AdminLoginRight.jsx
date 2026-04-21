import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoppyLogo from '../../../assets/3.png'
import Swal from 'sweetalert2';

const AdminLoginRight = () => {

  const navigate =  useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.jobslynk.in/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminEmail: email,
          adminPassword: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.adminToken);
        navigate("/admin/dashboard")
      } else {
        Swal.fire({
          text: data.message,
          icon : 'warning'
        })
      }

    } catch (error) {
      alert(error)
      console.error(error);
    }
  };

  return (
    <div className='h-full flex flex-col justify-center items-center bg-white px-6 py-8'>

      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img className='w-36 sm:w-44' src={LoppyLogo} alt="" />
        </div>

        {/* Heading */}
        <h1 className='text-center mb-6 text-sm sm:text-lg font-semibold text-slate-600'>
          Welcome Back To{" "}
          <span className='text-slate-800 text-xl font-serif'>
            LyNK <span className='text-orange-500'>Job's</span>
          </span>
        </h1>

        {/* Form */}
        <form onSubmit={handleAdminLogin} className="flex flex-col gap-3">

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400 outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400 outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLoginRight;