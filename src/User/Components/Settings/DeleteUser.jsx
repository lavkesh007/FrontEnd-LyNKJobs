import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {

  const navigate = useNavigate();

  const handleDelete = async () => {

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if(result.isConfirmed){

      try {
        const res = await fetch("https://lynkjobs-1.onrender.com/user/deleteUser",{
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });

        const data = await res.json();

        if(res.ok){
          Swal.fire({
            title: "Deleted!",
            text: data.message || "Account deleted successfully",
            icon: "success"
          });

          localStorage.removeItem("token");

          navigate("/");

        } else {
          Swal.fire({
            title: "Error",
            text: data.message || "Delete failed",
            icon: "error"
          });
        }

      } catch (error) {
        Swal.fire({
          title: "Server Error",
          text: "Try again later",
          icon: "error"
        });
      }
    }
  }

  return (

    <div className="flex flex-col items-center justify-center gap-4 h-full bg-white/60">

      <h1 className="text-xl font-semibold text-red-500">
        Delete Account
      </h1>

      <p className="text-gray-500 text-sm text-center max-w-sm">
        Once you delete your account, there is no going back. Please be certain.
      </p>

      <button 
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
      >
        Delete My Account
      </button>

    </div>
  )
}

export default DeleteUser;