import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const img1 = "./Rizal_Monument_at_Rizal_Park.jpg"
const img2 = "./SerratosPasalubongCenter.jpg"
const img3 = "./HinulugangTaktakNational Park.jpg"

const images = [
  {
    image: img1,
    title: `🏛️ Rizal Park`,
    description: `Rizal Park, also known as Luneta Park, is a prominent historical and cultural landmark situated in the heart of Manila, Philippines. Spanning approximately 58 to 60 hectares, it serves as a tribute to Dr. José Rizal, the nation's national hero, and stands as a symbol of the Philippines' journey toward independence.`,
    title2: `🏛️ Historical Significance`,
    description2: `The park is renowned as the site of Dr. José Rizal's execution on December 30, 1896, by Spanish colonial authorities. His martyrdom galvanized the Filipino people's resolve for independence, making the location a national symbol of freedom and patriotism. The centerpiece of the park is the Rizal Monument, a bronze-and-granite structure that houses his remains and commemorates his contributions to the nation's history .`,

    title3: `📍 Location & Contact`,
    Location: `Location: Roxas Boulevard, Ermita, Manila, 1000 Metro Manila, Philippines`,
    Location2: `Contact: +63 919 926 4413`,
    Location3: `Operating Hours: Daily: 5:00 AM - 8:00 PM`,
  },
  {
    image: img2,
    title: `🛍️ Serratos Pasalubong Center`,
    description: `Serratos Pasalubong Center is a specialty store located in Cainta, Rizal, Philippines, offering a diverse selection of local and imported delicacies. It's an ideal destination for those seeking authentic Filipino treats or unique souvenirs.`,
    title2: `🛍️ Overview`,
    description2: `Serratos Pasalubong Center may not have an extensive or widely documented historical significance in the traditional sense (e.g., linked to historical events or heritage sites), but it does hold cultural importance within the local community and the broader Philippine context.`,

    title3: `📍 Location & Contact`,
    Location: `Location: Unit 2, The Paragon Square, Felix Avenue, Cainta, Rizal, Philippines`,
    Location2: `Contact: +63 939 505 6914`,
    Location3: `Monday to Saturday: 8:00 AM - 11:00 PM, Sunday: 11:00 AM – 6:00 PM `,
  },
  {
    image: img3,
    title: `🌊 Hinulugang Taktak National Park`,
    description: `Hinulugang Taktak National Park, officially known as the Hinulugang Taktak Protected Landscape, is a renowned natural and cultural landmark located in Barangay Dela Paz, Antipolo City, Rizal, Philippines. Situated approximately 1.7 kilometers from the Antipolo Cathedral, the park is a popular destination for both locals and tourists seeking a serene escape from urban life .`,
    title2: `🌊 Historical and Cultural Significance`,
    description2: `Serratos Pasalubong Center may not have an extensive or widely documented historical significance in the traditional sense (e.g., linked to historical events or heritage sites), but it does hold cultural importance within the local community and the broader Philippine context.`,

    title3: `📍 Location & Contact`,
    Location: `Location: Taktak Road, Barangay Dela Paz, Antipolo City, Rizal, Philippines`,
    Location2: `Phone: (02) 689-4566`,
    Location3: `Operating Hours: Tuesday to Sunday, 7:00 AM to 4:00 PM.`,
  },
]
const Tourist_Spot_Main_Phone = () => {

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
    <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col text-white w-full'>
      <div className='justify-items-center scrollbar-hidden pt-2 flex flex-col gap-5 w-full'>
        {/* Picture Content */}
        <div className='w-full h-full flex flex-col'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex flex-row items-center justify-center h-full w-full rounded-lg  appear-sum'>
              <div className='flex items-center h-[50px] rounded-full bg-white appear-sum'>
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
              <p className='text-white text-2xl blocks'>{current.description2}</p>
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

export default Tourist_Spot_Main_Phone