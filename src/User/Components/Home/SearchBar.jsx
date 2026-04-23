import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/user/alljobs?role=${encodeURIComponent(role)}&location=${encodeURIComponent(location)}`)
  }

  return (
    <div className='flex flex-col items-center justify-center w-full text-center px-4 py-16'>

      {/* Heading */}
      <h1 className='text-4xl md:text-6xl font-extrabold text-slate-600 leading-tight'>
        Find Your <span className='text-orange-500 relative'>
          Dream Job
          <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-400 rounded-full animate-pulse"></span>
        </span>
      </h1>

      {/* Subtext */}
      <p className='text-slate-500 mt-4 max-w-xl text-lg'>
        Explore thousands of opportunities and connect with top companies instantly.
      </p>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-10 
                      bg-white/80 backdrop-blur-xl 
                      border border-gray-200 
                      p-5 rounded-2xl shadow-xl 
                      hover:shadow-2xl transition duration-300">

        {/* Role Input */}
        <div className="relative group">
          <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-orange-500 transition">🔍</span>
          <input
            type="text"
            placeholder="Job title or keyword"
            className="pl-10 pr-4 py-3 w-64 rounded-xl outline-none bg-white text-black 
                       placeholder-gray-400 
                       border border-gray-200
                       focus:border-orange-400 focus:ring-2 focus:ring-orange-200 
                       transition-all duration-200"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        {/* Divider (Desktop only) */}
        <div className="hidden md:block h-10 w-[1px] bg-gray-300"></div>

        {/* Location Input */}
        <div className="relative group">
          <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-orange-500 transition">📍</span>
          <input
            type="text"
            placeholder="Location"
            className="pl-10 pr-4 py-3 w-52 rounded-xl outline-none bg-white text-black 
                       placeholder-gray-400 
                       border border-gray-200
                       focus:border-orange-400 focus:ring-2 focus:ring-orange-200 
                       transition-all duration-200"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          className="relative overflow-hidden bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold 
                     transition-all duration-300 
                     hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-400/40
                     active:scale-95"
        >
          <span className="relative z-10">Search Jobs 🚀</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300 blur-xl"></span>
        </button>

      </div>

    </div>
  )
}

export default SearchBar