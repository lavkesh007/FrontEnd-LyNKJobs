import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Forgot = () => {

  const navigate = useNavigate();
  const [email , setEmail] = useState("");
  const [loading , setLoading] = useState(false);

  const genrateOTP = async(e)=>{
    e.preventDefault();
    if(loading) return;

    setLoading(true);

    try{
      const response = await fetch("https://api.jobslynk.in/user/forgotPasswordOTP", {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body: JSON.stringify({ userEmail : email })
      });

      const data = await response.json();

      if(response.ok){
        setLoading(false);
        navigate("/user/login/forgototp",{ state:{ email } })
      }else{
        setLoading(false);
        Swal.fire({ text: data.message, icon : 'warning' })
      }

    }catch(error){
      setLoading(false);
    }
  }

  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-slate-100 p-4'>

      <div className='w-full max-w-sm bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center'>

        <h1 className='text-xl font-semibold text-orange-500 mb-4'>
          Forgot Password
        </h1>

        <p className='text-gray-500 mb-4'>
          Enter your registered email
        </p>

        <form onSubmit={genrateOTP} className='flex flex-col gap-3'>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button className={`w-full py-2 rounded-lg text-white 
          ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}>

            {loading ? "Sending..." : "Send OTP"}

          </button>

        </form>

        <p className='mt-4 text-sm'>
          <span className='text-gray-500'>Back to </span>
          <span 
            className='text-red-500 cursor-pointer'
            onClick={()=> navigate("/user/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Forgot;