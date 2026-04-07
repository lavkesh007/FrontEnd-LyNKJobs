import React from 'react'
import AdminLoginLeft from './AdminLoginLeft'
import AdminLoginRight from './AdminLoginRight'
import { Outlet } from 'react-router-dom'

const AdminLofinMain = () => {
  return (
    <div className=' h-screen bg-orange-200  flex felx-col justify-center  items-center'>
      <div className='flex w-[1000px] h-[700px]   '> 
        <div className='border w-fit rounded-2xl bg-orange-300 flex'>
            <div className='w-1/2 h-full '>
            <AdminLoginLeft/>
          </div>
          <div className='w-1/2 h-full'>
            <AdminLoginRight/>
          </div>
        </div>
          
      </div>
      
    </div>
  )
}

export default AdminLofinMain
