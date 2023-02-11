import React, { useRef, useState } from "react";
// Import Swiper React components:
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import myImg1 from "../assets/images/niholcha1.jpg"
import myImg2 from "../assets/images/pavloniya2.jpg"
import myImg3 from "../assets/images/tomir.jpg"
import myImg4 from "../assets/images/biogumus.png"

//import { items } from "../public/Items.json";
//import data from "../public/Items.json"

// Import Swiper styles
import styles from "../styles/Card.module.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Pagination, Navigation } from "swiper";


export default function ProductCard1() {
  //const { responsive } = items;

  return (
    <div className={styles.testSwiper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className={styles.mySwiper}
        >
        {/*{
        responsive.map((item)=>(
          <SwiperSlide key={item.id}>
          <div className={styles.imgBox}>
         <img src={item.imageUrl} alt="slides" className={styles.image}/>
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <p>Buget</p>
          </SwiperSlide>)
        )
      }*/}
          
       
        <SwiperSlide>
          <div className={styles.cardBox}>
            <Image src={myImg1} alt='img niholcha' className={styles.image}/>
            <h1 className='font-bold font-sans text-[#60a24c] text-center text-2xl  p-5'>Нихолча</h1>
            <p className='text-md font-semibold text-center'>Нихолчаларни Апрелдан Августгача екиш мумкин.</p>
            <h3 className='font-semibold font-sans text-teal-900 text-center text-2xl p-3 '><span className='font-medium text-[#7f2a4b]'>Нарх:</span>3000~5000 сум</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <Image src={myImg2} alt='img kochat' className={styles.image}/>
            <h1 className='font-bold font-sans text-[#60a24c] text-center text-2xl  p-5'>Бир йиллик кучат</h1>
            <p className='text-md font-semibold text-center'>Куз ва бахор мавсумида екиш учун тайёр бир йиллик кучатлар.</p>
            <h3 className='font-semibold font-sans text-teal-900 text-center text-2xl p-3 '><span className='font-medium text-[#7f2a4b]'>Нарх:</span>10.000~50.000 сум</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <Image src={myImg3} alt='img tomir' className={styles.image}/>
            <h1 className='font-bold font-sans text-[#60a24c] text-center text-2xl  p-5'>Томир Қаламча</h1>
            <p className='text-md font-semibold text-center'>Узингиз нихолча йетиштирмокчимисиз, унда томир каламча сиз учун.</p>
            <h3 className='font-semibold font-sans text-teal-900 text-center text-2xl p-3 '><span className='font-medium text-[#7f2a4b]'>Нарх:</span>800~1500 сум</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <Image src={myImg4} alt='img biogumus' className={styles.image}/>
            <h1 className='font-bold font-sans text-[#60a24c] text-center text-2xl  p-5'>Биогумус</h1>
            <p className='text-md font-semibold text-center'>Ер унумдорлиги учун сифатли ва хамёнбоп биогумус.</p>
            <h3 className='font-semibold font-sans text-teal-900 text-center text-2xl p-3 '><span className='font-medium text-[#7f2a4b]'>Нарх:</span>2000~3000 сум</h3>
          </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
  );
}
