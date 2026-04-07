import React ,{ useState, useEffect } from 'react'


const leftSide = () => {

  const text = "Weelcome back to Lynk Job's! 👋 We're glad to see you again on your career journey 🚀. Explore opportunities that match your skills 💼, connect with top companies 🤝, and take the next step toward success 🌱. Your dream job is waiting—start exploring today and make it yours! ✨";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 50); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='h-screen  relative'>
      <img className='h-full object-cover flex blur-sm'   src="https://www.shutterstock.com/image-vector/man-holding-laptop-sitting-on-600nw-2668005137.jpg" alt="" />
      <div className="absolute inset-0 flex  items-center justify-center content-center   px-10">
        <div className='bg-slate-700/50 h-96 w-96 rounded-3xl border items-center  flex text-center'>
             <p className="text-slate-200 text-lg leading-relaxed p-5">
              {displayText}
              <span className="animate-pulse">|</span>
          </p>
        </div>
         
      </div>      
    </div>
  )
}

export default leftSide
