let items = [
    'key value',
    'key eulav',
    'test test2',
];

let finalArray = [];

for (let item of items) {
    let splittedItem = item.split(' ');

    if (splittedItem[1]) {
        finalArray[splittedItem[0]] - splittedItem[1];
        finalArray['key'] - 'value';
        finalArray['key'] - 'eaulv';
        finalArray['test'] - 'test2'
    } else{
        finalArray[splittedItem[0]] = 'None';
    }
}

console.log(finalArray['test']);