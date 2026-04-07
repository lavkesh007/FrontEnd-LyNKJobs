import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const forgot = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState("");
  const genrateOTP = async(e)=>{
      e.preventDefault();
      try{
        const response = await fetch("https://lynkjobs-1.onrender.com/user/forgotPasswordOTP", {
          method : "POST",
          headers : {
                    "Content-Type" : "application/json"
                },
          body: JSON.stringify({
            userEmail : email
          })
        });
        const data = await response.json();
        if(response.ok){
          console.log(data)
          navigate("/user/login/forgototp",{
            state:{
              email
            }
          })
        }else{
          Swal.fire({
                text: data.message,
                icon : 'warning'
            })
        }
      }catch(error){
        console.error(error)
      }
  }


  return (
    <div className=' h-full w-full flex flex-col  justify-center items-center bg-white/30'>
      <div className='flex flex-col items-center'>
        <img
        className='w-32 h-32 mb-2 '
        src="https://png.pngtree.com/png-vector/20240518/ourmid/pngtree-a-boy-sitting-at-desk-with-laptop-on-transparent-background-png-image_12485311.png"
        alt=""
      />
      <h1 className='mb-4 text-xl font-semibold text-slate-500'>
        Welcome Back To{" "}
        <span className='text-slate-700 text-2xl font-serif font-semibold'>LnYK <span className='text-orange-500 text-2xl font-serif font-semibold'>Job's</span> </span>
      </h1>
      </div>
      <div className='font-semibold text-red-400 text-lg'>
        <h1>Forgot Password</h1>
      </div>
      <div>
        
        <form className='flex flex-col items-center ' onSubmit={genrateOTP}>
          <h1 className='text-slate-500'>Enter Your Registered Email </h1>
          <input
            type="email"
            placeholder="Enter email"
            className="w-72 p-2 mb-3 border rounded-full text-center bg-white/40"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button className="w-36 bg-slate-400 text-white p-2 rounded hover:bg-slate-500" type='Submit'>
          Send OTP
        </button>
        </form>
      </div>
      <div className='p-2'>
        <p onClick={()=>{navigate("/user/login")}} ><span className='text-slate-500'>Back to</span> <span className=' text-red-500 cursor-pointer hover:text-red-800'>Login</span></p>
      </div>
     
    </div>
  )
}

export default forgot
