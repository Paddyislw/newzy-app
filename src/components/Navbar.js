import React, { useState } from 'react'
import NewsLogo from '../images/NewsLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export default function Navbar(props) {

    return (
        <>
            <nav className='bg-green-800 py-4 space-x-4 justify-between items-center flex'>
                <div className='flex items-center text-white text-2xl'>
                    <img src={NewsLogo} className='h-8 mx-2' />
                    <NavLink to='/'><p className='MAIN xl:text-2xl lg:text-xl sm:text-lg'>NEWZY</p></NavLink>
                </div>
                    <ul className='flex xl:space-x-10 xl:text-lg lg:space-x-5 lg:text-sm sm:space-x-2 sm:text-sm  text-white '>

                        <li className='ml-2'><NavLink to='/general'>Home</NavLink></li>
                        <li><NavLink to='/sports'>Sports</NavLink></li>
                        <li><NavLink to='/entertainment'>Entertainment</NavLink></li>
                        <li><NavLink to='/general'>General</NavLink></li>
                        <li><NavLink to='/health'>Health</NavLink></li>
                        <li><NavLink to='/science'>Science</NavLink></li>
                        <li><NavLink to='/technology'>Technology</NavLink></li>

                    </ul>

                <div className='relative block'>
                    <div className='flex items-center'>
                        <div className='visible flex items-center rounded relative mx-2 '>
                            <button onClick={props.onClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 absolute top-1 right-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                            </button>
                            <input className='rounded  bg-green-200 px-1 py-1 md:w-60 sm:w-30' type='text' name='search' placeholder='Search for news'  onChange={props.onChange} value={props.text}/>
                        </div>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}
