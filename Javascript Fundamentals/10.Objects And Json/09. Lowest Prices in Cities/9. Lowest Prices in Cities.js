function lowestPriceInCity(arrStr) {

    let map = new Map();
    let finalString = '';

    for (let data of arrStr) {
        let refinedData = data.split(' | ');
        let town = refinedData[0];
        let product = refinedData[1];
        let price = Number(refinedData[2]);

        if (!map.has(product)) {
            map.set(product, new Map())
        }

        map.get(product).set(town, price)
    }

    for (let[product, insideMap] of map) {
        let smallestPrice = Number.POSITIVE_INFINITY;
        let townWithSmallestPrice = '';

        for (let [town,price] of insideMap) {
            if(price < smallestPrice){
                smallestPrice = price;
                townWithSmallestPrice = town;
            }
        }
        finalString += `${product} -> ${smallestPrice} (${townWithSmallestPrice})\n`;
    }

    return finalString
}