import React, {useState} from 'react'
import './css/board.css'

const Board = () => {
  const [data, setdata] = useState(Array(9).fill(''));
  const [current, setCurrent] = useState('X')
  const Draw = (index) => {
    const board = data;
    board[index] = current;
    setdata(board)
    if(current === "X"){
      setCurrent("0")
    }else{
      setCurrent("x")
    }
  }
  return (
    <div className="board">
      <div className="input input1" 
          onClick={() => Draw(0)}>{data[0]}</div>
      <div className="input input2" 
          onClick={() => Draw(1)}>{data[1]}</div>
      <div className="input input3" 
          onClick={() => Draw(2)}>{data[2]}</div>
      <div className="input input4" 
          onClick={() => Draw(3)}>{data[3]}</div>
      <div className="input input5" 
          onClick={() => Draw(4)}>{data[4]}</div>
      <div className="input input6" 
          onClick={() => Draw(5)}>{data[5]}</div>
      <div className="input input7" 
          onClick={() => Draw(6)}>{data[6]}</div>
      <div className="input input8" 
          onClick={() => Draw(7)}>{data[7]}</div>
      <div className="input input9" 
          onClick={() => Draw(8)}>{data[8]}</div>
    </div>
  )
}

export default Board