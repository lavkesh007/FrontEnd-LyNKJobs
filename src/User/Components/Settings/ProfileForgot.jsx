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
              Swal.fire({
                  text: "Enter OTP",
                   icon : 'warning'
                })
              return;
            }
              const response = await fetch("https://lynkjobs-1.onrender.com/user/settingVerifyOTP",{
                  method : "POST",
                  headers : {
                      "Content-Type" : "application/json",
                      Authorization : "Bearer " + localStorage.getItem("token")
                  },
                  body : JSON.stringify({
                      otp: otp
                  })
              });
              const data = await response.json();
              if(response.ok){
                  navigate("/user/profile/setting/ChangePassword")
              }else{
                 Swal.fire({
                       text: data.message,
                       icon : 'warning'
                      })
              }
          }catch(error){
              console.error(error);
          }
      } 
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center bg-black/30'>
      <div className='w-fit bg-white/30 p-9 items-center flex flex-col rounded-lg border border-stone-700'>
          <h1 className="text-2xl font-semibold mb-4">
        Verify OTP
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        Enter the 6-digit code sent to your email
      </p>

      {/* OTP Inputs */}
      <div className="flex gap-3 mb-6">
      
          <input
            type="text"
            maxLength="6"
            className="w-52 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 bg-black/40 items-center"
            value={otp}
            onChange = {(e)=> setOTP(e.target.value)}
          />
   
      </div>
      <div className='flex gap-3'>
           <button className="w-28 bg-slate-400 text-white p-2 rounded hover:bg-slate-500" onClick={()=> navigate(-1)}>
            Back
          </button>
           <button className="w-28 bg-slate-400 text-white p-2 rounded hover:bg-slate-500" onClick={verfiyOtp}>
            Verify
          </button>
      </div>
      </div>
      
     

    </div>
  )
}

export default ProfileForgot
