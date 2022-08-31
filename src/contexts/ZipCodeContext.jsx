import { createContext, useState } from "react"

export const ZipCodeContext = createContext({})

export function ZipCodeContextProvider({children}){
  const [input, setInput] = useState('');
  const [zipCode, setZipCode] = useState({});
  
  return(
    <ZipCodeContext.Provider
      value={{input, setInput, zipCode, setZipCode}}
    >
      {children}
    </ZipCodeContext.Provider>
  )
}