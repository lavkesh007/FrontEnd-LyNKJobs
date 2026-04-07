import React, { useEffect, useState } from 'react'

const LeftSide = () => {

  const text = `Lynk Job's is your trusted platform for discovering career opportunities that match your skills, passion, and ambition. 
We believe that every individual deserves the right opportunity to grow and succeed in their professional journey. 
Our platform is designed to connect talented job seekers with top companies, making the hiring process simple, fast, and efficient.

Whether you are a student starting your career, a fresher looking for your first job, or an experienced professional aiming 
for the next big step, Lynk Job's provides opportunities tailored just for you. Start your journey today and take a step 
closer to your dream career.`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full relative'>

      {/* Image */}
      <img
        className='h-full w-full object-cover'
        src="https://thumbs.dreamstime.com/b/business-man-find-job-curriculum-vitae-recruitment-candidate-position-cv-profile-flat-vector-illustration-83824411.jpg"
        alt=""
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30 flex items-center justify-center px-4'>

        <div className='bg-black/50 backdrop-blur-md 
                        w-full max-w-md 
                        max-h-[80%] 
                        overflow-y-auto 
                        p-4 sm:p-6 md:p-8 
                        rounded-2xl border 
                        text-center'>

          <h1 className='text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4'>
            Welcome to <span className='text-slate-200 font-serif'>Lynk</span>{" "}
            <span className='text-orange-400 font-serif'>Jobs</span>
          </h1>

          <p className='text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line'>
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default LeftSide