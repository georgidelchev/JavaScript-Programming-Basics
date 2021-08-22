function harvest(input) {
    let vineyardArea = Number(input[0]);
    let grapePerSquareMeter = Number(input[1]);
    let neededVine = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrape = vineyardArea * grapePerSquareMeter;
    let wine = (totalGrape * 0.4) / 2.5;

    let wineCount = Math.abs(wine - neededVine);
    if (wine >= neededVine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`)
        console.log(`${Math.ceil(wineCount)} liters left -> ${Math.ceil(wineCount / workersCount)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(wineCount)} liters wine needed.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);