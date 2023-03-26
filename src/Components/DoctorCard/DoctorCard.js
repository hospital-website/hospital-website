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
          className="aspect-[9/13] md:w-[15vw] w-[40vw] border border-gray-200 shadow-sm grid justify-between bg-accent"
          onMouseOver={handleFlip}
          // onMouseLeave={handleFlip}
        >
          <div className="w-full aspect-square">
            <img src={image} alt="" className="w-full h-full objet-cover" />
          </div>
          <p className="px-2 font-work capitalize text-center text-lg font-medium text-primary">
            {name}
          </p>
          <p className="px-2 text-xs text-center uppercase">{role}</p>
        </div>

        <article
          className="aspect-[9/13] md:w-[15vw] w-[40vw] bg-accent text-primary font-work text-lg grid place-items-center py-8 font-medium"
          onMouseLeave={handleFlip}
        >
          <p className="text-center">MD</p>
          <p className="text-center">MBBS</p>
          <p className="text-center">10 years of experience</p>
        </article>
      </ReactCardFlip>
    </div>
  );
};

export default DoctorCard;
