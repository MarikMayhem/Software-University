function convertToBinary(binaryNumber){

    let reversed = binaryNumber.toString().split("").reverse().join("");

    let match = 0;
    let exponent = 0;
    for (let obj of reversed) {
        if(obj == 1){
            match += Math.pow(2,exponent)
        }
        exponent +=1;
    }

    console.log(match);
}