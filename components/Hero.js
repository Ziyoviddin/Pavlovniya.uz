import React from 'react'
import styles from '../styles/Responsive.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-screen max-[350px]:w-[400px]'>
      <div className={styles.hero} >
        <div className='flex flex-col justify-center items-center sm:mt-[130px] mt-[80px]  '>
          <h1 className='font-bold text-[#f4f5f2] lg:text-4xl sm:text-3xl tracking-wider  bg-opacity-20 shadow-lg shadow-inherit bg-slate-700 py-2'>Ўзбекистонда Павловния Етиштириш</h1>
          <h3 className='font-mono text-teal-100 lg:text-2xl bg-opacity-20 shadow-lg shadow-inherit bg-slate-800'>Келажак учун яшил ва тез усувчи инвестиция.</h3>
        </div>
        <div className='flex flex-row justify-center items-center m-8 '>
          <button className='bg-blue text-green-200 px-1 mx-2 border-2 rounded italic  border-green-200  hover:scale-110'><Link href='/about'>Маълумот</Link></button>
          <button className='bg-blue text-black px-1 mx-2 border-2 rounded italic  bg-[#f5f8f7] hover:scale-110'><Link href='/contact'>Алоқа</Link></button>
        </div>
        
      </div>
      <br/>
    </div>
  )
}

export default Hero