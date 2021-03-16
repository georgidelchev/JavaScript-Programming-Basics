function scholarShip(input) {
    let income = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minimalSalary = Number(input[2]);

    let socialScholarship = minimalSalary * 0.35;
    let scholarshipExcellent = averageSuccess * 25;

    if (averageSuccess >= 5.5) {
        if (income > minimalSalary ||
            socialScholarship < scholarshipExcellent) {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipExcellent)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else if (averageSuccess > 4.5 &&
               income < minimalSalary) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

scholarShip(["480.00", "4.60", "450.00"]);
scholarShip(["300.00", "5.65", "420.00"]);
