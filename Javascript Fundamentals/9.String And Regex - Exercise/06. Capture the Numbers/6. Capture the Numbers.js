function captureNumbers(inputArray) {

    let numberArray = '';
    for (let obj of inputArray) {
        if (obj.match(/\d+/g) != null) {
            numberArray += obj.match(/\d+/g).join(' ') + ' '
        }

    }
    console.log(numberArray)

}