function charityCampaign(input) {
    let daysCampaignCount = Number(input[0]);
    let confectionersCount = Number(input[1]);
    let cakesCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    let totalSum = daysCampaignCount * (confectionersCount * (cakesCount * cakePrice + wafflesCount * wafflePrice + pancakesCount * pancakePrice));

    totalSum -= totalSum / 8;

    console.log(`${totalSum}`)
}

charityCampaign(["23", "8", "14", "30", "16"]);
charityCampaign(["131", "5", "9", "33", "46"]);