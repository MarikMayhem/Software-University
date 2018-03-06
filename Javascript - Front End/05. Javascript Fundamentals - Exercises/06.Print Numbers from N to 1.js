function printReverseNumbers(inputNum) {
    let print = '';

    for (let i = 1; i <= Number(inputNum); i++) {
        print+= i;
    }
    return print.split('').reverse().join('');
}

let num = 2;

console.log(printReverseNumbers(num));