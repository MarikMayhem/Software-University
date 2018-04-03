function letterOccurences(word,char){

    let occurances = 0;

    for (character of word) {
        if (character === char){
            occurances += 1;
        }
    }
    console.log(occurances)
}