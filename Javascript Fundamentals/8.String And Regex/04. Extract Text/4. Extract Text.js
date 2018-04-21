function extractText(string) {

    let firstBracket = string.indexOf('(', string);
    let finalArray = [];
    while (firstBracket > -1) {
        let secondBracket = string.indexOf(')', firstBracket);
        if (secondBracket === -1)
            break;
        let snippet = string.substring(firstBracket + 1, secondBracket);
        finalArray.push(snippet);
        firstBracket = string.indexOf('(', secondBracket)
    }
    console.log(finalArray.join(', '))
}