function weatherForecast(input) {
    let consoleInput = input;

    let result = "";
    switch (consoleInput) {
        case "sunny":
            result = "It's warm outside!";
            break;
        default:
            result = "It's cold outside!";
            break;
    }

    console.log(result)
}

weatherForecast("sunny");
weatherForecast("cloudy");
weatherForecast("snowy");