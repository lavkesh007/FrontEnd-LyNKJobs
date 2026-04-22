import React, {useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const LeftAdminHome = () => {

  const [admin,setAdmin] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=> {
    fetch("https://api.jobslynk.in/admin",{
      headers: {
        Authorization : "Bearer " + localStorage.getItem("adminToken")
      }
    })
    .then(res=>{
      if(!res.ok) throw new Error();
      return res.json();
    })
    .then(data => setAdmin(data))
    .catch(() => setAdmin(null));
  },[]);

  return (
    <div className='h-full flex flex-col justify-between 
                    bg-gradient-to-b from-slate-900 to-slate-800 text-white'>

      {/* MENU */}
      <div className='flex flex-col gap-2 p-3'>

        <h1 className='text-center text-xl font-bold text-orange-400 mb-3'>
          Admin Panel
        </h1>

        {/* Dashboard */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard" || location.pathname==="/admin/dashboard/"
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("") : navigate('/admin/login')}
        >
          📊 Dashboard
        </div>

        {/* Profile */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/profile" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/profile") : navigate('/admin/login')}
        >
          👤 Profile
        </div>

        {/* Add Jobs */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/addJob" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate('/admin/dashboard/addJob') : navigate('/admin/login')}
        >
          ➕ Add Jobs
        </div>

        {/* Delete Jobs */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/deleteJob" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/deleteJob") : navigate('/admin/login')}
        >
          🗑️ Delete Jobs
        </div>

        {/* User Message */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/userMessage" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/userMessage") : navigate('/admin/login')}
        >
          💬 User Message
        </div>

        {/* User Applied */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/userApplyInfo" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/userApplyInfo") : navigate('/admin/login')}
        >
          📄 User Applied
        </div>

        {/* User Info */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/userInfo" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/userInfo") : navigate('/admin/login')}
        >
          👥 User Info
        </div>

        {/* Mail Sender */}
        <div
          className={`w-full h-12 flex items-center px-3 rounded-lg cursor-pointer transition 
          ${location.pathname==="/admin/dashboard/mailSender" 
            ? "bg-white/10 border-l-4 border-orange-400" 
            : "hover:bg-white/10"}`}
          onClick={()=> admin ? navigate("/admin/dashboard/mailSender") : navigate('/admin/login')}
        >
          📨 Email Sender
        </div>

      </div>

      {/* LOGOUT */}
      <div className='p-3'>
        <hr className='mb-3 border-gray-600'/>
        
        <div 
          className='w-full h-12 flex items-center px-3 rounded-lg cursor-pointer 
                     bg-red-500/20 hover:bg-red-500/40 transition'
          onClick={()=>{
            localStorage.removeItem("adminToken");
            setAdmin(null);
            navigate("/admin/login")
          }}
        >
          🚪 Logout
        </div>
      </div>

    </div>
  )
}

export default LeftAdminHome