function reversConcat(inputArray){
    let concatArray = '';

    for (let i = 0; i < inputArray.length; i++) {
        concatArray += inputArray[i]
    }
    console.log(concatArray.split("").reverse().join(""))
}