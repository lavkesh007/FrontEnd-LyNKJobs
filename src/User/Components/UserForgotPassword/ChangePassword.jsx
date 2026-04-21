import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const ChangePassword = () => {

  const location = useLocation();
  const userData = location.state || JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [Password,setPassword] = useState("")
  const [RePassword,setRePassword] = useState("");
  const [loading,setLoading] = useState(false);

  const handleChangePassword = async (e)=>{
    e.preventDefault();
    if(loading) return;

    if(Password !== RePassword){
      Swal.fire({ text: "Passwords do not match", icon : 'warning' })
      return;
    }

    setLoading(true);

    try{
      const response = await fetch("https://api.jobslynk.in/user/changePassword" ,{
        method : "PUT",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify({
          email : userData.email,
          password : Password
        })
      });

      const data = await response.json();

      if(response.ok){
        setLoading(false);
        Swal.fire({ text: data.message, icon :'success' })
        navigate("/user/login")
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
          Change Password
        </h1>

        <form onSubmit={handleChangePassword} className='flex flex-col gap-3'>

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={RePassword}
            onChange={(e)=>setRePassword(e.target.value)}
          />

          <button className={`w-full py-2 rounded-lg text-white 
          ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}>

            {loading ? "Updating..." : "Change Password"}

          </button>

        </form>

      </div>
    </div>
  )
}

export default ChangePassword;