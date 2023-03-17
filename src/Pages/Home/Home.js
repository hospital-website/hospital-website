import { AiOutlineCalendar, AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { BsCashStack } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  return <>
    {/* HERO SECTION */}

    <section id="hero" className='bg-hero-mobile bg-contain sm:bg-hero w-full md:h-[60vh] bg-no-repeat sm:bg-cover relative'>
      
      {/* HERO TEXT CONTENT */}

      <article id="hero-text" className='grid place-items-center py-20 gap-2 text-center md:text-left md:justify-start md:px-52 md:py-16'>
        <p id="pre-text" className='font-work uppercase text-secondary font-semibold text-sm md:justify-self-start md:text-lg'>caring for life</p>
        <h2 id="hero-text" className='font-yeseva text-2xl md:text-5xl text-primary'>Learning the Way <br /> in Media Excellence</h2>
        
        <button className='bg-accent text-primary capitalize font-work text-base rounded-full py-2 px-6 font-bold justify-self-center md:justify-self-start'>our service</button>
      </article>

      {/*  HERO INTERACTIVE BUTTONS */}

      <article id="hero-interactive" className='hidden md:flex gap-3 justify-center absolute top-0 left-0 translate-x-[40%] translate-y-[55vh]'>
        <button className='w-fit flex items-center justify-center gap-3 py-6 px-3 bg-primary text-white font-work'>
          <span>
            Book an Appointment
          </span> 
          <span>
            <AiOutlineCalendar size={35} />
          </span>
        </button>

        <button className='w-fit flex items-center justify-center gap-3 py-6 px-3 bg-accent text-primary font-work'>
          <span>
            Online Consultation
          </span> 
          <span>
            <IoIosPeople size={35} />
          </span>
            
        </button>
        
        <button className='w-fit flex items-center justify-center gap-3 py-6 px-3 bg-secondary text-white font-work'>
          <span>Order Medicine Online</span> 
          <span><BsCashStack size={35} /></span>
        </button>
      </article>
    </section>

    {/* WELCOME TO MEDICAL SECTION  */}

    <section id="welcome" className='gird place-items-center w-full py-10'>
      <article id="hero-text" className='grid gap-2 text-center mx-auto w-[90%] max-w-3xl md:py-20'>
        <p id="pre-text" className='font-work uppercase text-secondary font-semibold text-sm md:text-lg'>welcome to medical</p>
        <h2 id="hero-text" className='font-yeseva text-2xl md:text-5xl text-primary'>A Great Place to Receive Care</h2>
        <p className='text-base text-center font-work'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab provident atque rem at dolorum natus blanditiis non, exercitationem fugit accusantium.
        </p>
        <Link to={'/about'}>
          <p className='capitalize font-normal hover:font-medium hover:underline flex gap-2 justify-center items-center font-work text-secondary text-base'>
            lear more <AiOutlineArrowRight color={'#1F2B6C'} />
          </p>
        </Link>
      </article>
    </section>

  </>
}

export default Home