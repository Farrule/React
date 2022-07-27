import { useState } from 'react';
import '../styles/board.css';
import { Square } from './Square';

export const Board = () => {
  const status: string = 'Next player : X';
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i: number) => {
    const _squares = squares.slice();
    _squares[i] = 'X';
    setSquares(_squares);
  }
  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)}/>

  return (
    <div>
      <div className="status">{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}