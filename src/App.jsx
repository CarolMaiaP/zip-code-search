import { useState } from 'react'
import './App.css'
import { ZipCodeSearch } from './components/ZipCodeSearch'


function App() {

  const [input, setInput] = useState('')
  const [zipCode, setZipCode] = useState({})

  return (
    <div>
      <ZipCodeSearch/>
      {Object.keys(zipCode).length > 0 && (
        <main className='main'>
          <h2>Cep: {zipCode.cep}</h2>
          <span>{zipCode.logradouro}</span>
          <span>Complemento: {zipCode.complemento}</span>
          <span>Bairro: {zipCode.bairro}</span>
          <span>{zipCode.localidade} - {zipCode.uf}</span>
        </main>
      )}
    </div>
  )
}

export default App
