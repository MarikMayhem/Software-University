function lastMonth(date) {

    let d = new Date();
    d.setFullYear(date[2]);
    d.setMonth(date[1] -1);
    d.setDate(1);
    d.setHours(-1)

    let day = d.getUTCDate();

    console.log(day)

}