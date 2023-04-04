import React, { useState } from "react";
import Historybar from "../../Components/Historybar/Historybar";
import DoctorCard from "./../../Components/DoctorCard/DoctorCard";

const Doctors = () => {
  const doctor = {
    name: "Dr. Aanand Arora",
    specialities: ["Neurology"],
    degrees: ["ABCD", "BDCE"],
    img: "img",
    exp: "21",
  };
  return (
    <div>
      <Historybar page="doctors" pageData="Our Doctors" />

      <div className="card-container flex my-10 items-center justify-around md:flex-row flex-col gap-y-5 md:gap-y-0 max-w-4xl m-auto">
        <DoctorCard image={"/image_assets/Doctor.png"} details={doctor} />
        <DoctorCard image={"/image_assets/Doctor.png"} details={doctor} />
        <DoctorCard image={"/image_assets/Doctor.png"} details={doctor} />
      </div>
    </div>
  );
};

export default Doctors;
