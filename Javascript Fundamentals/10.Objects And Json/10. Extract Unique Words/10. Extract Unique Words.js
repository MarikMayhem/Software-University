function extractWords(arrStr) {

    let arr =[];
    let regex = /[^\w]+/g;
    for (let entry of arrStr) {
        let words = entry.split(regex).filter(Boolean);
        for (let obj of words) {
            if(!arr.includes(obj.toLowerCase())){
                arr.push(obj.toLowerCase())
            }
        }
    }
    console.log(arr.join(', '))
}