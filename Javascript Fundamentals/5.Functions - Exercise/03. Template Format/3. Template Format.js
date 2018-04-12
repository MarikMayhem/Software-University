function templateFormat(inputArray){

    let openingXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<quiz>";
    let closingXml = "</quiz>";
    console.log(openingXml);

    for (let i = 0; i < inputArray.length; i++) {

        if(i % 2 === 0){
            console.log("  <question>\n" + `    ${inputArray[i]}\n` + "</question>")
        } else{
            console.log("  <answer>\n" + `    ${inputArray[i]}\n` + "</answer>")
        }

    }
    console.log(closingXml);
}