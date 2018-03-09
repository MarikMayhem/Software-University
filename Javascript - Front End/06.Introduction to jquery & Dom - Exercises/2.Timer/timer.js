let timer;

//start-timer starts the interval
//setInterval starts the function between interval of ->
//1000 miliseconds
$('#start-timer').on('click', function () {
    timer = setInterval(function () {

//.text takes out the text from the html and Number ->
        // parse it into a value
        let seconds = Number($('#seconds').text());
        let minutes = Number($('#minutes').text());
        let hours = Number($('#hours').text());

        $('#seconds').text(seconds + 1);

        if (seconds === 59) {
            $('#seconds').text(0);
            $('#minutes').text(minutes + 1);
        }

        if (minutes === 60) {
            $('#hours').text(hours + 1);
            $('#seconds').text(0);
            $('#minutes').text(0);
        }

        if (hours === 24) {
            $('#hours').text(0);
            $('#minutes').text(0);
            $('#seconds').text(0);
        }

    }, 1000);
});

//clearInterval stops the timer
$('#stop-timer').on('click', function () {
     clearInterval(timer);
});