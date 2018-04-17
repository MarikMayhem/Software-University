function findBiggestElement(inputMatrix) {

    let biggestNumber = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < inputMatrix.length; i++) {

        for (let j = 0; j < inputMatrix[i].length; j++) {

            if (inputMatrix[i][j] > biggestNumber) {
                biggestNumber = inputMatrix[i][j]
            }
        }
    }
    console.log(biggestNumber)
}