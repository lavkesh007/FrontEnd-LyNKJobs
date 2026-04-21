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
    { title: "Active Jobs", value: stats.activeJobs, icon: "💼" },
    { title: "Total Jobs", value: stats.totalJobs, icon: "📊" },
    { title: "Active Users", value: stats.activeUsers, icon: "👤" },
    { title: "Total Users", value: stats.totalUsers, icon: "👥" },
    { title: "Applications", value: stats.totalApplyJobs, icon: "📄" },
    { title: "User Requests", value: stats.totalUserRequest, icon: "📨" },
  ];

  return (
    <div className="p-3 sm:p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {cards.map((card, i) => (
          <div 
            key={i}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >

            {/* Icon */}
            <div className="text-2xl sm:text-3xl mb-2">
              {card.icon}
            </div>

            {/* Title with Underline */}
            <h1 className="text-sm sm:text-base text-gray-600 font-medium relative group inline-block">
              {card.title}
              <span className="block h-[2px] w-full bg-orange-400 mt-1"></span>
            </h1>

            {/* Value */}
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-2">
              {card.value}
            </h1>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Counts