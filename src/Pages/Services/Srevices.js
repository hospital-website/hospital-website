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

        {/* <article className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-3 grid-rows-3 gap-0 w-[23rem] md:w-[48rem] mx-auto py-10 ">
          <SpecialCard text={"X-ray"} />
          <SpecialCard text={"Ultrasound"} />
          <SpecialCard text={"ECG"} />
          <SpecialCard text={"Pathology"} />

          <SpecialCard text={"OT"} />
          <SpecialCard text={"Pharmacy"} />
          <SpecialCard text={"Emergency Services"} />
        </article> */}
        <article className="grid md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-4 gap-2 md:gap-5 w-[23rem] md:w-[48rem] mx-auto py-10 ">
          <ServiceCard
            image={"/image_assets/XRay.JPG"}
            title={"X-Ray"}
            description="the description for x-ray."
          />
          <ServiceCard
            image={"/image_assets/equipment1.JPG"}
            title={"Ultrasound"}
            description="the description for Ultrasound."
          />
          <ServiceCard
            image={"/image_assets/OT.JPG"}
            title={"ECG"}
            description="Alongside with ventilators, Multipara monitors,etc."
          />
          <ServiceCard

            image={"/image_assets/ecg.JPG"}

            title={"Pathology"}
            description="the description for Pathology."
          />
          <ServiceCard

            image={"/image_assets/operationT.jpg"}
            title={"Operation Theatre"}
            description="Fully equipped with C-Arm, Laproscope and Anesthesia workstation."

          />
          <ServiceCard
            image={"/image_assets/pharmacy.JPG"}
            title={"Pharmacy"}
            description="Pharmacy and Drug Store is present inside the hospital."
          />
          <ServiceCard
            image={"/image_assets/emergancyService.JPG"}
            title={"Emergency Services"}
            description="24-hour Ambulance services."
          />
        </article>

        {/* <article className="flex justify-center py-20 px-10  "> */}
        {/* Grid Elements */}
        {/* <div className="md:grid mx-auto md:w-fit w-64 border border-gray-300 rounded-lg">
            <div className="grid    md:grid-flow-col md:grid-cols-1 md:grid-rows-4 grid-cols-2 grid-rows-2">
              <SpecialCard
                cl={"aspect-[16/9] w-32 py-5"}
                text={"Free checkup"}
                icon={<CiBandage color="#159EEC" size={30} />}
              />
              <SpecialCard
                cl={"aspect-[16/9] w-32 py-5"}
                text={"cardiogram"}
                icon={<GiHeartPlus color="#159EEC" size={30} />}
              />
              <SpecialCard
                cl={"aspect-[16/9] w-32 py-5"}
                text={"dna testing"}
                icon={<GiMedicalPackAlt color="#159EEC" size={30} />}
              />
              <SpecialCard
                cl={"aspect-[16/9] w-32 py-5"}
                text={"blood bank"}
                icon={<BiDonateBlood color="#159EEC" size={30} />}
              />
            </div>
            <button className="bg-primary text-accent font-work capitalize text-base rounded-b-lg py-1 md:py-0 w-full">
              view all
            </button>
          </div> */}

        {/* Text Elements */}
        {/* <div className="hidden md:grid w-[50vw] mx-auto">
            <h5 className="font-work text-2xl font-semibold text-left  ">
              A passion for putting patients first.
            </h5>
            <ul className="grid list-none grid-cols-2 justify-center px-7 font-work text-lg font-medium">
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                A passion for healing
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                5-Star Care
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                All our best
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Believe in Us
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                A legacy of excellence
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Always Caring
              </li>
            </ul>

            <p className="font-work text-base font-normal">
              The hospital not only renders high quality medical servies at a
              nominal cost that any class of society can afford, it also holds
              free medical camps in the neighbouring villages. The motto of Dr.
              Ram saran Garg (Indo-German) Hospital is to serve humanity be
              extending selfless, impartial and secular services.
            </p>
            <p className="font-work text-base font-normal">
              The hospital not only renders high quality medical servies at a
              nominal cost that any class of society can afford, it also holds
              free medical camps in the neighbouring villages. The motto of Dr.
              Ram saran Garg (Indo-German) Hospital is to serve humanity be
              extending selfless, impartial and secular services.
            </p>
          </div> */}

        {/* Images */}
        {/* <div className="hidden md:grid gap-2">
            <img src={serviceOneSrc} alt="servicing-image" />
            <img src={serviceTwoSrc} alt="servicing-image" />
          </div>
        </article> */}
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
