import { useState } from "react";
import "./DoctorCard.css";
const DoctorCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let degs = "";
  props.details.degrees.map((e) => (degs = degs + e + ", "));
  let spex = "";
  props.details.specialities.map((e) => (spex = spex + e + ", "));

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className=" doctor-card relative perspective-9">
      <div className=" doctor-rotate-card aspect-[9/13] md:w-[15vw] w-[60vw] max-w-[300px] md:max-w-[400px] border  shadow-sm  justify-between bg-accent rounded-lg border-4 border-primary border-opacity-60  ">
        <div className=" aspect-square h-[75%] w-full flex justify-center  ">
          <img
            src={
              !props.details.img || props.details.img == null
                ? "./image_assets/Doctor.png"
                : props.details.img
            }
            alt=""
            className=" h-[100%] min-w-[100%]  object-cover "
          />
        </div>
        <div className="flex flex-col items-center justify-center h-[25%]">
          <p className="px-2 py-1 text-center text-primary  ">
            {props.details.name}
          </p>
          <p className="px-2 py-1 font-work uppercase text-center text-lg text-primary  font-bold ">
            {spex.length < 18
              ? spex.slice(0, -2)
              : props.details.specialities[0]}
          </p>
        </div>
      </div>

      <article
        className="doctor-card-back aspect-[9/13] md:w-[15vw] w-[40vw] bg-accent text-primary font-work text-lg flex flex-col justify-center items-center  font-medium rounded-lg border-4 border-primary border-opacity-60"
        onMouseLeave={handleFlip}
      >
        <div>{degs.slice(0, -2)}</div>
        <p className="text-center max-w-[70%] py-10 text-[16px]">
          {props.details.exp} years of experience in his field of expertise.
        </p>
        {spex.length > 18 && (
          <div>
            <p className="text-center font-light  text-[14px]">
              More Specialities
            </p>
            <div className="text-center">{spex.slice(0, -2)}</div>
          </div>
        )}
      </article>
    </div>
  );
};

export default DoctorCard;
