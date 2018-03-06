function printNumbers(inputNum){

    let out = '';

    for (let i = 1; i <= Number(inputNum); i++) {
        out += i;
    }
    return out;
}

let number = 5;

console.log(printNumbers(number));




