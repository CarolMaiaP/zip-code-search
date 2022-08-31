import { useState } from 'react'
import './App.css'
import { ZipCodeResult } from './components/ZipCodeResult'
import { ZipCodeSearch } from './components/ZipCodeSearch'


function App() {

  const [input, setInput] = useState('')
  const [zipCode, setZipCode] = useState({})

  return (
    <div>
      <ZipCodeSearch/>
      <ZipCodeResult/>
    </div>
  )
}

export default App
