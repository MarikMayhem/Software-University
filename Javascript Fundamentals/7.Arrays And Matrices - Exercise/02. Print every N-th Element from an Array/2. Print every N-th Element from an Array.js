function printEveryNthElement(inputArray) {
    let nStep = Number(inputArray.pop());

    for (let i = 0; i < inputArray.length; i += nStep) {
        console.log(inputArray[i] )
    }

}