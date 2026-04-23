import React ,{ useState, useEffect } from 'react'

const LeftSide = () => {

  const text = "Weelcome back to Lynk Job's! 👋 We're glad to see you again on your career journey 🚀. Explore opportunities, connect with top companies 🤝, and take the next step toward success 🌱.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-full relative hidden md:block'>

      <img 
        className='w-full h-full object-cover brightness-75'  
        src="https://www.shutterstock.com/image-vector/man-holding-laptop-sitting-on-600nw-2668005137.jpg" 
        alt="" 
      />

      <div className="absolute inset-0 flex items-center justify-center p-6">

        <div className='backdrop-blur-md bg-black/40 border border-white/20 
                        p-6 rounded-2xl shadow-lg text-center max-w-md'>

          <p className="text-white text-base md:text-lg leading-relaxed">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default LeftSide