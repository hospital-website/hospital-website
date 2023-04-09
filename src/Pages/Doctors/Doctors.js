import React, { useState, useEffect } from "react";
import Historybar from "../../Components/Historybar/Historybar";
import DoctorCard from "./../../Components/DoctorCard/DoctorCard";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

import { db } from "./../../firebase";

const Doctors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "doctors"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        // console.log(list);
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
      <Historybar page="doctors" pageData="Our Doctors" />

      <div className=" grid md:grid-cols-3  grid-cols-1    max-w-5xl   w-[90vw]    py-10  m-auto gap-y-12 items-center m-auto">
        {/* <div className="card-container flex my-10 items-center justify-around flex-wrap   gap-y-5 gap-x-4 md:gap-x-32 md:gap-y-0 max-w-3xl m-auto"> */}
        {data.map((item) => {
          {
            return <DoctorCard key={item.id} details={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Doctors;
