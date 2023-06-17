import { useState } from "react";

export default function Moves({squares, move, onJumpTo}) {
    let description;
    if (move > 0)
        description = 'Go to move #' + move;
    else
        description = 'Go to game start';

    return (
        <li key={move}>
            <button onClick={() => onJumpTo(move)}>{description}</button>
        </li>
    )
}