import Head from "next/head" 
import Image from "next/image"
import mypic from "../assets/images/timber.png"
import mypic1 from "../assets/images/paulowniaFlower.png"
import mypic2 from "../assets/images/paulowniaLeaf.png"
import mypic3 from "../assets/images/paulowniaWood.png"
const shop = () => {
    return(
        <div className="">
            <Head>
                <title>Павловнияни Фойдалари</title>
            </Head>
            <div className="max-[350px]:w-[550px] w-screen">
               <div className="bg-teal-900 text-center h-60 max-[350px]:w-[550px] w-screen">
                    <h1 className="text-teal-300 text-4xl my-auto pt-14 max-sm:pl-10 max-[350px]:pl-[100px]">Павловнияни Фойдалари</h1>
                    <p className="text-teal-50 font-mono my-auto pt-4 max-sm:text-sm  max-[350px]:pl-[150px]">Павловнияни Фойда ва Даромадларидан Базилари:</p>
                </div> 
                <div className="font-mono text-start ">
                    <p className="py-10 px-16 max-sm:w-80 max-sm:text-xs max-md:text-base mx-auto">  Павловния Ер шарида мавжуд дарахтлардан нафақат энг тез ўсиши билан ажралиб туради, балки ҳаёлий гўзаллик кашф этиб гуллаши, қимматли ёғоч, асал, биомасса манбаи эканлиги билан қадрланади, у манзарали дарахт сифатида истироҳат боғлари, хиёбонларни безайди.Ёғочи жудаям сифатли хисобланади.Павловния ёғочини қурилишини барча нозик сохаларида , эшик-ром , пол-паталок , уйни томларини ёпишда ,мебель ясашда, мусиқа асбоблари ясашда ишлатса булади. Бундан ташкари хам павлонияни куплаб фойдалари бор . Улардан базиларини укишингиз мумкин.</p>
                    
                </div>
                <div className="grid grid-cols-2 bg-[#ecfdf9]  ">
                    <Image src={mypic} alt='Pavloniya' className="m-auto  h-40 "/>
                    <div>
                        <h1 className="text-start text-2xl text-[#df4242] font-semibold tracking-wide pt-16 ">Тез ва Сифатли Ёгоч Махсулоти</h1>
                        <p className="text-start   max-sm:text-sm max-md:text-base pt-3">Ёғочи жудаям сифатли хисобланади.Павловния ёғочини қурилишини барча нозик сохаларида , эшик-ром , пол-паталок , уйни томларини ёпишда ,мебель ясашда, мусиқа асбоблари ясашда ишлатса булади. Павловния драхти 3-4 йили тўсин учун ишлатса булади , 5-6 йили 0.5-0.8 куб ёгоч беради, 7-8 йили 1-2 куб сифатли ва қиммат бохо ёғоч беради. </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
                    <div className="max-sm:ml-40 ">
                        <h1 className="text-start text-2xl text-green-700 font-semibold tracking-wide max-sm:place-self-center pt-16 max-sm:pt-0 px-8">Асал Хосилдорлиги </h1>
                        <p className="text-start max-sm:place-self-center   max-sm:text-xs max-md:text-base pt-3 px-8"> Павловния   тез  ва  чиройли  ўсиши  билан  бирга  кўп  ва  узок вакт (40-50 кун)  гуллаб  тургани сабабли, кўп  миқдор  нектар  беради . 
Павловнияни 1 гектарлик плантатцияларидан , дастлабки йилларда  500 кг - 1000 кг  гача, хаттоки  об  хаво шароитига караб   кесилмаган катта ёшли дарахтларидан 1500-2000 кг гача асал  йиғиш  мумкин  </p>
                    </div>
                    <Image src={mypic1} alt='Pavloniya' className="m-auto  h-40"/>
                </div>
                <br/>
                <div className="grid grid-cols-2  bg-[#ecfdf9] ">
                    <Image src={mypic2} alt='Pavloniya' className="m-auto  h-40 "/>
                    <div>
                        <h1 className="text-start text-2xl text-[#df4242] font-semibold tracking-wide pt-16 max-sm:8">Табиат ва Чорвачиликка Фойдаси</h1>
                        <p className="text-start   max-sm:text-xs max-md:text-base pt-3">🍃Баргларининг диаметри 100 сантиметр бўлгани учун уларни кислород заводи, дейиш мумкин. Бир йилда битта дарахтнинг барглари ўртача 22кг корбонад ангидридни ютиб, 6 кг кислород чиқаради. Павловнияни барглари чорва хайвонлари учун хам фойдали ва яхши ем болади.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 mb-10">
                    <div className="place-self-center">
                        <h1 className="text-start text-2xl text-green-700 font-semibold tracking-wide max-sm:text-center  pt-16 max-sm:pt-0 px-8">Кимматбахо Мебеллар</h1>
                        <p className="text-start max-sm:text-center  max-sm:text-xs max-sm:w-80 max-md:text-base pt-3 px-8 ">Ёғочи жудаям сифатли хисобланади. Павловния мебель ясашда, мусиқа асбоблари ясашда, кема саноатида кайик ва яхта ясашда, кимматбахо мебеллар билан бирга сувынйер ха бошка фойдали уй анжомлари ясашта ишлатилади. </p>
                    </div>
                    <Image src={mypic3} alt='Pavloniya' className="m-auto  h-40 "/>
                </div>
            </div>
        </div>
    )
}

export default shop