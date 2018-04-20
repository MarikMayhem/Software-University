function printArray(inputString){
    //Take the first element of the array
    let delimiter = inputString.splice([inputString.length - 1], inputString.length);
    let finalArray = [];
    for (let i = 0; i < inputString.length; i++) {

        finalArray.push(inputString[i])
    }

    console.log(finalArray.join(delimiter))
}