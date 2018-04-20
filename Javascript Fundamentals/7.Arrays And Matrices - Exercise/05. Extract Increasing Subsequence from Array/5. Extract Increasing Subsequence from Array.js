function extractNumbers(inputArray){
    let currentNum = 0;
    let finalArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if(Number(inputArray[i]) >= currentNum){
            finalArray.push(inputArray[i]);
            currentNum = inputArray[i];
        }
    }
    console.log(finalArray.join('\n'))
}