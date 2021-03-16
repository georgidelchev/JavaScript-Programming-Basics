function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursToMinutes = hours * 60;
    let totalMinutes = hoursToMinutes + minutes + 15;

    let realHours = Math.floor(totalMinutes / 60);
    let realMinutes = totalMinutes % 60;

    if (realHours >= 24) {
        console.log(`0:${realMinutes >= 10 ? realMinutes : "0" + realMinutes}`);
    } else {
        console.log(`${realHours.toFixed(0)}:${realMinutes >= 10 ? realMinutes : "0" + realMinutes}`);
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);
timePlus15Minutes(["0", "44"]);
timePlus15Minutes(["23", "45"]);