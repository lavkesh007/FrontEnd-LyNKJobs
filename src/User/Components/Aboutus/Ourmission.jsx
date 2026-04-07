import React from 'react'

const Ourmission = () => {
  return (
    <div className='flex justify-between p-2 text-zinc-800'>
      <div>
        <h1 className='text-center text-lg'>Our Mission</h1>
        <ul className='list-disc'>
            <li>Simplify the job search process</li>
            <li>Connect talent with the right opportunities</li>
            <li>Empower companies to hire smarter and faster</li>
        </ul>
      </div>
      <div>
        <h1 className='text-center text-lg'>Our Vision</h1>
         <ul className='list-disc'>
            <li>Bridges the gap between talent and opportunity</li>
            <li>Supports career growth at every stage</li>
            <li>Builds a strong and reliable hiring ecosystem</li>
        </ul>
      </div>
      <div>
        <h1 className='text-center text-lg'>What We Offer</h1>
        <ul className='list-disc'>
            <li>Easy-to-use job search platform</li>
            <li>One-click job applications</li>
            <li>Personalized job recommendations</li>
            <li>Profile management and application tracking</li>
            <li>Access to opportunities across multiple domains</li>
        </ul>
      </div>
      <div>
        <h1 className='text-center text-lg'>For Employers</h1>
        <ul className='list-disc'>
            <li>Post jobs quickly and easily</li>
            <li>Reach a wide pool of qualified candidates</li>
            <li>Streamlined hiring process</li>
            <li>Efficient candidate filtering and management</li>
        </ul>
      </div>
    </div>
  )
}

export default Ourmission
