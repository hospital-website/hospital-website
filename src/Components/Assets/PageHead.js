const PageHead = ({subtitle, title}) => {
  return <>
    <p id="pre-text" className='font-work uppercase text-secondary font-semibold text-sm md:text-lg'>{subtitle}</p>
    <h2 id="hero-text" className='font-yeseva text-2xl md:text-5xl text-primary'>{title}</h2>
  </>
}

export default PageHead