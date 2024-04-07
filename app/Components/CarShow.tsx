"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import allcarsData from "../data";
import SearchBar from './SearchBar';





const CarShow = () => {
  const [carsData, setCarsData] = useState(allcarsData);
  
  const handleFilter = (searchFilter: string) => {
    const filteredData = allcarsData.filter(car => car.name.toLowerCase().includes(searchFilter.toLowerCase()));
    setCarsData(filteredData);
  }

  return (
    <>
      
      <div className='w-full h-auto flex justify-center items-start py-[5vh] gap-[5vh] flex-wrap'>
      <SearchBar onSearch={handleFilter} />
        {carsData.map((car) => (
          <div className='w-[35vh] h-[45vh] bg-slate-300 flex flex-col justify-start items-center cursor-pointer shadow-xl shadow-blue-400 rounded-lg' key={car.id}>
            <div className='w-[90%] h-[45%] bg-blue-300 rounded-lg m-[2vh] mb-0'>
              <Image src={car.img} className='w-full h-full rounded-lg' alt={''} />
            </div>
            <div className='w-[90%] h-[45%] flex justify-center text-[2vh]'>
              <div className='w-1/2 h=full flex flex-col justify-center gap-2 font-logoFont items-start'>
                <h3>Make: {car.name}</h3>
                <h3>Model: {car.model}</h3>
                <h3>Year: {car.year}</h3>
                <h3>Fuel: Petrol</h3>
              </div>
              <div className='w-1/2 h=full  flex justify-center items-center'>
                <h1 className='text-center font-logoFont'>Price:<br/>{car.price}</h1>
              </div>
            </div>
            <button className='w-[90%] h-[15%] bg-blue-600 rounded-lg text-white text-[2.3vh] font-logoFont hover:bg-blue-500 mb-[2vh] active:bg-blue-700'> Get Details </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default CarShow;
