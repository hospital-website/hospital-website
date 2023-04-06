import { GiHeartPlus, GiMedicalPackAlt } from "react-icons/gi";
import { PageHead, ServiceCard, SpecialCard } from "../../Components/Assets";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { BiDonateBlood } from "react-icons/bi";
import { CiBandage } from "react-icons/ci";
import ContactComp from "../../Components/ContactComp/ContactComp";
import Historybar from "../../Components/Historybar/Historybar";
import React from "react";
import { db } from "./../../firebase";
const Srevices = () => {
  const serviceOneSrc = "/image_assets/service-01.png";
  const serviceTwoSrc = "/image_assets/service-02.png";
  let serviceItem = {
    ServiceName: "Free Checkup",
    img: "/image_assets/XRay.JPG",
    desc: "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eum.",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "services"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
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
          {data.map((item) => {
            return <ServiceCard details={item} ket={item.id} />;
          })}
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
