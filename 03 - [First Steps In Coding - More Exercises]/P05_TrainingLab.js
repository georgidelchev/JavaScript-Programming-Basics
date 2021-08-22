function trainingLab(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    const corridor = 100;
    const desk = 70;
    const row = 120;

    let hallWidth = width * 100 - corridor;
    let desks = Math.floor(hallWidth / desk);

    let hallLength = length * 100;

    let rows = Math.floor(hallLength / row);

    let totalPlaces = desks * rows - 3;

    console.log(totalPlaces)
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);
