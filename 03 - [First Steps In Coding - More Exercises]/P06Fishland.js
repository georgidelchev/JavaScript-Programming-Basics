function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let toyPrice = Number(input[1]);

    let bonitoKg = Number(input[2]);
    let horseМackerelKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPrice = mackerelPrice + mackerelPrice * 0.60;
    let horseМackerelPrice = toyPrice + toyPrice * 0.80;
    let musselsPrice = musselsKg * 7.50;

    let totalPrice = 
    bonitoKg * bonitoPrice + 
    horseМackerelKg * horseМackerelPrice + 
    musselsPrice

    console.log(`${totalPrice.toFixed(2)}`)
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);
fishland(["7.79", "5.35", "9.3", "0", "0"]);