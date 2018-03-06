function multiplyTwoNumbers(number1, number2) {
    return Number(number1) * Number(number2);
}

let numbers = ['2', '3', '13', '13', '1', '2', '0', '50'];


console.log(multiplyTwoNumbers(numbers[0], numbers[1]),
    multiplyTwoNumbers(numbers[2], numbers[3]),
    multiplyTwoNumbers(numbers[4], numbers[5]),
    multiplyTwoNumbers(numbers[6], numbers[7])
);

