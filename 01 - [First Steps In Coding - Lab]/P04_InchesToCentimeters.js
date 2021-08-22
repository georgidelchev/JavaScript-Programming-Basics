function inchesToCentimeters(input) {
    let inches = Number(input[0]);
    let inch = 2.54;
    let centimeters = inches * inch;

    console.log(centimeters);
}

inchesToCentimeters([5]);