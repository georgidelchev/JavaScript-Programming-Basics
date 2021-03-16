function vacationBooksList(input) {
    let totalBookPages = Number(input[0]);
    let readingPagesPerOneHour = Number(input[1]);
    let totalDaysToRead = Number(input[2]);

    let totalTimeNeededToReadTheBook = (totalBookPages / readingPagesPerOneHour) / totalDaysToRead;

    console.log(`${totalTimeNeededToReadTheBook}`)
}

vacationBooksList(["212", "20", "2"]);
vacationBooksList(["432", "15", "4"]);