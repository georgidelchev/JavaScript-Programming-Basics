function birthdayParty(input) {
    let hallRent = Number(input[0]);

    let cakePrice = hallRent * 0.20;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = hallRent / 3;

    let totalPrice = hallRent + cakePrice + drinksPrice + animatorPrice;

    console.log(`${totalPrice}`)
}

birthdayParty(["2250"]);
birthdayParty(["3720"]);