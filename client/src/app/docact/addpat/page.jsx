"use client"

import React from 'react'
import { Web3Button } from "@thirdweb-dev/react";
import {contractAddress} from '../../utils/constant.jsx'
import { useState } from 'react';


export default function page() {

  const [_medicalReport, setmedicalReport] = useState("");
  const [_prescription, setprescription] = useState("");
  const [_patientIndex, setpatientIndex] = useState(0);

  
  return (
    <div class="container mx-auto h-screen p-4">
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Add patient record</h2>
    <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookName">medical report</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text"  value={_medicalReport}  placeholder="Enter medical report" onChange={(e)=>setmedicalReport(e.target.value)} />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">prescription</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter prescription" 
        value={_prescription}
        onChange={(e)=>setprescription(e.target.value)}
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">Patient Index</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter patient index" 
        value={_patientIndex}
        onChange={(e)=>setpatientIndex(e.target.value)}
        />
      </div>
      
     
    </form>
    <Web3Button
      contractAddress={contractAddress}
      action={(contract) => {
        contract.call("addMedicalRecord", [_patientIndex, _medicalReport, _prescription])
      }}
    >
      addMedicalRecord
    </Web3Button>
  </div>
</div>

  )
}
