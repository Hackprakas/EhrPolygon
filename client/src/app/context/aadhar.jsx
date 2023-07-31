// AadharContext.js
"use client"

import { createContext, useState } from 'react';

const AadharContext = createContext();

export function AadharProvider({ children }) {
  const [aadharNumber, setAadharNumber] = useState(0);

  return (
    <AadharContext.Provider value={{ aadharNumber, setAadharNumber }}>
      {children}
    </AadharContext.Provider>
  );
}

export default AadharContext;
