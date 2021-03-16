function evenOrOdd(input) {
    let number = Number(input[0]);

    console.log(number % 2 === 0 ? "even" : "odd");
}

evenOrOdd(["2"]);
evenOrOdd(["3"]);
evenOrOdd(["25"]);
evenOrOdd(["1024"]);