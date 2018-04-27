function splitString(inputString,delimiter){

    inputString = inputString
        .split(delimiter)
        .join('\n');

    return inputString
}