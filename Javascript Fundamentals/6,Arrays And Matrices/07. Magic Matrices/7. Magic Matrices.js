function magicMatrices (input) {
    let matrix = input

    let magicSum = 0
    matrix[0].forEach(x => (magicSum += x))
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b))
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]))

    let isMagical = true
    rowSum.forEach((element) => {
        if (element !== magicSum) isMagical = false
    })
    colSum.forEach((element) => {
        if (element !== magicSum) isMagical = false
    })

    console.log(isMagical)
}
