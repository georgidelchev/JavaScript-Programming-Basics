function yardGreening(sqMeters) {
    let squareMeters = Number(sqMeters);

    let sum = (squareMeters * 7.61);
    let discount = sum * 0.18;

    sum -= discount;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The final price is: ${discount} lv.`);
}

yardGreening(550);
yardGreening(150);