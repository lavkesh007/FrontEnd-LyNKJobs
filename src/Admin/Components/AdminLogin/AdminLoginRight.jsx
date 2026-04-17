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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          adminEmail: email,
          adminPassword: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        
        localStorage.setItem("adminToken", data.adminToken);
        navigate("/admin/dashboard")
        console.log(data);
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
    <div className='h-full  flex flex-col justify-center items-center bg-black/50'>

      {/* Image */}
      <img
        className='w-48 h-20 '
        src={LoppyLogo}
        alt=""
      />

      {/* Heading */}
      <h1 className='mb-4 text-lg font-semibold text-slate-400 '>
        Welcome Back To{" "}
        <span className='text-slate-700 text-2xl px-1 font-serif font-semibold'>LyNK<span className='text-orange-500 text-2xl px-1 font-serif font-semibold'>Job's</span> </span>
      </h1>

      {/* Email */}
      <form onSubmit={handleAdminLogin} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter email"
            className="w-72 p-2 mb-3 border rounded-full text-center bg-black/40"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter password"
            className="w-72 p-2 mb-4 border rounded-full text-center bg-black/40"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-36 bg-slate-400 text-white p-2 rounded hover:bg-slate-500"
          >
            Login
          </button>
      </form>

    </div>
  );
};

export default AdminLoginRight;