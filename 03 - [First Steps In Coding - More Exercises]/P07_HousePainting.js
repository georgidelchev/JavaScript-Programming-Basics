function housePainting(input) {
    let houseHeight = Number(input[0]);
    let sideWallLength = Number(input[1]);
    let triangleSideRoof = Number(input[2]);

    let sideWallArea = houseHeight * sideWallLength;
    let windowArea = 1.5 * 1.5;

    let bothSidesArea = sideWallArea * 2 - windowArea * 2;

    let backWall = houseHeight * houseHeight;
    let entrance = 1.2 * 2;
    let bothBackAndFront = 2 * backWall - entrance;

    let totalArea = bothSidesArea + bothBackAndFront;

    let greenPaint = totalArea / 3.4;

    let roofRectanglesArea = 2 * (houseHeight * sideWallLength);
    let bothTriangles = 2 * (houseHeight * triangleSideRoof / 2);
    let totalAreaRed = roofRectanglesArea + bothTriangles;

    let redPaint = totalAreaRed / 4.3;

    console.log(`${greenPaint.toFixed(2)}`);
    console.log(`${redPaint.toFixed(2)}`);
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);