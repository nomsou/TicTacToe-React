import { useState } from 'react'
import './css/App.css';
import Board from './Board'
import Players from './Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Board />
      <Players />
    </div>
  )
}

export default App
