import React ,{ useState, useEffect } from 'react'


const AdminLoginLeft= () => {

  const text = "Weelcome back to Lynk Job’s Admin Panel! 👋 We’re glad to have you leading the platform 🚀. Manage opportunities 💼, connect talent with top companies 🤝, and ensure everything runs smoothly 🌱. Your actions shape careers—let’s make an impact today! ✨";

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
    <div className='h-full  relative'>
      <img className='h-full object-cover flex blur-sm'   src="https://thumbs.dreamstime.com/b/work-stress-office-workplace-cartoon-tired-man-isolated-white-background-444207849.jpg" alt="" />
      <div className="absolute inset-0 flex  items-center justify-center content-center   px-10">
        <div className='bg-black/50 h-96 w-96 rounded-3xl border items-center  flex text-center'>
             <p className="text-slate-100 text-lg leading-relaxed p-5">
              {displayText}
              <span className="animate-pulse">|</span>
          </p>
        </div>
         
      </div>      
    </div>
  )
}

export default AdminLoginLeft
