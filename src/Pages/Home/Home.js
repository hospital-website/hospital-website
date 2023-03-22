import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { BsCashStack, BsHeartPulse } from "react-icons/bs";
import { Form, PageHead, SpecialCard } from "../../Components/Assets";
import { GiHeartPlus, GiMedicalPackAlt } from "react-icons/gi";

import { BiDonateBlood } from "react-icons/bi";
import { CiBandage } from "react-icons/ci";
import ContactComp from "../../Components/ContactComp/ContactComp";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  const homeBannerSrc = "/image_assets/home-banner.svg";
  const serviceOneSrc = "/image_assets/service-01.JPG";
  const serviceTwoSrc = "/image_assets/service-02.JPG";

  return (
    <>
      {/* HERO SECTION */}

      <section
        id="hero"
        className="bg-hero-mobile bg-cover sm:bg-hero
         w-full md:h-[60vh] bg-no-repeat sm:bg-cover relative bg-[center_top_-10rem] "
      >
        {/* HERO TEXT CONTENT */}

        <article
          id="hero-text"
          className="grid place-items-center py-20 gap-2 text-center md:text-left md:justify-start md:px-52 md:py-16"
        >
          <p
            id="pre-text"
            className="font-work uppercase text-secondary font-semibold text-sm md:justify-self-start md:text-lg"
          >
            caring for life
          </p>
          <h2
            id="hero-text"
            className="font-yeseva text-2xl md:text-5xl text-primary"
          >
            Learning the Way <br /> in Media Excellence
          </h2>

          {/* <button className="bg-accent text-primary capitalize font-work text-base rounded-full py-2 px-6 font-bold justify-self-center md:justify-self-start">
            <Link to={'/services'}>
              our services
            </Link>
          </button> */}
        </article>

        {/*  HERO INTERACTIVE BUTTONS */}

        {/* <article
          id="hero-interactive"
          className="hidden md:flex gap-3 justify-center absolute top-0 left-0 translate-x-[40%] translate-y-[55vh]"
        >
          <button className="w-fit flex items-center justify-center gap-3 py-6 px-3 bg-primary text-white font-work">
            <span>Book an Appointment</span>
            <span>
              <AiOutlineCalendar size={35} />
            </span>
          </button>

          <button className="w-fit flex items-center justify-center gap-3 py-6 px-3 bg-accent text-primary font-work">
            <span>Online Consultation</span>
            <span>
              <IoIosPeople size={35} />
            </span>
          </button>

          <button className="w-fit flex items-center justify-center gap-3 py-6 px-3 bg-secondary text-white font-work">
            <span>Order Medicine Online</span>
            <span>
              <BsCashStack size={35} />
            </span>
          </button>
        </article> */}
      </section>

      {/* WELCOME TO MEDICAL SECTION  */}

      <section id="welcome" className="gird place-items-center w-full py-10">
        <article
          id="hero-text"
          className="grid gap-2 text-center mx-auto w-[90%] max-w-3xl md:py-20"
        >
          <PageHead
            subtitle={"welcome to DR.RS Garg (IG) Hospital"}
            title={"A Great Place to Receive Care"}
          />

          <p className="text-base text-center font-work">
            Dr. Ram Saran Garg (Indo-German) Hospital strives to deliver
            personalized, patient-centered healthcare and best quality services.
          </p>
          <Link to={"/services"}>
            <p className="capitalize font-normal hover:font-medium hover:underline flex gap-2 justify-center items-center font-work text-secondary text-base">
              lear more <AiOutlineArrowRight color={"#1F2B6C"} />
            </p>
          </Link>
        </article>
      </section>
      <div className="w-[90vw] m-auto h-[300px] overflow-hidden ">
        <img
          src="/image_assets/IGDoctors.JPG"
          alt="home-banner-image"
          className=" m-auto cover mt-[-10vw] md:mt-[-15vw]"
        />
      </div>

      {/* OUR SERVICES SECTION */}

      <section id="services" className="py-20">
        <article className="mx-auto text-center">
          <PageHead
            subtitle={"care you can believe in"}
            title={"Our Services"}
          />
        </article>

        <article className="flex justify-center py-20 px-10  ">
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
          <div className=" md:grid md:w-[50vw] w-[90vw] mx-auto">
            <h5 className="font-work text-2xl font-semibold text-left  my-8">
              A passion for putting patients first.
            </h5>
            <ul
              className="grid list-none grid-cols-1
            md:grid-cols-2 justify-center px-7 gap-5 py-3 font-work text-lg font-medium"
            >
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Multispecialty OPD
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                24-hours service
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Fully equipped OT
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Path Lab, Minor OT
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                ICU with Ventilator
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                NICU with Infant Warmer
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Ultrasound and X-Ray
              </li>
              <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">
                Private Wards
              </li>
            </ul>
            <br />
            <p className="font-work text-base font-normal mb-4">
              The hospital not only renders high quality medical servies at a
              nominal cost that any class of society can afford, it also holds
              free medical camps in the neighbouring villages. The motto of Dr.
              Ram saran Garg (Indo-German) Hospital is to serve humanity be
              extending selfless, impartial and secular services.
            </p>
            <p className="font-work text-base font-normal">
              Regular health check-up camps are held in the nearby villages and
              in both branches of the hospital during which free health check-up
              is done for all.
              <br />
              The hospital provides the above services at nominal charges to
              all. It also gives special discounts to the poor and arranges for
              donations from socially aware citizens for the treatment of the
              poor.
            </p>
          </div>

          {/* Images */}
          <div className="hidden md:grid gap-2">
            <img
              src={serviceOneSrc}
              alt="servicing-image"
              className="max-w-[30vw]"
            />
            <img
              src={serviceTwoSrc}
              alt="servicing-image"
              className="max-w-[30vw]"
            />
          </div>
        </article>
      </section>

      {/* OUR SPECIALTIES SECTION */}
      <section id="specialty" className="py-10">
        <article className="text-center mx-auto">
          <PageHead subtitle={"always caring"} title={"Our Specialties"} />
        </article>

        {/* specialty grids */}

        <article className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4 px-[10vw] md:px-0 mx-auto w-[90vw] md:w-[48rem] py-20">
          <SpecialCard text={"Anethesia"} />
          <SpecialCard text={"Internal Medicine"} />
          <SpecialCard text={"Pediatrics"} />
          <SpecialCard text={"Gynaecology"} />

          <SpecialCard text={"Radiology"} />
          <SpecialCard text={"Pathology"} />
          <SpecialCard text={"Orthopedics"} />
          <SpecialCard text={"Dermatology"} />

          {/* <SpecialCard text={"Cardiology"} />
          <SpecialCard text={"Neurosurgery"} />
          <SpecialCard text={"Neuromedicine"} />
          <SpecialCard text={"Urology"} /> */}
        </article>
      </section>

      {/* APPOINTMENT SECTION */}
      {/* <section id='appointment' className='bg-appointment h-full flex justify-evenly items-center py-5'>
      <article className='hidden md:block w-[30%]'>
        <p className='font-yeseva text-secondary text-3xl'>Book an Appointment</p>
        <p className="font-work text-base text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga incidunt asperiores aperiam corrupti, deleniti officia doloremque id! Voluptas, impedit.
        </p>
      </article>

      <Form />
    </section> */}

      {/* CONTACT SECTION */}
      <section id="contact" className="py-10">
        <article className="text-center mx-auto">
          <PageHead subtitle={"get in touch"} title={"Contact"} />
        </article>
        <ContactComp />
      </section>

      <section>
        <iframe
          className=" m-auto w-[90vw] md:h-[450px]
            h-[300px] max-w-[600px] md:mb-16 mb-8"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2453.280434907222!2d77.5047838330266!3d28.673556702186694!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1679473721076!5m2!1sen!2sin"
          // width="600"
          // height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Home;
