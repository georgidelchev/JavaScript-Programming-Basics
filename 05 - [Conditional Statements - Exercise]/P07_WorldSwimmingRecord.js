function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let totalTimeSwimming = distanceInMeters * timeInSecondsPerMeter;
    let slowingTime = Math.floor((distanceInMeters / 15)) * 12.5;

    let totalTime = totalTimeSwimming + slowingTime;

    let result = Math.abs(totalTime - recordInSeconds);

    if (totalTime >= recordInSeconds) {
        console.log(`No, he failed! He was ${result.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
