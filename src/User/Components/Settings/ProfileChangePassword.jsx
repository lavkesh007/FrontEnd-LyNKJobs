import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const [Password,setPassword] = useState("");
    const [RePassword,setRePassword] = useState("");
    const navigate = useNavigate();
    const changePassword = async (e) => {
       e.preventDefault();
      if(Password !== RePassword){
            Swal.fire({
                  text: "Paswsword Not Match",
                  icon : 'warning'
            })
            return;
          }
          try{
          const response = await fetch("https://lynkjobs-1.onrender.com/user/settingPassword" ,{
                  method : "PUT" ,
                  headers : {
                              "Content-Type" : "application/json",
                              Authorization : "Bearer " + localStorage.getItem("token")
                          },
                  body : JSON.stringify({
                    password : Password
                  })
                });
                const data = await response.json();
                if(response.ok){
                  Swal.fire({
                       text: data.message,
                       icon :'success'
                   })
                   console.log(data.message)
                  navigate("/user/profile/setting")
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
    <div className='w-full h-full bg-black/30 flex flex-col justify-center items-center'>
        <div className='w-fit h-fit p-8 bg-white/30 rounded-lg border border-gray-600 gap-2'>
            <h1 className='flex text-2xl font-bold justify-center'>Change Password</h1>
            <hr className='border-gray-600 mt-2 mb-2'/>
            <form className='flex flex-col items-center ' onSubmit={changePassword} >
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
