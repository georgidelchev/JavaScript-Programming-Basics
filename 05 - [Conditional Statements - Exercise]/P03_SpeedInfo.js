function speedInfo(input) {
    let speed = Number(input[0]);

    let result = "";
    if (speed <= 10) {
        result = "slow";
    } else if (speed <= 50) {
        result = "average";
    } else if (speed <= 150) {
        result = "fast";
    } else if (speed <= 1000) {
        result = "ultra fast";
    } else {
        result = "extremely fast";
    }

    console.log(result);
}

speedInfo(["8"]);
speedInfo(["50"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);