function capitalizeWords(inputString){

    inputString = inputString.replace(/\b\w/g, l => l.toUpperCase());
    inputString = inputString.replace(/\B[A-Z]/g, l => l.toLowerCase());

    return inputString
}