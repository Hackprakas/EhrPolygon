"use client"

import React from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import AadharContext from '@/app/context/aadhar';
import { useContext } from 'react';
import { contractAddress } from '../../utils/constant'


export default function page() {
  const { aadharNumber } = useContext(AadharContext);
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "getPatientDetailsByAadhar", [aadharNumber]);


  return (<>

    <div className="flex justify-center items-center h-screen">
      <div className="container bg-white flex flex-col rounded-3xl h-96 sm:flex-row">
        <div className="left-side flex flex-1 flex-col justify-center items-center rounded-2xl bg-gray-900 p-4">
          <div className="details text-white  text-2xl mt-4">
            {isLoading ? (<p>Loading...</p>) : (
              <>

                <p>Name: {data[0]}</p>
                <p>Age: {parseInt(data[1])}</p>
                <p>Height: {parseInt(data[2])} cm</p>
                <p>Weight: {parseInt(data[3])} kg</p>
              </>
            )}

          </div>
        </div>
        <div className="right-side flex-1 bg-white rounded-lg p-4 mt-4 sm:mt-0 sm:ml-4">
          {isLoading ? (<p>Loading...</p>) : (
            <table className="rounded-lg w-full">
              <thead>

                <tr>
                  <th className=" text-lg border-b-4">Medical Report</th>
                  <th className="text-lg border-b-4">Prescription</th>
                  <th className="text-lg border-b-4 ">Doctor Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-lg border-b-4 text-center">
                    <ul>
                      {data.medicalReports.map((report, index) => (
                        <li key={index}>{report}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-lg border-b-4 text-center">
                    <ul>
                      {data.prescriptions.map((prescription, index) => (
                        <li key={index}>{prescription}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-lg border-b-4 text-center">
                    <ul>
                      {data.doctorNames.map((doctorName, index) => (
                        <li key={index}>{doctorName}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  </>
  )
}
