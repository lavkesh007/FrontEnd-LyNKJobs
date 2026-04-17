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
        return res.json()})
      .then(data => setStats(data))
      .catch(err => console.error(err));
  };

  fetchStats();

  const interval = setInterval(fetchStats, 5000); // every 5 sec

  return () => clearInterval(interval);
}, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">

      <div className="bg-white p-4 rounded-xl shadow items-center  flex flex-col">
        <h1>💼 Active Jobs</h1> <h1 className='text-4xl'>{stats.activeJobs}</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow items-center flex flex-col">
        <h1>📊 Total Jobs</h1> <h1 className='text-4xl'>{stats.totalJobs}</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow items-center flex flex-col">
        <h1>👤 Active Users</h1><h1 className='text-4xl'>{stats.activeUsers}</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow items-center flex flex-col">
        <h1>👥 Total Users</h1><h1 className='text-4xl'>{stats.totalUsers}</h1> 
      </div>

      <div className="bg-white p-4 rounded-xl shadow col-span-2 md:col-span-1 items-center flex flex-col">
       <h1>📄 Applications</h1> <h1 className='text-4xl'>{stats.totalApplyJobs}</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow col-span-2 md:col-span-1 items-center flex flex-col">
       <h1>📄 User Request</h1> <h1 className='text-4xl'>{stats.totalUserRequest}</h1>
      </div>

    </div>
  )
}

export default Counts
