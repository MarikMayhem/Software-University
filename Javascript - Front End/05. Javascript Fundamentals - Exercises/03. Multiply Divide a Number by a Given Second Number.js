function multiplyFunction(firstNumber, secondNumber) {

    if (firstNumber >= secondNumber) {
        return Number(firstNumber) * Number(secondNumber);
    } else {
        return Number(firstNumber) / Number(secondNumber);
    }

}

let x = ['2', '13', '3', '144'];
let n = ['3', '13', '2', '12'];


console.log(multiplyFunction(n[0], x[0]));





