function projectCreation(input) {
    let archName = input[0];
    let projectsCount = Number(input[1]);
    let timeNeededPerProject = 3;
    let neededHours = projectsCount * timeNeededPerProject;

    console.log(`The architect ${archName} will need ${neededHours} hours to complete ${projectsCount} project/s.`)
}

projectCreation(["George", 4]);
projectCreation(["Sanya", 9]);