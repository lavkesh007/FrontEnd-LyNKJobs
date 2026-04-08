import React ,{ useState, useEffect } from 'react'

const LeftSide = () => {

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
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-full relative'>
      
      <img 
        className='w-full h-full object-cover blur-sm'  
        src="https://www.shutterstock.com/image-vector/man-holding-laptop-sitting-on-600nw-2668005137.jpg" 
        alt="" 
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        
        <div className='bg-slate-700/50 w-full max-w-sm p-4 rounded-3xl flex items-center text-center'>
          <p className="text-slate-200 text-sm md:text-lg leading-relaxed">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

      </div>

    </div>
  )
}

export default LeftSide