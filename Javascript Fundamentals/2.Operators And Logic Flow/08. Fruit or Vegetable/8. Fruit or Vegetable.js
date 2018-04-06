function fruitOrVegetable(input) {
    let fruits = "banana kiwi apple lemon grapes peach cherry";
    let vegetables = "tomato cucumber pepper onion garlic parsley";

    if (fruits.includes(input)){
        console.log("fruit");
    }else if (vegetables.includes(input)){
        console.log("vegetable")
    }else{
        console.log("unknown")
    }
}