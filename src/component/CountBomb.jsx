export default function countBomb(row, column, arraySquare) {
    let count = 0;
    let cloned = { ...arraySquare[row][column] };
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
    cloned.type = count;
    return cloned;
}
