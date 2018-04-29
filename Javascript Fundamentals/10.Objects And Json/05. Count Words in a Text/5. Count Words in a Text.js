function countWords(arrStrings){

    let regexPattern = /[^A-Za-z_]/g;

    let finalObject = {};

    for (let sentence of arrStrings) {
        let formatedSentence = sentence.split(regexPattern).filter(Boolean);

        for (let word of formatedSentence) {
            if(finalObject.hasOwnProperty(word)){
                finalObject[word] += 1;
            }else{
                finalObject[word] = Number(1);
            }
        }
    }

    return JSON.stringify(finalObject)
}