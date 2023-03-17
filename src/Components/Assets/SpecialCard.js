import { BsHeartPulse } from 'react-icons/bs'

const SpecialCard = ({ icon, text, cl }) => {
    return <div className={`border border-gray-100 ${cl ? cl : 'aspect-square w-32 md:w-48 p-5'} flex flex-col justify-center items-center text-center hover:bg-primary duration-300 hover:text-accent hover:rounded-lg`}>
        <span>
            {
                icon ? icon : <BsHeartPulse color='#159EEC' size={30} />
            } 
        </span>
        <span className="font-work capitalize md:text-base text-xs">{text}</span>
    </div>
}

export default SpecialCard;