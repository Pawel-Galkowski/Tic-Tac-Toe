import React, { useState } from 'react';
import Square from './Square';
import Winner from './Winner';

function TicTacToe() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true);

  const handleClick = (index) => {
    const squares = [...boardSquares];

    if (Winner(boardSquares) || squares[index]) return;

    squares[index] = nextX ? 'X' : 'O';
    setBoardSquares(squares);
    setNextX(!nextX);
  };

  const renderSquare = (index) => (
    <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
  );

  const restartGame = () => {
    setBoardSquares(Array(9).fill(null));
  };
  const winner = Winner(boardSquares);

  const winnerStatus = () => {
    if (winner) return `Winner is: ${winner}`;
    if (!boardSquares.includes(null)) return 'Draw';
    return `Next Player is: ${nextX ? 'X' : 'O'}`;
  };

  const status = winnerStatus();

  return (
    <div className="background-board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winner || !boardSquares.includes(null) ? (
        <button className="restart" type="button" onClick={restartGame}>
          Restart
        </button>
      ) : (
        <div className="restart-blank" />
      )}
    </div>
  );
}

export default TicTacToe;
