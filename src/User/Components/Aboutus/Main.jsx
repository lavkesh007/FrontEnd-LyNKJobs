import React from 'react'
import Ourmission from './Ourmission'

const Main = () => {
  return (
    <div
      id='about'
      className='w-full py-12 md:py-16 px-4 md:px-10 bg-gradient-to-br from-white via-blue-50 to-white'
    >
      <div className='max-w-5xl mx-auto flex flex-col gap-8'>

        {/* 🔹 Heading */}
        <div className='text-center flex flex-col gap-3'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide'>
            About Us
          </h1>

          <div className='w-20 h-1 bg-orange-500 mx-auto rounded-full'></div>
        </div>

        {/* 🔹 Content */}
        <div className='text-center text-gray-600 text-sm md:text-lg leading-relaxed px-2 md:px-8 space-y-4'>

          <p>
            <span className='font-semibold text-gray-800'>LynkJobs</span> is a modern job portal platform built to seamlessly connect{' '}
            <span className='font-semibold text-orange-500'>job seekers</span> with{' '}
            <span className='font-semibold text-orange-500'>employers</span>.
            <br className='hidden md:block' />
            We focus on creating meaningful connections that help individuals grow in their careers while enabling companies to find the right talent efficiently.
          </p>

          <p>
            At <span className='font-semibold text-gray-800'>LynkJobs</span>, we believe that the{' '}
            <span className='font-semibold text-orange-500'>right opportunity</span> can change a life, and the{' '}
            <span className='font-semibold text-orange-500'>right talent</span> can transform a business.
          </p>

        </div>

        {/* 🔹 Mission Section */}
        <div className='mt-4 bg-white border border-orange-100 rounded-xl shadow-md hover:shadow-lg transition p-4 md:p-6'>
          <Ourmission />
        </div>

      </div>
    </div>
  )
}

export default Main