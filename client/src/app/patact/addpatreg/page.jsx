import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        <div className="w-full  p-10">

          <h1
            role="heading"
            aria-label="profile information"
            className="focus:outline-none text-3xl font-bold text-white mt-12"
          >
            Profile info
          </h1>
          <p
            role="contentinfo"
            className="focus:outline-nonetext-sm font-light leading-tight text-white mt-4"
          >
            Fill in the data for profile. It will take a couple of minutes.
            <br />You only need your aadhar number
          </p>
          <h2
            role="heading"
            aria-label="enter Personal data"
            className="text-xl font-semibold leading-7 text-white mt-10"
          >
            Personal data
          </h2>
          <p className="text-sm font-light leading-none text-white mt-0.5">
            Your details
          </p>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col ml-12">
              <label className="mb-3 text-sm leading-none text-white"
              >Name</label
              >
              <input
                type="name"
                aria-label="Enter Name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="William Smith"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-white"
              >Age</label>
              <input
                type="number"
                aria-label="Enter Age"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="69"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-white"
              >Height (in cm)</label>
              <input
                type="number"
                aria-label="Enter Height"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="169"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-white"
              >Weight (in KG)</label>
              <input
                type="number"
                aria-label="Enter weight"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="69"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-white"
              >Aadhar Number</label>
              <input
                type="number"
                aria-label="Enter aadhar number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="538183925574"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-white"  >Address</label>
              <input
                type="name"
                aria-label="Enter address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="San Diego, CA, USA" />
            </div>
          </div>
          <div className="mt-12">
            <div className="py-4 flex items-center">
              <div
                className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
              >
                <input
                  type="checkbox"
                  aria-label="I agree with the terms of service"
                  className="checkbox opacity-100 absolute cursor-pointer w-full h-full"
                />
                <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                  <svg
                    className="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-none ml-2 text-white">
                I agree with the
                <span className="text-indigo-700"> terms of service</span>
              </p>
            </div>
          </div>
          <button
            role="button"
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-gray-800 capitalize"
            >Submit</span>
            <svg
              className="mt-1 ml-3"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
          </button>
        </div>
      </div>
    </div>


  )

}
