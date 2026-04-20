import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://api.jobslynk.in/jobs")
      .then(res => res.json())
      .then(data => {
        const sortedJobs = data.sort((a, b) => {
          const salA = a.maxSalary || a.salary || 0;
          const salB = b.maxSalary || b.salary || 0;
          return salB - salA;
        });
        setJobs(sortedJobs);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white h-[80vh] flex items-center px-6 md:px-16">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-orange-500 opacity-10 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-blue-400 opacity-10 blur-[100px] rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <div className="animate-fadeInUp">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            LyNK <span className="text-orange-500">Job’s</span>
          </h1>

          <p className="text-gray-200 mt-4 tracking-widest text-sm">
            FIND YOUR DREAM JOB
          </p>

          <p className="text-gray-300 mt-6 max-w-md">
            Connecting talent with the right opportunities through a fast,
            smart, and modern hiring platform.
          </p>

          <div
            onClick={() => navigate("/user/practice")}
            className="mt-8 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl 
            hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 
            transform hover:scale-[1.03] transition duration-300 max-w-sm"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-orange-600">
                <span className="text-white text-xl">🧠</span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Practice Section
                </h3>
                <p className="text-gray-300 text-sm">
                  Improve your skills with MCQs & quizzes
                </p>
              </div>

            </div>
          </div>

          <button
            className="mt-4 border border-gray-300 text-white hover:border-orange-500 hover:bg-orange-500/10 
            px-6 py-3 rounded-xl transition transform hover:scale-105 hover:shadow-md"
            onClick={() => navigate("/user/alljobs")}
          >
            Browse Jobs
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden md:block animate-fadeInUp delay-200">

          <div className="absolute w-72 h-72 bg-orange-400 opacity-10 blur-3xl rounded-full top-10 left-10"></div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">

            <h3 className="text-lg font-semibold mb-4">🔥 Trending Jobs</h3>

            {jobs.length === 0 ? (
              <p className="text-gray-400">Loading jobs...</p>
            ) : (
              jobs
                .filter(job => {
                  const role = job.role?.toLowerCase()?.trim();
                  const location = job.location?.toLowerCase()?.trim();
                  const salaryRaw = job.maxSalary || job.salary;
                  const salary = salaryRaw?.toString().toLowerCase().trim();

                  const isLocationInvalid = !location || location === "na";
                  const isSalaryInvalid = !salary || salary === "na";

                  // ✅ Skip ONLY if BOTH are invalid
                  return role && !(isLocationInvalid && isSalaryInvalid);
                })
                .slice(0, 3)
                .map((job, index) => {

                  const title = job.role;
                  const location = job.location;
                  const salary = job.maxSalary || job.salary;

                  return (
                    <div
                      key={index}
                      onClick={() => navigate(`/user/jobDetail/${job.jobID}`)}
                      className="bg-[#0f172a] p-4 rounded-xl mb-3 transform transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
                    >
                      <p className="text-orange-400 font-semibold">
                        {title}
                      </p>

                      {/* 🔥 FLEXIBLE DISPLAY */}
                      <p className="text-gray-300 text-sm">
                        {location && location.toLowerCase() !== "na" && salary && salary !== "na"
                          ? `${location} • ₹${salary} LPA`
                          : location && location.toLowerCase() !== "na"
                          ? location
                          : salary && salary !== "na"
                          ? `₹${salary} LPA`
                          : ""}
                      </p>
                    </div>
                  );
                })
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Searchbar