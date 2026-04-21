import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

const LeftAdminHome = ({ closeSidebar }) => {

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

    const handleNav = (path) => {
        if(admin){
            navigate(path);
            closeSidebar && closeSidebar(); // close on mobile
        } else {
            navigate('/admin/login');
        }
    }

  return (
    <div className='bg-black/40 h-full flex flex-col justify-between text-white'>

      <div className='flex flex-col gap-2 p-3'>

        {[
          {name:"Dashboard", path:"/admin/dashboard"},
          {name:"Profile", path:"/admin/dashboard/profile"},
          {name:"Add Jobs", path:"/admin/dashboard/addJob"},
          {name:"Delete Jobs", path:"/admin/dashboard/deleteJob"},
          {name:"User Message", path:"/admin/dashboard/userMessage"},
          {name:"User Applied", path:"/admin/dashboard/userApplyInfo"},
          {name:"User Info", path:"/admin/dashboard/userInfo"},
          {name:"Email Sender", path:"/admin/dashboard/mailSender"},
        ].map((item, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg cursor-pointer text-sm md:text-lg 
            ${location.pathname === item.path ? "bg-black/30" : "hover:bg-black/20"}`}
            onClick={() => handleNav(item.path)}
          >
            {item.name}
          </div>
        ))}

      </div>

      <div className='p-3'>
        <hr className='mb-2'/>
        <div 
          className='p-2 rounded-lg cursor-pointer hover:bg-red-700/40'
          onClick={()=>{
            localStorage.removeItem("adminToken");
            setAdmin(null);
            navigate("/admin/login");
          }}
        >
          Logout
        </div>
      </div>

    </div>
  )
}

export default LeftAdminHome