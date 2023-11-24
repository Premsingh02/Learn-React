import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});

    let updateBlue = () => {
        moves.blue += 1;
        console.log(`move.blue = ${moves.blue}`);
        setMoves({...moves});
    }

    let updateYellow = () => {
        moves.yellow += 1;
        console.log(`move.yellow = ${moves.yellow}`);
        setMoves({...moves});
    }

    let updateGreen = () => {
        moves.green += 1;
        console.log(`move.green = ${moves.green}`);
        setMoves({...moves});
    }

    let updateRed = () => {
        moves.red += 1;
        console.log(`move.red = ${moves.red}`);
        setMoves({...moves});
    }

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}