"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function page() {
  const router = useRouter()
  return (
    <section className="text-gray-600 body-font h-max">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">Empower your health
        <br className="hidden  lg:inline-block"/>with decentralization
      </h1>
      <p className="mb-8  text-xl leading-relaxed text-white">Manage all the Health Records on the go!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => router.push('/choose')}>Get Started</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src=""/>
    </div>
  </div>
</section>
  )
}
