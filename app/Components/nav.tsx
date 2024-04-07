"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from "../Imgs/ICON.png"
import SearchBar from './SearchBar'
import Link from 'next/link'
import CarShow from './CarShow'
import {Menu, X} from "lucide-react"


const nav = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggleNav = ()=> {
    setisOpen(!isOpen);
  };

  return (<>
    <div className='w-full h-[7vh] 
    fixed z-40 flex justify-between items-center
    shadow-lg shadow-blue-400  bg-white gap-[4vh]' >
      
    <div className='h-full w-1/3 bg-white cursor-pointer
           flex sm:justify-start items-center gap-[1vh] pl-[1vh] sm:pl-[4vh]'>
            <Link href={"/"} className='flex justify-start items-center gap-[1vh]'>
            <h1 className='text-[3vh] font-logoFont  font-bold'>CarBung</h1>
           <Image src={Icon} className='w-[5vh] h-[5vh]' alt={'icon'}></Image></Link>
    </div>


    <div className='h-full w-1/3 
flex  justify-center items-center gap-[2vh] pr-[1vh]'>
      
      <Link href={"/Add"}> 
        <h1 className=' text-[2vh] font-logoFont text-blue-400 hidden sm:flex
        cursor-pointer hover:scale-105'>Sell Your Car</h1>
        </Link>
      <Link href={"/Support"}>
        <h1 className='text-[2vh] font-logoFont hidden sm:flex
        cursor-pointer hover:scale-105'>Support</h1>
        </Link>
      <Link href={"/About"}>
        <h1 className='text-[2vh] font-logoFont  hidden sm:flex
        cursor-pointer hover:scale-105 '>About US</h1>
        </Link>
       </div>

    <div className='h-full sm:w-1/3 flex justify-end items-center  '>
      <button className='pr-[2vh] ' onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
    </div>
   
 </div>
 {isOpen && (
      <div className='flex justify-center items-center w-full h-[100vh] fixed z-30 text-black flex-col gap-[3vh] bg-opacity-10 backdrop-blur backdrop-filter  font-bold font-logoFont'>
        <Link className='text-shadow-lg  hover:scale-105 shadow-blue-400 text-[2.2vh]' onClick={toggleNav} href={'/'}>Home</Link>
        <Link className='text-blue-600  hover:scale-105 text-shadow-lg shadow-blue-400 text-[2vh]' onClick={toggleNav} href={"/Add"}>Sell Your Car</Link>
        <Link className='text-shadow-lg  hover:scale-105 shadow-blue-400 text-[2.2vh]' onClick={toggleNav} href={"/Support"}>Support</Link>
        <Link className='text-shadow-lg  hover:scale-105 shadow-blue-400 text-[2.2vh]' onClick={toggleNav} href={"/About"}>About US</Link>
        <Link className='text-shadow-lg  hover:scale-105 shadow-blue-400 text-[2.2vh]' onClick={toggleNav} href={'/'}>Policy</Link>
        
      </div>
    )}
    </>)
}

export default nav
