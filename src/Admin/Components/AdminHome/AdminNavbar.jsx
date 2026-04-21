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
    <div className='bg-white w-full shadow-sm'> 
      <div className='flex justify-between items-center px-4 py-2'>

        {/* Left */}
        <div className='flex items-center gap-3'>
          
          {/* Mobile Menu Button */}
          <button className='md:hidden' onClick={toggleSidebar}>
            <Menu size={24}/>
          </button>

          <h1 className='text-xl md:text-2xl text-slate-700 font-serif font-semibold'>
            LyNK <span className='text-orange-500'>Job's</span>
          </h1>
        </div>

        {/* Right */}
        <div className='flex gap-2 items-center'>
          <h1 className='hidden sm:block text-sm md:text-lg text-red-400 font-semibold underline'>
            {admin?.adminName}
          </h1>
          <img 
            className='w-8 h-8 rounded-full border' 
            src="https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg" 
            alt="" 
          />
        </div>

      </div>
    </div>
  )
}

export default AdminNavbar