import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className=" service-card  aspect-[10/18] md:aspect-[10/16] md:w-[240px]  max-w-[300px] md:max-w-[400px] shadow-service    my-4 md:mx-4 mx-1 rounded-lg  relative ">
      <div className="h-[56%]">
        <img
          src="./image_assets/ecg.JPG"
          alt=""
          className="h-[100%] object-cover"
        />
      </div>
      <div
        className="service-card-icon h-[14%] w-[25%] rounded-full bg-primary text-accent flex items-center justify-center text-[120%] md:text-[24px] absolute top-[56%] left-[70%] translate-y-[-50%]
       "
      >
        <BiFirstAid />
      </div>
      <div className="service-card-text  h-[44%] px-4">
        <p className=" pt-5   md:pt-12 text-primary   text-[18px] font-semibold tracking-wide md:tracking-widest">
          {title}
        </p>
        <p className="  md:py-2 text-[14px] leading-4 text-justify ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
