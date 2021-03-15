function vegetableMarket(input) {
    let vegetablesPricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let vegetablesTotalKg = Number(input[2]);
    let fruitsTotalKg = Number(input[3]);

    let totalVegablesSum = vegetablesTotalKg * vegetablesPricePerKg;
    let totalFruitsSum = fruitsTotalKg * fruitsPricePerKg;

    let totalSum = totalVegablesSum + totalFruitsSum;
    totalSum /= 1.94;

    console.log(`${totalSum.toFixed(2)}`)
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);