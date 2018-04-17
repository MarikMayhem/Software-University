function lastKNumbers(numN,numK){

    let sequenceArray = [1];
    let sum = [];
    let lastCase = 0;
    for (let i = 0; i < numN - 1; i++) {
        //Check if its negative number so it start from the first array index
        if(sequenceArray.length - numK < 0){
            lastCase = 0;
        }else{
            lastCase = sequenceArray.length - numK;
        }
        sum = sequenceArray
            .slice(lastCase ,sequenceArray.length)
            .reduce((a,b) => a + b);
        sequenceArray.push(sum)

    }
    console.log(sequenceArray)

}