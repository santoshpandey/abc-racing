import React, { useState } from 'react';
import {Transition} from '@headlessui/react';
import {Link} from 'react-scroll';

function Navbar() {
    const {isOpen, setIsOpen} = useState(false);
    return (
        <div>
            <nav>
                <div className='shadow-sm fixed w-full z-10'>
                    <div className='w-full'>
                        <div className='flex items-center h-20 w-full'>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-bold text-xl cursor-pointer'>
                                    Stream<span className='text-blue-500'></span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='m1-10 flex item-baseline space-x-4'>
                        <Link 
                        activeClass="Home"
                        to="About"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Home
                        </Link>
                        <Link 
                        activeClass="fixture"
                        to="fixture"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white"
                        >
                            Fixture
                        </Link>
                        <Link 
                        activeClass="topfive"
                        to="topfive"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white"
                        >
                            Top five
                        </Link>
                    </div>
                </div>
            </nav>
        </div>


    )

}