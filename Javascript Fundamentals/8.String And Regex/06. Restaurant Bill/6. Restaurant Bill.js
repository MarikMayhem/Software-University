function restaurantBill(stringArray) {

    let products = [];
    let sum = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (i % 2 === 0) {
            products.push(stringArray[i])
        } else {
            sum += Number(stringArray[i])
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)

}