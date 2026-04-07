import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const Otp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state || JSON.parse(localStorage.getItem("userData"));
    const [otp , setOTP] = useState("");
     const verfiyOtp = async () => {
        try{
          if (!otp) {
            alert("Enter OTP");
            return;
          }
            const response = await fetch("https://lynkjobs-1.onrender.com/user/register" , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
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
                Swal.fire({
                            title: 'Registration Successful!',
                            text: 'Your account has been created.',
                            icon: 'success',
                            confirmButtonColor : '#f97316'
                          });
                navigate("/user/login")
                console.log(data)
            }else{
                Swal.fire({
                            title: data.message,
                            icon: 'error',
                            confirmButtonColor : '#f97316'
                          });
                alert(data.message);
            }
        }catch(error){
            console.error(error);
        }
     }

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-center">

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
            className="w-52 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={otp}
            onChange = {(e)=> setOTP(e.target.value)}
          />
   
      </div>
      <button className="w-32 bg-slate-500 text-white p-2 rounded hover:bg-slate-800" onClick={verfiyOtp}>
        Verify
      </button>

    </div>
  )
}

export default Otp
