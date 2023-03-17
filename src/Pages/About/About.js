import React from "react";

import Historybar from "../../Components/Historybar/Historybar";
const About = () => {
  return (
    <>
      <Historybar page="About" pageData="About Us" />
      <section className="about-intro max-w-5xl w-[90vw] m-auto flex flex-row  mt-16 ">
        <div className="about-img max-w-[40%] hidden md:block ">
          <img
            className="h-[108%] object-cover"
            src="image_assets/doctorfemale.jpg"
            alt=""
          />
        </div>

        <div className="about-intro-text md:ml-8 ">
          <p className="text-secondary uppercase font-[16px] md:font-[18px] font-bold tracking-[0.2rem]">
            welcome to hospital name
          </p>
          <p className="text-[30px] sm:text-[42px] md:text-[48px] font-yeseva text-primary mb-4">
            Best Care For Your Good Health
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 ">
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">A passion of healing</p>
            </div>
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">5-Star care</p>
            </div>
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">All our best</p>
            </div>
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">Believe in Us</p>
            </div>
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">Always caring</p>
            </div>
            <div className=" flex flex-row items-center">
              <div className="inline-block bg-secondary rounded-full w-[16px] h-[16px] mx-[12px]"></div>
              <p className="text-[18px]">A legacy of Excellence</p>
            </div>
          </div>
          <p className="text-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus itaque vel mollitia ut excepturi culpa eveniet obcaecati
            laborum, labore dolor accusantium delectus cum optio qui pariatur in
            ex voluptates dolore voluptas blanditiis aspernatur! Culpa accusamus
            sapiente officiis quos.
          </p>
          <p className="text-[16px] mt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            cupiditate dicta eveniet nobis facere, cumque dolorem impedit.
            Praesentium, alias vitae. alias vitae. vitae.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
