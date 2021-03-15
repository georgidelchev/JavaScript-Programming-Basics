function weatherForecastP2(input) {
    let degrees = Number(input[0]);

    let result = "";

    if (degrees >= 26 && degrees <= 35) {
        result = "Hot";
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        result = "Warm";
    } else if (degrees >= 15 && degrees <= 20) {
        result = "Mild";
    } else if (degrees >= 12 && degrees <= 14.9) {
        result = "Cool";
    } else if (degrees >= 5 && degrees <= 11.9) {
        result = "Cold";
    } else {
        result = "unknown";
    }

    console.log(result)
}

weatherForecastP2(["16.5"]);
weatherForecastP2(["8"]);
weatherForecastP2(["22.4"]);
weatherForecastP2(["26"]);
weatherForecastP2(["0"]);