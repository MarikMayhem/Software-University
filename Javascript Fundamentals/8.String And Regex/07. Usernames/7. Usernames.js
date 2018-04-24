function userNames(arrayString){

    let firstNames = '';
    let finalArray = [];
    for (let i = 0; i < arrayString.length; i++) {
        let removeAt = arrayString[i].split('@');
        firstNames += (removeAt[0] + '.');
        let removeDots = removeAt[1].split('.');
        for (let j = 0; j < removeDots.length; j++) {
            firstNames += removeDots[j].charAt(0);
        }
        finalArray.push(firstNames);
        firstNames = '';
    }

    console.log(finalArray.join(', '))
}