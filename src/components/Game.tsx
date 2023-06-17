import Board from './Square'

export default function Game({xIsNext, squares, onPlay}) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) 
    status = "Winner: " + winner;
  else
    status = "Next player: " + (xIsNext ? "X" : "O");

  function handleClick(i: any) {
    if (squares[i])
      return;
    const nextSquares = squares.slice();

    if (xIsNext)
      nextSquares[i] = 'X';
    else
      nextSquares[i] = 'O';
    onPlay(nextSquares);
  }

  return (
    <>
    <div className='bg-blue-400 text-white'>{status}</div>
    <div className='flex'>
      <Board value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Board value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Board value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className='flex'>
      <Board value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Board value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Board value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className='flex'>
      <Board value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Board value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Board value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  );
}

function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
