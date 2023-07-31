"use client"
import React from 'react'
import Card2 from '../components/card2'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AadharContext from '../context/aadhar';
import { useContext } from 'react';



export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  const {aadharNumber,setAadharNumber} = useContext(AadharContext);
  
  const router = useRouter();
 

    const handleCardClick = () => {
        router.push('/patact/addpatreg');
        // Add your custom logic here to handle the click event.
        };
        
      
        const openPopup = () => {
          setShowPopup(true);
        };
      
        const closePopup = () => {
          setShowPopup(false);
        };
      
        const handleAadharChange = (e) => {
          setAadharNumber(e.target.value);
        };
      
        const handleSubmit = () => {
          router.push('/patact/patreport')
         
          
        };
    return (<>
    
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">HELLO PATIENT</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Please choose one of the following</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      
      <Card2 titles={"REGISTER DETAILS"} descirptions={"Click to add report"} onclick={handleCardClick}/>
      <Card2 titles={"VIEW RECORDS"} descirptions={"View the patients by the name and number"} onclick={openPopup}/>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <span
              className="absolute top-60 right-96 cursor-pointer h-20 text-white hover:text-red-600"
              onClick={closePopup}
            >
              &times;
            </span>
            <h2 className="text-lg font-bold mb-4">Enter Your Aadhar Number</h2>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              placeholder="Enter Aadhar Number"
              value={aadharNumber}
              onChange={handleAadharChange}
            />
           <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      
    </div>
  </div>
</section>
    </>

    )
}
