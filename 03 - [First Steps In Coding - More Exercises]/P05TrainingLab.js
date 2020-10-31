function trainingLab(l, w) {
    let lenght = Number(l);
    let width = Number(w);

    const corridor = 100;
    const desk = 70;
    const row = 120;

    let hallWidth = width * 100 - corridor;
    let desks = Math.floor(hallWidth / desk);

    let hallLenght = lenght * 100;

    let rows = Math.floor(hallLenght / row);

    let totalPlaces = desks * rows - 3;

    console.log(totalPlaces)
}

trainingLab(15, 8.9);
trainingLab(8.4, 5.2);
