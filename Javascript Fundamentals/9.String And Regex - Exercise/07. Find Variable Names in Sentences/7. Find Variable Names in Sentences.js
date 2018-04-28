function findNames(string){

    let finalArray =[];
    let matches = string.match(/(\b_[a-zA-Z0-9]+\b)/g);

    for (let obj of matches) {
        finalArray.push(obj = obj.replace('_',''))
    }
    return finalArray.join(',')

}