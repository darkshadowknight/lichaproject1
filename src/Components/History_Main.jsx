import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';

const img1 = "./1.jpg"
const img2 = "./2.png"
const img3 = "./3.jpg"
const img4 = "./4.avif"

const images = [
    {
        image: img1,
        title: "Our Lady of Light Parish Church",
        description: `This historic church, built in the early 18th century, is a prominent landmark in Cainta. It has witnessed significant events in the town's history and remains a center of religious activities.`,

        links: "/TouristSpot"
    },
    {
        image: img2,
        title: "Hunters-ROTC Memorial Shrine",
        description: `This memorial honors the Hunters ROTC guerrilla unit, which played a crucial role during World War II in the Philippines. The shrine stands as a testament to the bravery and sacrifice of local heroes.`,
        links: "/TouristSpot"
    },
    {
        image: img3,
        title: "Cainta in the Early 1900s",
        description: `A rare photograph capturing the town's appearance in the early 20th century, providing a glimpse into its past architecture and layout.`,
        links: "/TouristSpot"

    },
    {
        image: img4,
        title: "Cainta Municipal Town Hall",
        description: `An image of the municipal town hall, representing the administrative center of Cainta and its evolution over the years.`,
        links: "/TouristSpot"

    },
]


const History_Main = () => {
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
        <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col gap-[180px] text-white'>
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
                            <h1 className='text-center text-5xl appear-sum font-bold'>{current.title} <br /> <br /></h1>
                            <p className='text-2xl appear-sum'> {current.description} <br /><br /></p>
                            <p className='text-2xl appear-sum'> {current.description2} <br /><br /></p>
                            <p className='text-2xl appear-sum'> {current.description3} <br /><br /></p>
                            <p className='text-2xl appear-sum'>{current.description4}</p>
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
                {/* Cainta History */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-row w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <h1 className='text-white text-7xl text-center blocks'><MdMapsHomeWork /></h1>
                            <h1 className='text-white text-7xl text-center blocks'>Cainta History</h1>
                        </div>
                        <p className='text-white text-3xl'>a first-class municipality in the province of Rizal, Philippines, has a rich and colorful history that spans pre-colonial times, Spanish colonization, and the modern era. Here's an overview of its historical background.</p>
                    </div>
                </div>
                {/*  Pre-Colonial Period */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'> Pre-Colonial Period</p>
                        </div>
                        <p className='text-white text-3xl'>Before Spanish colonization, Cainta was a small settlement inhabited by Tagalog natives. It was known for its strategic location and rich natural resources, making it an ideal spot for early settlers. The people engaged in farming, fishing, and trading with nearby communities and even with Chinese merchants.</p>
                    </div>
                </div>
                {/* Spanish Colonial Era (1571 - 1898) */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[600px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'> Spanish Colonial Era (1571 - 1898)</p>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <li>In 1571, Spanish conquistadors led by Juan de Salcedo arrived in the region. Cainta, along with other nearby areas, resisted Spanish rule. A local leader named Gat Maitan famously fought against the invaders but was eventually defeated.</li>
                            <li>Cainta was officially established as a town under Spanish control on November 30, 1571.</li>
                            <li>The town became a mission center under the Jesuits and later the Augustinians. They built a church, introduced Christianity, and integrated the town into the colonial system.</li>
                            <li>Cainta was merged with Taytay for a time but regained its independence as a town in 1760.</li>
                        </ul>
                    </div>
                </div>
                {/* American Period (1898 - 1946) */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'> American Period (1898 - 1946)</p>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <p className='text-white text-3xl blocks'>It boasts:</p>
                            <li>Under American rule, Cainta saw infrastructure development and the introduction of a new public education system.</li>
                            <li>The economy gradually shifted, with improvements in agriculture and the beginnings of industrialization.</li>
                        </ul>
                    </div>
                </div>
                {/*  World War II */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'><FaHistory /></p>
                            <p className='text-white text-4xl blocks'>  History & Culture</p>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <li>Cainta, like much of the Philippines, was heavily affected during the Japanese occupation from 1942 to 1945.</li>
                            <li>Residents participated in the guerrilla resistance movement.</li>
                            <li>After the war, the town began to rebuild, and development slowly resumed.</li>
                        </ul>
                    </div>
                </div>
                {/*  Post-War to Modern Times */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'>   Post-War to Modern Times</p>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <li>In the post-war years, Cainta began to urbanize rapidly due to its proximity to Metro Manila.</li>
                            <li>It became known as a residential and commercial hub, attracting migrants and businesses.</li>
                            <li>Cainta is known for its bibingka and suman, earning a reputation for delicious native delicacies.</li>
                            <li>It officially became a first-class urban municipality due to its high income and rapid development.</li>
                        </ul>
                    </div>
                </div>
                {/*  Present Day */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <p className='text-white text-4xl blocks'> Present Day</p>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <li>Cainta is considered one of the most progressive municipalities in Rizal.</li>
                            <li>There have been efforts to convert it into a city, although it remains a municipality as of now.</li>
                            <li>It continues to blend urban development with rich cultural traditions, especially during Holy Week, where elaborate religious processions are held.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default History_Main