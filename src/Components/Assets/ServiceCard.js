import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="aspect-[9/12] border border-gray-200 shadow-xl grid justify-between overflow-hidden">
      <div className="w-full aspect-square">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="px-2 font-work capitalize text-lg font-medium text-primary">
        {title}
      </p>
      <p className="px-2 text-xs">{description}</p>

      {/* <a
        href={link ? link : "#"}
        target="_blank"
        className="flex p-2 items-center gap-2 text-xs text-secondary hover:underline"
      >
        Learn More
        <AiOutlineArrowRight />
      </a> */}
      
    </div>
  );
};

export default ServiceCard;
