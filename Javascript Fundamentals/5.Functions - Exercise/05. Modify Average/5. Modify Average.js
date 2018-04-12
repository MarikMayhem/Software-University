function modifyAverage(inputNum) {

    let numCharSize = inputNum.toString();
    let numCharSum = Array.from(numCharSize);
    let charSum = 0;
    for (let i = 0; i < numCharSum.length; i++) {
        charSum += Number(numCharSum[i]);
    }

    for (let j = 0; j < numCharSize.length; j++) {
        if (charSum / numCharSize.length <= 5) {
            charSum += 9;
            numCharSize += 9;
        }
    }

    console.log(numCharSize)

}