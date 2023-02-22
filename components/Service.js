import React from 'react'
import Link from 'next/link'
import {SiOverleaf, SiGumtree} from 'react-icons/si'
//import {CgTree} from 'react-icons/cg'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiSupport} from 'react-icons/bi'

const Service = () => {
  return (
    <div className='flex flex-col bg-teal-50 min-[640px]:p-20 mt-5 '>
        <div className='flex justify-center items-center pb-8  text-2xl font-bold tracking-wider'>
            <h1 className='text-[#292828]'><Link href='/service' className='hover:cursor-pointer hover:underline decoration-teal-500'>Бизнинг <span className='text-[#75d80b]'> Хизматлар
</span></Link></h1>
        </div>
        <div className='grid grid-cols-2 max-md:grid-cols-1 md:gap-4 justify-center max-[600px]:flex-col'>
            <div className='flex flex-row p-2 shadow-md shadow-[#363333] mt-4 bg-[#f8faf9] mx-auto max-sm:w-[80vw]'>
                <div className='text-5xl text-[#75d80b] mx-2'>
                    <SiOverleaf/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold font-sans text-[#75d80b]'>Нихолча</h3>
                    <p className='italic'>Ёгоч махсулоти учун мулжалланган нихолча навларини етиштириш ва арзон нархда харидорларга йетказиш.</p>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md shadow-[#363333] mt-4 bg-[#f8faf9] mx-auto max-sm:w-[80vw]'>
                <div className='text-5xl text-[#75d80b] mx-2'>
                    <SiGumtree/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold font-sans text-[#75d80b]'>Кўчат</h3>
                    <p className='italic'>Бир йиллик кучатларни бахор ва куз мавсумида екиш учун йетиштириш ва  хамёнбоп хизмат курсатиш.</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 mb-4 max-md:grid-cols-1 md:gap-4 justify-center max-[600px]:flex-col'>
        <div className='flex flex-row p-2 shadow-md shadow-[#363333] mt-4 bg-[#f8faf9] mx-auto max-sm:w-[80vw]'>
                <div className='text-5xl text-[#75d80b] mx-2'>
                    <TbTruckDelivery/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold font-sans text-[#75d80b]'>Доставка</h3>
                    <p className='italic'>Мижозларга харидларига мос келадиган доставка хизматларида ёрдам бериш. </p>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md shadow-[#363333] mt-4 bg-[#f8faf9] mx-auto max-sm:w-[80vw]'>
                <div className='text-5xl text-[#75d80b] mx-2'>
                    <BiSupport/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold font-sans text-[#75d80b]'>Ёрдам</h3>
                    <p className='italic'>Екиш ва етиштириш, плантация килиш ва бошкалар  бойича мижозларимиз билан доимий алокада болиш ва малумот бериш.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Service