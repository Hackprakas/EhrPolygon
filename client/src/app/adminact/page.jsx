"use client"
import React from 'react'
import Card2 from '../components/card2'
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    return (
    
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">hello admin</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">PLEASE ADD HOSPITAL TO THE LIST</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      
      <Card2 titles={"ADD HOSPITAL"} descirptions={"Click here to add hospital"} onclick={()=>router.push('/adminact/addhos')}/>
      
    </div>
  </div>
</section>
    )
}
