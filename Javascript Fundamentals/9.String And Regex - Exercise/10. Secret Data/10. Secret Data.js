function secretData(arrStr) {

    let nameOfClients = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g;
    let phoneNumbers = /(\+[0-9-]{10})(?= |\t|$)/g;
    let clientIds = /(![0-9a-zA-Z]+)(?= |\t|$)/g;
    let secretBases = /(_[0-9a-zA-Z]+)(?= |\t|$)/g;

    let mainRegex = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g;

    for (let linesOfData of arrStr) {

        console.log(linesOfData
            .replace(nameOfClients, m => '|'.repeat(m.length))
            .replace(phoneNumbers, m => '|'.repeat(m.length))
            .replace(clientIds, m => '|'.repeat(m.length))
            .replace(secretBases, m => '|'.repeat(m.length))
        );


    }

}