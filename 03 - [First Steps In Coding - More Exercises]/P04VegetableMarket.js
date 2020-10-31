function vegetableMarket(veg, fruits, vegKg, fruitsKg) {
    let vegetablesPricePerKg = Number(veg);
    let fruitsPricePerKg = Number(fruits);
    let vegetablesTotalKg = Number(vegKg);
    let fruitsTotalKg = Number(fruitsKg);

    let totalVegablesSum = vegetablesTotalKg * vegetablesPricePerKg;
    let totalFruitsSum = fruitsTotalKg * fruitsPricePerKg;

    let totalSum = totalVegablesSum + totalFruitsSum;
    totalSum /= 1.94;

    console.log(`${totalSum.toFixed(2)}`)
}

vegetableMarket(0.194, 19.4, 10, 10);
vegetableMarket(1.5, 2.5, 10, 10);