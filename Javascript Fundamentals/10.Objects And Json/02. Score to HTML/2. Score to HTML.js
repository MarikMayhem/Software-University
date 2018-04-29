function scoreToHtml(strArr) {

    let objectArray = JSON.parse(strArr);

    let parsed = '<table>' + '\n' + '  <tr><th>name</th><th>score</th></tr>\n';

    objectArray.forEach(object => parsed += `  <tr><td>${escapeHtml(object['name'])}</td><td>${object['score']}</td></tr>\n`);

    parsed += '</table>';

    return parsed;
    function escapeHtml(obj) {
        return obj.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }
}