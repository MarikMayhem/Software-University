function wordsUp(input){

    let checker = /\W+/;

    console.log(input.toUpperCase().split(checker).filter(w => w !== '').join(', '));

}