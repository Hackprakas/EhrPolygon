"use client"

import React from 'react'
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
// import { contractAddress } from '@/app/utils/constant';
// const contractAddress = "{{0xba6411C8EA9522213201c636900c1651bCA4Ed2c}}";
const contractAddress = "0xBCFDA20fE34995a63187d8Fc2F385e62B7050F54";

export default function page() {
  const { contract } = useContract(contractAddress);
  
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addDoctor",
  );
  return (
    <div class="container mx-auto h-screen p-4">
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Add patient record</h2>
    <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookName">medical report</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text"  placeholder="Enter medical report" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">prescription</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter prescription" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">DoctorName</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter your name" />
      </div>
      
      <Web3Button
      contractAddress={contractAddress}
      // Calls the "setName" function on your smart contract with "My Name" as the first argument
      action={() => mutateAsync({ args: ["kavery","0x6568FB15588d95Ea103221b17E30AA52c7ad6152"] })}
    >
      Add patient record
    </Web3Button>
    </form>
  </div>
</div>

  )
}
