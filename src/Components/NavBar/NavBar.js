import React from 'react'
import { FiClock, FiPhoneCall, FiSearch } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

        {/* TOP PART OF HEADER WITH NAME AND INFORMATION */}
        <article id="h-top">
            <div id="h-top-name">
                <h1>dr. ram saran garg</h1>
                <h1>indo-german hospital</h1>
            </div>

            <div id="h-top-info">
                <div className="h-top-info-container">
                    <div className="icon">
                        <FiPhoneCall />
                    </div>
                    <div className="text">
                        <h3>Emergency</h3>
                        <h4>(0120) 681-812-25</h4>
                    </div>
                </div>
                <div className="h-top-info-container">
                    <div className="icon">
                        <FiClock />
                    </div>
                    <div className="text">
                        <h3>work hours</h3>
                        <h4>09:00 - 20:00 everyday</h4>
                    </div>
                </div>
                <div className="h-top-info-container">
                    <div className="icon">
                        <GrLocation />
                    </div>
                    <div className="text">
                        <h3>location</h3>
                        <h4>akgec, ghaziabad</h4>
                    </div>
                </div>
            </div>
        </article>

        {/* BOTTOM PART OF HEADER WITH NAVIGATION AND SEARCH */}
        <article id="h-bottom">
            <nav>
                <Link to={'/'} >
                    <p className="nav-link">Home</p>
                </Link>
                <Link to={'/about'} >
                    <p className="nav-link">about us</p>
                </Link>
                <Link to={'/services'} >
                    <p className="nav-link">services</p>
                </Link>
                <Link to={'/doctors'} >
                    <p className="nav-link">doctors</p>
                </Link>
                <Link to={'/news'} >
                    <p className="nav-link">news</p>
                </Link>
                <Link to={'/contact'} >
                    <p className="nav-link">contact</p>
                </Link>
            </nav>

            <div id='nav-side'>
                <div className="search">
                    <input type="search" />
                    <button id='search-btn'>
                        <FiSearch />
                    </button>
                </div>

                <button id="appoint-btn">
                    appointment
                </button>
            </div>
        </article>

    </header>
  )
}

export default NavBar