import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

const AdminNavbar = () => {

    const [admin,setAdmin] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=> {
        fetch("https://lynkjobs-1.onrender.com/admin",{
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
   
        <div className='bg-white w-screen  flex'> 
            <div className='flex flex-row justify-between w-full px-3 py-1 content-center'>
                <div className='flex  px-5 bg-black/20 rounded-2xl  '>
                     <h1 className='text-2xl text-slate-700 font-serif font-semibold'>LyNK <span className='text-2xl text-orange-500 font-serif font-semibold'>Job's</span></h1>
                </div>
                <div className='flex gap-2 flex-row items-center'>
                    <h1 className='text-lg text-red-400 font-semibold underline'>{admin?.adminName}</h1>
                    <img className='w-8 h-8 rounded-full border' src="https://www.shutterstock.com/image-vector/default-avatar-social-media-display-600nw-2632690107.jpg" alt="" />
                </div>
            </div>
         
          
      </div>
      
    
  )
}

export default AdminNavbar
