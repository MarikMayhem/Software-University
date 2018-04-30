function cityMarkets(arrString) {

    let mainMap = new Map();
    let finalString = '';
    for (let obj of arrString) {
        let mainData = obj.split(' -> ');
        let city = mainData[0];
        let product = mainData[1];
        let productSum = mainData[2].split(' : ').reduce((a, b) => a * b);

        if (!mainMap.has(city)) {
            mainMap.set(city, new Map())
        }

        if (!mainMap.get(city).has(product)) {
            mainMap.get(city).set(product, 0)
        }

        mainMap.get(city).set(product, mainMap.get(city).get(product) + productSum)
    }

    for (let data of mainMap) {
        let city = data[0];
        finalString += `Town - ${city}\n`;
        for (let itemIncome of data[1]) {
            let item = itemIncome[0];
            let income = itemIncome[1];
            finalString += `$$$${item} : ${income}\n`
        }
    }

    return finalString
}