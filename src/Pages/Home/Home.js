import { AiOutlineCalendar } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { BsCashStack } from 'react-icons/bs'

const Home = () => {
  return <>
    {/* HERO SECTION */}

    <section id="hero">
      
      {/* HERO TEXT CONTENT */}

      <article id="hero-text">
        <p id="pre-text">caring for life</p>
        <h2 id="hero-text">Learning the Way in Media Excellence</h2>
        
        <button>our service</button>
      </article>

      {/*  HERO INTERACTIVE BUTTONS */}

      <article id="hero-interactive">
        <button>
          Book an Appointment <AiOutlineCalendar />
        </button>

        <button>
          Online Consultation <IoIosPeople />
        </button>
        
        <button>
          Order Medicine Online <BsCashStack />
        </button>
      </article>
    </section>

  </>
}

export default Home