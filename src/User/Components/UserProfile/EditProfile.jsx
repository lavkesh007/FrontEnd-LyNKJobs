import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const navigate = useNavigate();

    const [isEdit , setIsEdit] = useState({
        name: false,
        email: false,
        phone: false,
        dob: false,
        passout: false,
        gender: false,
        qualification: false,
        college: false
    });

    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        fetch("https://api.jobslynk.in/user/userDetails",{
        headers : {
            Authorization : "Bearer " + localStorage.getItem("token")
        }
        })
        .then(res => {
        if(!res.ok) throw new Error();
        return res.json();
        })
        .then(data=>setUser(data))
        .catch(()=>setUser({}));
    },[]);

    const handleToggle = (field)=>{
        setIsEdit({...isEdit,[field] : !isEdit[field]})
    }

    const handleChange = (field, value) => {
        setUser({
        ...user,
        [field]: value
        });
    }
    
    const [file,setFile] = useState();

    const onSubmit = () => {
        const formdata = new FormData();
        formdata.append("user",JSON.stringify(user));
        if(file){
            formdata.append("image",file);
        }
        if(loading) return;

        setLoading(true);

        fetch("https://api.jobslynk.in/user/editUser",{
            method:"POST",
            headers :{
            Authorization : "Bearer " + localStorage.getItem("token")
            },
            body : formdata
        })
        .then(res => {
            if(res.status === 401){
                localStorage.removeItem("token");
                navigate("/login");
                setLoading(false);
                return;
            }

            if(res.ok){
                setLoading(false);
                Swal.fire({
                    title : "Profile Updated!",
                    icon:"success"
                })

                setIsEdit({
                    name: false,
                    email: false,
                    phone: false,
                    dob: false,
                    passout: false,
                    gender: false,
                    qualification: false,
                    college: false
                });

                navigate("/user/profile")
            } else {
                setLoading(false);
                Swal.fire({
                    title : "Update Failed ❌",
                    icon : "error"
                })
            }
        })
    }

  return ( 
    <div className='min-h-screen flex justify-center items-center 
                    bg-gradient-to-br from-slate-900 to-slate-700 p-4'>
      
      <div className='p-6 w-full max-w-2xl 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 
                      rounded-xl shadow-lg text-white'>

        {/* Profile */}
        <div className='flex flex-col sm:flex-row items-center gap-5 justify-center mb-6'>
            <img 
              className='w-28 h-28 rounded-full border-2 border-orange-400 object-cover' 
              src={user.image ? user.image : "https://img.freepik.com/premium-vector/default-avatar.jpg"}
              alt="" 
            />
            <div className='text-center sm:text-left'>
                <input 
                  type='file' 
                  className='text-sm text-gray-200'
                  onChange={(e)=> setFile(e.target.files[0])}
                />
                <p className='text-xs text-gray-300'>*jpg, *png, *jpeg</p>
            </div>
        </div>

        <hr className='border-white/20 mb-4'/>

        {/* User ID */}
        <div className='flex justify-between mb-4 text-gray-300'>
            <span>User ID :</span>
            <span className='font-semibold'>{user?.userID}</span>
        </div>

        {/* Fields */}
        <div className='flex flex-col gap-3'>

        {[
            ["User Name","userName","name"],
            ["Email","userEmail","email"],
            ["PhoneNo","PhoneNo","phone"],
            ["DOB","DOB","dob"],
            ["Passout Year","passoutYear","passout"],
            ["Gender","gender","gender"],
            ["Qualification","highQualification","qualification"],
            ["College Name","collegeName","college"]
        ].map((item,i)=>(
            <div key={i} className='grid grid-cols-1 sm:grid-cols-3 gap-2 items-center'>

                <h1 className='text-sm'>{item[0]} :</h1>

                <input
                  value={user?.[item[1]] || ""}
                  disabled={!isEdit[item[2]]}
                  onChange={(e)=>handleChange(item[1], e.target.value)}
                  className={`p-2 rounded-lg text-black text-sm 
                  ${!isEdit[item[2]] ? "bg-gray-200" : "bg-white"}`}
                />

                <button 
                  onClick={()=>handleToggle(item[2])}
                  className='bg-orange-500 hover:bg-orange-600 rounded-lg text-sm py-2'
                >
                    {isEdit[item[2]] ? "Save" : "Edit"}
                </button>

            </div>
        ))}

        </div>

        {/* Submit */}
        <div className='flex justify-center mt-6'>
            <button 
              className={`w-36 py-2 rounded-lg text-white 
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={onSubmit}
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Updating...
                    </span>
                ):("Submit")}
            </button>
        </div>

      </div>
    </div>
  )
}

export default EditProfile