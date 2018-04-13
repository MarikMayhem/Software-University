function treasureLocator(inputString) {

    let x = 0;
    let y = 0;
    for (let i = 0; i < inputString.length; i++) {

        if (i % 2 === 0) {
            x = inputString[i];
        } else {
            y = inputString[i];
            switch (true) {
                case (x >= 1 && x <= 3 && y >= 1 && y <= 3):
                    console.log('Tuvalu');
                    break;
                case (x >= 8 && x <= 9 && y >= 0 && y <= 1):
                    console.log('Tokelau');
                    break;
                case (x >= 5 && x <= 7 && y >= 3 && y <= 6):
                    console.log('Samoa');
                    break;
                case (x >= 0 && x <= 2 && y >= 6 && y <= 8):
                    console.log('Tonga');
                    break;
                case (x >= 4 && x <= 9 && y >= 7 && y <= 8):
                    console.log('Cook');
                    break;
                default:
                    console.log('On the bottom of the ocean')
            }
        }
    }
}