function circleAreaAndPerimeter(r) {
    let radius = Number(r);

    let circlePerimeter = Math.PI * radius * radius;
    let circleArea = 2 * Math.PI * radius;

    console.log(`${circlePerimeter.toFixed(2)}`);
    console.log(`${circleArea.toFixed(2)}`);
}

circleAreaAndPerimeter(3);
circleAreaAndPerimeter(4.5);