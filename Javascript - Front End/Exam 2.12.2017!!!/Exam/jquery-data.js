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

function renderAllPunshesInHTML(punshes) {

    let navbarItemsDiv = $('<div>').addClass('navbar-items');


    for (let punsh in punshes) {
        let punshesData = punshes[punsh];
        let navbarItemDiv = $('<div>').addClass('navbar-item');
        let punshNameH4 = $('<h4>' + punshesData['name'] + '</h4>');

        navbarItemDiv.append(punshNameH4);
        navbarItemsDiv.append(navbarItemDiv);
    }

    $('.navbar').append(navbarItemsDiv);

}

function renderSinglePunshInHTML(punshes, punshName) {


    for (let punsh in punshes) {

        let punshesData = punshes[punsh];

        if (punshesData['name'] === punshName) {
            let contentHeaderDiv = $('<div>').addClass('content-header');
            let contentHeadingDiv = $('<div>' + punshName + '</div>').addClass('content-heading').css('cursor', 'pointer');

            let punshDataDiv = $('<div>').addClass('punsh-data');

            let punshTypeDiv = $('<div>').addClass('punsh-type');
            let labelType = $('<label>Type: </label>');
            let h6Type = $('<h6>' + punshesData['type'] + '</h6>');

            let punshContentsDiv = $('<div>').addClass('punsh-contents');
            let labelContents = $('<label>Contents: </label>');
            let pContents = $('<p>' + punshesData['contents'] + '</p>');

            let punshDescriptionDiv = $('<div>').addClass('punsh-description');
            let labelDescription = $('<label>Description: </label>');
            let pDescription = $('<p>' + punshesData['description'] + '</p>');

            $('.content').append(contentHeaderDiv
                .append(contentHeadingDiv))
                .append(punshDataDiv
                    .append(punshTypeDiv
                        .append(labelType)
                        .append(h6Type)));

            punshDataDiv.append(punshContentsDiv
                .append(labelContents)
                .append(pContents));

            punshDataDiv.append(punshDescriptionDiv
                .append(labelDescription)
                .append(pDescription));
        }

    }


}


renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh - The American Pie");