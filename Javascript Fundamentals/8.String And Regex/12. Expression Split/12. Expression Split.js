function expressionSplit(inputString){
    let regexSplit = /['\(\),;\.\s]+|\\[a-z]/g;

    let refinedArray = inputString.split(regexSplit);

    return refinedArray.join('\n')

}