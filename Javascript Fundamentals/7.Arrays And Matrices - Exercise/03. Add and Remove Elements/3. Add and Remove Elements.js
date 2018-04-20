function addAndRemoveElements(inputArray){

    let array = [];
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === 'add'){
            sum += 1;
            array.push(sum)
        }else if (inputArray[i] === 'remove'){
            sum += 1;
            array.pop();
            array.push(sum);
            array.pop();
        }
    }
    if (array.length === 0){
        console.log('Empty')
    }else{
        console.log(array.join('\n'))
    }
}