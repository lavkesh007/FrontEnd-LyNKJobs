import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const LeftSide = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const location = useLocation();
    
    useEffect(()=>{
        fetch("https://api.jobslynk.in/user/userDetails",{
            headers : {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res=>{
            if(!res.ok) throw new Error();
            return res.json();
        })
        .then(data=>setUser(data))
        .catch(()=>setUser(null));
    },[]);

  return (
    <div className='h-full flex flex-col justify-between 
                    bg-gradient-to-b from-slate-900 to-slate-800 
                    text-white p-4'>

        {/* TOP */}
        <div className='flex flex-col gap-4'>

            <h1 className='text-2xl text-center font-bold'>
              LyNK <span className='text-orange-400'>Job's</span>
            </h1>

            <div className='flex flex-col items-center gap-2'>
                <img 
                  className='w-20 h-20 rounded-full border-2 border-orange-400'
                  src={user?.image || "https://img.freepik.com/premium-vector/default-avatar.jpg"}
                  alt=""
                />
                <h1>{user?.userName || "User"}</h1>
                <p className='text-xs text-gray-400'>ID: {user?.userID}</p>
            </div>

            <hr className="border-white/20"/>

            {/* MENU */}
            <div className='flex flex-col gap-2'>

                {[
                  {name:"Home", path:"/"},
                  {name:"Profile", path:"/user/profile"},
                  {name:"Applied Jobs", path:"/user/profile/applied"},
                  {name:"Settings", path:"/user/profile/setting"},
                ].map((item,i)=>(
                  <div
                    key={i}
                    className={`p-3 rounded-lg cursor-pointer transition
                    ${location.pathname===item.path 
                      ? "bg-white/10 border-l-4 border-orange-400" 
                      : "hover:bg-white/10"}`}
                    onClick={()=>navigate(item.path)}
                  >
                    {item.name}
                  </div>
                ))}

            </div>
        </div>

        {/* LOGOUT */}
        <div>
            <hr className="border-white/20 mb-2"/>
            <div 
              className='p-3 text-red-400 hover:bg-red-500/20 rounded-lg cursor-pointer'
              onClick={()=>{
                localStorage.removeItem("token");
                navigate("/user/login");
              }}
            >
              Logout
            </div>
        </div>
      
    </div>
  )
}

export default LeftSide