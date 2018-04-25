function simpleValidation(inputString){
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;

    inputString.match(regex) ? console.log('Valid') : console.log('Invalid')


}