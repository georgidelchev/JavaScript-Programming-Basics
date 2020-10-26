function fruitMarket(strawberriesPrice, bananasKg, orangesKg, raspberriesKg, strawberriesKg) {
    let totalBananasQty = Number(bananasKg);
    let totalOrangesQty = Number(orangesKg);
    let totalRaspberriesQty = Number(raspberriesKg);
    let totalStrawberriesQty = Number(strawberriesKg);

    let strawberriesPriceInLv = Number(strawberriesPrice);
    let raspberriesPriceInLv = strawberriesPriceInLv / 2;
    let orangesPriceInLv = raspberriesPriceInLv - (raspberriesPriceInLv * 0.40);
    let bananasPriceInLv = raspberriesPriceInLv - (raspberriesPriceInLv * 0.80);

    let totalSum = totalStrawberriesQty * strawberriesPriceInLv + totalBananasQty * bananasPriceInLv + totalOrangesQty * orangesPriceInLv + totalRaspberriesQty * raspberriesPriceInLv;

    console.log(`${totalSum.toFixed(2)}`);
}

fruitMarket(48, 10, 3.3, 6.5, 1.7);
fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);