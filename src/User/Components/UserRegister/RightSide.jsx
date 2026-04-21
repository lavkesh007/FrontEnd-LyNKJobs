import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Swal from 'sweetalert2';

const RegisterMiddleContent = () => {

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [DoB,setDob] = useState("");
    const [Password,setPassword] = useState("");
    const [RePassword,setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    // 👁️ Password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handleRegister = async(e) =>{
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try{
            if(Password !== RePassword){
                Swal.fire({
                    title:'Password Mismatch!!',
                    icon:'warning'
                })
                setLoading(false);
                return;
            }

            const response = await fetch("https://api.jobslynk.in/user/registerEmailOtp",{
                method : "POST",
                headers:{ "Content-Type" : "application/json" },
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
                    text:'OTP Sent Successfully 🚀'
                });

                navigate("/user/register/otp",{
                    state:{ name, email, phone, DoB, Password }
                });

            }else{
                Swal.fire({
                    text: data.message,
                    icon : 'warning'
                })
                navigate("/user/login")
            }

        }catch(error){
            console.error(error);
        }finally {
            setLoading(false);
        }
    }

  return (
    <div className='w-full h-full flex items-center justify-center p-4'>

      <div className='w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg'>

        {/* Heading */}
        <h1 className='text-center text-lg sm:text-xl font-semibold text-gray-600 mb-4'>
          Create Account on <br />
          <span className='text-2xl font-serif font-bold'>
            Lynk <span className='text-orange-500'>Job's</span>
          </span>
        </h1>

        <form onSubmit={handleRegister} className='flex flex-col gap-3'>

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Gmail ID"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            title="Enter valid Gmail (example@gmail.com)"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
          />

          {/* DOB */}
          <input
            type="date"
            className="w-full p-3 border rounded-lg text-center text-gray-500"
            required
            value={DoB}
            onChange={(e) => setDob(e.target.value)}
          />

          {/* PASSWORD */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
              title="Min 8 chars, 1 letter, 1 number, 1 special character"
            />

            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative w-full">
            <input
              type={showRePassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-orange-400"
              required
              value={RePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />

            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white 
            ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}
          >
            {loading ? "Processing..." : "Register"}
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className='text-center mt-4 text-sm'>
          Already have account? 
          <span 
            className='text-red-500 cursor-pointer ml-1'
            onClick={()=> navigate('/user/login')}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default RegisterMiddleContent;