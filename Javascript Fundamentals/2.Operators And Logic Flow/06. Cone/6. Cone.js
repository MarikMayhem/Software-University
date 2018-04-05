function coneTask(a, b) {
    let s = Math.sqrt(a * a + b * b);
    let volume = Math.PI * a * a * b / 3;
    console.log("volume = " + volume);
    let area = Math.PI * a * (a + s);
    console.log("area = " + area);
}