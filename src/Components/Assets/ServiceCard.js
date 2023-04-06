import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";

const ServiceCard = (props) => {
  return (
    <div className=" service-card  aspect-[10/18] md:aspect-[10/16] md:w-[240px]  max-w-[300px] md:max-w-[400px] shadow-service    my-4 md:mx-4 mx-1 rounded-lg  relative ">
      <div className="h-[56%]">
        <img
          // src="./image_assets/ecg.JPG"
          src={
            !props.details.img || props.details.img == null
              ? "./image_assets/Doctor.png"
              : props.details.img
          }
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
        <p className=" pt-5   md:pt-12 text-primary   text-[18px] font-semibold tracking-wide md:tracking-widest capitalize">
          {props.details.name}
        </p>
        <p className="  md:py-2 text-[14px]  leading-3 sm:leading-4  text-justify">
          {/* {props.details.desc.length < 80
            ? props.details.desc
          : props.details.desc.slice(0, 80) + "..."} */}
          {props.details.desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
