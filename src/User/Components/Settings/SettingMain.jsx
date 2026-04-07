import React from 'react'
import SettingMenu from './SettingMenu'
import ChangePassword from './ProfileChangePassword'
import CheckPassword from './CheckPassword'
import Index from './index'
import { Outlet } from 'react-router-dom'

const SettingMain = () => {
  return (
    <div className='w-full h-full p-10 flex'>
        <div className='w-1/4'>
            <SettingMenu/>
        </div>
        <div className='w-3/4'> 
            <Outlet/>
        </div>
        
    </div>
  )
}

export default SettingMain
