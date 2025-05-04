import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const img1 = "./Santorini_Hotel.jpg"
const img2 = "./StradellaHotel.jpg"
const img3 = "./HotelSogoCainta.jpg"

const images = [
  {
    image: img1,
    title: `🏨 Santorini Hotel`,
    description: `Santorini Hotel in Cainta, Rizal, is a 3-star property offering a blend of comfort and convenience, ideal for both business and leisure travelers.`,
    title2: `🏨 Hotel Overview`,
    description2: `BrewSha specializes in a variety of beverages and light meals.`,
    description3: `Their menu includes:`,

    Room_Features: `🛏️ Room Features`,
    Room_Features_description: `Rooms at Santorini Hotel are designed for comfort and convenience, featuring:`,
    Room_Features2: `Air conditioning`,
    Room_Features3: `Cable TV`,
    Room_Features4: `Free Wi-Fi`,
    Room_Features5: `Shower-only bathrooms with free toiletries`,
    Room_Features6: `Daily housekeeping`,


    title3: `📍 Location & Contact`,
    Location: `Address: 3 Dama de Noche St., Cainta, Rizal, 1800, Philippines`,
    Location2: `Phone Number: +63 917 597 3367`,
    Location3: `Operating Hours: Front Desk: Open 24 hours a day`,
  },
  {
    image: img2,
    title: `🏨 Stradella Hotel by Sotogrande`,
    description: `is a beloved Filipino restaurant in Marikina, renowned for its hearty silog meals and classic Filipino comfort food. With a reputation built over the years, it continues to be a favorite among locals and visitors alike.`,
    title2: `🏨 Hotel Overview`,
    description2: `Tapsi Ni Vivian offers a diverse menu`,
    description3: `that includes:`,

    Room_Features: `🛏️ Room Features`,
    Room_Features_description: `Rooms at Santorini Hotel are designed for comfort and convenience, featuring:`,
    Room_Features2: `Air conditioning`,
    Room_Features3: `Flat-screen TVs`,
    Room_Features4: `Free Wi-Fi`,
    Room_Features5: `Private bathrooms`,
    Room_Features6: `Room service`,

    title3: `📍 Location & Contact`,
    Location: `Address: 9001ME East Bel-air, Felix Ave., Barangay San Isidro, Cainta, Rizal, Philippines`,
    Location2: `Phone Number: +63 995 836 5775`,
    Location3: `Operating Hours: Open 24 hours a day, 7 days a week`,
  },
  {
    image: img3,
    title: `🏨 Hotel Sogo Cainta`,
    description: `is a beloved Filipino restaurant in Marikina, renowned for its hearty silog meals and classic Filipino comfort food. With a reputation built over the years, it continues to be a favorite among locals and visitors alike.`,
    title2: `🏨 Hotel Overview`,
    description2: `Tapsi Ni Vivian offers a diverse menu`,
    description3: `that includes:`,

    Room_Features: `🛏️ Room Features`,
    Room_Features_description: `Rooms at Santorini Hotel are designed for comfort and convenience, featuring:`,
    Room_Features2: `Air conditioning`,
    Room_Features3: `Cable TV`,
    Room_Features4: `Free Wi-Fi`,
    Room_Features5: `Private bathrooms with shower facilities`,
    Room_Features6: `24-hour room service available`,

    title3: `📍 Location & Contact`,
    Location: `Address: Imelda Avenue, Barangay San Isidro, Cainta, Rizal, Philippines`,
    Location2: `Phone Number: +63 945 988 2426`,
    Location3: `Operating Hours: Front Desk: Open 24 hours a day, 7 days a week`,
  },
]
const Hotel_Main_Phone = () => {

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
    <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col gap-20 w-full text-white'>
      <div className='justify-items-center scrollbar-hidden pt-2 flex flex-col gap-5 w-full'>
        {/* Picture Content */}
        <div className='w-full h-full flex flex-col'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex flex-row items-center justify-center h-full w-full rounded-lg appear-sum'>
              <div className='flex items-center h-[50px] rounded-full bg-white  appear-sum'>
                {/* right arrow */}
                <BsChevronLeft className='text-black' onClick={prev} size={30} />
              </div>

              <img className='w-[300px] sm:w-[90%] h-[650px] appear-sum' src={current.image}
                alt={`Slide ${index}`} />

              <div className='flex items-center h-[50px] rounded-full bg-white appear-sum'>
                {/* right arrow */}
                <BsChevronRight className='text-black' onClick={next} size={30} />
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        {/*Cainta Culture */}
        <div className='flex flex-col w-full items-center'>
          <div className='flex flex-col gap-10 bg-blue-950 rounded-lg w-full p-5 items-center justify-center blocks pl-5'>
            <div className='flex flex-col gap-2 items-center blocks'>
              <h1 className='text-white text-5xl text-center blocks'>{current.title}</h1>
            </div>
            <p className='text-white text-2xl'>{current.description}</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 bg-blue-950 rounded-lgitems-center justify-center blocks pl-5'>
          <div className='flex flex-col gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks items-center'>
              <h1 className='text-white text-5xl blocks'>{current.title2}</h1>
            </div>
            <ul className='text-white text-2xl list-disc blocks pl-7'>
              <p className='text-white text-2xl blocks'>{current.Room_Features_description}</p>
              <li>{current.Room_Features2}</li>
              <li>{current.Room_Features3}</li>
              <li>{current.Room_Features4}</li>
              <li>{current.Room_Features5}</li>
              <li>{current.Room_Features6}</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-10 bg-blue-950 rounded-lgitems-center justify-center blocks pl-5'>
          <div className='flex flex-col gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks items-center'>
              <h1 className='text-white text-5xl blocks'>{current.title3}</h1>
            </div>
            <ul className='text-white text-2xl list-disc blocks pl-7'>
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

export default Hotel_Main_Phone