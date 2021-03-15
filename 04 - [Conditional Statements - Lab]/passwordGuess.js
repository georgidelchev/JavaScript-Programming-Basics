function passwordGuess(input) {
    let passwordInput = input[0];

    let password = "s3cr3t!P@ssw0rd";

    console.log(passwordInput === password ? "Welcome" : "Wrong password!");
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);