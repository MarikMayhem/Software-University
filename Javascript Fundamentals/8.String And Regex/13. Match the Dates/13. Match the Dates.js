function matchDates (input) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4}\b)/g
    let result = ''
    for (let sentence of input) {
        let matches = regex.exec(sentence)
        while (matches !== null) {
            result += `${matches[0]} (Day: ${matches[1]}, Month: ${matches[2]}, Year: ${matches[3]})\n`
            matches = regex.exec(sentence)
        }
    }

    console.log(result)
}
