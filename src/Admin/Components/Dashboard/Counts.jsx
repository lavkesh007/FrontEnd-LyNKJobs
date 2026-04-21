import React,{useState,useEffect} from 'react'

const Counts = () => {

  const [stats, setStats] = useState({
    activeJobs: 0,
    totalJobs: 0,
    activeUsers: 0,
    totalUsers: 0,
    totalApplyJobs: 0,
    totalUserRequest : 0
  });

  useEffect(() => {
    const fetchStats = () => {
      fetch("https://api.jobslynk.in/admin/stats",{
        headers : {
          Authorization : "Bearer " + localStorage.getItem("adminToken")
        }
      })
      .then(res => {
        if(!res.ok) throw new Error("Unauthorized");
        return res.json()
      })
      .then(data => setStats(data))
      .catch(err => console.error(err));
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Active Jobs", value: stats.activeJobs, icon: "💼", color:"from-orange-400 to-orange-600" },
    { title: "Total Jobs", value: stats.totalJobs, icon: "📊", color:"from-blue-400 to-blue-600" },
    { title: "Active Users", value: stats.activeUsers, icon: "👤", color:"from-green-400 to-green-600" },
    { title: "Total Users", value: stats.totalUsers, icon: "👥", color:"from-purple-400 to-purple-600" },
    { title: "Applications", value: stats.totalApplyJobs, icon: "📄", color:"from-pink-400 to-pink-600" },
    { title: "User Requests", value: stats.totalUserRequest, icon: "📨", color:"from-yellow-400 to-yellow-600" },
  ];

  return (
    <div className="p-3 sm:p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {cards.map((card, i) => (
          <div 
            key={i}
            className={`p-5 rounded-2xl shadow-lg text-white 
            bg-gradient-to-br ${card.color} 
            transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >

            {/* Top Row */}
            <div className="flex justify-between items-center">

              {/* Title */}
              <h1 className="text-sm sm:text-base font-medium relative">
                {card.title}
                <span className="block h-[2px] w-full bg-white/70 mt-1"></span>
              </h1>

              {/* Icon */}
              <div className="text-2xl sm:text-3xl opacity-80">
                {card.icon}
              </div>

            </div>

            {/* Value */}
            <div className="mt-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
                {card.value}
              </h1>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Counts