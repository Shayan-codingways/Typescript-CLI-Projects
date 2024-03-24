#! /usr/bin/env node
// import (name of package) from (file name)
import inquirer from "inquirer";
// making a variable to take input from user and have an answer
// await --> wait on line 3 till input is taken.
// [{}] object within an array
// we passed 3 objects in array, 1 for 1st num, 2nd for 2nd num, 3rd for operator selection.
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform action: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipication", "Division", "Remainder"]
    },
]);
console.log(answer);
// answer is also in object form 
// object is a datatype helps in storing same type of data 
/*output*/
// { 'first Number': 5, 'second Number': 6, operators: 'Multipication' }
// NOW using Conditions--------->
if (answer.operator === "Addition") {
    console.log("Your value is " + (answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log("Your value is " + (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multipication") {
    console.log("Your value is " + (answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Remainder") {
    console.log("Your value is " + (answer.firstNumber % answer.secondNumber));
}
else if (answer.operator === "Division") {
    /*

    if(answer.secondNumber==0){
        console.log("undefined!")
    }
    else{
        console.log("Your value is " + (answer.firstNumber / answer.secondNumber))
    }
     
    */
    console.log("Your value is " + (answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Please Select Valid Operator!");
}
