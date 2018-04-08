function rounding(input) {

    let firstNum = input[0];
    let secondNum = input[1];
    let precision = (firstNum + "").split(".")[1].length;

    if(secondNum > 15){
        secondNum = 15
    }

    if(secondNum > precision){
        console.log(firstNum)
    }else{
        console.log(firstNum.toFixed(secondNum))
    }


}