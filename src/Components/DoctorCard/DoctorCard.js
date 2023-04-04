import { useState } from "react";
import "./DoctorCard.css";
const DoctorCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let degs = "";
  props.details.degrees.map((e) => (degs = degs + e + ","));

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className=" doctor-card relative perspective-9">
      <div className=" doctor-rotate-card aspect-[9/13] md:w-[15vw] w-[60vw] max-w-[300px] md:max-w-[400px] border  shadow-sm grid justify-between bg-accent rounded-lg border-4 border-primary border-opacity-60  ">
        <div className=" aspect-square">
          <img
            src="./image_assets/Doctor.png"
            alt=""
            className="w-full  object-contain"
          />
        </div>
        <p className="px-2  text-center text-primary  ">{props.details.name}</p>
        <p className="px-2 font-work uppercase text-center text-lg text-primary font-bold ">
          {props.details.specialities}
        </p>
      </div>

      <article
        className="doctor-card-back aspect-[9/13] md:w-[15vw] w-[40vw] bg-accent text-primary font-work text-lg flex flex-col justify-center items-center  font-medium rounded-lg border-4 border-primary border-opacity-60"
        onMouseLeave={handleFlip}
      >
        <div>{degs.slice(0, -1)}</div>

        <p className="text-center max-w-[70%] py-10 text-[16px]">
          {props.details.exp} years of experience in his field of expertise.
        </p>
      </article>
    </div>
  );
};

export default DoctorCard;
