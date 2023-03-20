import React from "react";
import "./About.css";
import Historybar from "../../Components/Historybar/Historybar";
import ContactComp from "./../../Components/ContactComp/ContactComp";

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur beatae culpa aliquam sit labore recusandae non
                    cumque tempora alias inventore consequatur cum esse ut iure
                    quis in, unde volupta1
                  </p>
                  <hr className="h-[1px] border-none bg-accent m-auto w-[20vw] my-[18px]" />
                  <p className="text-[19px] text-accent text-center mb-[64px]">
                    John Doe
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
