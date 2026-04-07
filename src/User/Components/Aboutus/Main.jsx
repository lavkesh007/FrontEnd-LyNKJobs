import React from 'react'
import Ourmission from './Ourmission'

const Main = () => {
  return (
    <div id='about' className='flex flex-col gap-7 p-5 bg-black/30 rounded-sm '>
        <div className='flex flex-col text-center gap-5'>
            <div>
                <h1 className='text-3xl font-bold  text-stone-700 tracking-widest'>About us</h1>
            </div>
           
            <div className='text-slate-600 text-lg'>
                <p>LynkJobs is a modern job portal platform built to seamlessly connect job seekers with employers. <br /> We focus on creating meaningful connections that help individuals grow in their careers while enabling companies to find the right talent efficiently.</p>
                <p>At LynkJobs, we believe that the right opportunity can change a life, and the right talent can transform a business.</p>
            </div>
        </div>
        
        <div className='mt-2'>
            <Ourmission/>
        </div>
    </div>
  )
}

export default Main
