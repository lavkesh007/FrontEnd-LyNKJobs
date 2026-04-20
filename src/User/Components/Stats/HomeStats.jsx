import { useState, useEffect } from "react";

const HomeStats = () => {

  const [stats, setStats] = useState({
    activeJobs: 0,
    totalJobs: 0,
    activeUsers: 0,
    totalUsers: 0,
    totalApplyJobs: 0,
    totalUserRequest: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchStats = async () => {
      try {
        const res = await fetch("https://api.jobslynk.in/user/homeStats");

        if (!res.ok) throw new Error("Server Error");

        const data = await res.json();
        setStats(data);
        setError(false);

      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000);

    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-lg font-semibold animate-pulse">
        ⏳ Loading stats...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-500 font-semibold">
        ❌ Failed to load stats
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4">

      {/* 🔥 HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-600">
          Live Job Stats
        </h1>
        <p className="text-gray-500 mt-2">
          Real-time insights from our platform
        </p>
      </div>

      {/* 🖼️ IMAGE */}
      <div className="flex justify-center mb-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2620/2620621.png"
          alt="stats"
          className="w-24 md:w-32 opacity-90"
        />
      </div>

      {/* 📊 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center">

          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
            <span className="text-white text-2xl">💼</span>
          </div>

          <h1 className="text-gray-500 text-sm">Active Jobs</h1>

          <h1 className="text-4xl font-bold text-black mt-2">
            {stats.activeJobs}
          </h1>

          {/* 🟠 UNDERLINE */}
          <div className="w-12 h-1 bg-orange-500 rounded mt-3 transition-all duration-300 hover:w-20"></div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center">

          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            <span className="text-white text-2xl">📊</span>
          </div>

          <h1 className="text-gray-500 text-sm">Total Jobs</h1>

          <h1 className="text-4xl font-bold text-black mt-2">
            {stats.totalJobs}
          </h1>

          <div className="w-12 h-1 bg-orange-500 rounded mt-3 transition-all duration-300 hover:w-20"></div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center">

          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-red-500 mb-4">
            <span className="text-white text-2xl">📨</span>
          </div>

          <h1 className="text-gray-500 text-sm">Applications</h1>

          <h1 className="text-4xl font-bold text-black mt-2">
            {stats.totalApplyJobs}
          </h1>

          <div className="w-12 h-1 bg-orange-500 rounded mt-3 transition-all duration-300 hover:w-20"></div>
        </div>

      </div>
    </div>
  );
};

export default HomeStats;