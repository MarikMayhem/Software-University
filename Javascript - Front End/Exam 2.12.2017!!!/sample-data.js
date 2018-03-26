let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

function renderAllPunshes(punshes) {
    for (let punsh in punshes) {
        let punshesData = punshes[punsh];

        console.log(punshesData['name']);
    }
}

function renderSinglePunsh(punshes, punshName) {

    let punshesData = '';

    for (let punsh in punshes) {
        punshesData = punshes[punsh];
        if (punshesData['name'] === punshName) {
            console.log(punshesData['name']);
            console.log('Type: ' + punshesData['type']);
            console.log('Contents: ' + punshesData['contents']);
            console.log('Description: ' + punshesData['description']);
        }
    }



}

renderAllPunshes(punshes);
renderSinglePunsh(punshes, "Punsh - The American Pie");
