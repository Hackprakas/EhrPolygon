"use client"
import React from 'react'
import Card2 from '../components/card2'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
// import { contractAddress } from '@/app/utils/constant';
// const contractAddress = "{{0xba6411C8EA9522213201c636900c1651bCA4Ed2c}}";
const contractAddress = "0xBCFDA20fE34995a63187d8Fc2F385e62B7050F54";


export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  const [aadharNumber, setAadharNumber] = useState('');
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addDoctor",
  );

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
          // Handle form submission
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
            <Web3Button
      contractAddress={contractAddress}
      // Calls the "setName" function on your smart contract with "My Name" as the first argument
      action={() => mutateAsync({ args: ["kavery","0x6568FB15588d95Ea103221b17E30AA52c7ad6152"] })}
    >
      submit
    </Web3Button>
          </div>
        </div>
      )}
      
    </div>
  </div>
</section>
</>
    )
}
