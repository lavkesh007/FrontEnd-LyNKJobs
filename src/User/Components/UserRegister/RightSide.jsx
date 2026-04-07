import React from 'react'
import{useNavigate} from "react-router-dom";
import { useState } from 'react';
import LoppyLogo from '../../../assets/3.png'
import Swal from 'sweetalert2';
const RegisterMiddleContent = () => {
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [DoB,setDob] = useState("");
    const [Password,setPassword] = useState("");
    const [RePassword,setRePassword] = useState("");

    

    const handleRegister = async(e) =>{
        e.preventDefault();
        try{
            if(Password !== RePassword){
                Swal.fire({
                    title:'Password Mismatch!!',
                    text:'Enter the Similar Password!!!',
                    icon:'warning',
                    timer:2000
                })
                return;
            }else{
                const response = await fetch("https://lynkjobs-1.onrender.com/user/registerEmailOtp",{
                    method : "POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        userName : name,
                        userEmail : email,
                        phoneNo : phone,
                        dob : DoB,
                        password : Password
                    })
                });
                const data = await response.json();
                if(response.ok){
                    Swal.fire({
                        text:'OTP Send on your Email!!!',
                    })
                    navigate("/user/register/otp",{
                        state:{
                            name,
                            email,
                            phone,
                            DoB,
                            Password
                        }
                    });
                    console.log(data);
                }else{
                    Swal.fire({
                        text: data.message,
                        icon : 'warning'
                    })
                    navigate("/user/login")
                }
            }
            
        }catch(error){
            alert(error)
            console.error(error);
        }
    }


    
  return (
    <div className='w-2/5 bg-white h-screen p-2  flex flex-col content-center items-center mt-12'>
        <div>
            {/* <img className='w-48 h-20' src={LoppyLogo} alt="" /> */}
        </div>
        <div>
            <h1 className='text-2xl text-slate-500'>Welcome to <span className='text-3xl text-gray-600 font-serif'>Lynk</span><span className='text-3xl text-red-400 font-serif'>Job's</span></h1>
        </div>
        <form onSubmit={handleRegister}>
            <div className='flex flex-col items-center bg-black/10  w-fit p-7 rounded-lg mt-4'>
                <div>
                <h1>Name: </h1>
                <input
                type="username"
                placeholder="Enter Your Full Name"
                className="w-72 p-2 mb-4 border rounded-full text-center"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div>
                    <h1>Email: </h1>
                    <input
                        type="email"
                        placeholder="Enter Email ID"
                        className="w-72 p-2 mb-4 border rounded-full text-center"
                        required
                        value={email}
                        
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Phone Number: </h1>
                    <input
                        type="number"
                        placeholder="Enter Phone Number"
                        className="w-72 p-2 mb-4 border rounded-full text-center"
                        required

                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <h1>DoB: </h1>
                    <input
                        type="Date"
                        placeholder="Enter Age"
                        className="w-72 p-2 mb-4 border rounded-full text-center text-slate-400"
                        required
                        value={DoB}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Password: </h1>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-72 p-2 mb-4 border rounded-full text-center"
                        required
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Re-Enter Password: </h1>
                    <input
                        type="password"
                        placeholder="Enter Re-Enter password"
                        className="w-72 p-2 mb-4 border rounded-full text-center"
                        required
                        value={RePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className="w-36 bg-slate-500 text-white p-2 rounded hover:bg-slate-800" type='Submit'>
                        Register
                    </button>
                </div>
                <div className='flex '>
                    Already have account? <p className='text-red-500 cursor-pointer px-2' onClick={()=> navigate('/user/login')}>login</p>
                </div>
            </div>
        </form>
        
        
    </div>
  )
}

export default RegisterMiddleContent
