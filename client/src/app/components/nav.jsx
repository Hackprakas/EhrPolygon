"use client"
import React from 'react'
import Link from 'next/link'
import { ConnectWallet } from '@thirdweb-dev/react'

export default function nav() {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3  text-white text-xl">E-HEALTH RECORD</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {/* <a className="mr-5 hover:text-gray-900">First Link</a> */}
      <Link  className= "mr-5 text-white hover:text-gray-900"  href="/contact">Home</Link>
      <a className="mr-5 text-white hover:text-gray-900">About</a>
      <a className="mr-5 text-white hover:text-gray-900">Contact</a>
    </nav>
    <ConnectWallet style={{ width: "100%", marginTop: "1rem" }} btnTitle="🦊 Connect Wallet" theme='light' />
  </div>
</header>
  )
}
