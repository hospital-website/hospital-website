const ContactCard = ({ icon, title, info_one, info_two }) => {
  return <div className="grid items-center rounded-md p-2 w-[45vw] md:p-5  md:w-48 aspect-square bg-accent hover:bg-primary text-primary hover:text-accent font-work duration-300">
    <div className="grid justify-start gap-1">
        <span>{icon}</span>
        <span className="uppercase font-bold">{title}</span>
        <span className="text-xs font-light">{info_one}</span>
        <span className="text-xs font-light">{info_two}</span>
    </div>
  </div>
}

export default ContactCard