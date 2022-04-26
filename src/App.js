import { useState } from "react";
import "./App.css";
import Board from "./component/Board";
import countBomb from "./component/CountBomb";

function App() {
    const [size, setsize] = useState("SMALL");
    const [smallSquare, setSmallSquare] = useState([]);
    const [clickBomb, setClickBomb] = useState(false);

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    const handleClickBomb = () => {
        setClickBomb(!clickBomb);
    };

    const createSquare = (sizeBoard) => {
        if (sizeBoard === "SMALL") {
            let square = Array(80).fill({ type: "-", id: "1" });
            let bomb = Array(20).fill("*");
            let shuffleSquare = shuffle([...square, ...bomb]);
            let allsquare = [];
            let count = 0;
            for (let i = 0; i < 10; i++) {
                let tmp = [];
                for (let j = 0; j < 10; j++) {
                    tmp.push(shuffleSquare[count]);
                    count++;
                }
                allsquare.push(tmp);
            }
            let final = squareToNumber(allsquare);
            setSmallSquare(final);
        }
    };

    const squareToNumber = (arraySquare) => {
        const tmp = arraySquare.map((ele, row) => {
            return ele.map((ele, column) => {
                if (ele.type === "-") {
                    return countBomb(row, column, arraySquare);
                } else {
                    return "*";
                }
            });
        });
        return tmp;
    };

    return (
        <div className="App">
            <Board
                smallSquare={smallSquare}
                handleClickBomb={handleClickBomb}
            />
            <button onClick={() => createSquare(size)}> createboard </button>
        </div>
    );
}

export default App;
