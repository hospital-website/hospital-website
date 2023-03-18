import { FiClock, FiPhoneCall } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { ContactCard } from '../Assets'

const ContactComp = () => {
  return <div className='mx-auto w-fit gap-2 md:w-[52rem] md:gap-0 py-10 grid items-center justify-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4'>
    <ContactCard icon={<FiPhoneCall size={30} />} title='emergency' info_one={'(237) 681-812-255'} info_two={'(237) 681-812-255'} />
    <ContactCard icon={<CiLocationOn size={30} />} title='location' info_one={'0123 Some place'} info_two={'9876 Some Country'} />
    <ContactCard icon={<AiOutlineMail size={30} />} title='email' info_one={'fildineeesoe@gmail.com'} info_two={'myebstudios@gmail.com'} />
    <ContactCard icon={<FiClock size={30} />} title='working hours' info_one={'Mon-Sat 09:00-20:00'} info_two={'Sunday Emergency only'} />
  </div>
}

export default ContactComp