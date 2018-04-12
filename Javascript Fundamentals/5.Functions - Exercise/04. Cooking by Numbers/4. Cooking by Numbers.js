function cookingByNumbers(inputArray){

    let number = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        switch(inputArray[i]){
            case 'chop':
                number = number / 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number = number + 1;
                console.log(number);
                break;
            case 'bake':
                number = number * 3;
                console.log(number);
                break;
            case 'fillet':
                number = (number * 0.80).toFixed(1);
                console.log(number);
                break;
        }

    }

}