import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Otp = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state || JSON.parse(localStorage.getItem("userData"));

  const [otp , setOTP] = useState("");
  const [loading , setLoading] = useState(false);

  const verfiyOtp = async () => {
    if(loading) return;

    if (!otp) {
      Swal.fire({ text: "Enter OTP", icon: "warning" });
      return;
    }

    setLoading(true);

    try{
      const response = await fetch("https://api.jobslynk.in/user/register" , {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body: JSON.stringify({
          userName : userData.name,
          userEmail : userData.email,
          phoneNo : userData.phone,
          dob: userData.DoB,
          password : userData.Password,
          otp: otp
        })
      });

      const data = await response.json();

      if(response.ok){
        setLoading(false);
        Swal.fire({
          title: 'Registration Successful!',
          icon: 'success'
        });
        navigate("/user/login")
      }else{
        setLoading(false);
        Swal.fire({ title: data.message, icon: 'error' });
      }

    }catch(error){
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">

        <h1 className="text-xl font-semibold text-orange-500 mb-4">
          Verify OTP
        </h1>

        <p className="text-gray-500 mb-4">
          Enter the 6-digit code sent to your email
        </p>

        <input
          type="text"
          maxLength="6"
          className="w-full p-3 text-center text-xl border rounded-lg focus:ring-2 focus:ring-orange-400 mb-4"
          value={otp}
          onChange={(e)=> setOTP(e.target.value)}
        />

        <button 
          className={`w-full py-2 rounded-lg text-white 
          ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}
          onClick={verfiyOtp}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

      </div>

    </div>
  )
}

export default Otp