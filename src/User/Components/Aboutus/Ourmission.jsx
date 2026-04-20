import React from 'react'

const Ourmission = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>

      {/* 🔹 Card 1 */}
      <div className='group bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300'>
        <h1 className='text-center text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition'>
          Our Mission
        </h1>
        <ul className='list-disc pl-5 space-y-1 text-gray-600 text-sm'>
          <li>Simplify the job search process</li>
          <li>Connect talent with the right opportunities</li>
          <li>Empower companies to hire smarter and faster</li>
        </ul>
      </div>

      {/* 🔹 Card 2 */}
      <div className='group bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300'>
        <h1 className='text-center text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition'>
          Our Vision
        </h1>
        <ul className='list-disc pl-5 space-y-1 text-gray-600 text-sm'>
          <li>Bridges the gap between talent and opportunity</li>
          <li>Supports career growth at every stage</li>
          <li>Builds a strong and reliable hiring ecosystem</li>
        </ul>
      </div>

      {/* 🔹 Card 3 */}
      <div className='group bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300'>
        <h1 className='text-center text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition'>
          What We Offer
        </h1>
        <ul className='list-disc pl-5 space-y-1 text-gray-600 text-sm'>
          <li>Easy-to-use job search platform</li>
          <li>One-click job applications</li>
          <li>Personalized job recommendations</li>
          <li>Profile management and application tracking</li>
          <li>Access to opportunities across multiple domains</li>
        </ul>
      </div>

      {/* 🔹 Card 4 */}
      <div className='group bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300'>
        <h1 className='text-center text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition'>
          For Employers
        </h1>
        <ul className='list-disc pl-5 space-y-1 text-gray-600 text-sm'>
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