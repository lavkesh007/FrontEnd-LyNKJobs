import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckPassword = () => {
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();
   const checkPassword = async () => { 
            try {
                const res = await fetch("https://lynkjobs-1.onrender.com/user/checkOldPassword",{
                    method : "POST",
                    headers:{
                        "Content-Type" : "application/json",
                        Authorization : "Bearer " + localStorage.getItem("token")
                    },
                    body : JSON.stringify({
                        password : Password
                    })
                });

                const data = await res.json();

                if(res.ok){
                   
                    navigate("/user/profile/setting/changePassword"); 
                }else{
                    Swal.fire({
                        title : "Wrong Password",
                        icon :'warning'     
                    })
                }

            } catch (error) {
                Swal.fire({
                    title : "Server Error",
                    icon :'error'     
                })
            }
        }
const sendOTP = async () => {
  try {
    const res = await fetch("https://lynkjobs-1.onrender.com/user/settingOTP",{
      method : "POST",
      headers : {
        Authorization : "Bearer " + localStorage.getItem("token")
      }
    });

    const data = await res.json();

    if(res.ok){
         console.log("otp send")
      navigate("/user/profile/setting/forgot");
    } else {
      Swal.fire({
        text: "Failed to send OTP",
        icon : 'warning'
      });
    }

  } catch (error) {
    console.error(error);
    Swal.fire({
      text: "Server Error",
      icon: "error"
    });
  }
}
  return (
    <div className=' h-full bg-black/30 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center bg-white/30 p-10 rounded-lg gap-6 border border-slate-700'>
                <div>
                    <h1 className='text-2xl font-semibold'>Enter Your Old Password</h1>
                </div>
                <input type="password"  className='w-40 h-10 rounded-lg bg-black/30 ' value={Password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className='bg-slate-500 hover:bg-slate-400 w-20 h-9 rounded-lg' onClick={checkPassword}>Submit</button>
                <div>
                    <h1 className='cursor-pointer text-red-400 hover:text-red-500 underline' onClick={sendOTP}>forgot Password ?</h1>
                </div>
        </div>
        
    </div>
  )
}

export default CheckPassword
