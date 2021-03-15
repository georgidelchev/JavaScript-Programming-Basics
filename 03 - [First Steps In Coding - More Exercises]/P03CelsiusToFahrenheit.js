function celsiustoFahrenheit(input) {
    let degrees = Number(input[0]);

    let converted = degrees * 1.8 + 32;

    console.log(`${converted.toFixed(2)}`);
}

celsiustoFahrenheit(["25"]);
celsiustoFahrenheit(["0"]);
celsiustoFahrenheit(["-5.5"]);
celsiustoFahrenheit(["32.3"]);