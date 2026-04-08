import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const RightSide = () => {
  const navigate =  useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://lynkjobs-1.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userEmail: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.setItem("token", data.token);
        navigate("/")
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
    <div className='h-full flex flex-col justify-center items-center bg-white/30 px-4'>

      {/* Heading */}
      <h1 className='mb-4 text-xl md:text-2xl font-semibold text-slate-400 text-center'>
        Welcome Back To{" "}
        <span className='text-slate-500 text-2xl md:text-3xl px-1 font-serif font-bold'>
          LyNK
          <span className='text-orange-500 font-bold font-serif text-2xl md:text-3xl px-1'>
            Job's
          </span>
        </span>
      </h1>

      {/* Form */}
      <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
        
        <input
          type="email"
          placeholder="Enter email"
          className="w-full max-w-xs p-2 mb-3 border rounded-full text-center bg-white/40"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full max-w-xs p-2 mb-4 border rounded-full text-center bg-white/40"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full max-w-xs bg-slate-400 text-white p-2 rounded hover:bg-slate-500">
          Login
        </button>
      </form>

      {/* Links */}
      <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-3 text-center'>
        
        <p 
          className='text-blue-500 cursor-pointer hover:text-slate-700'
          onClick={() => navigate("/user/login/forgot")}
        >
          Forgot Password?
        </p>
        
        <p 
          className='text-red-500 cursor-pointer hover:text-red-700'
          onClick={() => navigate("/user/register")}
        >
          New User
        </p>
      </div>

    </div>
  );
};

export default RightSide;