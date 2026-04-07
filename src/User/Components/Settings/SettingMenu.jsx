import React from 'react'
import { useNavigate } from 'react-router-dom'

const SettingMenu = () => {
  const navigate = useNavigate()
  return (
    <div className='h-full  flex items-centers flex-col justify-center '>
        <div className='bg-black/30  h-full  p-5  rounded-lg border '>
            <div className='border p-3 rounded-lg border-slate-900 cursor-pointer hover:bg-slate-400 bg-white/30' onClick={()=> navigate("/user/profile/setting/checkPassword")} >
                <h1>Change Password</h1>
            </div>
            <hr className='mt-3 mb-3'/>
            <div className='border p-3 rounded-lg border-slate-900 cursor-pointer hover:bg-red-400 bg-red-300' onClick={()=> navigate("/user/profile/setting/delete")}>
                <h1>Delete Account</h1>
            </div>
        </div>
    </div>
    
  )
}

export default SettingMenu
