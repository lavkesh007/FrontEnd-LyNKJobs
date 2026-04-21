import React from 'react'
import AdminLoginLeft from './AdminLoginLeft'
import AdminLoginRight from './AdminLoginRight'

const AdminLoginMain = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100 p-4'>

      <div className='w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row'>

        {/* Left Side (Hidden on Mobile) */}
        <div className='md:w-1/2 h-64 md:h-auto'>
          <AdminLoginLeft/>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2'>
          <AdminLoginRight/>
        </div>

      </div>

    </div>
  )
}

export default AdminLoginMain