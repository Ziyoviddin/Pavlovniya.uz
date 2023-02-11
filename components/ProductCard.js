import React from 'react'
import Link from 'next/link'
import Card from './Card'
import myImg1 from "../assets/images/niholcha1.jpg"
import myImg2 from "../assets/images/pavloniya2.jpg"
import myImg3 from "../assets/images/tomir.jpg"
import myImg4 from "../assets/images/biogumus.png"


const ProductCard = () => {
    
  return (
    <div className='flex flex-col max-[650px]:hidden'>
        <div className='flex justify-center items-center py-8  text-2xl font-bold tracking-wider'>
            <h1 className='text-[#292828]'><Link href='/service' className='hover:cursor-pointer hover:underline decoration-teal-500'>Бизнинг <span className='text-[#75d80b]'>Махсулотлар</span></Link></h1>
        </div>
        <div className='flex flex-row justify-center items-center  max-[1300px]:flex-col'>
            <div className='flex flex-row'>
                 <Card 
                    image={myImg1} 
                    title='Нихолча' 
                    description='Нихолчаларни Апрелдан Августгача екиш мумкин.'
                    cost=" 3000~5000 сум"
                />
                 <Card 
                    image={myImg2} 
                    title="Бир йиллик кучат" 
                    description='Куз ва бахор мавсумида екиш учун тайёр бир йиллик кучатлар.'
                    cost=" 10.000~50.000 сум"
                />
            </div>
            <div className='flex flex-row'>
                 <Card 
                    image={myImg3} 
                    title='Томир Қаламча' 
                    description='Узингиз нихолча йетиштирмокчимисиз, унда томир каламча сиз учун.'
                    cost=" 800~1500 сум"
                />
                 <Card 
                    image={myImg4} 
                    title='Биогумус' 
                    description='Ер унумдорлиги учун сифатли ва хамёнбоп биогумус.'
                    cost=" 1000~3000 сум"
                />
            </div>
    
        </div>
    </div>
  )
}

export default ProductCard