function leapYear(year){

    let check = (year % 4 == 0 && year % 100 != 0)
        || (year % 400 == 0);

    console.log(check ? "yes" : "no");
}