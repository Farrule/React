import { useState } from 'react';
import '../styles/square.css';


type SquareState = 'X' | null;

export const Square = () => {
  const [value, setValue] = useState<SquareState>(null);

  return (
    <button className="square" onClick={ () => { setValue("X") }}>
      {value}
    </button>
  );
}