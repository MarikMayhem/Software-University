function formatDate(yearInput, monthInput, dayInput) {

    let date = new Date(yearInput, monthInput-1, dayInput);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1)
        +  '-' + nextDate.getDate();


}