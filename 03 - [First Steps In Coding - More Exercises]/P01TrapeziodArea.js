function trapeziodArea(a, b, c) {
    let b1 = Number(a);
    let b2 = Number(b);
    let h = Number(c);

    let trapezoidAreaCalc = (b1 + b2) * h / 2;

    console.log(`${trapezoidAreaCalc.toFixed(2)}`);
}

trapeziodArea(8, 13, 7);