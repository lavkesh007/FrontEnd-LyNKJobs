import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddJob = () => {
   const [job , setJob] = useState({
        logo : "",
        companyName : "",
        role : "",
        location : "",
        openDate : "",
        expireDate :"",
        skill : "",
        experience : "",
        passoutYear : "",
        responsibility : "",
        qualification : "",
        workMode : "",
        salary : "",
        bond : "",
        genderPreference : "",
        description : "",
        websiteUrl:""
   });
   const initialJobState = {
        logo : "",
        companyName : "",
        role : "",
        location : "",
        openDate : "",
        expireDate :"",
        skill : "",
        experience : "",
        passoutYear : "",
        responsibility : "",
        qualification : "",
        workMode : "",
        salary : "",
        bond : "",
        genderPreference : "",
        description : "",
        websiteUrl:""
   };

//    const initialJobState = { ...job };

   const handleChange = (e) =>{
    setJob({ ...job, [e.target.name] : e.target.value})
   }; 

   const handleAddJob = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://api.jobslynk.in/jobs/addJob" , 
            {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization : "Bearer " + localStorage.getItem("adminToken")
                },
                body : JSON.stringify(job)
            }
        );
        const data = await response.json();
        if(response.ok){
            setJob(initialJobState);
            Swal.fire({
                title: (data.message),
                text : "New Job is add in Application✨",
                icon : 'success',
                confirmButtonColor: '#f97316'
            })
        }else{
            Swal.fire({
                    title: (data.message),
                    text: 'Something went wrong.',
                    icon: 'error'
         });
        }
    } catch (error) {
        alert(error);
    }
   };

  return (
    <div className='p-3 sm:p-6 bg-slate-100 min-h-[80vh]'>

      {/* Title */}
      <div className='text-center mb-6'>
        <h1 className='text-lg sm:text-xl md:text-2xl text-slate-700 font-semibold'>
          Add New Job In <span className='text-orange-500'>LyNK Job's</span>
        </h1>
      </div>

      <form onSubmit={handleAddJob} className='max-w-6xl mx-auto'>

        <div className='bg-white shadow-lg rounded-2xl p-4 sm:p-6'>

          <h2 className='text-xl font-semibold text-center text-slate-600 mb-4'>
            Enter Company Details
          </h2>

          {/* GRID START */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

            {/* INPUT BLOCK */}
            {[
              ["Company Name","companyName"],
              ["Role","role"],
              ["Description","description"],
              ["Responsibility","responsibility"],
              ["Skills","skill"],
              ["Work Mode","workMode"],
              ["Experience","experience"],
              ["Passout Year","passoutYear"],
              ["Qualification","qualification"],
              ["Bond","bond"],
              ["Gender Preference","genderPreference"],
              ["Salary","salary"],
              ["Location","location"],
              ["Logo URL","logo"],
              ["Website URL","websiteUrl"],
            ].map(([label,name],i)=>(
              <div key={i} className='flex flex-col'>
                <label className='text-sm text-gray-600 mb-1'>{label}</label>
                <input
                  type="text"
                  name={name}
                  placeholder={`Enter ${label}`}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                  required={name !== "logo"}
                  value={job[name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* DATE FIELDS */}
            <div className='flex flex-col'>
              <label className='text-sm text-gray-600 mb-1'>Opening Date</label>
              <input
                type="date"
                name="openDate"
                className="w-full p-2 border rounded-lg text-gray-500"
                required
                value={job.openDate}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm text-gray-600 mb-1'>Expiry Date</label>
              <input
                type="date"
                name="expireDate"
                className="w-full p-2 border rounded-lg text-gray-500"
                required
                value={job.expireDate}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className='flex justify-center mt-6'>
            <button 
              type='submit' 
              className='bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition text-sm sm:text-base'
            >
              Add Job
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddJob;