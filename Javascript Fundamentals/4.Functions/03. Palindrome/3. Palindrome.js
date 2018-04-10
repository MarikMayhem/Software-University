function palindrome(pal){

    let reversed = pal.toString().split("").reverse().join("");

    if (pal === reversed){
        console.log('true')
    }else{
        console.log('false')
    }

}