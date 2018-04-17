function processOddNums(inputArray){

    let oddNumsArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if(i % 2 !== 0){
            oddNumsArray.push((inputArray[i] * 2));
        }
    }

    console.log(oddNumsArray.reverse().join(' '));
}