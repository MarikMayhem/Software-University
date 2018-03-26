let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

attachPunshesEvents(punshes);

function attachPunshesEvents(punshes) {


    let navbarItemsDiv = $('<div>').addClass('navbar-items');

    function addNavBarItems(punshes) {
        for (let punsh in punshes) {
            let punshesData = punshes[punsh];
            let navbarItemDiv = $('<div>').addClass('navbar-item');
            let punshNameH4 = $('<h4>' + punshesData['name'] + '</h4>');

            navbarItemDiv.append(punshNameH4);
            navbarItemsDiv.append(navbarItemDiv);
        }
    }

    addNavBarItems(punshes);
    createPunshData(punshes);

    function createPunshData(punshes) {
        $('.navbar').append(navbarItemsDiv);

        //Display

        $('.navbar-item').click(function (e) {
            e.preventDefault();

            $('.navbar-items').empty();
            let check = $(this).text();

            for (let punsh in punshes) {

                let punshesData = punshes[punsh];


                console.log(check);

                if (punshesData['name'] === check) {
                    let contentHeaderDiv = $('<div>').addClass('content-header');
                    let contentHeadingDiv = $('<div>' + punshesData['name'] + '</div>').addClass('content-heading').css('cursor', 'pointer');

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
            attachBackEvents(punshes);

        });


    }

    function attachBackEvents(punshes) {
        $('.content-heading').click(function (e) {
            e.preventDefault();
            $('.content').empty();
            addNavBarItems(punshes);
            createPunshData(punshes);
        });
    }
}



