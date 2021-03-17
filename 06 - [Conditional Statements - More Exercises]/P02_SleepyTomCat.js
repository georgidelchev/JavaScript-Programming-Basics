function sleepyTomCat(input) {
    let restDays = Number(input[0]);

    let workingDays = 365 - restDays;

    let totalTime = (workingDays * 63) + (restDays * 127);
    let playingTime = Math.abs(30000 - (totalTime));

    let hours = Math.floor(playingTime / 60);
    let minutes = Math.floor(playingTime % 60);

    if (30000 > totalTime) {
        console.log(`Tom sleeps well\n${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes less for play`);
    } else {
        console.log(`Tom will run away\n${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes more for play`);
    }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);