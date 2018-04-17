function firstAndLastK(inputArray) {

    let kValue = inputArray.shift();
    let inputLength = (inputArray.length - kValue);

    let firstNums = inputArray.slice(0, kValue);
    let lastNums = inputArray.slice(inputLength, kValue + 1);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}