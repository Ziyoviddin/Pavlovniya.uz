import React from 'react'
import Image from 'next/image'
import niholchaImg from '../assets/images/niholchaShow.png' 
import styles from '../styles/Responsive.module.css'
import {CgTrees} from 'react-icons/cg'
import Link from 'next/link'


const Info = ()=> {
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row text-3xl font-bold '>
                <h1 className='text-[#292828]'><span className='text-[#75d80b]'>Павловния</span> Етиштириш</h1>
                <div className='mx-2 text-[#5baf2a] '>
                  <CgTrees/>
                </div>
            </div>
            <div className='flex flex-row max-[600px]:flex-col items-center w-screen m-0'>
                <div className='ml-20 mr-10'>
                    <Image src={niholchaImg} className={styles.niholchaImg}/>
                </div>
                <div className='md:tracking-widest '>
                    <h1 className='text-2xl text-[#2e2a2a] font-semibold font-serif md:mb-4 max-[600px]:my-3'><Link href='/about' className='hover:cursor-pointer hover:underline decoration-teal-500'><span className='text-[#75d80b]'>Павлония</span> хакида</Link></h1>
                    <p className='text-sm'>Мамлакатимизда сўнги 5-6 йилларда Павловнияга қизиқиш ниҳоятда ортиб бормоқда. Павловния Ер шарида мавжуд дарахтлардан нафақат энг тез ўсиши билан ажралиб туради, балки ҳаёлий гўзаллик кашф этиб гуллаши, қимматли ёғоч, асал, биомасса манбаи эканлиги билан қадрланади, у манзарали дарахт сифатида истироҳат боғлари, хиёбонларни безайди. </p>
                    <p className='text-sm'>  Ёғочи жудаям сифатли хисобланади. Павловния ёғочини қурилишини барча нозик сохаларида , эшик-ром , пол-паталок , уйни томларини ёпишда ,мебель ясашда, мусиқа асбоблари ясашда ишлатса булади. <span className='font-semibold'><Link href='/about' className='hover:cursor-pointer hover:text-blue-500'>Батафсил...</Link></span></p>
                </div>
            
            </div>
        </div>
    )
} 

export default Info