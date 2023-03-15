import React, { useState } from 'react'
import { FiClock, FiPhoneCall, FiSearch } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [ search, setSearch ] = useState(false)
    const [ isMenu, setIsMenu ] = useState(false)

  return (
    <header>

        {/* TOP PART OF HEADER WITH NAME AND INFORMATION */}
        <article id="h-top" className='w-full flex justify-around py-4 px-2'>
            <div id="h-top-name" className='hidden md:block'>
                <h1 className='font-yeseva text-2xl text-primary uppercase'>dr. ram saran garg</h1>
                <h1 className='font-yeseva text-2xl text-secondary uppercase'>indo-german hospital</h1>
            </div>

            <div id="h-top-info" className='flex justify-center flex-wrap gap-5'>
                <div className="h-top-info-container flex items-center px-0 md:px-2">
                    <div className="icon px-2">
                        <FiPhoneCall size={25} />
                    </div>
                    <div className="text text-xs md:text-base">
                        <h3 className='font-work font-medium uppercase text-primary'>Emergency</h3>
                        <h4 className='font-work text-secondary'>(0120) 681-812-25</h4>
                    </div>
                </div>
                <div className="h-top-info-container flex items-center px-0 md:px-2">
                    <div className="icon px-2">
                        <FiClock size={25} />
                    </div>
                    <div className="text text-xs md:text-base">
                        <h3 className='font-work font-medium uppercase text-primary'>work hours</h3>
                        <h4 className='font-work text-secondary capitalize'>09:00 - 20:00 everyday</h4>
                    </div>
                </div>
                <div className="h-top-info-container flex items-center px-0 md:px-2">
                    <div className="icon px-2">
                        <GrLocation size={25} />
                    </div>
                    <div className="text text-xs md:text-base">
                        <h3 className='font-work font-medium uppercase text-primary'>location</h3>
                        <h4 className='font-work text-secondary uppercase'>akgec, ghaziabad</h4>
                    </div>
                </div>
            </div>
        </article>

        {/* BOTTOM PART OF HEADER WITH NAVIGATION AND SEARCH */}
        <article id="h-bottom" className='bg-primary w-full flex justify-between px-2 md:px-20 items-center md:py-5 py-3'>
            {
                !search && 
                <div id="h-top-name" className='md:hidden'>
                    <h1 className='font-yeseva text-sm text-accent uppercase'>dr. ram saran garg</h1>
                    <h1 className='font-yeseva text-sm text-white uppercase'>indo-german hospital</h1>
                </div>
            }
            {
                !isMenu ?
                <nav className='hidden md:flex justify-between gap-12'>
                <Link to={'/'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">Home</p>
                </Link>
                <Link to={'/about'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">about us</p>
                </Link>
                <Link to={'/services'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">services</p>
                </Link>
                <Link to={'/doctors'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">doctors</p>
                </Link>
                <Link to={'/news'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">news</p>
                </Link>
                <Link to={'/contact'} >
                    <p className="nav-link capitalize font-work text-white font-light hover:font-medium hover:text-accent">contact</p>
                </Link>
                </nav> : 
                <nav className='ham grid absolute top-44 md:top-64 bg-accent w-full h-fit justify-center text-center left-0 py-4 gap-2'>
                <Link to={'/'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">Home</p>
                </Link>
                <Link to={'/about'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">about us</p>
                </Link>
                <Link to={'/services'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">services</p>
                </Link>
                <Link to={'/doctors'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">doctors</p>
                </Link>
                <Link to={'/news'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">news</p>
                </Link>
                <Link to={'/contact'} >
                    <p className="nav-link capitalize font-work text-primary font-normal hover:font-medium">contact</p>
                </Link>
                <button id="appoint-btn" className='bg-primary px-8 py-1.5 capitalize text-accent rounded-full font-semibold'>
                    appointment
                </button>
                </nav>
            }

            <div id='nav-side' className='flex gap-5 items-center'>
                <div className="search flex items-center gap-5 md:gap-2">
                    {
                        search ? <input type="search" className='rounded-full py-1.5 px-3 font-work text-sm outline-none w-[70vw] md:w-[100%]' placeholder='Search...'/> : null
                    }
                    <button id='search-btn' onClick={() => setSearch(!search)}>
                        {
                            search ? <AiOutlineClose size={20} color={'white'} /> : <FiSearch size={25} color={'white'} />
                        }
                    </button>
                    <button id='search-btn' className='md:hidden' onClick={() => setIsMenu(!isMenu)}>
                        {
                            !isMenu ? <AiOutlineMenu size={25} color={'white'} /> : <AiOutlineClose size={25} color={'white'} />
                        }
                    </button>
                </div>

                <button id="appoint-btn" className='bg-accent px-8 py-1.5 capitalize text-primary rounded-full font-semibold hidden md:block'>
                    appointment
                </button>
            </div>
        </article>
    </header>
  );
};

export default NavBar;
