import React from 'react'
import Link from 'next/link'
import {TbPhoneCall,TbMailFast} from 'react-icons/tb'
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaTelegram,FaFacebook} from 'react-icons/fa'
import {IoMdGlobe} from 'react-icons/io'
const Footer = () => {
  return (
    <div className='text-sm text-center  bg-slate-900 max-[350px]:w-[400px]'>
      <div className='grid grid-cols-3  text-teal-50 h-60 max-[350px]:w-[400px]'>
        <div className='flex flex-col text-center max-[350px]:h-[100px]'>
              <div className='flex flex-row mt-4'>
                    <div className='flex flex-col'>
                      <Link href="/" className="font-bold text-xl cursor-pointer  mt-3 text-green-600">
                      <h1>Pavlovniya<span className="text-blue-500">.uz</span></h1>
                      </Link>
                      <p className='text-white sm:m-4 m-1'>Ўзбекистонда ва марказий осиёда павловния дарахти ва махсулотларини купайтириш учун www.pavloniya.uz уз хизматларини таклиф килади.</p>
                    </div>
              </div>
              <p className='flex flex-row  mx-auto'> <IoMdGlobe className='h-5 w-5'/>www.pavloniya.uz</p>
             
        </div>
        <div className='flex flex-col mx-auto'>
          <h1 className='flex flex-row text-lg mt-8 max-md:text-base mb-4 mx-auto'>Маълумот</h1>
          <ul className='tracking-wider '>
            <li className='py-1 hover:scale-110'><Link href="/">Бош сахифа</Link></li>
            <li className='py-1 hover:scale-110'><Link href="/about">Павлония хакида</Link></li>
            <li className='py-1 hover:scale-110'><Link href="/service">Хизматлар</Link></li>
            <li className='py-1 hover:scale-110'><Link href="/shop">Павлония Фойдаси</Link></li>
            <li className='py-1 hover:scale-110'><Link href="/contact">Алоқа</Link></li>
          </ul>
        </div>
        <div className='flex flex-col mx-auto max-[350px]:w-[100px]'>
          <h1 className='flex flex-row text-lg mt-8 max-md:text-base mb-4 mx-auto'>Бизга богланинг</h1>
          <p className='py-1'>+998942757462</p>
          <p className='py-1'>+998941590836</p>
          <ul className='flex flex-row mx-auto mt-2'>
              <li className='h-6 w-6 hover:scale-110'><a href='https://instagram.com/pavlovniya.uz?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer" alt='instagram/pavlovniya.uz'><AiFillInstagram/></a></li>
              <li className='h-6 w-6 hover:scale-110'><a href='https://t.me/Pavloniya_biz' target='_blank' rel="noreferrer" alt='t.me/Pavloniya_biz'><FaTelegram /></a></li>
              <li className='h-6 w-6 hover:scale-110'><a><RiWhatsappFill/></a></li>
              <li className='h-6 w-6 hover:scale-110'><a href='https://www.facebook.com/groups/1190203988530515/?ref=share' target='_blank' rel="noreferrer" alt='facebook/pavloniya.uz'><FaFacebook/></a></li>
           </ul>
       
          
        </div>
      </div>
  
        <div className='text-white bg-slate-800 h-10 m-auto'>
          <p className='pt-2'>©All rights reserved.</p>
        </div>
   </div>
      

  )
}

export default Footer