"use client"

import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";

export default function provide({children}) {
    const [windowObject, setWindowObject] = useState(null);
    useEffect(() => {
        setWindowObject(window);
    }, []);
  return (
    <ThirdwebSDKProvider
      activeChain={"mumbai"}
      // Example: Use ethers to get the signer from the window.ethereum object
      signer={windowObject != null ? new ethers.providers.Web3Provider(windowObject.ethereum).getSigner() : undefined}
      clientId="d8936f6f6d303ca1a545dacd3ec64a90"
    >
      {children}
    </ThirdwebSDKProvider>
  );
}