function usdToBgn(input) {
    let usdMoney = Number(input[0]);
    let convertedToBgn = usdMoney * 1.79549;

    console.log(convertedToBgn);
}

usdToBgn([22]);
usdToBgn([100]);
usdToBgn([12.5]);