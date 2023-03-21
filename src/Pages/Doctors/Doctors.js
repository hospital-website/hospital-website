import React, { useState } from "react";
import Historybar from "../../Components/Historybar/Historybar";
import DoctorCard from "./../../Components/DoctorCard/DoctorCard";

const Doctors = () => {
  
  return (
    <div>
      <Historybar page="doctors" pageData="Our Doctors" />
 
    <div className="card-container">
      <DoctorCard image={'/image_assets/Doctor.png'} name='Dr. Anand Arora' role={'neurologist'} />
    </div>
    </div>
  );
};

export default Doctors;
