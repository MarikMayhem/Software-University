function smallestTwoNumbers(inputArray){

    inputArray.sort((a,b) => (a - b)).join(' ');

    console.log(inputArray[0],inputArray[1])

}