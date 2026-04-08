import React from 'react'
import { Outlet } from 'react-router-dom'
import SettingMenu from './SettingMenu'

const SettingMain = () => {
  return (
    <div className='w-full min-h-screen p-4 md:p-10 flex flex-col md:flex-row gap-4'>

        {/* 🔥 Menu */}
        <div className='w-full md:w-1/4'>
            <SettingMenu/>
        </div>

        {/* 🔥 Content */}
        <div className='w-full md:w-3/4'>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default SettingMain