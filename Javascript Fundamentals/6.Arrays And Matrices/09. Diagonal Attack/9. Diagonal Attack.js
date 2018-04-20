function diagonalAttack (input) {
    let matrix = input.map(row => row.split(' ').map(Number))
    let first = 0
    let second = 0

    for (let row = 0; row < matrix.length; row++) {
        first += matrix[row][row]
        second += matrix[row][matrix.length - 1 - row]
    }

    if (first === second) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row + col + 1 === matrix.length) {
                    continue
                }
                matrix[row][col] = first
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n')
    console.log(result)
}