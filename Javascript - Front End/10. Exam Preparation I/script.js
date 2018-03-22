

// let location = {
//     name: 'Izgrev',
//     longitude: '95.243',
//     latitude: '94.231',
//     pokemons: {
//         0: {
//             name: 'Pikachu',
//             power: 2000,
//             evolvedFrom: 'none',
//             evolvesTo: 'Raichu'
//         },
//         1: {
//             name: 'Wartortle',
//             power: 500,
//             evolvedFrom: 'Squirtle',
//             evolvesTo: 'Blastoise'
//         },
//         2: {
//             name: 'CherryBerry',
//             power: 9999,
//             evolvedFrom: 'Cherry',
//             evolvesTo: 'Berry'
//         }
//     }
// };

let locationInHtml = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};

//Problem 1

function renderData(location) {

    let longitude = location['longitude'];
    let latitude = location['latitude'];
    let pokemons = location['pokemons'];


    console.log('Location: ' + location['name']);
    console.log('Longitude: ' + longitude + ' Latitude ' + latitude);
    console.log('Pokemons:');


    for (let index in pokemons) {
        let pokemon = pokemons[index];

        console.log('###Name: ' + pokemon['name']);
        console.log('###Power: ' + pokemon['power'] + 'pp');
        console.log('###Evolved From: ' + pokemon['evolvedFrom']);
        console.log('###Evolves To: ' + pokemon['evolvesTo']);

    }

}

//Problem 2


function renderDataInHTML(locationInHtml) {


    function renderContainerDiv() {

        let containerDiv = $('<div>').addClass('container');
        let resultDiv = $('<div>').addClass('result');
        let locationDiv = $('<div>').addClass('location');

        let locationH1 = $('<h1>Location:' + locationInHtml['name'] + '</h1>').addClass('location-name');
        let locationCoordinatesDiv = $('<div >').addClass('location-coordinates');
        let longitudeH2 = $('<h2>Longitude: ' + locationInHtml['longitude'] + '</h2>');
        let latitudeH2 = $('<h2>Latitude: ' + locationInHtml['latitude'] + '</h2>');


        $('body')
            .append(containerDiv
                .append(resultDiv
                    .append(locationDiv
                        .append(locationH1)
                        .append(locationCoordinatesDiv
                            .append(longitudeH2)
                            .append(latitudeH2)))));

        //call the other function in this scope
        //locationInHtml is the data from above
        renderPokemons(resultDiv, locationInHtml);
    }

    function renderPokemons(resultDiv) {


        let pokemonsDiv = $('<div>').addClass('pokemons');


        let pokemons = locationInHtml['pokemons'];


        for (let index in pokemons) {

            let pokemon = pokemons[index];

            let pokemonDiv = $('<div>').addClass('pokemon');
            let pokemonTitleDiv = $('<div>' + pokemon['name'] + '</div>').addClass('pokemon-title');
            let pokemonStatsDiv = $('<div>').addClass('pokemon-stats');

            let pokemonNameDiv = $('<div>Name: ' + pokemon['name'] + '</div>').addClass('pokemon-name');
            let pokemonPowerDiv = $('<div>Power: ' + pokemon['power'] + 'pp</div>').addClass('pokemon-power');
            let pokemonEvolvedFromDiv = $('<div>Evolved From: ' + pokemon['evolvedFrom'] + ' </div>').addClass('pokemon-evolved-from');
            let pokemonEvolvesToDiv = $('<div>Evolves To: ' + pokemon['evolvesTo'] + ' </div>').addClass('pokemon-evolves-to');

            resultDiv
                .append(pokemonsDiv
                    .append(pokemonDiv
                        .append(pokemonTitleDiv)
                        .append(pokemonStatsDiv
                            .append(pokemonNameDiv)
                            .append(pokemonPowerDiv)
                            .append(pokemonEvolvedFromDiv)
                            .append(pokemonEvolvesToDiv))));
        }

    }


    renderContainerDiv();

}

//Problem 3

function attachEvents() {


    $('.location-form > button').on('click', function (e) {
        e.preventDefault();

        let inputVal = $('.location-input').val();

        if (inputVal.length > 0) {
            let inputResult = $('<div>' + inputVal + '</div>').addClass('result-element');
            $('.result').append(inputResult);
        }

        $('.location-input').val('');

    });


}


//problem 4

function renderAjaxDataInHTML() {


    $('.location-form > button').on('click', function (e) {
        e.preventDefault();


        let inputVal = $('.location-input').val();
        $('.location-input').val('');
        $('.result').empty();

        if (inputVal.length > 0) {

            $.ajax('https://pokemoncodex.firebaseio.com/locations/' + inputVal + '.json', {
                method: 'GET',

                success: function (response) {
                    function renderLocationDiv(response) {

                        let containerDiv = $('<div>').addClass('container');
                        let resultDiv = $('<div>').addClass('result');
                        let locationDiv = $('<div>').addClass('location');

                        let locationH1 = $('<h1>Location:' + response['name'] + '</h1>').addClass('location-name');
                        let locationCoordinatesDiv = $('<div >').addClass('location-coordinates');
                        let longitudeH2 = $('<h2>Longitude: ' + response['longitude'] + '</h2>');
                        let latitudeH2 = $('<h2>Latitude: ' + response['latitude'] + '</h2>');


                        $('body')
                            .append(containerDiv
                                .append(resultDiv
                                    .append(locationDiv
                                        .append(locationH1)
                                        .append(locationCoordinatesDiv
                                            .append(longitudeH2)
                                            .append(latitudeH2)))));

                        renderPokemons(resultDiv, response);
                    }

                    function renderPokemons(resultDiv) {


                        let pokemonsDiv = $('<div>').addClass('pokemons');


                        let pokemons = response['pokemons'];


                        for (let index in pokemons) {

                            let pokemon = pokemons[index];

                            let pokemonDiv = $('<div>').addClass('pokemon');
                            let pokemonTitleDiv = $('<div>' + pokemon['name'] + '</div>').addClass('pokemon-title');
                            let pokemonStatsDiv = $('<div>').addClass('pokemon-stats');

                            let pokemonNameDiv = $('<div>Name: ' + pokemon['name'] + '</div>').addClass('pokemon-name');
                            let pokemonPowerDiv = $('<div>Power: ' + pokemon['power'] + 'pp</div>').addClass('pokemon-power');
                            let pokemonEvolvedFromDiv = $('<div>Evolved From: ' + pokemon['evolvedFrom'] + ' </div>').addClass('pokemon-evolved-from');
                            let pokemonEvolvesToDiv = $('<div>Evolves To: ' + pokemon['evolvesTo'] + ' </div>').addClass('pokemon-evolves-to');


                            resultDiv
                                .append(pokemonsDiv
                                    .append(pokemonDiv
                                        .append(pokemonTitleDiv)
                                        .append(pokemonStatsDiv
                                            .append(pokemonNameDiv)
                                            .append(pokemonPowerDiv)
                                            .append(pokemonEvolvedFromDiv)
                                            .append(pokemonEvolvesToDiv))));

                        }
                        attachAccordeonEvents();
                    }

                    renderLocationDiv(response);
                    renderPokemons(response);

                },


            });
        }


    });

    function attachAccordeonEvents() {
        $('.pokemon-title').click(function (e) {
            e.preventDefault();


            let $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('.pokemon-stats').removeClass('show');
                $this.parent().parent().find('.pokemon-stats').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });
    }
}

//renderData(location);
//renderDataInHTML(locationInHtml);
//attachEvents();
//renderAjaxDataInHTML();


