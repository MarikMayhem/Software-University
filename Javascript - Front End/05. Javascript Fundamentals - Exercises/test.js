function multiplyNumber(number) {
    let finalNumber = Number(number);
    return finalNumber * 2;
}

let numbers = ['1', '10', '15', '20', '4'];


// it takes every number in the array
// if you write in instead of the of it takes the index of the array
for (let number of numbers) {
    console.log(multiplyNumber(number));
}


//the more complex way by usual for cycle.
var numbers2 = ['5', '7', '8', '15', '40'];

for (var i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}


