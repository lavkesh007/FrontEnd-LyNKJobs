import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const RightSide = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);

    try {
      const response = await fetch("https://api.jobslynk.in/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        localStorage.removeItem("token");
        localStorage.setItem("token", data.token);
        navigate("/")
      } else {
        setLoading(false);
        Swal.fire({ text: data.message, icon : 'warning' })
      }

    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  return (
    <div className='h-full flex flex-col justify-center items-center px-6 py-8'>

      <div className="w-full max-w-sm bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg">

        {/* Heading */}
        <h1 className='mb-6 text-center text-lg md:text-xl font-semibold text-slate-600'>
          Welcome Back To
          <br />
          <span className='text-2xl md:text-3xl font-serif font-bold'>
            LyNK <span className='text-orange-500'>Job's</span>
          </span>
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3">

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border rounded-lg text-center bg-white/80 focus:ring-2 focus:ring-orange-400 outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border rounded-lg text-center bg-white/80 focus:ring-2 focus:ring-orange-400 outline-none"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-medium transition 
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Login...
              </span>
            ) : (
              "Login"
            )}
          </button>

        </form>

        {/* Links */}
        <div className='flex flex-col sm:flex-row justify-between mt-4 text-sm text-center'>

          <p 
            className='text-blue-500 cursor-pointer hover:text-blue-700'
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

    </div>
  );
};

export default RightSide;