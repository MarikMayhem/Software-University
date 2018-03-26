function attachPunshesEvents() {


    $.ajax('https://punsh-master.firebaseio.com/data/punshes.json', {
        method: 'GET',

        success: function (response) {
            let navbarItemsDiv = $('<div>').addClass('navbar-items');

            function addNavBarItems(response) {


                for (let punshData in response) {
                    let punshesData = response[punshData];
                    let navbarItemDiv = $('<div>').addClass('navbar-item');
                    let punshNameH4 = $('<h4>' + punshesData['name'] + '</h4>');

                    navbarItemDiv.append(punshNameH4);
                    navbarItemsDiv.append(navbarItemDiv);
                }

                $('.navbar').append(navbarItemsDiv);
            }

            addNavBarItems(response);
            createPunshData(response);

            //Display

            function createPunshData() {

                $.ajax('https://punsh-master.firebaseio.com/data/punshes.json', {
                    method: 'GET',

                    success: function (secondResponse) {
                        $('.navbar-item').click(function (e) {
                            e.preventDefault();

                            $('.navbar-items').empty();
                            let check = $(this).text();

                            for (let punsh in response) {

                                let punshesData = secondResponse[punsh];


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
                            $('.content-heading').click(function (e) {
                                e.preventDefault();
                                $('.content').empty();

                                addNavBarItems(response);
                                createPunshData(response);
                            });


                        });

                    }

                });

            }
        }
    });


}

attachPunshesEvents();