function fromJsonToHtml(stringArrObj){
    let arrOfObj = JSON.parse(stringArrObj);
    let keys = Object.keys(arrOfObj[0]);
    let values = '';

    let parsed = `<table>\n   <tr>`;

    keys.forEach(key => parsed += `<th>${key}</th>`);
    parsed += '</tr>\n';
    for (let i = 0; i < arrOfObj.length; i++) {
        values = Object.values(arrOfObj[i]);
        parsed += '   <tr>';

        values.forEach(value => isNaN(value) === true ? parsed += `<td>${escapeHtml(value)}</td>` : parsed += `<td>${value}</td>`);
        parsed += '</tr>';
        parsed += '\n'
    }
    parsed += '</table>';
    return parsed

    function escapeHtml(obj) {
        return obj.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }
}