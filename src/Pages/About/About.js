import React from "react";
import "./About.css";
import Historybar from "../../Components/Historybar/Historybar";
import ContactComp from "./../../Components/ContactComp/ContactComp";

const About = () => {
  return (
    <>
      <Historybar page="About" pageData="About Us" />

      <section className="m-auto w-[90vw] max-w-5xl">
        <p className="m-auto w-[90vw] max-w-5xl text-secondary uppercase text-[22px] md:text-[28px] font-bold  mt-6 md:mt-[60px]">
          DR.RS GARG INDO-GERMAN HOSPITAL
        </p>
        <p className="text-[16px] py-3 text-justify">
          In 1990, Dr. Ram Saran Garg (Indo-German) Medical Centre was started
          in Raj Nagar, Ghaziabad as an OPD (Out Patient Department) clinic with
          X-ray. Path Lab, Physiotherapy and Dental facilities. All these
          facilities are provided at nominal charges with free RMO consultation
          and medicines. In 2002, a second Medical Centre was started at the
          outskirts of Ghaziabad (on Kajipura-Dasna Road near NH-24, Delhi-Hapur
          by-pass road) as an OPD with 3 RMOS, providing free consultation and
          medicines along with the facilities of a pathology lab, X-ray and
          emergency services.
        </p>
        <p className="text-[16px] py-3 text-justify">
          In 2009, the same is upgraded to Dr. Ram Saran Garg (Indo-German)
          Hospital with 60 beds (proposed 120 beds), having ultra-modern
          infrastructure and facilities with a team of qualified doctors and
          specialists. The newly built hospital building is a symbol of
          contemporary architecture.
          <br />
          <br /> The hospital, not only renders high quality medical services at
          a nominal cost that any class of society can afford, it also holds
          free medical camps in the neighbouring villages. The motto of Dr. Ram
          Saran Garg (Indo-German) Hospital is to serve humanity by extending
          selfless, impartial and secular services, which has made it popular
          amongst the economically weaker sections of Dasna and adjoining
          Villages.
          <br />
          <br /> Now the hospital is well equipped for serving the people of
          Ghaziabad and will fill the gap of charitable medical services in the
          district. At present the following services are available at the
          hospital:
          <br />
          <br />
          ■ 40 Beds in General Ward and 20 Beds in Private Ward for indoor
          patients. <br /> <br />■ Maternity services with primary health care
          for child and mother. <br /> <br /> ■ Operation Theatre for all major
          and minor surgeries with I.C.U. <br /> <br /> ■ X-Ray, Ultra Sound
          facilities, Pathology and Bio-chemical Laboratory <br />
          <br />■ Panel Doctors: Gynecologist, Orthopedic, Eye Surgeon, General
          Physician, Surgeon, Pediatrician, Radiologist, Anesthetist,
          Physiotherapist and other specialists.
        </p>
      </section>

      <section className="about-intro max-w-5xl w-[90vw] m-auto gap-10 flex flex-row  mt-16 ">
        <div className="about-intro-text md:ml-8 ">
          {/* <p className="text-secondary uppercase font-[16px] md:font-[18px] font-bold tracking-[0.2rem]">
            dr.RS Garg indo-german hospital
          </p> */}
          <p className="text-[30px] sm:text-[42px] md:text-[48px] font-yeseva text-primary mb-4 md:mt-4">
            Best Care For Your Good Health
          </p>
          <ul
            className="grid list-none grid-cols-1
          md:grid-cols-2 justify-center px-7 gap-2
          md:gap-3 py-3 font-work text-lg font-medium"
          >
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              Multispeciality OPD
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              24-hours service
            </li>

            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              Path Lab
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              ICU with Ventilator
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              NICU
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              Ultrasound & X-Ray
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              General & Private Wards
            </li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
              Fully Equipped Major OT With C- Arm & Minor OT
            </li>
          </ul>
          <p className="text-[16px] py-3 text-justify">
            Dr. Ram Saran Garg (Indo-German) Hospital is run by a charitable
            trust, Dr. Ram Saran Garg (Indo-German) Medical Centre, The Trust
            was established in 1985. The Trust run a 60 bedded Multispeciality
            hospital & Trauma Centre at Dasna, Ghaziabad and a Multispeciality
            Polyclinic with Day Care at Raj Nagar, Ghaziabad.
          </p>
          <p className="text-[16px] py-3 text-justify">
            The hospital has 11 doctors including consultants in the fields of
            Internal Medicine, Pediatrics, Gynaecology, Radiology, Pathology and
            General Surgery in addition to resident doctors.
          </p>
        </div>
      </section>

      {/* ~~~~~~~~~~~~~Quote Section~~~~~~~~~~~~ */}
      <section className="about-quotes  mt-[48px] md:mt-[72px] ">
        <div
          className=" h-[400px]  flex-col items-center  bg-about-quote bg-cover pt-[12px]"
          style={{ boxShadow: "inset 0 0 0 1000px rgba(31,43,108,.65)" }}
        >
          <img
            src="image_assets/aboutQuote.png"
            className="max-h-[25px] max-w-[36px] mt-[48px] mb-[32px] mx-auto"
            alt=""
          />

          <div className="qcorousel-body ">
            <div id="qslider">
              <input
                type="radio"
                name="qslider"
                className="control-menu"
                id="qs1"
                defaultChecked
              />

              <input
                type="radio"
                name="qslider"
                className="control-menu"
                id="qs2"
              />
              <input
                type="radio"
                name="qslider"
                className="control-menu"
                id="qs3"
              />
              <label htmlFor="qs1" id="qslide1">
                <div className="about-quote">
                  <p className="text-[20px] text-center text-white max-w-3xl mx-auto">
                    The practice of medicine is an art, not a trade; a calling,
                    not a business; a calling in which your heart will be
                    exercised equally with your head.
                  </p>
                  <hr className="h-[1px] border-none bg-accent m-auto w-[20vw] my-[18px]" />
                  <p className="text-[19px] text-accent text-center mb-[64px]">
                    Sir William Osler
                  </p>
                </div>
              </label>
              {/* <label htmlFor="qs2" id="qslide2">
                <div className="about-quote">
                  <p className="text-[20px] text-center text-white max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur beatae culpa aliquam sit labore recusandae non
                    cumque tempora alias inventore consequatur cum esse ut iure
                    quis in, unde volupta2
                  </p>
                  <hr className="h-[1px] border-none bg-accent m-auto w-[20vw] my-[18px]" />
                  <p className="text-[19px] text-accent text-center mb-[64px]">
                    John Doe
                  </p>
                </div>
              </label>
              <label htmlFor="qs3" id="qslide3">
                <div className="about-quote">
                  <p className="text-[20px] text-center text-white max-w-3xl mx-auto ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur beatae culpa aliquam sit labore recusandae non
                    cumque tempora alias inventore consequatur cum esse ut iure
                    quis in, unde volupta3
                  </p>
                  <hr className="h-[1px] border-none m-auto bg-accent w-[20vw] my-[18px]" />
                  <p className="text-[19px] text-accent text-center mb-[64px]">
                    John Doe
                  </p>
                </div>
              </label> */}
            </div>
          </div>
          {/* <div className="control-buttons flex justify-center mb-8   z-343 ">
            <div
              id="cbtn1"
              className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
            ></div>
            <div
              id="cbtn2"
              className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
            ></div>
            <div
              id="cbtn3"
              className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
            ></div>
          </div> */}
          <div className="control-buttons flex justify-center  mt-[270px]">
            <div
              id="cbtn1"
              className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
            ></div>
            <div
              id="cbtn2"
              className=" w-[15px] h-[15px] rounded-full bg-accent cursor-pointer mx-1 "
            ></div>
            <div
              id="cbtn3"
              className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
            ></div>
          </div>
        </div>

        {/* <label htmlFor="qs1" id="qslide1">
            <div
              className="about-quote-1 flex flex-col items-center justify-center bg-about-quote bg-cover "
              style={{ boxShadow: "inset 0 0 0 1000px rgba(31,43,108,.65)" }}
            >
              <img
                src="image_assets/aboutQuote.png"
                className="max-h-[25px] max-w-[36px] mt-[48px] mb-[32px]"
                alt=""
              />
              <p className="text-[20px] text-center text-white max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur beatae culpa aliquam sit labore recusandae non
                cumque tempora alias inventore consequatur cum esse ut iure quis
                in, unde volupta1
              </p>
              <hr className="h-[1px] border-none bg-accent w-[20vw] my-[18px]" />
              <p className="text-[19px] text-accent mb-[64px]">John Doe</p>
            </div>
          </label>
          <label htmlFor="qs2" id="qslide2">
            <div
              className="about-quote-1 flex flex-col items-center justify-center bg-about-quote bg-cover "
              style={{ boxShadow: "inset 0 0 0 1000px rgba(31,43,108,.65)" }}
            >
              <img
                src="image_assets/aboutQuote.png"
                className="max-h-[25px] max-w-[36px] mt-[48px] mb-[32px]"
                alt=""
              />
              <p className="text-[20px] text-center text-white max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur beatae culpa aliquam sit labore recusandae non
                cumque tempora alias inventore consequatur cum esse ut iure quis
                in, unde volupta2
              </p>
              <hr className="h-[1px] border-none bg-accent w-[20vw] my-[18px]" />
              <p className="text-[19px] text-accent mb-[64px]">John Doe</p>
            </div>
          </label>
          <label htmlFor="qs3" id="qslide3">
            <div
              className="about-quote-1 flex flex-col items-center justify-center bg-about-quote bg-cover "
              style={{ boxShadow: "inset 0 0 0 1000px rgba(31,43,108,.65)" }}
            >
              <img
                src="image_assets/aboutQuote.png"
                className="max-h-[25px] max-w-[36px] mt-[48px] mb-[32px]"
                alt=""
              />
              <p className="text-[20px] text-center text-white max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur beatae culpa aliquam sit labore recusandae non
                cumque tempora alias inventore consequatur cum esse ut iure quis
                in, unde volupta3
              </p>
              <hr className="h-[1px] border-none bg-accent w-[20vw] my-[18px]" />
              <p className="text-[19px] text-accent mb-[64px]">John Doe</p>
            </div>
  </label>*/}

        {/* <div className="control-buttons flex justify-center mb-8 absolute right-0 left-0 ml-auto mr-auto   z-343 mt-[270px]">
          <div
            id="cbtn1"
            className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
          ></div>
          <div
            id="cbtn2"
            className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
          ></div>
          <div
            id="cbtn3"
            className=" w-[15px] h-[15px] rounded-full bg-white cursor-pointer mx-1 "
          ></div>
        </div> */}
      </section>
      <section className="Contact-section mt-[36px]">
        <p className="text-secondary uppercase font-[16px] md:font-[18px] font-bold tracking-[0.2rem] text-center">
          get in touch
        </p>
        <p className="text-[30px] sm:text-[33px] md:text-[42px] font-yeseva text-primary mb-4 text-center">
          Contact
        </p>
        <ContactComp />
      </section>
    </>
  );
};

export default About;
