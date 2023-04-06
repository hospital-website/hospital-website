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
      <Historybar page="doctors" pageData="Our Doctors" />

      <div className="card-container flex my-10 items-center justify-around md:flex-row flex-col gap-y-5 gap-x-4 md:gap-y-0 max-w-4xl m-auto">
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
