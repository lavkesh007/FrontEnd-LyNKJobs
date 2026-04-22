import React, { useState, useEffect } from 'react';

const UserInformation = () => {

  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.jobslynk.in/admin/userInfo", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken")
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        const sortedData = data.sort((a, b) =>
          new Date(b.registrationTime) - new Date(a.registrationTime)
        );
        setUser(sortedData);
      } else {
        setUser([]);
      }
    })
    .catch(() => setUser([]));
  }, []);

  // 🔍 Filter Logic
  const filteredUsers = user.filter((u) =>
    u.userName?.toLowerCase().includes(search.toLowerCase()) ||
    u.userEmail?.toLowerCase().includes(search.toLowerCase()) ||
    String(u.PhoneNo)?.includes(search)
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-6">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          👥 User Information
        </h2>

        {/* 🔍 Search Bar */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Content */}
        {filteredUsers.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-10">
            No Users Found
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full border-collapse rounded-lg overflow-hidden">

              <thead>
                <tr className="bg-gradient-to-r from-orange-300 to-orange-500 text-white">
                  <th className="p-3 text-sm">ID</th>
                  <th className="p-3 text-sm">Name</th>
                  <th className="p-3 text-sm">Email</th>
                  <th className="p-3 text-sm">Phone</th>
                  <th className="p-3 text-sm">DOB</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((u, index) => (
                  <tr
                    key={index}
                    className="text-center border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="p-3 text-sm text-gray-700">{u.userID}</td>
                    <td className="p-3 text-sm font-medium text-gray-800">{u.userName}</td>
                    <td className="p-3 text-sm text-gray-600">{u.userEmail}</td>
                    <td className="p-3 text-sm text-gray-600">{u.PhoneNo}</td>
                    <td className="p-3 text-sm text-gray-600">
                      {new Date(u.DOB).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}
      </div>
    </div>
  );
};

export default UserInformation;