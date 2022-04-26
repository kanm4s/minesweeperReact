export default function ExpandZeroArea(arraySquare, id) {
    const cloneArr = [...arraySquare];
    const idx = cloneArr.forEach((ele, index) => {
        return ele.findIndex((ele) => ele.id === id);
    });
}
