import { FiClock, FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { ContactCard } from "../Assets";

const ContactComp = () => {
  return (
    <div className="mx-auto w-fit gap-2 md:w-[52rem] md:gap-0 py-10 grid items-center justify-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4">
      <ContactCard
        icon={<FiPhoneCall size={30} />}
        title="emergency"
        info_one={"8851106009"}
        info_two={"8851123299"}
      />
      <ContactCard
        icon={<CiLocationOn size={30} />}
        title="location"
        info_one={"Kazipura-Dasna Road"}
        info_two={"Ghaziabad-201009"}
      />
      <ContactCard
        icon={<AiOutlineMail size={30} />}
        title="email"
        info_one={"rsg.indogerman.hospital @gmail.com"}
      />
      <ContactCard
        icon={<FiClock size={30} />}
        title="working hours"
        info_one={"Mon-Sat 08:00-18:00"}
        info_two={"24/7 Emergency Service"}
      />
    </div>
  );
};

export default ContactComp;
