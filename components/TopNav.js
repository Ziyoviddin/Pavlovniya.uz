import React from 'react'
import Image from 'next/image'
import {FaTelegram,FaFacebook} from 'react-icons/fa'
import {TbPhoneCall} from 'react-icons/tb'
import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'


const TopNav = () => {
  return (
    <div className='flex flex-row justify-end bg-[#40b60da3] h-[55px] w-screen max-[350px]:w-[400px] mx-auto'>

     
           <div className='flex  items-center '>    
              <div className=' flex flex-row items-center '>
                <a className='hover:scale-150 text-blue-600'><TbPhoneCall/></a>
                <p className=' font-bold'>+998942757462</p>
              </div>
              <div>
                <p className='font-bold text-white mx-2 pb-1'>|</p>
              </div>
              <div className=' flex flex-row items-center'>
                <a href='https://t.me/Pavloniya_biz' target='_blank' rel="noreferrer" alt='t.me/Pavloniya_biz' className='hover:scale-150 text-blue-500  '><FaTelegram /></a>
                <p className=' font-mono'>Telegram</p>
              </div>
            </div>

           <div className='flex md:mx-20 sm:mx-3 '>
                <ul className='flex items-center md:text-2xl sm:mr-5 ml-2'>
                    <li className='text-[#db4782] sm:p-2 p-1 hover:scale-150'><a href='https://instagram.com/pavlovniya.uz?igshid=ZDdkNTZiNTM=' target='_blank' rel="noreferrer" alt='instagram/pavlovniya.uz' className=''><AiFillInstagram/></a></li>
                    <li className='text-[#2c8ed9] sm:p-2 p-1 hover:scale-150'><a href='https://t.me/Pavloniya_biz' target='_blank' rel="noreferrer" alt='t.me/Pavloniya_biz'><FaTelegram /></a></li>
                    <li className='text-white sm:p-2 p-1 hover:scale-150'><a><RiWhatsappFill/></a></li>
                    <li className='text-blue-600 sm:p-2 p-1 md:pr-8 pr-5  hover:scale-150'><a href='https://www.facebook.com/groups/1190203988530515/?ref=share' target='_blank' rel="noreferrer" alt='facebook/pavloniya.uz'><FaFacebook/></a></li>
                </ul>
            </div> 
        </div>
    
  )
}

export default TopNav