function parseTheEmployeeData(arrayStrings){

    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z \d\-]+)$/g;

    for (let i = 0; i < arrayStrings.length; i++) {
        let match = pattern.exec(arrayStrings[i]);
        if(arrayStrings[i].match(pattern) !== null ){
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}