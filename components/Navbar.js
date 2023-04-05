import React,{ useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image" 
import navStyles from "../styles/Navbar.module.css"
import mypic from '../assets/my-logo.png'
//import {AiFillCaretDown} from "react-icons/ai"
import { Transition } from "@headlessui/react"


const Navbar = () => {
    const [isOpen,setIsOpen]= useState(false);
    const [fixNav,setFixNav] = useState(false);

    useEffect(()=>{
        const handleFixedNav=()=> {
           if (window.scrollY >= 50) {
            setFixNav(true);
           } else {
            setFixNav(false);
           }
        };
        window.addEventListener('scroll', handleFixedNav);
    },[])

    return (
        <div className="max-[350px]:w-[400px]">
        <nav className={ fixNav?'fixed top-0 shadow-black-lg border-black w-full  z-10'
        :'shadow-black-lg border-black w-full  z-10'}>
            <div className={navStyles.nav}>
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center sm:mx-20 mr-5 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <Link href="/" className={navStyles.nav.img}><Image src={mypic} alt='img logo' priority={42}/></Link>
                                <Link href="/" className="font-bold text-xl cursor-pointer mt-6 text-green-600">
                                <h1 >
                                    Pavloniyachi<span className="text-blue-500">.uz</span>
                                </h1>
                                </Link>
                            </div>
                        {/*making navbar righthand tags for medium size devices*/}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 text-bold text-green-900">
                                    <ul>
                                      <li ><Link href="/">Бош сахифа</Link></li>
                                      <li><Link href="/about">Маълумот</Link></li>
                                      <li><Link href="/service">Хизматлар</Link></li>
                                      <li><Link href="/shop">Фойдали</Link></li>
                                      <li><Link href="/contact">Алоқа</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*here we work on mobile responsive*/}
                        <div className="mr-10 flex md:hidden">
                            <button 
                            onClick={()=>setIsOpen(!isOpen)} 
                            type="button" 
                            className="bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus: outline-none focus: ring-offset-2 focus:ring-offset-green-800 focus-ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/*here d (inside svg) is the shape code */}
                                {!isOpen ? (
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http:www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M4 6h16M4 18h16" //for menu shape
                                        /> 
                                    </svg>
                                ):(
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http:www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M4 18L18 6M6 6112 12"//for cross shape
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
      <Transition 
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opaacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref)=> (
                //handle the mobile menu tabs
                <div className="md:hidden id=mobile-menu">
                    <div 
                    ref={ref}
                    className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                    >
                        <ul>
                             <li className="cursor-pointer hover:bg-green-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link href="/">Бош сахифа</Link></li>
                             <li className="cursor-pointer hover:bg-green-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link href="/about">Маълумот</Link></li>
                             <li className="cursor-pointer hover:bg-green-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link href="/service">Хизматлар</Link></li>
                             <li className="cursor-pointer hover:bg-green-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link href="/shop">Фойдали</Link></li>
                             <li className="cursor-pointer hover:bg-green-600 text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link href="/contact">Алоқа</Link></li>
                        </ul>
                    </div>
              </div>
            )}
        
        </Transition>
    </nav>
  </div>
 
    )
}
export default Navbar