import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AppliedJobs = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate(); // ✅ FIXED

  useEffect(() => {
    fetch("https://lynkjobs-1.onrender.com/user/allAppliedJobs", {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" min-h-screen p-5">

      {/* Empty State */}
      {job.length === 0 ? (
        <h2 className="text-center text-3xl text-gray-500 mt-10">
          No Applied Jobs Found 🚫
        </h2>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {job.map((data, index) => (
            <div
              key={index}
              className="bg-white/70 rounded-xl shadow-md p-5 hover:shadow-lg transition flex flex-col justify-between h-full"
            >

              {/* Top Content */}
              <div className="flex flex-col flex-grow">

                {/* Job ID */}
                <div className="text-xs text-gray-400">
                  JobID: {data.jobID}
                </div>

                {/* Header */}
                <div className="flex flex-col items-center mt-2 mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={data.logo}
                    alt=""
                  />
                  <h1 className="font-semibold text-gray-700 text-sm mt-2 text-center">
                    {data.role}
                  </h1>
                  <p className="text-gray-500 text-xs">
                    {data.companyName}
                  </p>
                </div>

                <hr className="my-2" />

                {/* Details */}
                <div className="text-sm text-gray-600 space-y-2 flex-grow">

                  <div className="flex justify-between">
                    <span className="font-medium">Skills:</span>
                    <span className="text-right max-w-[60%]">
                      {data.skill}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{data.location}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Experience:</span>
                    <span>
                      {data.experience == 0
                        ? "Fresher"
                        : `${data.experience} yrs`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Opening:</span>
                    <span>{data.openDate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Expiry:</span>
                    <span>{data.expireDate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Salary:</span>
                    <span>{data.salary} LPA</span>
                  </div>

                </div>
              </div>

              {/* Button (Always aligned) */}
              <div className="flex justify-center mt-4">
                <button
                 
                  className="bg-green-500 text-white px-5 py-2 rounded-lg  transition"
                >
                  Applied
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AppliedJobs;