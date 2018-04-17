function findEvenInArray(inputArray){

    let evenArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if(i % 2 === 0){
            evenArray.push(inputArray[i])
        }
    }

    console.log(evenArray.join(' '))
}