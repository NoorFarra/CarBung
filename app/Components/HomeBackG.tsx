import React from 'react'
// the animated background <3
const HomeBackG = () => {
  return (
    <div className='relative sm:top-12 w-full max-w-lg' >
      <div className='absolute mix-blend-multiply animate-blob  filter blur-2xl top-0 left-36 w-[35vh] h-[35vh] bg-pink-500 hidden sm:flex rounded-full'></div>
      <div className='absolute mix-blend-multiply animate-blob  filter blur-2xl top-[10vh] sm:top-0 sm:right-48 w-[35vh] h-[35vh] bg-pink-500  sm:bg-blue-300 rounded-full'></div>
      <div className='absolute mix-blend-multiply animate-blob  filter blur-2xl left-[10vh] top-20 sm:top-0  sm:-left-4 w-[35vh] h-[35vh] bg-purple-500 rounded-full'></div>
     
      
    </div>
  )
}

export default HomeBackG
