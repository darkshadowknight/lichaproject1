import React from "react";
import { Link } from "react-router-dom";

const Header_main = () => {

    return (
        <header className="flex items-center justify-between rounded-b-lg shadow-lg bg-blue-950 shadow-black">
            <div className="flex flex-row items-center h-full gap-5">
                <img className="w-auto h-full p-3 bg-transparent" src="/Cainta-removebg-preview.png" alt="logo_icct" />
                <div className="text-center flex-col">
                    <p className="text-5xl text-white">MUNICIPALITY OF <br />CAINTA</p>
                </div>
            </div>
            <nav className="flex gap-[50px] text-white text-2xl">
                <Link className="text-4xl transform hover:scale-120 hover:text-blue-500 transition duration-300 ease-in-out" to="/">Home</Link>
                <div className="group relative inline-block text-left z-50">
                    <button className="text-4xl px-3 py-1 transform hover:scale-120 hover:text-blue-500 transition duration-300 ease-in-out">
                        About Cainta
                    </button>
                    <div className="absolute top-full right-0 left-0 rounded-lg mt-1 shadow-md scale-y-0 group-hover:scale-y-100 origin-top transition duration-200 flex flex-col">
                        <Link
                            to="/History"
                            className="text-4xl bg-blue-900 rounded-t-lg px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            History
                        </Link>
                        <Link
                            to="/Culture"
                            className="text-4xl bg-blue-900 rounded-b-lg px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            Culture
                        </Link>
                    </div>
                </div>
                <div className="group relative inline-block text-left z-50">
                    <button className="text-4xl px-3 py-1 w-[210px] rounded transform hover:scale-120 hover:text-blue-500 transition duration-300 ease-in-out">
                        Places
                    </button>
                    <div className="absolute top-full right-0 left-0 rounded-lg mt-1 shadow-md scale-y-0 group-hover:scale-y-100 origin-top transition duration-200 flex flex-col">
                        <Link
                            to="/Foods"
                            className="text-4xl bg-blue-900 rounded-t-lg px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            Food Places
                        </Link>
                        <Link
                            to="/Hotel"
                            className="text-4xl bg-blue-900 px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            Hotel
                        </Link>
                        <Link
                            to="/TouristSpot"
                            className="text-4xl bg-blue-900 rounded-b-lg px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out"
                        >
                            Tourist Spot
                        </Link>
                    </div>
                </div>
                <Link className="text-4xl transform hover:scale-120 hover:text-blue-500 transition duration-300 ease-in-out pr-5" to={"/Contact"}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header_main