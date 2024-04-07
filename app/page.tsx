"use client"
import CarShow from "./Components/CarShow";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Filter from "./Components/filter";
import Nav from "./Components/nav";


export default function Home() {
  return (
  <>
<div className="w-full h-[auto] bg-white flex justify-center items-center flex-col">
<div className="w-full h-[7vh] bg-white"></div>
   
        <HomePage/>
       
        <CarShow />
        

     
      
    </div>
  
  </>
  );
}
