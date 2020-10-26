function charityCampaign(days, confectioners, cakes, waffles, pancakes) {
    let daysCampaignCount = Number(days);
    let confectionersCount = Number(confectioners);
    let cakesCount = Number(cakes);
    let wafflesCount = Number(waffles);
    let pancakesCount = Number(pancakes);

    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    let totalSum = daysCampaignCount * (confectioners * (cakesCount * cakePrice + wafflesCount * wafflePrice + pancakesCount * pancakePrice));
    totalSum -= totalSum / 8;
    console.log(`${totalSum}`)
}

charityCampaign(23, 8, 14, 30, 16);
charityCampaign(131, 5, 9, 33, 46);