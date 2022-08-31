import { FiSearch } from 'react-icons/fi'
import api from '../services/api'
import '../App.css'
import { useContext } from 'react'
import { ZipCodeContext } from '../contexts/ZipCodeContext'
import { ContainerSearch } from './ZipCodeSearch.styles'

export function ZipCodeSearch(){

  const {input, setInput, setZipCode} = useContext(ZipCodeContext);

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
    <ContainerSearch>
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
    </ContainerSearch>
  )
}