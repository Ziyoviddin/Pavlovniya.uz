import React from 'react'
import styles from '../styles/Clip.module.css'
import {RiNumber1,RiNumber2,RiNumber3} from 'react-icons/ri'

const ChooseUs = () => {
  return (
    <div className='w-screen relative m-auto max-[350px]:w-[400px]'>
        <div className={styles.clipDiv}>
            <div className='text-[#f4f8ed] ml-6 m-auto '>
              <div className=''>
                <h3 className='font-mono font-medium text-[#cfef97] mt-5 '>Нега Биз ?</h3>
                <h1 className='font-mono font-bold text-[#eceee1] tracking-tight'>Биздан килинган хариднинг афзалликлари:</h1>
                <hr className='border-2 border-[#75d80b] rounded-lg my-4 mx-20 w-20 flex text-[#75d80b]'/>
              </div>

              <div className='my-4'>
                <div className='flex flex-row max-[600px]:text-[8px] max-[1200px]:text-[12px] min-[600px]:mt-5'>
                  <div className='text-4xl text-[#f4f8ed] mx-2'>
                    <RiNumber1/>
                  </div>
                  <div className='flex flex-col'>
                      <h3 className='font-bold font-sans text-[#cfef97] '>Ишончли Нав:</h3>
                      <p className='italic max-[620px]:w-40 max-[1200px]:w-[300px] w-[600px]'>Павловнияни жудахам куп турлари бор. Ёгоч махсулоти етиштириш учун, ишончли навни екиш мухимдир.</p>
                  </div>
                </div>
                <div className='flex flex-row max-[600px]:text-[8px] max-[1200px]:text-[12px] min-[600px]:mt-5'>
                  <div className='text-4xl text-[#f4f8ed] mx-2'>
                  <RiNumber2/>
                  </div>
                  <div className='flex flex-col '>
                      <h3 className='font-bold font-sans text-[#cfef97] '>Хамёнбоп Нарх:</h3>
                      <p className='italic max-[630px]:w-40 max-[1200px]:w-[300px] w-[600px]'>Хамёнбоп нархда  ва сифатли хизмат курсатишни бизнесимизни усиши учун асосиш омили деб биламиз.</p>
                  </div>
                </div>
                <div className='flex flex-row max-[600px]:text-[8px] max-[1200px]:text-[12px] min-[600px]:mt-5'>
                  <div className='text-4xl text-[#f4f8ed] mx-2'>
                  <RiNumber3/>
                  </div>
                  <div className='flex flex-col  '>
                      <h3 className='font-bold font-sans text-[#cfef97] '>Доимий Алоқа:</h3>
                      <p className='italic max-[700px]:w-40 max-[1200px]:w-[300px] w-[600px]'>Павловния етиштириш жараёнларида мижозларимиз билан доимий алока .</p>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <div className={styles.clipImg}>
          
        </div>
       <br/>
    </div>
  )
}

export default ChooseUs