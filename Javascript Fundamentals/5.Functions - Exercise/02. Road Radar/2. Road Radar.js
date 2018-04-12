function roadRadar(inputArray) {

    let speed = inputArray[0];

    function currentSpeed(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }

    }

    let limit = currentSpeed(inputArray[1]);


    function getInfraction(speed, limit) {

        let overSpeed = 0;
        let finalResult = '';
        if (speed > limit) {
            overSpeed = speed - limit;
            switch (true) {
                case overSpeed <= 20:
                    finalResult += 'speeding';
                    break;
                case overSpeed <= 40 :
                    finalResult += 'excessive speeding';
                    break;
                case overSpeed > 40:
                    finalResult += 'reckless driving';
            }
        }
        return finalResult;
    }

    console.log(getInfraction(speed, limit));
}