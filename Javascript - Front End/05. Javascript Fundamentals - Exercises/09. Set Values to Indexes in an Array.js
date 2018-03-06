let arrLength = 2;

let firstLine = "0 - 5".split(' ');
let secondLine = "0 - 6".split(' ');
let thirdLine = "0 - 7".split(' ');

let arr = [];
arr.length = arrLength;

arr[Number(firstLine[0])] = Number(firstLine[2]);
arr[Number(secondLine[0])] = Number(secondLine[2]);
arr[Number(thirdLine[0])] = Number(thirdLine[2]);

for(num of arr) {
    if(num === undefined){
        console.log(0);
    } else {
        console.log(num);
    }
}