import React, { useState } from "react";
import "../App.css";
import Board from "./Board";

// Helper function to calculate the winner
function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game(): React.ReactElement {
  // history: an array of board states
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // stepNumber: the index of the current move in history
  const [stepNumber, setStepNumber] = useState(0);
  // xIsNext: boolean flag indicating which player is next (X or O)
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[stepNumber];
  const winner = calculateWinner(currentSquares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  // Handler for when a square is clicked
  function handleSquareClick(i: number) {
    // If game is won or the square is already filled, do nothing
    if (winner || currentSquares[i]) return;

    // Create a copy of the current board state
    const newSquares = currentSquares.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    // Update history and step number
    const newHistory = history.slice(0, stepNumber + 1);
    setHistory([...newHistory, newSquares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  // Jump to a specific move in the history
  function jumpTo(step: number) {
    setStepNumber(step);
    // Determine which player’s turn it is based on the move number
    setXIsNext(step % 2 === 0);
  }

  // Render move history for time travel
  const moves = history.map((_, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description} {move === stepNumber ? "(current)" : ""}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onSquareClick={handleSquareClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
