function matchAllWords(inputString){

    let final = inputString.replace(/\W+/g,'|');
    console.log(final.slice(0, -1))

}