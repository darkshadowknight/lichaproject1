import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";

const img1 = "./sum_cainta1.webp"
const img12 = "./sum_cainta2.jpg"
const img13 = "./sum_cainta3.jpg"
const img14 = "./sum_cainta4.jpg"
const img15 = "./sum_cainta5.jpg"
const img2 = "./cainta_Feast of Our Lady of Light.webp"
const img3 = "./cainta_food.jpg"
const img4 = "./cainta_bayanihan_2.jpg"

const images = [
  {
    image: img1,
    title: `🎭 SumBingTik Festival`,
    description: `The SumBingTik Festival is an annual cultural celebration held in Cainta, Rizal, Philippines, every December 1st. The name "SumBingTik" is a portmanteau of three traditional Filipino delicacies: suman, bibingka, and latik, which are integral to Cainta's culinary heritage. The festival was first celebrated in 2014 and has since become a significant event in the town's calendar.`,
    description2: `The SumBingTik Festival is an annual cultural celebration held in Cainta, Rizal, Philippines, every December 1st.`,
    description3: `It coincides with the town's founding anniversary and the feast of Our Lady of Light, Cainta's principal patron saint.`,
    description4: `The festival's name, "SumBingTik," is a portmanteau of three traditional Filipino delicacies: suman, bibingka, and latik, which are made from glutinous rice and coconut, ingredients abundant in the region .`
  },
  {
    image: img2,
    title: `⛪Feast of Our Lady of Light (Patron Saint)`,
    description: `The Feast of Our Lady of Light (also known as Nuestra Señora de la Luz or Our Lady of the Light) is a celebration dedicated to the Blessed Virgin Mary under the title "Our Lady of Light."`,
    description2: `She is venerated as a powerful intercessor and guide who brings the light of Christ into the lives of believers, dispelling darkness and leading the faithful toward spiritual enlightenment.`
  },
  {
    image: img3,
    title: `🥘Bibingka`,
    description: `Cainta is known as the "Bibingka Capital of the Philippines." This traditional Filipino rice cake is made from rice flour, coconut milk, sugar, and eggs, baked in a clay oven, and typically topped with salted eggs, cheese, and grated coconut. It's commonly eaten during the Christmas season but is enjoyed year-round.`,
  },
  {
    image: img4,
    title: `🏘️Cainta Municipal Town Hall`,
    description: `The community spirit known as "Bayanihan" is a deeply rooted Filipino cultural value that reflects unity, cooperation, and communal effort.`,
    description2: `In Cainta, Rizal, a town known for its rich history, strong family ties, and vibrant traditions, Bayanihan continues to thrive in both traditional and modern forms.`

  },
]
const Pictures = [
  {
    Picture: img1
  },
  {
    Picture: img12
  },
  {
    Picture: img13
  },
  {
    Picture: img14
  },
  {
    Picture: img15
  },
]

const Culture_Main = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((previndex) => (previndex + 1) % images.length);
  };
  const prev = () => {
    setIndex((previndex) =>
      previndex === 0 ? images.length - 1 : previndex - 1
    );
  };

  const [indexs, setIndexs] = useState(0)

  const nexts = () => {
    setIndexs((previndexs) => (previndexs + 1) % Pictures.length);
  };
  const prevs = () => {
    setIndexs((previndexs) =>
      previndexs === 0 ? images.length - 1 : previndexs - 1
    );
  };

  const currents = Pictures[indexs];
  const current = images[index];

  return (
    <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col text-white gap-[180px]'>
      <div className='w-full h-full flex flex-col '>
        <div className='flex flex-row items-center justify-center gap-5 '>
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
            </div>
          </div>
          <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
            {/* right arrow */}
            <BsChevronRight onClick={next} size={40} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[100px] w-full items-center pb-30 '>
        <div
          style={{ display: index === 0 ? 'flex' : 'none' }}
          className='flex flex-row items-center justify-center gap-5'>
          <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
            {/* left arrow */}
            <BsChevronLeft onClick={prevs} size={40} />
          </div>
          <div className='flex flex-row items-center h-[750px] w-[1250px] gap-5 rounded-lg bg-white appear-sum'>
            <img className='w-full h-full rounded-lg appear-sum' src={currents.Picture}
              alt={`Slide ${indexs}`} />
          </div>
          <div className='bg-white h-[50px] w-[50px] flex justify-center items-center rounded-full'>
            {/* right arrow */}
            <BsChevronRight onClick={nexts} size={40} />
          </div>
        </div>
        {/* Cainta Culture */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-row w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <h1 className='text-white text-7xl text-center blocks'><MdMapsHomeWork /></h1>
              <h1 className='text-white text-7xl text-center blocks'>Cainta Culture</h1>
            </div>
            <p className='text-white text-3xl'>Cainta, a municipality in the province of Rizal in the Philippines, has a rich and vibrant culture that blends indigenous, Spanish, and modern Filipino influences.</p>
          </div>
        </div>
        {/*  Festivals and Traditions */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <p className='text-white text-4xl blocks'> 🎭 Festivals and Traditions</p>
            </div>
            <ul className='text-white text-3xl list-disc blocks'>
              <li>Senakulo: Cainta is famous for its dramatic Senakulo, a theatrical reenactment of the Passion of Christ held during Holy Week. This tradition has deep Spanish colonial roots and draws both locals and visitors.</li>
              <li>Feast of Our Lady of Light (Ina ng Kalinawagan) – Celebrated every December 1, this is Cainta’s town fiesta, honoring the town's patron saint. The celebration includes a procession, masses, street dancing, and various community events.</li>
            </ul>
          </div>
        </div>
        {/* Cuisine */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[600px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-col gap-5 blocks'>
              <p className='text-white text-4xl blocks'> 🍲 Cuisine</p>
              <p className='text-white text-4xl blocks'> Cainta is known for its native delicacies, especially kakanin (rice cakes):</p>
            </div>
            <ul className='text-white text-3xl list-disc blocks'>
              <li>Bibingka – Cainta's version is thick, soft, and traditionally cooked in clay pots lined with banana leaves.</li>
              <li>Suman – Glutinous rice delicacy wrapped in banana leaves.</li>
              <li>Kalamay and Latik – Sweet sticky rice desserts that are popular during holidays and fiestas.</li>
              <ul className='text-white text-3xl list-disc blocks'>
                <li>Many homes and shops in Cainta specialize in these, and they're often bought as pasalubong (gifts).</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* 🎨 Arts and Community */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <p className='text-white text-4xl blocks'> 🎨 Arts and Community </p>
            </div>
            <ul className='text-white text-3xl list-disc blocks'>
              <p className='text-white text-3xl blocks'>It boasts:</p>
              <li>Cainta is home to various local artists and craftsmen. Traditional art forms like wood carving and religious iconography can still be seen, especially tied to Catholic practices.</li>
              <li>Local theater and street performances are often staged during festivals.</li>
            </ul>
          </div>
        </div>
        {/* Religion */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <p className='text-white text-4xl blocks'> ⛪ Religion</p>
            </div>
            <ul className='text-white text-3xl list-disc blocks'>
              <li>Predominantly Roman Catholic, but other Christian denominations are also present.</li>
              <li>Churches are central to community life, especially the Diocesan Shrine and Parish of Our Lady of Light, a historical church rebuilt after damages from earthquakes and wars.</li>
            </ul>
          </div>
        </div>
        {/*  People and Values */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <p className='text-white text-4xl blocks'>   👥 People and Values</p>
            </div>
            <ul className='text-white text-3xl list-disc blocks'>
              <li>Residents are often known as Cainteños.</li>
              <li>Like much of the Philippines, family and community ties are strong.</li>
              <li>There's a strong spirit of bayanihan (communal unity), especially during town events or helping neighbors in times of need.</li>
            </ul>
          </div>
        </div>
        {/*  Urban-Rural Mix */}
        <div className='flex flex-col gap-10 bg-blue-900 rounded-lg h-[400px] w-[1100px] items-center justify-center blocks'>
          <div className='flex flex-col w-[1000px] gap-5 blocks'>
            <div className='flex flex-row gap-5 blocks'>
              <p className='text-white text-4xl blocks'> 📍 Urban-Rural Mix</p>
            </div>
            <p className='text-white text-3xl'>
              Cainta sits on the border of Metro Manila, so it has a unique blend of urban and provincial life. While malls and modern businesses thrive, traditional markets and older neighborhoods still maintain a strong local flavor.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Culture_Main