import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const ChangePassword = () => {
  const location = useLocation();
  const userData = location.state || JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [Password,setPassword] = useState("")
  const [RePassword,setRePassword] = useState("");

  const ChangePassword = async (e)=>{
    e.preventDefault();
    if(Password !== RePassword){
      Swal.fire({
            text: data.message,
            icon : 'warning'
      })
      return;
    }
    try{
      const response = await fetch("https://lynkjobs-1.onrender.com/user/changePassword" ,{
        method : "PUT" ,
        headers : {
                    "Content-Type" : "application/json"
                },
        body : JSON.stringify({
          email : userData.email,
          password : Password
        })
      });
      const data = response.json();
      if(response.ok){
        Swal.fire({
             text: data.message,
             icon :'success'
         })
         console.log(data.message)
        navigate("/user/login")
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
      <h1 className='mb-4 text-lg font-semibold text-slate-400'>
        Welcome Back To{" "}
        <span className='text-slate-500 text-2xl'>Loppy Job's</span>
      </h1>
      </div>
      <div className='font-semibold text-red-400 text-lg'>
        <h1>Change Password</h1>
      </div>
      <div>
        
        <form className='flex flex-col items-center ' onSubmit={ChangePassword} >
          <h1 className='text-slate-600'>Enter Password </h1>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-72 p-2 mb-3 border rounded-full text-center bg-white/40"
            required
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <h1 className='text-slate-600'>Enter Re-entry Password </h1>
          <input
            type="password"
            placeholder="Enter Re-entry Password"
            className="w-72 p-2 mb-3 border rounded-full text-center bg-white/40"
            required
            value={RePassword}
            onChange={(e)=>setRePassword(e.target.value)}
            
          />

          <button className="w-36 bg-slate-400 text-white p-2 rounded hover:bg-slate-500" type='Submit'>
          Change
        </button>
        </form>
      </div>
     
    </div>
    
  )
}

export default ChangePassword
