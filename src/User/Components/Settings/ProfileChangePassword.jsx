import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePassword = () => {
  const [Password,setPassword] = useState("");
  const [RePassword,setRePassword] = useState("");
  const navigate = useNavigate();

  const changePassword = async (e) => {
    e.preventDefault();

    if(Password !== RePassword){
      Swal.fire({ text: "Paswsword Not Match", icon : 'warning' })
      return;
    }

    try{
      const response = await fetch("https://lynkjobs-1.onrender.com/user/settingPassword" ,{
        method : "PUT",
        headers : {
          "Content-Type" : "application/json",
          Authorization : "Bearer " + localStorage.getItem("token")
        },
        body : JSON.stringify({ password : Password })
      });

      const data = await response.json();

      if(response.ok){
        Swal.fire({ text: data.message, icon :'success' })
        navigate("/user/profile/setting")
      }else{
        Swal.fire({ text: data.message, icon : 'warning' })
      }

    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className='w-full min-h-screen bg-black/30 flex items-center justify-center px-4'>

      <div className='w-full max-w-sm p-6 bg-white/30 rounded-lg border'>

        <h1 className='text-xl md:text-2xl font-bold text-center'>
          Change Password
        </h1>

        <form className='flex flex-col items-center mt-4' onSubmit={changePassword}>

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 mb-3 border rounded-full text-center"
            required
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-full p-2 mb-3 border rounded-full text-center"
            required
            value={RePassword}
            onChange={(e)=>setRePassword(e.target.value)}
          />

          <button className="w-full bg-slate-400 text-white p-2 rounded">
            Change
          </button>

        </form>

      </div>
    </div>
  )
}

export default ChangePassword