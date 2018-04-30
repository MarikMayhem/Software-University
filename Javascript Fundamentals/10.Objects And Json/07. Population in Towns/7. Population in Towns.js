function populationInTowns(arrStrings){

    let finalObject = {};
    let regex = /<->/g;
    for (let words of arrStrings) {
        let pair = words.split(regex).filter(Boolean);
        if(finalObject.hasOwnProperty(pair[0])){
            finalObject[pair[0]] += Number(pair[1])
        }else{
            finalObject[pair[0]] = Number(pair[1])
        }
    }
    let objectKeys = Object.keys(finalObject);

    for (let key of objectKeys) {
        console.log(`${key}: ${finalObject[key]}`)
    }

}