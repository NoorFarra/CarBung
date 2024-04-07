import React from 'react'
import Image from 'next/image'
import Icon from "../Imgs/ICON.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full h-[60vh] bg-black flex flex-col sm:flex-row sm:pt-[0vh] pt-[4vh] justify-center items-center '>

      <div className='h-full sm:w-1/3 w-full flex justify-center items-center gap-[4vh]'>

      <div className='h-full w-full  cursor-pointer
           flex justify-center items-center gap-[1vh] pl-[4vh]'>
            <Link href={"/"} className='flex justify-start items-center gap-[1vh]'>
            <h1 className='text-[4vh] font-logoFont text-white font-bold'>CarBung</h1>
           <Image src={Icon} className='w-[7vh] h-[7vh]' alt={'icon'}></Image></Link>
    </div>
 

      </div>
      <div className='h-full sm:w-1/3  flex-col flex justify-center items-center gap-[4vh]'>
        <h1 className='text-[3.5vh] font-logoFont text-blue-400 font-bold '>FeedBack!</h1>
        <input type="text" placeholder='Give Us A FeedBack <3'
         className='w-[90%] h-[10vh] text-center font-bold rounded-3xl ' />
        <div className='w-full h-[10vh] flex justify-center items-center gap-[2vh] '>
         <Link href={""} className='sm:w-[16vh] w-[12vh] h-[6vh] rounded-3xl bg-white flex justify-center 
         items-center font-bold font-logoFont hover:scale-105 ease-in-out shadow-md
         shadow-blue-600 duration-150 text-[2vh]' >Support</Link>
         <Link href={""} className='sm:w-[16vh] w-[12vh] h-[6vh] rounded-3xl bg-white flex justify-center 
         items-center font-bold font-logoFont hover:scale-105 ease-in-out shadow-md
         shadow-blue-600 duration-150 text-[2vh]' >About</Link>
         <Link href={"/Add"} className='sm:w-[16vh] w-[12vh] h-[6vh] rounded-3xl bg-white flex justify-center 
         items-center font-bold font-logoFont hover:scale-105 ease-in-out shadow-md
         shadow-blue-600 duration-150 text-[2vh]' >Sell Your Car</Link>
        </div>
      </div>
      <div className='h-full w-1/3 flex justify-center items-center text-[4vh] cursor-pointer text-white gap-[4vh]'>

      <FaInstagram />
      <FaFacebook />
      <FiTwitter />


      </div>
      
    </div>
  )
}

export default Footer
