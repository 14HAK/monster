import React from "react";
import "../App.css"; // Optional: add some CSS to style your game
import Square from "./Square";

interface BoardProps {
  squares: string[];
  onSquareClick: (index: number) => void;
}

const Board = ({ squares, onSquareClick }: BoardProps): React.ReactElement => {
  // Helper to render a single square
  function renderSquare(i: number) {
    return (
      <Square
        key={i}
        value={squares[i]}
        onSquareClick={() => onSquareClick(i)}
      />
    );
  }

  // Render the board as three rows of squares
  return (
    <div>
      {[0, 1, 2, 4].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;
