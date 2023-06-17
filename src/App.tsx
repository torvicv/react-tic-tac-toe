import { useState } from 'react';
import './App.css'
import Game from './components/Game';
import Moves from './components/Moves';


function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory([...history, nextSquares]);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
}

  return (
    <div className="game">
        <div className="game-board">
            <Game xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>
              {history.map((squares: any, move) => <Moves key={move} squares={squares} move={move} onJumpTo={jumpTo} />)}
            </ol>
        </div>
    </div>
  );
}

export default App
