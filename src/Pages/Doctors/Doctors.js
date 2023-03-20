import React from "react";
import Historybar from "../../Components/Historybar/Historybar";
import DoctorCard from "./../../Components/DoctorCard/DoctorCard";

const Doctors = () => {
  return (
    <div>
      <Historybar page="doctors" pageData="Our Doctors" />
      <DoctorCard />
    </div>
  );
};

export default Doctors;
