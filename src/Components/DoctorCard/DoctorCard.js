import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const DoctorCard = ({ image, name, role }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="aspect-[9/16] md:w-[15vw] w-[40vw] border border-gray-200 shadow-sm grid justify-between bg-accent"
          onMouseOver={handleFlip}
          // onMouseLeave={handleFlip}
        >
          <img src={image} alt="" />
          <p className="px-2 font-work capitalize text-lg font-medium text-primary">
            {name}
          </p>
          <p className="px-2 text-xs">{role}</p>
        </div>

        <article
          className="aspect-[9/16] md:w-[15vw] w-[40vw] bg-accent text-primary font-work text-lg font-medium"
          onMouseLeave={handleFlip}
        >
          <p>MD</p>
          <p>MBBS</p>
          <p>10 years of experience</p>
        </article>
      </ReactCardFlip>
    </div>
  );
};

export default DoctorCard;
