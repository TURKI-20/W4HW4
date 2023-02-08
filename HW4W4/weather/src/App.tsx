import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Weatherapi from './WeatherApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Weatherapi/>
    </div>
  )
}

export default App
