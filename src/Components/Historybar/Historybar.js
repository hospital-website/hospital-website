import React from "react";
import "./Historybar.css";
const Historybar = (props) => {
  // console.log(props.page);
  return (
    <div>
      <section className=" historybar  w-full  z-[-1]">
        <div className="about-main flex flex-col justify-center w-[90vw] h-full max-w-5xl m-auto">
          <p className="text-[12px] md:text-[18px] text-primary md:mb-[-10px]">
            Home / {props.page}
          </p>
          <p className=" text-[24px] md:text-[48px] font-yeseva text-primary">
            {props.pageData}
          </p>
        </div>
      </section>
      <div className="hb-lines flex w-100vw h-[6px] flex flex-row">
        <div className="h-full w-[23vw] bg-accent"></div>
        <div className="h-full w-[60vw] bg-primary"></div>
        <div className="h-full w-[17vw] bg-secondary"></div>
      </div>
    </div>
  );
};

export default Historybar;
