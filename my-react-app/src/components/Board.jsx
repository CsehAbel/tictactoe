// export a Board Component which contains three rows of Squares
import Square from './Square'
import { useState } from 'react'

export default function Board() {
    //create an array which keeps track of the state of each square
    //const [squares, setSquares] = useState(Array(9).fill(null))

    //initialize the state of the squares array to X
    const [squares, setSquares] = useState(Array(9).fill('X'))
    //create a function that will update the state of the squares array
    // const updateSquare = (index) => {
    //    const newSquares = [...squares]
    //    newSquares[index] = 'X'
    //    setSquares(newSquares)
    // }

    const updateAllSquares = () => {
        const newSquares = [...squares]
        newSquares.fill("O")
        setSquares(newSquares)
    }

    return (
    <div>
        {/* create a button with an event handler that demoes setSquares */}
        <button onClick= {() => updateAllSquares()}
        > Clear </button>
       <div>
        <Square value={squares[0]} setSquares={setSquares} squares={squares} index={0} />
        <Square value={squares[1]} setSquares={setSquares} squares={squares} index={1} />
        <Square value={squares[2]} setSquares={setSquares} squares={squares} index={2} />
      </div>
      <div>
        <Square value={squares[3]} setSquares={setSquares} squares={squares} index={3} />
        <Square value={squares[4]} setSquares={setSquares} squares={squares} index={4} />
        <Square value={squares[5]} setSquares={setSquares} squares={squares} index={5} />
      </div>
      <div>
        <Square value={squares[6]} setSquares={setSquares} squares={squares} index={6} />
        <Square value={squares[7]} setSquares={setSquares} squares={squares} index={7} />
        <Square value={squares[8]} setSquares={setSquares} squares={squares} index={8} />
      </div>
    </div>
    )
    }
