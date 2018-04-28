function extractLinks(arrayStrings) {

    let finalArray = [];
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;

    for (let obj of arrayStrings) {
        if(obj.match(regex) != null){
            finalArray.push(obj.match(regex))
        }
    }
    console.log(finalArray.join('\n'))
}