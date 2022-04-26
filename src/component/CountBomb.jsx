export default function countBomb(row, column, arraySquare) {
    let count = 0;
    console.log(arraySquare[0][0].typeSquare);
    if (
        row >= 0 &&
        row <= arraySquare.length &&
        column >= 0 &&
        column <= arraySquare.length
    ) {
        if (row === 0) {
            if (arraySquare[row][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column + 1] === "*") {
                count++;
            }
        } else if (row === 9) {
            if (arraySquare[row - 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row][column + 1] === "*") {
                count++;
            }
        } else if (column === 0) {
            if (arraySquare[row - 1][column] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column + 1] === "*") {
                count++;
            }
        } else if (column === 9) {
            if (arraySquare[row - 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column] === "*") {
                count++;
            }

            if (arraySquare[row][column - 1] === "*") {
                count++;
            }

            if (arraySquare[row + 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column] === "*") {
                count++;
            }
        } else {
            if (arraySquare[row - 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column] === "*") {
                count++;
            }
            if (arraySquare[row - 1][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row][column + 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column - 1] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column] === "*") {
                count++;
            }
            if (arraySquare[row + 1][column + 1] === "*") {
                count++;
            }
        }
    }

    // let cloned = { ...arraySquare[row][column], typeSquare: count };
    // return { ...cloned };
    return 1;
}
