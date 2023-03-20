import React from "react";

const DoctorCard = () => {
  return (
    <>
      <div className="card-body">
        <div className="card-img w-[200px]">
          <img src="/image_assets/DoctorCardImg.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="doctor-name text-primary font-yeseva">
            doctor name
          </div>
          <div className="doctor-field">neurology</div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
