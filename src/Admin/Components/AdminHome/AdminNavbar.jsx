import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const AdminNavbar = ({ toggleSidebar }) => {

    const [admin,setAdmin] = useState(null);
    const navigate = useNavigate();

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
    <div className='w-full 
                    bg-white/80 backdrop-blur-md 
                    shadow-md border-b'>

      <div className='flex justify-between items-center px-4 sm:px-6 py-3'>

        {/* LEFT */}
        <div className='flex items-center gap-3'>

          {/* Mobile Menu */}
          <button 
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition'
            onClick={toggleSidebar}
          >
            <Menu size={22}/>
          </button>

          {/* Logo */}
          <h1 className='text-lg sm:text-2xl font-bold text-slate-700 tracking-wide'>
            LyNK <span className='text-orange-500'>Job's</span>
          </h1>

        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-3'>

          {/* Admin Name */}
          <h1 className='hidden sm:block text-sm md:text-lg text-gray-700 font-medium'>
            👋 {admin?.adminName}
          </h1>

          {/* Avatar */}
          <div className='relative'>
            <img 
              className='w-9 h-9 rounded-full border-2 border-orange-400 shadow-sm 
                         hover:scale-105 transition'
              src="https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg" 
              alt="" 
            />

            {/* Online Dot */}
            <span className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border'></span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminNavbar