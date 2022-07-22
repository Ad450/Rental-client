import React from "react";
import Navbar from "./navbar";
import { RentalHeader } from "./styles/app_styles";



export default function Header() {
  return (
    <RentalHeader  className="px-3 py-2">
      <Navbar></Navbar>
      <div className="flex flex-col items-center">
         <HeaderText></HeaderText>
         <HeaderCard></HeaderCard>
        </div>
    </RentalHeader>
  );
}



function HeaderText(){
  return (
    <div className=" justify-center content-center my-10">
          <h3 className="text-7xl font-bold text-center w-2/3 mx-auto mt-20">
            Let's find a home that's perfect for you
          </h3>
          <h3 className="text-lg w-33 text-black text-center w-96 mx-auto mt-10">Search confidently with your trusted source of homes for sale or rent</h3>
    </div> 
  );
}


function HeaderCard(){
  return (
      <section className="flex flex-col px-4 ">
      <div className="sub-test sec-1 ">
      <ul className="inline-flex rounded-t-lg overflow-hidden">
        <li className="bg-white px-10 py-5 hover:bg-blue-700 hover:text-white">Buy</li>
        <li className="bg-white px-10 py-5 hover:bg-blue-700 hover:text-white">Rent</li>
        <li className="bg-white px-10 py-5 hover:bg-blue-700 hover:text-white">Sell</li>
      </ul>   
    </div>

    <div className="sub-test sec-2">
      <ul className="inline-flex  overflow-hidden rounded-b-lg">
        <li className="bg-white px-10 py-4 hover:bg-blue-700 hover:text-white text-xs space-y-2">
          <div>City/ </div>
           <div>New york <button className=" hover:bg-red-500 px-2">↓</button></div>
        </li>
        <li className="bg-white px-10 py-4 hover:bg-blue-700 hover:text-white text-xs space-y-2">
          <div>Property </div>
           <div>New york <button className=" hover:bg-red-500 px-2">↓</button></div>
        </li>
        <li className="bg-white px-10 py-4 hover:bg-blue-700 hover:text-white text-xs space-y-2">
          <div>Price Range </div>
           <div>New york <button className=" hover:bg-red-500 px-2">↓</button></div>
        </li>
        <li className="bg-white px-10 py-4 hover:bg-blue-700 hover:text-white">
          <aside className="flex bg-blue-600 px-2 py-1 rounded text-white">

          <div>🔍</div> Search
          </aside>
          </li>
      </ul>   
    </div>


      </section>
  );
}

