// let continents = {
//     Europe: {
//         name: "Europe",
//         countries: {
//             Bulgaria: {
//                 name: "Bulgaria",
//                 capital: "Sofia",
//                 officialLanguage: "Bulgarian",
//                 population: 7000000,
//                 area: 111000,
//                 politicalStatus: "Republic",
//                 president: "Rumen Radev",
//                 officialCurrency: "LEV(BGN)"
//             },
//             Vatican: {
//                 name: "Vatican",
//                 capital: "Vatican City",
//                 officialLanguage: "Italian",
//                 population: 1000,
//                 area: 0.44,
//                 politicalStatus: "Monarchy",
//                 monarch: "Francis",
//                 officialCurrency: "Euro(EUR)"
//             }
//         }
//     },
//     Asia: {
//         name: "Asia",
//         countries: {
//             Russia: {
//                 name: "Russia",
//                 capital: "Moscow",
//                 officialLanguage: "Russian",
//                 population: 144463451,
//                 area: 17075200,
//                 politicalStatus: "Republic",
//                 president: "Vladimir Putin",
//                 officialCurrency: "Russian ruble(RUB)"
//             },
//             China: {
//                 name: "China",
//                 capital: "Beijing",
//                 officialLanguage: "Chinese",
//                 population: 1403500365,
//                 area: 9596961,
//                 politicalStatus: "Republic",
//                 president: "Xi Jinping",
//                 officialCurrency: "Renminbi(CNY)"
//             }
//         }
//     }
// };

// let continents = {
//     Europe: {
//         name: "Europe",
//         countries: {
//             Bulgaria: {
//                 name: "Bulgaria",
//                 capital: "Sofia",
//                 officialLanguage: "Bulgarian",
//                 population: 7000000,
//                 area: 111000,
//                 politicalStatus: "Republic",
//                 president: "Rumen Radev",
//                 officialCurrency: "LEV(BGN)"
//             }
//         }
//     }
// };

let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

//Problem 1

function renderAllContinents(continents) {

    let continentOpen = '';

    for (continentOpen in continents) {
        console.log(continentOpen);
    }


}

function renderSingleContinent(continentOpen) {

    let countries = continentOpen['countries'];

    console.log(continentOpen['name']);
    console.log('Countries:')

    for (let country in countries) {
        console.log('$$$' + country);
    }
}

function renderSingleCountry(country) {
    console.log(country['name']);
    console.log('Capital: ' + country['capital']);
    console.log('Official Language: ' + country['officialLanguage']);
    console.log('Population: ' + country['population']);
    console.log('Area: ' + country['area'] + ' km2');
    console.log('Political Status: ' + country['politicalStatus']);
    if (country['politicalStatus'] === 'Republic') {
        console.log('President: ' + country['president']);
    } else {
        console.log('Monarch: ' + country['monarch']);
    }
    console.log('Official Currency: ' + country['officialCurrency']);


}

//Problem 2

function renderDataInHTML(continents) {

    function createContinents(continents) {

        for (continentName in continents) {
            let continentDiv = $('<div>').addClass('continent');
            let continentTitleH5 = $('<h5>' + continentName + '</h5>').addClass('continent-title');

            $('.continents')
                .append(continentDiv
                    .append(continentTitleH5));

        }

    }

    function createContinentData(continents) {


        let continentTitleH2 = $('<h2>' + continentName + '</h2>').addClass('continent-title');
        let countriesTitleH3 = $('<h3>Countries</h3>').addClass('countries-title');
        let countriesDropDownDiv = $('<div>').addClass('countries');
        let dropDownSelect = $('<select>').addClass('dropdown-select');
        let disabledValueOption = $('<option disabled selected value>-- select an option -- </option>');
        let optionValue = $('<option value="Bulgaria">Bulgaria</option>');
        let continentImageDiv = $('<div>').addClass('continent-image');
        let continentImage = $('<img src="images/' + continentName + '.png">')


        $('.continent-data')
            .append(continentTitleH2)
            .append(countriesTitleH3)
            .append(countriesDropDownDiv
                .append(dropDownSelect
                    .append(disabledValueOption)
                    .append(optionValue)))
            .append(continentImageDiv
                .append(continentImage));
    }

    function createContinentStats(continents) {
        let continent = '';

        for (let key in continents) {
            continent = continents[key];

        }

        let countryName = continent['countries'];


        //Extract countryData
        let countryData = '';
        for (let index in countryName) {
            countryData = countryName[index];
        }

        let countryTitleDiv = $('<div>').addClass('country-title');
        let countryNameH2 = $('<h2>' + countryData['name'] + '</h2>');
        let countryDataDiv = $('<div>').addClass('country-data')
            .append('<div class="country-capital"><strong>Capital:</strong> <div>' + countryData['capital'] + '</div></div>')
            .append('<div class="country-official-language"><strong>Official Language:</strong><div>' + countryData['officialLanguage'] + '</div></div>')
            .append('<div class="country-population"><strong>Population:</strong> <div>' + countryData['population'] + '</div></div>')
            .append('<div class="country-area"><strong>Area:</strong> <div>' + countryData['area'] + ' km<sup>2</sup></div></div>')
            .append('<div class="country-political-status"><strong>Political Status:</strong><div>' + countryData['politicalStatus'] + '</div></div>');
        if (countryData['politicalStatus'] === 'Republic') {
            countryDataDiv.append($('<div class="country-president"><strong>President:</strong><div>' + countryData['president'] + '</div>'));
        } else {
            countryDataDiv.append($('<div class="country-monarch"><strong>Monarch:</strong><div>' + countryData['monarch'] + '</div>'));
        }
        countryDataDiv.append($('<div class="country-official-currency"><strong>Official Currency:</strong><div>' + countryData['officialCurrency'] + '</div></div>'));

        $('.continent-country')
            .append(countryTitleDiv
                .append(countryNameH2))
            .append(countryDataDiv);
    }


    createContinents(continents);
    createContinentData(continents);
    createContinentStats(continents);

    //return createContinents(continents);
}


//Problem 3

function attachEvents(continents) {

    function createContinents(continents) {

        let continentsData = '';

        for (continentsData in continents) {
            let continentDiv = $('<div>').addClass('continent');
            let continentTitleH5 = $('<h5>' + continentsData + '</h5>').addClass('continent-title');

            $('.continents')
                .append(continentDiv
                    .append(continentTitleH5));
        }


    }


    function createContinentData() {



        //
        // let c = continents['Europe']['countries'];
        // console.log(c);

        let args = '';
        let countryInfo = '';
        for (let continentIndex in continents) {
            let country = continents[continentIndex];

            for (let countryIndex in country) {
                countryInfo = country[countryIndex];


                for (let dataIndex in countryInfo) {
                    args = countryInfo[dataIndex];

                }

                //console.log(countryInfo);
            }

            //console.log(country);
        }


        $('.continent').click(function (e) {
            e.preventDefault();

            let currentContinent = $(this).text();

            //console.log(continents[currentContinent]);

            $('.continent-data').empty();

            //Data Extract !
            let continentsData = '';
            let currentContinentData = '';
            let countryData = '';
            for (continentsData in continents[currentContinent]) {

                currentContinentData = continents[currentContinent][continentsData];

            }


            let continentTitleH2 = $('<h2>' + currentContinent + '</h2>').addClass('continent-title');
            let countriesTitleH3 = $('<h3>Countries</h3>').addClass('countries-title');
            let countriesDropDownDiv = $('<div>').addClass('countries');
            let dropDownSelect = $('<select>').addClass('dropdown-select');
            let disabledValueOption = $('<option disabled selected value>-- select an option -- </option>');
            let continentImageDiv = $('<div>').addClass('continent-image');


            let continentImage = $('<img src="images/' + currentContinent + '.png">');

            $('.continent-data')
                .append(continentTitleH2)
                .append(countriesTitleH3)
                .append(countriesDropDownDiv
                    .append(dropDownSelect
                        .append(disabledValueOption)
                    ));


            let optionValue = '';

            for (let index in currentContinentData) {
                countryData = currentContinentData[index];
                optionValue = $('<option value="' + countryData['name'] + '">' + countryData['name'] + '</option>');
                dropDownSelect.append(optionValue);

            }

            createContinentStats(optionValue);

            $('.continent-data')
                .append(continentImageDiv
                    .append(continentImage));


            // $('.continent-data')
            //     .append(continentImageDiv
            //         .append(continentImage));


            $('.continent-data').toggle();
            $('.continent-country').toggle();
            //$('.continent-country').hide();


        })


        // $('.continent-data')
        //     .append(continentTitleH2)
        //     .append(countriesTitleH3)
        //     .append(countriesDropDownDiv
        //         .append(dropDownSelect
        //             .append(disabledValueOption)
        //             .append(optionValue)))
        //     .append(continentImageDiv
        //         .append(continentImage));


    }


    function createContinentStats(continents) {

        //durtiMudiMarinata(countryName);


            function attachCountryEvents(continents,){
                $('.dropdown-select').change(function (e) {
                    e.preventDefault();

                    let countryName = $(this).val();


                    console.log(countryName);
                    return countryName;

                });
            }







        // let continentsInfo = '';
        // let continentCountries = '';
        //
        //
        // for (let index in continents) {
        //     continentsInfo = continents[index];
        //     continentCountries = continentsInfo['countries'];
        //
        //     console.log(continentCountries);
        // }

// let countryTitleDiv = $('<div>').addClass('country-title');
        //
        // let countryNameH2 = $('<h2>'+ countryName +'</h2>');
        //
        //
        // let countryDataDiv = $('<div>').addClass('country-data')
        //     .append('<div class="country-capital"><strong>Capital:</strong> <div>' + countryData['capital'] + '</div></div>')
        //     .append('<div class="country-official-language"><strong>Official Language:</strong><div>' + countryData['officialLanguage'] + '</div></div>')
        //     .append('<div class="country-population"><strong>Population:</strong> <div>' + countryData['population'] + '</div></div>')
        //     .append('<div class="country-area"><strong>Area:</strong> <div>' + countryData['area'] + ' km<sup>2</sup></div></div>')
        //     .append('<div class="country-political-status"><strong>Political Status:</strong><div>' + countryData['politicalStatus'] + '</div></div>');
        // if (countryData['politicalStatus'] === 'Republic') {
        //     countryDataDiv.append($('<div class="country-president"><strong>President:</strong><div>' + countryData['president'] + '</div>'));
        // } else {
        //     countryDataDiv.append($('<div class="country-monarch"><strong>Monarch:</strong><div>' + countryData['monarch'] + '</div>'));
        // }
        // countryDataDiv.append($('<div class="country-official-currency"><strong>Official Currency:</strong><div>' + countryData['officialCurrency'] + '</div></div>'));
        //
        //
        // $('.continent-country')
        //     .append(countryTitleDiv
        //         .append(countryNameH2))
        //     .append(countryDataDiv);
        //







    }

    createContinents(continents);
    createContinentData(continents);
    createContinentStats(continents);

}


//Pr1
//renderAllContinents(continents);
//renderSingleContinent(continents['Europe']);
//renderSingleCountry(continents['Europe']['countries']['Vatican']);
//Pr2
//renderDataInHTML(continents);
//pr3
attachEvents(continents);
