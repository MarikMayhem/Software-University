function townsToJson(arrStr) {
    let regex = (/\s*\|\s*/g);

    let townsArray = [];

    for (let towns of arrStr.slice(1)) {
        let [townName, lat, lng] = towns.split(regex).filter(Boolean);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        townsArray.push(townObj)
    }

    return JSON.stringify(townsArray)
}
