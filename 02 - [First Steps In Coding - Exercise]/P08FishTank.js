function fishTank(length, width, height, perc) {
    let tankLength = Number(length);
    let tankWidth = Number(width);
    let tankHeight = Number(height);
    let percent = Number(perc);

    let tankVolume = tankLength * tankWidth * tankHeight;
    let totalLiters = tankVolume * 0.001;
    percent *= 0.01;
    let realLiters = totalLiters * (1 - percent);

    console.log(realLiters);
}

fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);