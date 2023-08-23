//create a Square Component that renders a button element

export default function Square({ value, squares, setSquares, index }) {

    function switchValue() {
        console.log("Switching Value")
        if (value === 'X') {
            console.log("Switching Value to O")
            //copy squares ,set the index th element of the squares array to O
            const newSquares = [...squares]
            newSquares[index] = 'O'
            setSquares(newSquares)
        } else {
            console.log("Switching Value to X")
            //copy squares ,set the index th element of the squares array to X
            const newSquares = [...squares]
            newSquares[index] = 'X'
            setSquares(newSquares)
        }
    }

    console.log("Rendering Square")
    return (
        <button className="square" onClick={switchValue}>
        {value}
        </button>
    )
}