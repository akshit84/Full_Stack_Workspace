import React from 'react'
import logo from '../assets/OnlyIcon.svg'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <>
    <div>
        <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-slate-300/20 shadow-lg backdrop-blur-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-center items-center h-14 sm:h-16 md:h-20'>
                    <div className='flex justify-center items-center h-14 sm:h-16 md:h-20 absolute left-28'>
                        <div className='pr-1 sm:pr-3 '>
                            <img src={logo} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8"/>
                        </div>
                        <div className='space-x-1 sm:space-x-2'>
                            <span className='font-semibold sm:font-bold text-[#E9327C] text-lg sm:text-xl md:text-2xl'>CINEMA</span>
                            <span className='font-semibold sm:font-bold text-[#001A49] text-lg sm:text-xl md:text-2xl'>WORLD</span>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-xl text-slate-950'>
                        <div>
                            <NavLink to="/" >Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/favorite" >Favorite</NavLink>
                        </div>
                        <div>
                            <NavLink to="/imdbtop250" >IMDB</NavLink>
                        </div>
                    </div>
                    {/* <div className='flex space-x-2'>
                        <div className='flex items-center border border-slate-400 w-2xl h-8 space-x-2 px-1 rounded-xl'>
                            <div>
                                <GoSearch className='text-slate-400'/>
                            </div>
                            <input type="text" placeholder='Search Movie' onChange={(e) => onClick(e.target.value)} className='text-slate-400 border-0 outline-0 text-base ' />
                        </div>
                        <button className='bg-[#001A49] text-white px-2 rounded-2xl w-52'>Search</button>
                    </div> */}
                </div>
            </div>
        </nav>
        {/* <nav className='fixed top-20 w-full z-50 transition-all duration-300 bg-slate-300/20 shadow-lg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-center h-5 sm:h-6 md:h-10 items-start'>
                    
                    <div className='flex space-x-4 text-xl text-slate-950'>
                        <div>
                            <NavLink to="/" >Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/favorite" >Favorite</NavLink>
                        </div>
                        <div>
                            <NavLink to="/imdbtop250" >IMDB</NavLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>   */}
    </div>
    </>
  )
}

export default Navbar