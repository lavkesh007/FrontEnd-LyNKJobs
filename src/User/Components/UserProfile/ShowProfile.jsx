import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ShowProfile = () => {

    const [user,setUser] = useState(null);
    const navigate = useNavigate();

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

    if (!user)
      return (
        <div className="flex justify-center items-center h-screen text-gray-300 text-xl">
          No Profile
        </div>
      );

return (
  <div className='flex items-center justify-center min-h-screen'>

    <div className='bg-white/10 backdrop-blur-md border border-white/20 
                    w-full max-w-md rounded-xl p-6 shadow-lg'>

      <div className='flex flex-col gap-5'>

        {/* Profile Image */}
        <div className='flex justify-center'>
          <img 
            className='w-28 h-28 rounded-full border-2 border-orange-400'
            src={user?.image || "https://img.freepik.com/premium-vector/default-avatar.jpg"}
            alt=""
          />
        </div>

        <hr className='border-white/20' />

        {/* Data */}
        <div className="flex flex-col gap-4 text-gray-200">

          {[
            ["User ID", user?.userID],
            ["User Name", user?.userName],
            ["Email", user?.userEmail],
            ["Phone", user?.PhoneNo],
            ["DOB", user?.DOB],
            ["Gender", user?.gender || "None"],
            ["Qualification", user?.highQualification],
            ["College", user?.collegeName],
            ["Passout", user?.passoutYear]
          ].map((item,i)=>(
            <div key={i} className="flex justify-between">
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </div>
          ))}

          <div className='flex justify-center mt-3'>
            <button 
              className='bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition'
              onClick={()=>navigate("/user/profile/edit")}
            >
              Edit
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
);
}

export default ShowProfile;