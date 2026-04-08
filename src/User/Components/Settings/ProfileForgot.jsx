import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProfileForgot = () => {
  const navigate = useNavigate();
  const [otp,setOTP] = useState();

  const verfiyOtp = async (e) => {
    e.preventDefault();
    try{
      if (!otp) {
        Swal.fire({ text: "Enter OTP", icon : 'warning' })
        return;
      }

      const response = await fetch("https://lynkjobs-1.onrender.com/user/settingVerifyOTP",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Authorization : "Bearer " + localStorage.getItem("token")
        },
        body : JSON.stringify({ otp })
      });

      const data = await response.json();

      if(response.ok){
        navigate("/user/profile/setting/ChangePassword")
      }else{
        Swal.fire({ text: data.message, icon : 'warning' })
      }
    }catch(error){
      console.error(error);
    }
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-black/30 px-4'>

      <div className='w-full max-w-sm bg-white/30 p-6 md:p-9 flex flex-col items-center rounded-lg border border-stone-700'>

        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          Verify OTP
        </h1>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter the 6-digit code sent to your email
        </p>

        <input
          type="text"
          maxLength="6"
          className="w-full h-12 text-center text-xl border rounded-lg bg-black/40 mb-6"
          value={otp}
          onChange={(e)=> setOTP(e.target.value)}
        />

        <div className='flex gap-3 w-full'>
          <button className="w-1/2 bg-slate-400 text-white p-2 rounded" onClick={()=> navigate(-1)}>
            Back
          </button>

          <button className="w-1/2 bg-slate-400 text-white p-2 rounded" onClick={verfiyOtp}>
            Verify
          </button>
        </div>

      </div>

    </div>
  )
}

export default ProfileForgot