import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './App.css'
import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [zipCode, setZipCode] = useState({})

  async function handleSearch(){
    if( input === ''){
      alert("Preencha algum cep")
      return
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setZipCode(response.data)
      setInput("")
    }catch{
      alert("erro ao buscar")
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

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
