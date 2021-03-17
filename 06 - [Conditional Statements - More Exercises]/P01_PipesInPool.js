function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let firstPipeHourFlowRate = Number(input[1]);
    let secondPipeHourFlowRate = Number(input[2]);
    let workerOutHours = Number(input[3]);

    let firstPipeWaterFilled = firstPipeHourFlowRate * workerOutHours;
    let secondPipeWaterFilled = secondPipeHourFlowRate * workerOutHours;

    let totalWaterFilled = firstPipeWaterFilled + secondPipeWaterFilled;

    let poolFillPercentage = (totalWaterFilled / poolVolume) * 100;
    let firstPipePercentage = (firstPipeWaterFilled / totalWaterFilled) * 100;
    let secondPipePercentage = (secondPipeWaterFilled / totalWaterFilled) * 100;

    if (poolVolume >= totalWaterFilled) {
        console.log(`The pool is ${poolFillPercentage.toFixed(2)}% full. Pipe 1: ${firstPipePercentage.toFixed(2)}%. Pipe 2: ${secondPipePercentage.toFixed(2)}%.`);
    } else {
        console.log(`For ${workerOutHours} hours the pool overflows with ${(totalWaterFilled - poolVolume).toFixed(2)} liters.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);