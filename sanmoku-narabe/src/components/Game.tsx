import '../styles/game.css';
import { Board } from './Board';

export const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{}</div>
        <ol>{}</ol>
      </div>
    </div>
  );
}