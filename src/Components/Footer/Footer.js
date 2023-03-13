import React from "react";

import "./Footer.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" main-footer bg-primary w-full">
      <div className="footer-up max-w-5xl mx-auto flex justify-between py-12">
        <div className="footer-imp-links text-white list-none">
          <div className="mb-7">
            <p className="footer-head-name">
              dr. ram saran garg
              <br />
              indo-german hospital
            </p>
          </div>
          <p className="footer-head-slogan text-white  ">
            Leading the Way in Medical
            <br />
            Execellence, Trusted Care.
          </p>
        </div>
        {/* gfdg */}
        <div className="footer-imp-links text-white list-none">
          <h1 className="mb-7 text-lg font-semibold">Important Links</h1>
          <li className="font-light">Appointment</li>
          <li className="font-light">Doctors</li>
          <li className="font-light">Services</li>
          <li className="font-light">About Us</li>
        </div>
        <div className="footer-contact text-white list-none">
          <h1 className="mb-7 text-lg font-semibold">Contact Us</h1>
          <li className="font-light">Call: (237) 681-812-255</li>
          <li className="font-light">Email: fildineesoe@gmail.com</li>
          <li className="font-light">Address: 0123 Some place</li>
          <li className="font-light">India</li>
        </div>
        <div className="footer-contact text-white list-none">
          <h1 className="mb-7 text-lg font-semibold">Newsletter</h1>
          <div
            id="newsletter-btn"
            className="bg-accent   py-1.5  text-primary rounded w-64 flex justify-around items-center "
          >
            <form action="">
              <input
                type="text"
                placeholder="Enter your email address"
                className="newsletter-input bg-accent text-primary border-none  "
              />
            </form>
            <p className="text-[24px] ">
              <RiSendPlaneFill />
            </p>
          </div>
        </div>
      </div>

      <hr className="bg-accent py-0.1 my-2 max-w-5xl mx-auto" />

      <div className="footer-social flex justify-between  items-center  max-w-5xl mx-auto pb-8 pt-4">
        <span className="text-white font-light text-sm ">
          © 2022 Blockchain Research Lab, All Rights Reserved
        </span>
        <div className="flex ">
          <div className="footer-social-icon text-primary bg-accent w-7 h-7 text-base rounded-full flex justify-center items-center m-2">
            <FaLinkedinIn />
          </div>
          <div className="footer-social-icon text-primary bg-accent w-7 h-7 text-base rounded-full flex justify-center items-center m-2">
            <FaFacebookF />
          </div>
          <div className="footer-social-icon text-primary bg-accent w-7 h-7 text-base rounded-full flex justify-center items-center my-2 ml-2">
            <BsInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
