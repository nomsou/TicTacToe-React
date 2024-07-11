import React from 'react'
import './css/board.css'

const Board = () => {
  return (
    <div className="board">
      <div className="input input1" 
          onClick={() => Draw(0)}></div>
      <div className="input input2" 
          onClick={() => Draw(1)}></div>
      <div className="input input3" 
          onClick={() => Draw(2)}></div>
      <div className="input input4" 
          onClick={() => Draw(3)}></div>
      <div className="input input5" 
          onClick={() => Draw(4)}></div>
      <div className="input input6" 
          onClick={() => Draw(5)}></div>
      <div className="input input7" 
          onClick={() => Draw(6)}></div>
      <div className="input input8" 
          onClick={() => Draw(7)}></div>
      <div className="input input9" 
          onClick={() => Draw(8)}></div>
    </div>
  )
}

export default Board