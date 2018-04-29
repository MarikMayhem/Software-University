function sumByTown(arrOfStrings){

    let townObject = {};

    for (let i = 0; i < arrOfStrings.length; i+=2) {

        if(townObject.hasOwnProperty(arrOfStrings[i])){
            townObject[arrOfStrings[i]] += Number(arrOfStrings[i + 1])
        }else{
            townObject[arrOfStrings[i]] = Number(arrOfStrings[i + 1])
        }
    }
    return JSON.stringify(townObject)

}