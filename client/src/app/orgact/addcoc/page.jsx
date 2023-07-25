"use client"

import React from 'react'
import { useState } from 'react';
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
// import { contractAddress } from '@/app/utils/constant';
// const contractAddress = "{{0xba6411C8EA9522213201c636900c1651bCA4Ed2c}}";
const contractAddress = "0xBCFDA20fE34995a63187d8Fc2F385e62B7050F54";

export default function page() {
  // const [doctorName, setdoctorName] = useState("");
  // const [doctoraddress, setdoctorAddress] = useState("");
  // const [hospitalindex, sethospitalindex] = useState("");
  const { contract } = useContract(contractAddress);
  
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addDoctor",
  );
  if(error){
    console.log(error);
  }
  return (
    <div class="container mx-auto h-screen p-4">
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Add doctor</h2>
    <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookName">doctor Name</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text" placeholder="Enter doctor name"  />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">doctor address</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter ethereum address" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">hospital index</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter hospital index" />
      </div>
  
      
      <Web3Button
      contractAddress={contractAddress}
      // Calls the "setName" function on your smart contract with "My Name" as the first argument
      action={() => mutateAsync({ args: ["kavery","0x6568FB15588d95Ea103221b17E30AA52c7ad6152"] })}
    >
      Add Doctor
    </Web3Button>
    </form>
  </div>
</div>
  )
}
