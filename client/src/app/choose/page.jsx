"use client";

import React from 'react'
import Card from '../components/card'
import { useRouter } from 'next/navigation';


export default function page() {
    const router = useRouter();
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Welcome</h1>
                    <p class="lg:w-1/2 w-full leading-relaxed text-white">Please choose one of your roles</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <Card title={"Admin"} description={"Please sign in using your metasmask account"} onclick={()=> router.push('/adminact')}/>
                    <Card title={"Organization"} description={"Please sign in using your metasmask account"} />
                    <Card title={"Doctor"} description={"Please sign in using your metasmask account"} />
                    <Card title={"Patient"} description={"Register or sign in using your aadhar number"} />
                </div>

            </div>
        </section>
    )
}
