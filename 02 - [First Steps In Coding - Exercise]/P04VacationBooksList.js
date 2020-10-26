function vacationBooksList(bookPages, pagesPerHour, daysToRead) {
    let totalBookPages = Number(bookPages);
    let readingPagesPerOneHour = Number(pagesPerHour);
    let totalDaysToRead = Number(daysToRead);

    let totalTimeNeededToReadTheBook = (totalBookPages / readingPagesPerOneHour) / totalDaysToRead;

    console.log(`${totalTimeNeededToReadTheBook}`)
}

vacationBooksList(212, 20, 2);
vacationBooksList(432, 15, 4);