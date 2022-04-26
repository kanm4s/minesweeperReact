import { useState } from "react";
import Square from "./Square";

export default function Board(props) {
    const { smallSquare, handleClickBomb } = props;

    return (
        <div className="board">
            {smallSquare.map((ele) => {
                return ele.map((el, index) => {
                    return (
                        <Square
                            key={index}
                            blockType={el}
                            handleClickBomb={handleClickBomb}
                        />
                    );
                });
            })}
        </div>
    );
}
