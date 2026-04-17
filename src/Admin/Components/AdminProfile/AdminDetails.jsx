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
  }, []); // ✅ important fix (prevent infinite calls)

  if (!admin)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="bg-black/30 px-6 py-2 rounded-lg text-lg text-slate-800">
          No Profile
        </h1>
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 ">

        <div className="flex justify-center">
          <img
            className="w-28 h-28 rounded-full border-4 border-orange-400 shadow-md"
            src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg"
            alt="profile"
          />
        </div>

        <hr className="my-4" />

        {/* Details */}
        <div className="space-y-3 text-gray-700 gap-6 flex flex-col">

          <div className="flex justify-between">
            <span className="font-semibold">Admin ID</span>
            <span>{admin.adminID}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Name</span>
            <span>{admin.adminName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Email</span>
            <span>{admin.adminEmail}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Phone</span>
            <span>{admin.phone || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">DOB</span>
            <span>{admin.dob || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Gender</span>
            <span>{admin.gender || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Joining Date</span>
            <span>{admin.joiningDate || "N/A"}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDetails;