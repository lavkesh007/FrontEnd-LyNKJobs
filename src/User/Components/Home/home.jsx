import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JobsCard from "../Jobs/JobsCard";
import Navbar from "./Navbar";
import Intro from "./intro";
import Main from "../Aboutus/Main";
import Searchbar from "./SearchBar";
import FooterMain from "../Footer/FooterMain";
import ContactMain from "../Contact/ContactMain"
const Home = () => {   // ✅ Capitalized
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">


      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

     
      <Intro />

      <Searchbar/>

    
      <div className="px-5 py-10">
        <JobsCard />
      </div>

     
      <Main />
      
      <FooterMain/>

    </div>
  );
};

export default Home;