function toyShop(input) {
    let tripPrice = Number(input[0]);

    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalPrice = puzzlesCount * puzzlePrice +
        dollsCount * dollPrice +
        bearsCount * bearPrice +
        minionsCount * minionPrice +
        trucksCount * truckPrice;

    let totalToysPurchased = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (totalToysPurchased >= 50) {
        totalPrice -= totalPrice * 0.25;
    }

    totalPrice -= totalPrice * 0.10;

    let moneyBalance = totalPrice - tripPrice;

    if (totalPrice >= tripPrice) {
        console.log(`Yes! ${moneyBalance.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(moneyBalance).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);