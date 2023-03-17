import { AiOutlineCalendar, AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { BsCashStack, BsHeartPulse } from 'react-icons/bs'
import { CiBandage } from 'react-icons/ci'
import { BiDonateBlood } from 'react-icons/bi'
import { GiHeartPlus, GiMedicalPackAlt } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { PageHead, SpecialCard } from '../../Components/Assets' 


const Home = () => {

  const homeBannerSrc = '/image_assets/home-banner.svg'
  const serviceOneSrc = '/image_assets/service-01.png'
  const serviceTwoSrc = '/image_assets/service-02.png'

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

        <PageHead
          subtitle={'welcome to medical'}
          title={'A Great Place to Receive Care'}
        />

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

    <img src={homeBannerSrc} alt='home-banner-image' className='mx-auto' />

    {/* OUR SERVICES SECTION */}

    <section id="services" className='py-20'>
      <article className='mx-auto text-center'>
        <PageHead subtitle={'care you can believe in'} title={'Our Services'} />
      </article>

      <article className='flex justify-center py-20 px-10  '>
        {/* Grid Elements */}
        <div className='md:grid mx-auto md:w-fit w-64 border border-gray-300 rounded-lg'>
          <div className='grid    md:grid-flow-col md:grid-cols-1 md:grid-rows-4 grid-cols-2 grid-rows-2'>
            <SpecialCard cl={'aspect-[16/9] w-32 py-5'} text={'Free checkup'} icon={<CiBandage color='#159EEC' size={30} />} />
            <SpecialCard cl={'aspect-[16/9] w-32 py-5'} text={'cardiogram'} icon={ <GiHeartPlus color='#159EEC' size={30} />}/>
            <SpecialCard cl={'aspect-[16/9] w-32 py-5'} text={'dna testing'} icon={ <GiMedicalPackAlt color='#159EEC' size={30} />} />
            <SpecialCard cl={'aspect-[16/9] w-32 py-5'} text={'blood bank'} icon={ <BiDonateBlood color='#159EEC' size={30} />}/>
          </div>
          <button className='bg-primary text-accent font-work capitalize text-base rounded-b-lg py-1 md:py-0 w-full'>view all</button>
        </div>

        {/* Text Elements */}
        <div className='hidden md:grid w-[50vw] mx-auto'>
          <h5 className='font-work text-2xl font-semibold text-left  '>A passion for putting patients first.</h5>
          <ul className='grid list-none grid-cols-2 justify-center px-7 font-work text-lg font-medium'>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">A passion for healing</li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">5-Star Care</li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">All our best</li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">Believe in Us</li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">A legacy of excellence</li>
            <li className="before:content-[''] before:w-5 before:h-5 relative before:absolute before:top-0 before:left-0 before:-translate-x-7 before:translate-y-1 before:rounded-full before:bg-secondary">Always Caring</li>
          </ul>

          <p className='font-work text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, voluptates odit harum voluptatibus repellat voluptate quisquam in quaerat modi voluptatem quae, sequi est reprehenderit voluptas quis aspernatur blanditiis labore repudiandae?</p>
          <p className='font-work text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, voluptates odit harum voluptatibus repellat voluptate quisquam in quaerat modi voluptatem quae, sequi est reprehenderit voluptas quis aspernatur blanditiis labore repudiandae?</p>
        </div>
        
        {/* Images */}
        <div className='hidden md:grid gap-2'>
          <img src={serviceOneSrc} alt="servicing-image" />
          <img src={serviceTwoSrc} alt="servicing-image" />
        </div>

      </article>
    </section>

    {/* OUR SPECIALTIES SECTION */}
    <section id="specialty" className='py-10'>
      <article className='text-center mx-auto'>
        <PageHead subtitle={'always caring'} title={'Our Specialties'} />
      </article>

      
      {/* specialty grids */}

      <article className='grid md:grid-cols-4 md:grid-rows-3 grid-cols-3 grid-rows-4 gap-0 w-[24rem] md:w-[48rem] mx-auto py-10 '>
        <SpecialCard text={'neurology'} />
        <SpecialCard text={'bones'} />
        <SpecialCard text={'oncology'} />
        <SpecialCard text={'otorhinolaryngology'} />
        
        <SpecialCard text={'ophthalmology'} />
        <SpecialCard text={'cardiovascular'} />
        <SpecialCard text={'pulmonology'} />
        <SpecialCard text={'renal medicine'} />

        <SpecialCard text={'gastroenterology'} />
        <SpecialCard text={'urology'} />
        <SpecialCard text={'dermatology'} />
        <SpecialCard text={'gynecology'} />
      </article>
    </section>

  </>
}

export default Home