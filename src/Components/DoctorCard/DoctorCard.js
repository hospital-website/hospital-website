import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const DoctorCard = ({image, name, role}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  return <div>
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
      <div onMouseDown={handleFlip}>
        <img src={image} alt="" />
        <article>
          <p>{name}</p>
          <p>{role}</p>
        </article>
      </div>

        <article className='bg-secondary text-primary font-work text-lg font-medium' onMouseDown={handleFlip}>
          <p>MD</p>
          <p>MBBS</p>
          <p>10 years of experience</p>
        </article>
    </ReactCardFlip>

  </div>
};

export default DoctorCard;
