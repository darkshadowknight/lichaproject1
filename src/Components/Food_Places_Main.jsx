import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const img1 = "./brewsha-cainta.jpg"
const img2 = "./Tapsi Ni Vivian.jpg"
const img3 = "./Samgyupsalamat.jpg"

const images = [
    {
        image: img1,
        title: `☕BREWSHA`,
        description: `BrewSha is a cozy coffee shop located at 25 A. Bonifacio Avenue, Brgy. Sto. Domingo, Cainta, Rizal, Philippines.`,
        title2: `☕ What BrewSha Offers`,
        description2: `BrewSha specializes in a variety of beverages and light meals.`,
        description3: `Their menu includes:`,
        Menu: `Coffee and Espresso Drinks: Classic brews and specialty concoctions.`,
        Menu2: `Frappes: Flavors like Java Botok and Vanilla Matcha.`,
        Menu3: `Sandwiches: Perfect for a quick bite.`,
        Menu4: `Fries and Pastries: Ideal for snacking.`,

        title3: `📍 Location & Contact`,
        Location: `Address: 25 A. Bonifacio Avenue, Brgy. Sto. Domingo, Cainta, Rizal, Philippines`,
        Location2: `Phone: +63 967 099 4080`,
        Location3: `Operating Hours: 9:30 AM to 12:00 Midnight .`,
    },
    {
        image: img2,
        title: `🍽️ Tapsi Ni Vivian`,
        description: `is a beloved Filipino restaurant in Marikina, renowned for its hearty silog meals and classic Filipino comfort food. With a reputation built over the years, it continues to be a favorite among locals and visitors alike.`,
        title2: `🍽️ Menu Highlights`,
        description2: `Tapsi Ni Vivian offers a diverse menu`,
        description3: `that includes:`,
        Menu: `Tapsilog: A classic Filipino breakfast combo featuring tapa, garlic rice, and egg.`,
        Menu2: `Sisig: A sizzling plate of chopped pork, seasoned to perfection.`,
        Menu3: `Bistek Tagalog: Tender beef steak marinated in soy sauce and calamansi.`,
        Menu4: `Pancit: A variety of noodle dishes, including bihon, canton, and sotanghon.`,

        title3: `📍 Location & Contact`,
        Location: `Address: 32 Gil Fernando Ave., Marikina, Metro Manila, Philippines`,
        Location2: `Phone: +63 2 8645 0125`,
        Location3: `Operating Hours: Daily, 6:00 AM – 9:00 PM`,
    },
    {
        image: img3,
        title: `🍽️ Samgyupsalamat `,
        description: `is a well-known Korean barbecue restaurant chain in the Philippines, offering an authentic and affordable unlimited Korean BBQ experience. Established in 2012, it has grown to over 50 branches nationwide, including locations in Metro Manila, making it easily accessible to many Filipinos.`,
        title2: `🍽️ Menu Highlights`,
        description2: `Beyond the unlimited BBQ, Samgyupsalamat also offers an à la carte`,
        description3: `menu featuring:`,
        Menu: `K-Bimbowls: Rice bowls topped with options like pork gochujang or beef bulgogi.`,
        Menu2: `K-Fried Chicken: Korean-style fried chicken pieces, often crispy and flavorful.`,
        Menu3: `Dosirak Lunchboxes: Korean-style lunchboxes with a variety of dishes.`,
        Menu4: `These options cater to those looking for a quick meal or additional dishes to complement their BBQ experience.`,

        title3: `📍 Location & Contact`,
        Location: `Address: 69 Marikina-Infanta Highway, The Pinnacle Plaza, Cainta, Metro Manila, Philippines`,
        Location2: `Phone: (02) 8542 4920`,
        Location3: `Operating Hours: Daily, 11:00 AM – 2:00 AM`,
    },
]
const Food_Places_Main = () => {

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
                    <div className='flex flex-row items-center h-[750px] w-[1250px] gap-5 rounded-lg bg-blue-900 appear-sum'>
                        <img className='w-full h-full rounded-lg appear-sum' src={current.image}
                            alt={`Slide ${index}`} />
                    </div>
                    <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
                        {/* right arrow */}
                        <BsChevronRight onClick={next} size={40} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[50px] w-full items-center pb-30 '>
                {/* Main */}
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg p-5 w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col items-center w-[1000px] gap-5 blocks'>
                        <div className='flex flex-row gap-5 blocks'>
                            <h1 className='text-white text-7xl text-center blocks'>{current.title}</h1>
                        </div>
                        <p className='text-white text-3xl'>{current.description}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg w-[1100px] p-5 items-center justify-center blocks'>
                    <div className='flex flex-col items-center w-[1000px] gap-5 blocks'>
                        <div className='flex flex-col gap-5 blocks'>
                            <h1 className='text-white text-7xl text-center blocks'>{current.title2}</h1>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                        <p className='text-white text-4xl blocks'>{current.description2}</p>
                        <p className='text-white text-4xl blocks'>{current.description3}</p> <br />
                            <li>{current.Menu}</li>
                            <li>{current.Menu2}</li>
                            <li>{current.Menu3}</li>
                            <li>{current.Menu4}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-10 bg-blue-900 rounded-lg p-5 w-[1100px] items-center justify-center blocks'>
                    <div className='flex flex-col items-center w-[1000px] gap-5 blocks'>
                        <div className='flex flex-col gap-5 blocks'>
                            <h1 className='text-white text-7xl text-center blocks'>{current.title3}</h1>
                        </div>
                        <ul className='text-white text-3xl list-disc blocks'>
                            <li>{current.Location}</li>
                            <li>{current.Location2}</li>
                            <li>{current.Location3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Food_Places_Main