import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Usememo from './usememo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Usememo/> 
    </div>
  )
}

export default App
