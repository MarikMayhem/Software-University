function inchesToFeetAndInches(inches) {

    let feet = inches / 12;

    let inch = Math.ceil((feet % 1) * 12);

    console.log(Math.trunc(feet) + "'" + '-' + inch + '"');

}