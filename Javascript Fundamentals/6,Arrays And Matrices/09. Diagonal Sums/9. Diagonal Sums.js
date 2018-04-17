function sumDiagonals(inputMatrix) {

    let leftCross = 0;
    let rightCross = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        leftCross += inputMatrix[i][i];
        rightCross += inputMatrix[i][inputMatrix.length - i - 1];
    }
    console.log(leftCross + ' ' + rightCross);
}