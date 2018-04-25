function formFiller(name, email, phoneNumber, arrayString) {

    let firstPattern = /(<![a-zA-Z]*!>)/g;
    let secondPattern = /(<@[a-zA-Z]*@>)/g;
    let thirdPattern = /(<\+[a-zA-Z]*\+>)/g;

    arrayString.forEach(line => {
        line = line.replace(firstPattern, name);
        line = line.replace(secondPattern, email);
        line = line.replace(thirdPattern, phoneNumber);
        console.log(line);
    });

}