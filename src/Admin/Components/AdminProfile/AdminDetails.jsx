import React, { useEffect, useState } from 'react'

const AdminDetails = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch("https://api.jobslynk.in/admin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken")
      }
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setAdmin(data))
      .catch(() => setAdmin(null));
  }, []);

  // Loading / No Profile
  if (!admin)
    return (
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <h1 className="bg-black/30 px-6 py-2 rounded-lg text-sm sm:text-lg text-slate-800">
          No Profile
        </h1>
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100 p-4">

      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-xl rounded-2xl p-4 sm:p-6">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-orange-400 shadow-md"
            src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg"
            alt="profile"
          />
        </div>

        <hr className="my-4" />

        {/* Details */}
        <div className="space-y-3 text-gray-700 text-sm sm:text-base">

          {[
            ["Admin ID", admin.adminID],
            ["Name", admin.adminName],
            ["Email", admin.adminEmail],
            ["Phone", admin.phone || "N/A"],
            ["DOB", admin.dob || "N/A"],
            ["Gender", admin.gender || "N/A"],
            ["Joining Date", admin.joiningDate || "N/A"],
          ].map(([label, value], i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between border-b pb-1">
              <span className="font-semibold text-gray-600">{label}</span>
              <span className="text-gray-800 break-words">{value}</span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default AdminDetails;