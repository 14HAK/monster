import React from "react";
import "../App.css"; // Optional: add some CSS to style your game

interface SquareProps {
  key: number;
  value: string;
  onSquareClick: () => void;
}

const Square = ({
  key,
  value,
  onSquareClick,
}: SquareProps): React.ReactElement => {
  return (
    <button key={key} className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
