import { useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import '../styles/game.css';
import { Board } from './Board';

// type GameState = {}

// type GameProps = {}

export const Game = () => {
  const [history, setHistory] = useState([ {squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(history.concat([{ squares }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  }

  const _history = history;
  const current = _history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={ (i: number) => handleClick(i) }
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}