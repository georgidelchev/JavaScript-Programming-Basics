function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let yearPercent = Number(input[2]);

    let sum = depositSum + months * (((depositSum * yearPercent) / 100) / 12);

    console.log(`${sum.toFixed(2)}`);
}

depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);