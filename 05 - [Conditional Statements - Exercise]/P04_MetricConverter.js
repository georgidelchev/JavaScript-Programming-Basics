function metricConverter(input) {
    let numberToConvert = Number(input[0]);
    let metricInputType = input[1];
    let metricOutputType = input[2];

    let result = 0;
    if (metricInputType === "mm") {
        if (metricOutputType === "cm") {
            result = numberToConvert / 10;
        } else if (metricOutputType === "m") {
            result = numberToConvert / 1000;
        }
    } else if (metricInputType === "cm") {
        if (metricOutputType === "mm") {
            result = numberToConvert * 10;
        } else if (metricOutputType === "m") {
            result = numberToConvert / 100;
        }
    } else if (metricInputType === "m") {
        if (metricOutputType === "cm") {
            result = numberToConvert * 100;
        } else if (metricOutputType === "mm") {
            result = numberToConvert * 1000;
        }
    }

    console.log(result.toFixed(3));
}

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);
metricConverter(["1201.34", "mm", "cm"]);