function escapeSymbols(arrayOfStrings) {

    let formatedText = '<ul>\n';

    arrayOfStrings.forEach(text => formatedText += `  <li>${escapeHtml(text)}</li>\n`);
    formatedText += '</ul>';

    function escapeHtml(inputText) {
        return inputText.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return formatedText

}