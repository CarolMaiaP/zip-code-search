import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api from '../services/api'
import '../App.css'

export function ZipCodeSearch(){

  const {input, setInput} = useState('')

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

  return(
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
    </div>
  )
}