import { useState } from "react";
import { FaBomb } from "react-icons/fa";

export default function Square(props) {
    const { blockType, handleClickBomb } = props;

    const [toggleShow, setToggleShow] = useState(true);

    const handleToggleShow = () => {
        setToggleShow(true);
        if (blockType === "*") {
            handleClickBomb(true);
        }
    };

    return (
        <div className="square" onClick={handleToggleShow}>
            {toggleShow && (blockType === "*" ? <FaBomb /> : blockType)}
        </div>
    );
}
