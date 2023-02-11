import React from 'react'
import Image from 'next/image'

const Card = ({image,title,description,cost}) => {
  return (
    <div className='flex flex-col justify-center items-center rounded shadow-md shadow-[#3b5572] m-3 min-[900px]:m-6'>
        <Image src={image} alt='img' className='rounded h-[300px] w-[280px]'/>
        <h1 className='font-bold font-sans text-[#60a24c] text-center w-[80%] py-2'>{title}</h1>
        <p className='w-40 text-sm font-semibold'>{description}</p>
        <h3 className='font-semibold font-sans text-teal-900 text-center py-2'><span className='font-medium text-[#7f2a4b]'>Нарх:</span>{cost}</h3>
    </div>
  )
}

export default Card