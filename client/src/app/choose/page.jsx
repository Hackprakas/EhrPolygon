"use client";

import React from 'react'

import { useRouter } from 'next/navigation';
import { ConnectWallet } from '@thirdweb-dev/react'


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
                    <div class="xl:w-1/3 md:w-1/2 p-4" onClick={()=> router.push('/adminact')}>
                        <div class="border border-gray-200  bg-white cursor-pointer p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Admin</h2>
                            <p class="leading-relaxed text-base">Please sign in using your metamask account</p>

                            <ConnectWallet style={{ width: "100%", marginTop: "1rem" }} btnTitle="🦊 Connect Wallet" theme='light' />
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4" onClick={() => router.push('/orgact')}>
                        <div class="border border-gray-200  bg-white cursor-pointer p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Oganization</h2>
                            <p class="leading-relaxed text-base">Please sign in using your metamask account</p>

                            <ConnectWallet style={{ width: "100%", marginTop: "1rem" }} btnTitle="🦊 Connect Wallet" theme='light' />
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4" onClick={() => router.push('/docact')}>
                        <div class="border border-gray-200  bg-white cursor-pointer p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Doctor</h2>
                            <p class="leading-relaxed text-base">Please sign in using your metamask account</p>

                            <ConnectWallet style={{ width: "100%", marginTop: "1rem" }} btnTitle="🦊 Connect Wallet" theme='light' />
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4" onClick={() => router.push('/patact')}>
                        <div class="border border-gray-200  bg-white cursor-pointer p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Patient</h2>
                            <p class="leading-relaxed text-base">Please sign in using your metamask account</p>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
