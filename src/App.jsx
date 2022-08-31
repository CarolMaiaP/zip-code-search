import './App.css'
import { ZipCodeResult } from './components/ZipCodeResult'
import { ZipCodeSearch } from './components/ZipCodeSearch'


function App() {
  return (
    <div className="container">
      <ZipCodeSearch/>
      <ZipCodeResult/>
    </div>
  )
}

export default App
