function depositCalculator(deposit, time, percent) {
    let depositSum = Number(deposit);
    let months = Number(time);
    let yearPercent = Number(percent);

    let sum = depositSum + months * (((depositSum * yearPercent) / 100) / 12);

    console.log(`${sum.toFixed(2)}`);
}

depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);