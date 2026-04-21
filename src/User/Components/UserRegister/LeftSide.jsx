import React ,{ useState, useEffect } from 'react'

const LeftSide = () => {

  const text = `Lynk Job's is your trusted platform for discovering career opportunities that match your skills, passion, and ambition.

We connect talented job seekers with top companies, making hiring simple, fast, and efficient.

Start your journey today and move closer to your dream career 🚀`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full relative hidden md:block'>

      <img
        className='h-full w-full object-cover brightness-75'
        src="https://thumbs.dreamstime.com/b/business-man-find-job-curriculum-vitae-recruitment-candidate-position-cv-profile-flat-vector-illustration-83824411.jpg"
        alt=""
      />

      <div className='absolute inset-0 flex items-center justify-center p-6'>

        <div className='backdrop-blur-md bg-black/50 border border-white/20 
                        max-w-md p-6 rounded-2xl text-center shadow-lg'>

          <h1 className='text-white text-2xl font-bold mb-4'>
            Welcome to <span className='text-orange-400'>Lynk Jobs</span>
          </h1>

          <p className='text-gray-200 text-sm leading-relaxed whitespace-pre-line'>
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

        </div>

      </div>
    </div>
  )
}

export default LeftSide