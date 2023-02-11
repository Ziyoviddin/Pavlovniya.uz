import Head from "next/head" 
import Image from "next/image"
import logo from "../assets/my-logo-removebg.png"
import {BsFillHandIndexThumbFill} from "react-icons/bs"

const contact = () => {
    return(
        <div className="w-screen">
            <Head>
                <title>Алоқа</title>
            </Head>

            <div className="flex flex-col mx-auto pt-10 max-[350px]:ml-10">
                <Image src={logo} alt='Pavlovniya Logo' className="bg-[#edf8fa] rounded-full h-60 w-60 mx-auto"/>
                <h1 className="text-[#16071c] text-4xl font-bold tracking-wide mx-auto py-3">Бизга Богланинг</h1>
                <p className="font-mono mx-auto py-2 ">Биз Билан Алоқа</p>
                <hr className="w-40 border-2  border-green-700 rounded-lg mx-auto max-[350px]:hidden"/> 
                <p className=" mx-auto py-1"><span className='font-bold'>Тел:</span> <span className="underline decoration-green-500 tracking-widest">+998942757462</span></p>
                <p className=" mx-auto py-1"><span className='font-bold'>Манзил:</span> Наманган вил. Норин т.</p>
                <p className=" mx-auto py-1"><span className='font-bold'>Телеграм:</span > <span className="underline decoration-green-500 tracking-widest">+998942757462</span></p>
                <p className=" mx-auto py-1"><span className='font-bold'>Почта:</span> example@gmail.com</p>
                <div className=" mx-auto py-2 flex flex-row"> <BsFillHandIndexThumbFill className="text-yellow-400"/><p className="pl-2 decoration-orange-500 underline">Алоқа.</p></div>
               
            </div>
        </div>
    )
}

export default contact