function spiralMatrix (w, h) {
    let size = Number(w)
    let column = 0
    let row = 0
    // starting from upper left (0,0)
    let length = size
    // length will be decreased by 1 on every second change of direction
    let end = size * size
    let currentNumber = 1

    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix.push([])
    }
    while (currentNumber <= end) {
        // Right (>)
        for (let i = 0; i < length; i++) {
            matrix[row][column] = currentNumber
            currentNumber++
            column++
        }
        // setting starting point for the new direction
        row++
        column--
        // decreasing the length for the next 2 directions
        // if the loop enters again, this is second direction switch
        length--

        // Down (V)
        for (let i = 0; i < length; i++) {
            matrix[row][column] = currentNumber
            currentNumber++
            row++
        }
        column--
        row--

        // Left (<)
        for (let i = 0; i < length; i++) {
            matrix[row][column] = currentNumber
            currentNumber++
            column--
        }
        row--
        column++
        // Second direction switch
        length--

        // Up (A)
        for (let i = 0; i < length; i++) {
            matrix[row][column] = currentNumber
            currentNumber++
            row--
        }
        column++
        row++
    }

    let result = matrix.map(row => row.join(' ')).join('\n')
    console.log(result)
}