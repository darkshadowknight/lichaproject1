import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header_main_Phone = () => {

    const [NavIsOpen, SetNavIsOpen] = useState(false);
    const toggleDropdown = () => SetNavIsOpen(!NavIsOpen);

    const [SecNavIsOpen, SetSecNavIsOpen] = useState(false);
    const sectoggleDropdown = () => SetSecNavIsOpen(!SecNavIsOpen);

    const [IsOpen, SetIsOpen] = useState(false);
    const MenuToggle = () => {
        SetIsOpen(prev => !prev);
    }

    return (
        <header className="flex items-center justify-between rounded-b-lg shadow-lg bg-blue-950 shadow-black">
            <div className="flex flex-row items-center h-full">
                <img className="w-auto h-full p-3 bg-transparent" src="/Cainta-removebg-preview.png" alt="logo_icct" />
                <div className="text-center flex-col">
                    <p className="text-2xl text-white">MUNICIPALITY OF<br />CAINTA</p>
                </div>
            </div>
            <nav>
                <div className='h-full w-full'>
                    <button onClick={MenuToggle} className='relative z-20'>
                        {IsOpen ? (
                            <IoMdClose className="text-3xl" />
                        ) : (
                            <TiThMenu className="text-2xl" />

                        )}
                    </button>
                    {IsOpen && (
                        <div className="absolute top-0 left-0 bg-gray-800 w-full h-full z-10">
                            <div className='flex flex-col gap-5 pt-[110px] h-full w-full items-center border-b-1 border-black text-white'>
                                <Link className='text-4xl h-[60px] border-b-1 w-full flex flex-col items-center justify-items-center' to={"/"}>Home</Link>
                                {/* About Cainta */}
                                <div className='relative z-50 w-full'>
                                    <button onClick={toggleDropdown} className="text-4xl h-[60px] border-b-1 w-full flex flex-col items-center justify-items-center">
                                        About Cainta
                                    </button>
                                    {NavIsOpen && (
                                        <div className="flex flex-col items-center">
                                            <Link
                                                to="/History"
                                                className="text-4xl w-full h-[80px] flex items-center border-b-1"
                                            >
                                                History
                                            </Link>
                                            <Link
                                                to="/Culture"
                                                className="text-4xl w-full h-[80px] flex items-center border-b-1"
                                            >
                                                Culture
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div className='relative flex flex-col text-left z-50 w-full'>
                                    <button onClick={sectoggleDropdown} className="text-4xl h-[60px] border-b-1 w-full flex flex-col items-center justify-items-center">
                                        Places
                                    </button>
                                    {SecNavIsOpen && (
                                        <div className="flex flex-col items-center">
                                            <Link
                                                to="/Foods"
                                                className="text-4xl w-full h-[80px] flex items-center border-b-1"
                                            >
                                                Food Places
                                            </Link>
                                            <Link
                                                to="/Hotel"
                                                className="text-4xl w-full h-[80px] flex items-center border-b-1"
                                            >
                                                Hotel
                                            </Link>
                                            <Link
                                                to="/TouristSpot"
                                                className="text-4xl w-full h-[80px] flex items-center border-b-1"
                                            >
                                                Tourist Spot
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link className='text-4xl h-[60px] border-b-1 w-full flex flex-col items-center justify-items-center' to={"/Contact"}>Contact</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header_main_Phone