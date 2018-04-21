function aggregateTable(inputString){

    let newObject = [];
    let sum = 0;
    for (let line of inputString) {
        let currentLine = line.split('|');
        newObject.push(currentLine[1].trim());
        sum += Number(currentLine[2])
    }
    console.log(newObject.join(', '));
    console.log(sum)
}