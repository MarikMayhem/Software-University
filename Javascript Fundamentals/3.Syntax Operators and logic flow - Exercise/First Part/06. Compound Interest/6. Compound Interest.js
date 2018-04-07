function compoundInterest(input) {

    let princSum = input[0];
    let intRate = input[1] / 100;
    let frequency = 12 / input[2] ;
    let totalTimespan = input[3];


    let formula =   princSum * Math.pow(1 + intRate / frequency,frequency * totalTimespan);
    console.log(formula.toFixed(2));
}