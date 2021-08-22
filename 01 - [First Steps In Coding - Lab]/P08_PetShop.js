function petShop(input) {
    let dogsCount = Number(input[0]);
    let otherAnimals = Number(input[1]);

    let dogFoodPrice = dogsCount * 2.50;
    let otherAnimalsFoodPrice = otherAnimals * 4.00;
    let neededSum = dogFoodPrice + otherAnimalsFoodPrice;

    console.log(`${neededSum} lv.`)
}

petShop([5, 4]);
petShop([13, 9]);