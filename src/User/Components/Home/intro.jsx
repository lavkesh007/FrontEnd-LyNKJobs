import React from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white h-[80vh] flex items-center px-6 md:px-16">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            LyNK <span className="text-orange-500">Job’s</span>
          </h1>

          <p className="text-gray-300 mt-4 tracking-widest text-sm">
            FIND YOUR DREAM JOB
          </p>

          <p className="text-gray-400 mt-6 max-w-md">
            Connecting talent with the right opportunities through a fast,
            smart, and modern hiring platform.
          </p>

          {/* 🧠 PRACTICE SECTION CARD */}
          <div
            onClick={() => navigate("/user/practice")}
            className="mt-8 cursor-pointer bg-white/10 backdrop-blur-lg border border-white/10 p-5 rounded-2xl hover:border-orange-500 hover:shadow-lg transition duration-300 max-w-sm"
          >
            <div className="flex items-center gap-4">

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-orange-600">
                <span className="text-white text-xl">🧠</span>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Practice Section
                </h3>
                <p className="text-gray-400 text-sm">
                  Improve your skills with MCQs & quizzes
                </p>
              </div>

            </div>
          </div>

          {/* 🔍 BROWSE JOBS BUTTON */}
          <button
            className="mt-4 border border-gray-500 hover:border-orange-500 px-6 py-3 rounded-xl transition"
            onClick={() => navigate("/user/alljobs")}
          >
            Browse Jobs
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden md:block">

          {/* INNER GLOW */}
          <div className="absolute w-72 h-72 bg-orange-500 opacity-10 blur-3xl rounded-full top-10 left-10"></div>

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl">

            <h3 className="text-lg font-semibold mb-4">🔥 Trending Jobs</h3>

            <div className="bg-gray-900 p-4 rounded-xl mb-3">
              <p className="text-orange-400 font-semibold">Frontend Developer</p>
              <p className="text-gray-400 text-sm">Bangalore • ₹8-12 LPA</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl mb-3">
              <p className="text-orange-400 font-semibold">Backend Developer</p>
              <p className="text-gray-400 text-sm">Pune • ₹6-10 LPA</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              <p className="text-orange-400 font-semibold">Data Analyst</p>
              <p className="text-gray-400 text-sm">Remote • ₹5-9 LPA</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Searchbar