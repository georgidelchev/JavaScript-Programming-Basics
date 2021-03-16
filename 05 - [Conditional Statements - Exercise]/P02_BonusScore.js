function bonusScore(input) {
    let startingPoints = Number(input[0]);

    let bonusPoints = 0.0;

    if (startingPoints <= 100) {
        bonusPoints = 5;
    } else if (startingPoints > 1000) {
        bonusPoints = startingPoints * 0.10;
    } else {
        bonusPoints = startingPoints * 0.20;
    }

    if (startingPoints % 2 === 0) {
        bonusPoints += 1;
    } else if (startingPoints % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(startingPoints + bonusPoints);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);