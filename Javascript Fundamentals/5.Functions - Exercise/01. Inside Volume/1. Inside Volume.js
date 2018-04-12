function insideVolume(inputArray){

    for (let i = 0; i < inputArray.length; i += 3) {
        let x = inputArray[i];
        let y = inputArray[i + 1];
        let z = inputArray[i + 2];

        function border3D(x,y,z){
            let x1 = 10, x2 = 50;
            let y1 = 20, y2 = 80;
            let z1 = 15, z2 = 50;
            if (x >= x1 && x <= x2){
                if(y >= y1 && y <= y2){
                    if(z >= z1 && z <= z2){
                        return true;
                    }
                }
            }
        }

        let boolTrue = border3D(x,y,z);

        if(boolTrue){
            console.log('inside')
        }else{
            console.log('outside')
        }
    }

}