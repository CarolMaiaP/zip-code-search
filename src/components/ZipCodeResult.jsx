import { useState } from "react"

export function ZipCodeResult(){
  const [zipCode, setZipCode] = useState({})
  return(
    <>
      {Object.keys(zipCode).length > 0 && (
        <main className='main'>
          <h2>Cep: {zipCode.cep}</h2>
          <span>{zipCode.logradouro}</span>
          <span>Complemento: {zipCode.complemento}</span>
          <span>Bairro: {zipCode.bairro}</span>
          <span>{zipCode.localidade} - {zipCode.uf}</span>
        </main>
      )}
    </>
  )
}