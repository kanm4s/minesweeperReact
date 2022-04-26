import { useState } from "react";
import { FaBomb } from "react-icons/fa";

export default function Square(props) {
    const { id, blockType, handleClickBomb, smallSquare } = props;

    const [toggleShow, setToggleShow] = useState(true);

    const handleToggleShow = () => {
        setToggleShow(true);
        if (blockType === 0) {
            ExpandZeroArea(id);
        }
        if (blockType === "*") {
            handleClickBomb(true);
        }
    };

    function ExpandZeroArea(id) {
        const cloneArr = [...smallSquare];
        const idx = cloneArr.forEach((ele, index) => {
            ele.findIndex((ele) => {
                console.log(ele);
            });
        });
    }

    return (
        <div className="square" onClick={handleToggleShow}>
            {toggleShow && (blockType === "*" ? <FaBomb /> : blockType)}
        </div>
    );
}
