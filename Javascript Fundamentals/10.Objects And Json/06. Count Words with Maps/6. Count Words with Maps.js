function countWordsWithMaps(arrStr){

    let regexPattern = /[^A-Za-z_]/g;

    let finalMap = new Map();

    for (let string of arrStr) {
        let wordArray = string.toLowerCase().split(regexPattern).filter(Boolean);
        for (let word of wordArray) {
            if(finalMap.has(word)){
                finalMap.set(word, finalMap.get(word) + 1) ;
            }else{
                finalMap.set(word, 1)
            }
        }
    }
    let sortedMap = new Map([...finalMap.entries()].sort());
    let mapKeys = sortedMap.keys();

    for (let key of mapKeys) {

        console.log(`'${key}' -> ${sortedMap.get(key)} times`)
    }

}