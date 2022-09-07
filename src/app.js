import React from "react";
import Boxes from "./boxes"
import Box from "./box"

export default function App() {
    const [squares, setSquares] = React.useState(Boxes)
    function toggle(id) {
        setSquares(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
        })
    }
    const squareElement = squares.map(square => {
        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
    })

    return (
        <div>

            {squareElement}
        </div>
    )
}