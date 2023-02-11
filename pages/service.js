import Head from "next/head" 
import Image from "next/image"

import mypic from "../assets/images/niholcha1.jpg"
import mypic1 from "../assets/images/pavloniya2.jpg"
import mypic2 from "../assets/images/tomir.jpg"
import mypic3 from "../assets/images/biogumus.png"
const service = () => {
    return(
        <div className="">
            <Head>
                <title>Павловния Хизматлармиз</title>
            </Head>
            <div className="max-[350px]:w-[550px] w-screen">
               <div className="bg-teal-900 text-center h-60 max-[350px]:w-[550px] w-screen">
                    <h1 className="text-teal-300 text-4xl my-auto pt-14 max-[350px]:pl-20">Бизнинг Хизматлармиз</h1>
                    <p className="text-teal-50 font-mono my-auto pt-4 max-[350px]:pl-20">Cифатли ва Хамёнбоп нархларда</p>
                </div> 
                <div className="font-mono text-start pb-10">
                    <p className="py-10 px-16 max-sm:w-80 max-sm:text-xs max-md:text-base mx-auto"><span className="font-semibold text-lg">Павловния дарахти</span> тез усиши ва сифатли материал бериши билан бошка дарахтлардан ажралиб туради. Ерингиздан унумли фойдаланиб келажак учун яшил ва усувчи сармоя екинг. Бир неча йиллик павловния етиштириш  тажрибаларимиз билан павловния екмокчи болганларга уз хизматларимизни таклиф киламиз.</p>
                </div>
                <hr className="w-96 mb-6 border-2  border-green-700 rounded-lg mx-auto"/>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:grid-rows-4 max-[300px]:ml-20">
                 <div className=" place-self-center">
                    <div className='h-80 w-80 p-4'>
                        <Image src={mypic} className='rounded-lg h-72 shadow-md shadow-teal-300'/>
                    </div> 
                 </div>
                 <div className="lg:col-span-2  max-[350px]:place-self-center max-[350px]:w-80 sm:pt-8">
                    <h1 className="max-sm:text-center font-bold tracking-wide text-[#288e2b] pb-3">Нихолча</h1>
                    <p className="max-sm:text-base max-sm:text-center">Ёгоч махсулоти учун мулжалланган нихолча навларини етиштириш ва арзон нархда харидорларга йетказиш хизмати. Павлония нихолчаларини бахорнинг бошларидан йознинг охиригача екиш мумкин. Катта ер майдонларига  катта харажат килмастан плантатсия килиш имконини беради.</p>
                 </div>
                 <div className=" place-self-center">
                    <div className='h-80 w-80 p-4'>
                        <Image src={mypic1} className='rounded-lg h-72 shadow-md shadow-teal-300'/>
                    </div>    
                 </div>
                 <div className="lg:col-span-2 max-[350px]:place-self-center max-[350px]:w-80 sm:pt-8">
                    <h1 className="max-sm:text-center font-bold tracking-wide text-[#288e2b] pb-3">Кўчат</h1>
                    <p className="max-sm:text-base max-sm:text-center">Бир йиллик кучатларни бахор ва куз мавсумида екиш учун яхши танлов. Тайёр етилган кучатларни екиш оркали бир йил вакттан ютасиз. Катта кучат чидамли ва мехнати жуда оз болади. Совук кунларда кеч куз ва ерда бахорда екиш учун хам кулай.
                    </p>
                 </div>
                 <div className=" place-self-center">
                    <div className='h-80 w-80 p-4'>
                        <Image src={mypic2} className='rounded-lg h-72 shadow-md shadow-teal-300'/>
                    </div>
                 </div>
                 <div className="lg:col-span-2 max-[350px]:place-self-center max-[350px]:w-80 sm:pt-8">
                    <h1 className="max-sm:text-center font-bold tracking-wide text-[#288e2b] pb-3">Томир Қаламча</h1>
                    <p className="max-sm:text-base max-sm:text-center">Узингиз павлония нихолчаларини етиштирмокчисиз ва бунга керакли вакт ва шароитингиз бор ундай болса сизга томир каламчаларимизни таклиф киламиз.
Томир каламчаларни яхши томонлари  куп масалан арзонлиги, истаган йерингизга кулай олиб боришингиз мумкин.</p>
                 </div>
                 <div className=" place-self-center">
                    <div className='h-80 w-80 p-4'>
                        <Image src={mypic3} className='rounded-lg h-72 shadow-md shadow-teal-300'/>
                    </div>
                 </div>
                 <div className="lg:col-span-2 max-[350px]:place-self-center max-[350px]:w-80 sm:pt-8">
                     <h1 className="max-sm:text-center font-bold tracking-wide text-[#288e2b] pb-3">Биогумус</h1>
                    <p className="max-sm:text-base max-sm:text-center">Ерни унумдорлигини ошириш бу, ердан олинадиган даромадни хам оширишдир. Ер унумдорлигини оширишни табий усули бу, тупрокка биагумус солиш. Биагумус павлония томир каламчаси екиш учун хам  яхши хисобланади. Бундан ташкари биагумус билан бошка усимликларни етиштиришингиз хам мумкин. Биздан хамёнбоп ва сифатли биагумус олишингиз мумкин.</p>
                 </div>
                
               </div>
            </div>
        </div>
    )
}

export default service