import React from 'react'
import LeftSide from './leftSide'
import RightSide from './rightSide'
import { BrowserRouter ,Routes,Route, Outlet} from 'react-router-dom'
import Forgot from '../UserForgotPassword/forgot'
const LeftRight = () => {
  return (
    <div className='flex gap-0'>
      <div className='w-1/2 h-full'>
        <LeftSide/>
      </div>
      <div className='w-1/2 h-full'>
        <Outlet/>
      </div>
      
      
    </div>
  )
}

export default LeftRight
