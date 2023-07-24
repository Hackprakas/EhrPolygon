"use client";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";


export default function Providers({children}) {
  return (
    <ThirdwebProvider activeChain="ethereum" supportedWallets={[metamaskWallet()]}>
      {children}
    </ThirdwebProvider>
  )
}