import React from 'react'
import HomeBackG from './HomeBackG'
import Car from "../Imgs/homeCar.png"
import Link from 'next/link'
import Image from 'next/image'


const HomePage = () => {
  const scrollToMiddle = () => {
    // Calculate the middle of the page
    const middleOfPage = window.innerHeight / 1.07;
    // Scroll to the middle of the page
    window.scrollTo({
      top: middleOfPage,
      behavior: 'smooth' // Optional: Use smooth scrolling animation
    });
  }
  return (
    <div className=' w-full  border-b-2 border-slate-500
    h-[93vh] bg-slate-300 flex flex-col sm:flex-row items-center justify-center '>
     <div className='w-1/2 h-full flex items-center justify-center flex-col gap-[4vh] pt-[10vh] sm:pt-0 '>
          <h1 className='text-[3.36vh] sm:text-[8vh] font-logoFont '><span className=' text-blue-500  '>Buy, Sell, </span>With the<br /> best Price!</h1>
          <p className='text-[2vh] text-center sm:text-[3vh] text-slate-600 font-logoFont animate-blob '>Find the best Offers by the best Dealers!</p>
      <div className='w-full sm:h-[8vh] flex sm:flex-row flex-col justify-center items-center gap-5'>
      <Link href={"/Add"}> 
      <button className='w-[25vh]  h-[6vh] bg-blue-600  border-x border-y shadow-xl
         shadow-black cursor-pointer text-white font-logoFont  font-semibold text-[2vh] hover:scale-105 ease-in-out  duration-150'>
         
          Sell Your Car
          </button></Link>
         
         <button onClick={scrollToMiddle} className='w-[25vh] h-[6vh] bg-white  border-x border-y shadow-xl
         shadow-black cursor-pointer text-blue-500 font-logoFont border-blue-500  font-semibold text-[2vh] hover:scale-105 ease-in-out  duration-150'>Find Your Next Car</button>
         
         
          </div>

         
       
     </div>

    



     <div className='sm:w-1/2 h-full  sm:flex items-center justify-center flex-col'>
      
        <HomeBackG />
        <div className='w-full h-[50vh]  flex justify-center items-center z-10'>
          <Image src={Car} alt='car' className='sm:w-[85vh] w-[95%] h-[32vh] z-20 sm:h-[50vh]'></Image>
        </div>
        
     </div>
 
    </div>
  )
}

export default HomePage
