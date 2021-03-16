function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let workersCount = Number(input[1]);
    let workerDressPrice = Number(input[2]);

    let movieDecor = budget * 0.1;

    if (workersCount > 150) {
        workerDressPrice *= 0.9;
    }

    let totalPriceForDress = workersCount * workerDressPrice;

    let totalMoviePrice = movieDecor + totalPriceForDress;

    let result = Math.abs(budget - totalMoviePrice);

    if (budget >= totalMoviePrice) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
