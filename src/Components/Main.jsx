import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdMapsHomeWork } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { RiGovernmentFill } from "react-icons/ri";
import { MdOutlineFindReplace } from "react-icons/md";
import { VscServerEnvironment } from "react-icons/vsc";

const img1 = "./brewsha-cainta.jpg"
const img2 = "./rizal_park.webp"
const img3 = "./Santorini_Hotel.jpg"

const images = [
    {
        image: img1,
        title: "BREWSHA",
        description: `
        BrewSha is a café located at 25 A. Bonifacio Avenue, Barangay Santo Domingo, Cainta, Rizal. They are open
        daily from 9:30 AM to 12:00 midnight.`,
        description2: `The café offers a variety of coffee beverages, sandwiches, fries, and pastries. Notable drinks include their Java
        Notable drinks include their Java Botok and Vanilla Matcha Frappe. Prices for coffee start at ₱60.`,
        description3: `For the most current menu and offerings, you can visit their Facebook page.`,
        description4: `For inquiries or reservations, BrewSha can be contacted via phone at +639670994080`,
        links: "/Foods"
    },
    {
        image: img2,
        title: "RIZAL PARK",
        description: `Rizal Park, also known as Luneta Park, is a historic urban park located in Ermita, Manila, Philippines. 
        It spans 58 hectares and is considered one of the largest urban parks in Asia. 
        The park is the site of the Rizal Monument, which houses the remains of Dr. José Rizal, the country's national hero.`,
        description2: `Established in 1820, Rizal Park has been a significant venue for many historical events, including the execution of Dr. José Rizal in 1896, 
        which fueled the Philippine Revolution against Spanish colonization. 
        The park features various attractions such as the Central Musical and Dancing Fountain, the Noli Me Tangere Garden, 
        and the Open-Air Auditorium.`,
        description3: `Visitors can also explore the Chinese and Japanese Gardens, the National Museum Complex, and the Manila Ocean Park nearby.`,
        links: "/TouristSpot"
    },
    {
        image: img3,
        title: "Santorini Hotel",
        description: `
        Santorini Hotel is a Mediterranean-inspired condotel located at 3 Dama de Noche Street, Sta. Lucia Residenze, Cainta, Rizal. 
        It offers stylish accommodations with a Santorini-like vibe.`,
        description2: `The hotel features 80 rooms with Deluxe Queen, Deluxe Double, and Suite options. Amenities include an outdoor pool, 
        fitness center, restaurant, and free Wi-Fi. Room rates start around ₱2,200 per night.`,
        description3: `The hotel is conveniently located near Sta. Lucia East Grand Mall, Eastwood City, and major access roads to Metro Manila.`,
        description4: `For inquiries or reservations, Santorini Hotel can be contacted through their website or by visiting the Sta. Lucia Residenze office.`,
        links: "/Hotel"

    },
]

const Main_top = () => {
    
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((previndex) => (previndex + 1) % images.length);
    };
    const prev = () => {
        setIndex((previndex) =>
            previndex === 0 ? images.length - 1 : previndex - 1
        );
    };

    const current = images[index];

    return (
        <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col gap-[180px]'>
            <div className='w-full h-full flex flex-col'>
                <div className='flex flex-row items-center justify-center gap-5'>
                    <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
                        {/* left arrow */}
                        <BsChevronLeft onClick={prev} size={40} />
                    </div>
                    <div className='flex flex-row items-center h-[750px] w-[1250px] pl-2 gap-5 rounded-lg bg-blue-900 appear-sum'>
                        <img className='w-[600px] h-[690px] rounded-lg appear-sum' src={current.image}
                            alt={`Slide ${index}`} />
                        <div className='flex flex-col gap-1 appear-sum'>
                            <h1 className='text-center text-5xl appear-sum font-bold text-white'>{current.title} <br /> <br /></h1>
                            <p className='text-2xl text-white appear-sum'> {current.description} <br /><br /></p>
                            <p className='text-2xl text-white appear-sum'> {current.description2} <br /><br /></p>
                            <p className='text-2xl text-white appear-sum'> {current.description3} <br /><br /></p>
                            <p className='text-2xl text-white appear-sum'>{current.description4}</p>
                            <div className='flex justify-center appear-sum'>
                                <Link className='appear-sum w-auto h-auto p-3 text-2xl rounded-lg transform bg-gray-400 hover:bg-gray-600 transition duration-500 ease-in-out' to={current.links}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
                        {/* right arrow */}
                        <BsChevronRight onClick={next} size={40} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[100px] w-full items-center pb-30 '>
                {/* Overview */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-row gap-10 items-center blocks'>
                        <h1 className='text-white text-7xl text-center blocks'><MdMapsHomeWork /></h1>
                        <h1 className='text-white text-7xl text-center blocks'>Welcome to Cainta, Rizal</h1>
                    </div>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><GrOverview /></p>
                            <p className='text-white text-4xl blocks'> Overview</p>
                        </div>
                        <p className='text-white text-3xl'>Cainta is a first-class urban municipality located in the province of Rizal, Philippines. Known as the "Richest Municipality in the Philippines," Cainta is a thriving residential, commercial, and industrial hub that has seamlessly blended urban progress with cultural heritage. Its strategic location, just east of Metro Manila, makes it a key gateway between the bustling capital and the scenic province of Rizal.</p>
                    </div>
                </div>
                {/* Location */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><CiLocationOn /></p>
                            <p className='text-white text-4xl blocks'> Location & Accessibility</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Cainta has evolved into a highly urbanized area.</p>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <p className='text-white text-3xl blocks'>It is bordered by:</p>
                            <li>Pasig City to the west</li>
                            <li>Marikina City and Antipolo to the north</li>
                            <li>Taytay to the southeast</li>
                        </ul>
                        <p className='text-white text-3xl blocks'>Its proximity to major roads such as Ortigas Avenue Extension and the C5 Road makes it easily accessible for commuters and businesses alike.</p>
                    </div>
                </div>
                {/* Urban Development */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><FaBuilding /></p>
                            <p className='text-white text-4xl blocks'> Urban Development</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Cainta has evolved into a highly urbanized area.</p>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <p className='text-white text-3xl blocks'>It boasts:</p>
                            <li>Modern residential subdivisions</li>
                            <li>Commercial centers like Sta. Lucia Mall and Robinsons Metro East</li>
                            <li>Business process outsourcing (BPO) offices</li>
                            <li>Manufacturing industries and industrial estates</li>
                        </ul>
                        <p className='text-white text-3xl blocks'>Despite rapid growth, it continues to invest in infrastructure, transport systems, and public services to support its expanding population.</p>
                    </div>
                </div>
                {/*  History & Culture */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><FaHistory /></p>
                            <p className='text-white text-4xl blocks'>  History & Culture</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Founded on November 30, 1571, Cainta is one of the oldest municipalities in Luzon. It was originally part of the old Province of Tondo and later integrated into the province of Rizal.</p>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <p className='text-white text-3xl blocks'>Key Historical Notes:</p>
                            <li>Played a significant role during the Spanish colonial era.</li>
                            <li>Site of several uprisings during the Philippine Revolution.</li>
                            <li>Known for its religious and cultural festivals, especially Senakulo (Passion Play during Holy Week), which draws tourists and cultural enthusiasts.</li>
                        </ul>
                    </div>
                </div>
                {/*  Local Cuisine */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><IoFastFood /></p>
                            <p className='text-white text-4xl blocks'>   Local Cuisine</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Cainta is famous for its delicious native delicacies, many of which have roots in Filipino and Spanish culinary</p>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <p className='text-white text-3xl blocks'>traditions: </p>
                            <li>Played a significant role during the Spanish colonial era.</li>
                            <li>Site of several uprisings during the Philippine Revolution.</li>
                            <li>Known for its religious and cultural festivals, especially Senakulo (Passion Play during Holy Week), which draws tourists and cultural enthusiasts.</li>
                        </ul>
                    </div>
                </div>
                {/*  Population & Demographics */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[300px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><BsPeopleFill /></p>
                            <p className='text-white text-4xl blocks'> Population & Demographics</p>
                        </div>
                        <p className='text-white text-3xl blocks'>As of the 2020 census, Cainta has a population of over 376,000, making it one of the most populous municipalities in the country. It continues to grow due to in-migration and urban expansion.</p>
                    </div>
                </div>
                {/*  Governance */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[300px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><RiGovernmentFill /></p>
                            <p className='text-white text-4xl blocks'> Governance</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Cainta is governed by a municipal mayor, vice mayor, and a Sangguniang Bayan (municipal council). There have been initiatives for Cainta to become a city, and proposals have been made in Congress over the years.</p>
                    </div>
                </div>
                {/*  Environment & Tourism */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[300px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                <p className='text-white text-5xl blocks'><VscServerEnvironment /></p>
                            <p className='text-white text-4xl blocks'> Environment & Tourism</p>
                        </div>
                        <p className='text-white text-3xl blocks'>As of the 2020 census, Cainta has a population of over 376,000, making it one of the most populous municipalities in the country. It continues to grow due to in-migration and urban expansion.</p>
                    </div>
                </div>
                {/*  Future Prospects */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[300px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><MdOutlineFindReplace /></p>
                            <p className='text-white text-4xl blocks'> Future Prospects</p>
                        </div>
                        <p className='text-white text-3xl blocks'>Cainta is expected to continue growing economically and demographically. With ongoing infrastructure improvements and the potential push for cityhood, it aims to attract more investments while preserving its rich cultural heritage.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main_top
