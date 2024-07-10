#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate random number.
//user input for guessing number.
//compare user input with computer generated number & show result.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "please guessed a number 1 - 10",
    },
]);
if (answer.guessedNumber === randomNumber) {
    console.log("you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
