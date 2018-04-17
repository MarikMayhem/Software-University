function negativeOrPositiveNumbers(inputArray){

    let finalArray = [];
    for (let obj of inputArray) {
        if (obj >= 0){
            finalArray.push(obj);
        }else{
            finalArray.unshift(obj);
        }
    }
    console.log(finalArray.join('\n'));
}