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
        logo: "",
        companyName: "",
        role: "",
        location: "",
        openDate: "",
        expireDate: "",
        skill: "",
        experience: "",
        passoutYear: "",
        responsibility: "",
        qualification: "",
        workMode: "",
        salary: "",
        bond: "",
        genderPreference: "",
        description: "",
        websiteUrl: ""
    };
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

            console.log(data);
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
    <div>
      <div className='flex flex-col  h-full items-center'>
        <div className='flex flex-col items-center mt-7'>
           
            <h1 className='text-xl text-slate-600 font-semibold'>Add New Job In.....<span className='text-slate-800 text-2xl font-serif font-semibold'>LyNK</span> <span className='text-orange-500 text-2xl  font-serif font-semibold'> Job's</span> </h1>
        </div>
        <form onSubmit={handleAddJob}>
            <div className='flex flex-col h-fit bg-black/30 rounded-lg gap-4 p-2'>
                <div className='text-3xl text-slate-600 items-center flex flex-col'>
                    <h1>Enter Company</h1>
                </div>
                <hr />
                <div className='flex flex-row h-fit gap-11 justify-between '>
                    <h1  className='p-2'>Company Name: </h1>
                    <input
                    type="text"
                    name = "companyName"
                    placeholder="Enter Company Name"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.companyName}
                    onChange={handleChange}
                    />
                </div>

                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Role : </h1>
                    <input
                    type="text"
                    name = "role"
                    placeholder="Enter Role"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.role}
                    onChange={handleChange}
                    />
                </div>

                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Description: </h1>
                    <input
                    type="text"
                    name = "description"
                    placeholder="Enter Description"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.description}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Responsibility:  </h1>
                    <input
                    type="text"
                    name = "responsibility"
                    placeholder="Enter Responsibility"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.responsibility}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Skills: </h1>
                    <input
                    type="text"
                    name = "skill"
                    placeholder="Enter Skills"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.skill}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Work Mode: </h1>
                    <input
                    type="text"
                    name= "workMode"
                    placeholder="Enter Work Mode"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.workMode}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Experience: </h1>
                    <input
                    type="text"
                    name= "experience"
                    placeholder="Enter Experience"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.experience}
                    onChange={handleChange}
                    />
                </div>

                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Passout Year: </h1>
                    <input
                    type="text"
                    name= "passoutYear"
                    placeholder="Enter Passout Year"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.passoutYear}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Required Qualification: </h1>
                    <input
                    type="text"
                    name= "qualification"
                    placeholder="Enter Required Qualification"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.qualification}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Company Bond: </h1>
                    <input
                    type="text"
                    name = "bond"
                    placeholder="Enter Company Bond"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.bond}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Gender Preference: </h1>
                    <input
                    type="text"
                    name = "genderPreference"
                    placeholder="Enter Gender Preference"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.genderPreference}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Salary: </h1>
                    <input
                    type="decimal"
                    name = "salary"
                    placeholder="Enter Salary"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.salary}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Location: </h1>
                    <input
                    type="text"
                    name = "location"
                    placeholder="Enter Location"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.location}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Opening Date: </h1>
                    <input
                    type="date"
                    name = "openDate"
                    placeholder="Enter Opening Date"
                    className="w-72 p-2 mb-4 border rounded-full text-center text-gray-400"
                    required
                    value={job.openDate}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Expired Date: </h1>
                    <input
                    type="date"
                    name="expireDate"
                    placeholder="Enter Expired Date"
                    className="w-72 p-2 mb-4 border rounded-full text-center text-gray-400"
                    required
                    value={job.expireDate}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Logo URL: </h1>
                    <input
                    type="text"
                    name = "logo"
                    placeholder="Enter Logo Url"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    
                    value={job.logo}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row h-fit  justify-between '>
                    <h1  className='p-2'>Website URL: </h1>
                    <input
                    type="text"
                    name= "websiteUrl"
                    placeholder="Enter Website Url"
                    className="w-72 p-2 mb-4 border rounded-full text-center"
                    required
                    value={job.websiteUrl}
                    onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <button type='submit' className='bg-orange-400 px-3 py-2 rounded-xl hover:bg-orange-600'>Add Job</button>
                </div>
                
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default AddJob
