function sortArray(stringArray) {
    stringArray.sort((a, b) => (a.toLowerCase() > b.toLowerCase()))
        .sort((a, b) => (a.length - b.length));

    for (let i = 0; i < stringArray.length; i++) {

        console.log(stringArray[i])
    }

}