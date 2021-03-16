function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let convertedToDegrees = radians * 180 / Math.PI;

    console.log(`${convertedToDegrees.toFixed(0)}`);
}

radiansToDegrees([3.1416]);
radiansToDegrees([6.2832]);
radiansToDegrees([0.7854]);
radiansToDegrees([0.5236]);