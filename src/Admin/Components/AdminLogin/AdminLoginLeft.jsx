import React ,{ useState, useEffect } from 'react'

const AdminLoginLeft= () => {

  const text = "Weelcome back to Lynk Job’s Admin Panel! 👋 We’re glad to have you leading the platform 🚀. Manage opportunities 💼, connect talent with top companies 🤝, and ensure everything runs smoothly 🌱. Your actions shape careers—let’s make an impact today! ✨";

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
    <div className='relative h-full w-full hidden md:block'>
      
      <img 
        className='h-full w-full object-cover blur-sm'  
        src="https://thumbs.dreamstime.com/b/work-stress-office-workplace-cartoon-tired-man-isolated-white-background-444207849.jpg" 
        alt="" 
      />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className='bg-black/60 max-w-md p-6 rounded-2xl text-center shadow-lg'>
          <p className="text-slate-100 text-sm sm:text-lg leading-relaxed">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>      
    </div>
  )
}

export default AdminLoginLeft