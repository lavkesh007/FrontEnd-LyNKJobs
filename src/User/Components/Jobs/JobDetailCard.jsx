
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import FooterMain from "../Footer/FooterMain";
import Navbar from "../Home/Navbar";

const JobsCard = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.jobslynk.in/jobs/jobDetail/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <h2>Loading...</h2>;

  const handleApply = async () => {
    const userreply = await Swal.fire({
      title: "Apply for this job?",
      text: "Do you want to apply for this role?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Apply",
      cancelButtonText: "No",
      confirmButtonColor: "#f97316",
    });

    if (userreply.isConfirmed) {
      try {
        const res1 = await fetch(
          `https://api.jobslynk.in/user/validateUser`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (!res1.ok) {
          Swal.fire({
            title: "Login First",
            icon: "warning",
            confirmButtonColor: "#f97316",
          });
          return navigate("/user/login");
        }

        window.open(job.websiteUrl, "_blank");
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    } else {
      return;
    }

    const result = await Swal.fire({
      title: "Have you applied the Job?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#f97316",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://api.jobslynk.in/user/apply/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (res.ok) {
          Swal.fire({
            title: "🎉 Applied!",
            text: "Congratulations 🥳 You Applied the Job",
            icon: "success",
            confirmButtonColor: "#f97316",
          });
        }
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 bg-slate-100 min-h-screen">
      <Navbar />

      <div className="bg-white w-full max-w-2xl rounded-xl shadow-md p-6">
        <div className="text-slate-500 text-sm mb-2">
          JobID: {job.jobID}
        </div>

        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <img
            className="w-16 h-16 rounded-full"
            src={job.logo}
            alt=""
          />
          <h1 className="text-xl font-semibold mt-2">{job.role}</h1>
          <p className="text-gray-500">{job.companyName}</p>
        </div>

        <hr className="my-3 border-gray-300" />

        {/* ✅ Proper Aligned Details */}
        <div className="space-y-3 text-sm">
          {[
            ["Description", job.description],
            ["Responsibility", job.responsibility],
            ["Skills", job.skill],
            ["Work Mode", job.workMode],
            ["Location", job.location],
            ["Qualification", job.qualification],
            ["Passout Year", job.passoutYear],
            [
              "Experience",
              job.experience === "0"
                ? "Fresher"
                : `${job.experience} yrs`,
            ],
            ["Opening Date", job.openDate],
            ["Last Date", job.expireDate],
            ["Gender", job.genderPreference],
            [
              "Bond",
              job.bond === 0 ? "None" : `${job.bond} Years`,
            ],
            ["Salary", `${job.salary} LPA`],
          ].map(([label, value], index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <span className="font-medium">{label}:</span>
              <span className="col-span-2 break-words">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-10 mt-5">
          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="w-full">
        <FooterMain />
      </div>
    </div>
  );
}

export default JobsCard;

