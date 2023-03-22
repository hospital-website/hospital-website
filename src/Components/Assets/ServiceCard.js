import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="aspect-[9/16] border border-gray-200 shadow-sm grid justify-between overflow-hidden">
      <img src={image} alt="" className="objet-cover" />
      <p className="px-2 font-work capitalize text-lg font-medium text-primary">
        {title}
      </p>
      <p className="px-2 text-xs">{description}</p>
      <a
        href={link ? link : "#"}
        target="_blank"
        className="flex p-2 items-center gap-2 text-xs text-secondary hover:underline"
      >
        Learn More
        <AiOutlineArrowRight />
      </a>
    </div>
  );
};

export default ServiceCard;
