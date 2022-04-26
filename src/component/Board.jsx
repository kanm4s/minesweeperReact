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
                            id={index}
                            blockType={el.typeSquare}
                            handleClickBomb={handleClickBomb}
                            smallSquare={smallSquare}
                        />
                    );
                });
            })}
        </div>
    );
}
