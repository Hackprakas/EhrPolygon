"use client"

import React from 'react'
import { useState } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import {contractAddress} from '../../utils/constant.jsx'


export default function page() {
   const [doctorName, setdoctorName] = useState("");
  const [doctoraddress, setdoctorAddress] = useState("");
  const [hospitalindex, sethospitalindex] = useState("");
 
  return (
    <div class="container mx-auto h-screen p-4">
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Add doctor</h2>
    <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookName">doctor Name</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text" value={doctorName} placeholder="Enter doctor name" onChange={(e)=>setdoctorName(e.target.value)} />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">doctor address</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text" value={doctoraddress}  placeholder="Enter ethereum address" onChange={(e)=>setdoctorAddress(e.target.value)} />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">hospital index</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text" value={hospitalindex} placeholder="Enter hospital index"  onChange={(e)=>sethospitalindex(e.target.value)}/>
      </div>
    </form>
    <Web3Button
      contractAddress={contractAddress}
      action={(contract) => {
        contract.call("addDoctor", [doctorName, doctoraddress, hospitalindex])
      }}
    >
      addDoctor
    </Web3Button>
  </div>
</div>
  )
  }
