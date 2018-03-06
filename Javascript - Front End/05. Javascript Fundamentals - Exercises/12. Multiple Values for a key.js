let items = [
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
];

let finalArray = [];

for (let item of items){
    let splittedItem = item.split(' ');

    if (finalArray[splittedItem[0]] === undefined){
        finalArray[splittedItem[0]] = [];
    }

    if (splittedItem[1]) {
        finalArray[splittedItem[0]].push(splittedItem[1]);
    }
}

console.log(finalArray[4]);