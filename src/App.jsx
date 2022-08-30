import { FiSearch } from 'react-icons/fi'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>Cep: 00000000</h2>
        <span>Complemento: Complemento</span>
        <span>Partenon</span>
        <span>Campo Grande -RS</span>
      </main>
      

    </div>
  )
}

export default App
