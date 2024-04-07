"use client"
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const page = () => {
 
  return (
    <div className='w-full
    h-[100vh] flex items-center justify-center bg-white'>

      <div className='w-[70%] sm:w-[50%] h-[75%] bg-slate-700
       rounded-xl shadow-lg shadow-blue-400'>
       <div className='w-full h-1/3  flex flex-col gap-[3vh]
        justify-center items-center'><button className='sm:w-[10%] w-[25%] shadow-xl shadow-blue-400 
        h-[40%] flex items-center justify-center rounded-full bg-white'><FaPlus className='text-[4vh]' /></button>
        <h1 className='text-[2.5vh] text-white font-logoFont'>Add Page</h1>
        </div>
       <div className='w-full h-[50%] flex flex-col gap-[2vh] p-[4vh] items-center justify-center flex-wrap'>
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Make'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Model'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Year'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Fuel'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Price'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Name'/> 
        <input type="text" className='sm:w-[30%] w-[50%] h-[5vh] shadow-lg bg-white shadow-blue-400 text-center rounded-2xl' placeholder='Phone'/> 
      
     
       </div>
       <div className='w-full h-[10%] flex justify-center items-center '>
        <button className='h-[70%] w-[30%] shadow-lg bg-black
         text-white font-bold shadow-blue-400 text-center rounded-2xl'>Add</button>

       </div>
       </div>
    
    </div>
  )
}

export default page
