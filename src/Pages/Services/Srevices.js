import { GiHeartPlus, GiMedicalPackAlt } from "react-icons/gi";
import { PageHead, ServiceCard, SpecialCard } from "../../Components/Assets";

import { BiDonateBlood } from "react-icons/bi";
import { CiBandage } from "react-icons/ci";
import ContactComp from "../../Components/ContactComp/ContactComp";
import Historybar from "../../Components/Historybar/Historybar";
import React from "react";

const Srevices = () => {
  const serviceOneSrc = "/image_assets/service-01.png";
  const serviceTwoSrc = "/image_assets/service-02.png";
  let serviceItem = {
    ServiceName: "Free Checkup",
    img: "/image_assets/XRay.JPG",
    desc: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eum.",
  };

  return (
    <div>
      <Historybar page="Services" pageData="Our Services" />

      <section id="services" className="py-20">
        <article className="mx-auto text-center">
          <PageHead
            subtitle={"care you can believe in"}
            title={"Our Services"}
          />
        </article>

        {/* <div className="flex flex-wrap  justify-around  max-w-5xl   w-[90vw] mx-auto m-auto  py-10  "> */}
        <div className="grid md:grid-cols-3  grid-cols-2    max-w-5xl   w-[90vw] mx-auto m-auto  py-10  ">
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard

            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}

          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
          <ServiceCard
            image={serviceItem.img}
            title={serviceItem.ServiceName}
            description={serviceItem.desc}
          />
        </div>
      </section>

      <section id="contact" className="py-20">
        <article className="text-center mx-auto">
          <PageHead subtitle={"get in touch"} title={"Contact"} />
        </article>
        <ContactComp />
      </section>
    </div>
  );
};

export default Srevices;
