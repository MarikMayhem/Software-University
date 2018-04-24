function censorship(sentence, arrayCensorship) {

    for (let i = 0; i < arrayCensorship.length; i++) {

        let replacedWorld = '-'.repeat(arrayCensorship[i].length);

        while (sentence.indexOf(arrayCensorship[i]) > -1) {

            sentence = sentence.replace(arrayCensorship[i], replacedWorld)
        }

    }
    return sentence
}