//=======================================Prerequisite and global variables===========================================
//require word.js
const Word = require('./word')
//require answer.js
const keysArr = require('./answer')
// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for fs npm package
var fs = require("fs");




//=======================================random number function===========================================
var random = function (arr) {
    var randomNum = Math.floor(Math.random() * arr.length)
    return randomNum
}

//=======================================prompt function===========================================
// Prompts the user for each guess and keeps track of the user's remaining guesses
// variable we will use to count how many guesses left (starts from 12 total)
var guesses = 12;

var input = function () {
    // if guesses left > 0 continue to ask for another input
    if (guesses > 0) {
        // runs inquirer and asks the user to input a letter
        inquirer.prompt([
            {
                name: "char",
                message: "Guess a letter!",
                type: "input"
            }
        ]).then(function (answer) {
            // check the keys against the input char
            word.check(answer.char)
            // empty row
            console.log("\x1b[37m%s\x1b[0m","------------------------------------------------------------------------------------")
            // print the display array in terminal
            var displayString = word.toString()
            console.log(displayString)
            // if there isn't any place holder in the display array 
            if (displayString.indexOf("_") === -1) {
                //tell the user he won
                console.log("\x1b[31m\x1b[4m%s\x1b[0m", "You win!")
                //log the result
                appendLog("WIN | ANSWER: " + keysArr[index].key)
            } else {
                // else continue this round
                // subtract one from the remaining guess and console.log it
                guesses--;
                console.log(guesses + " guesses left!")
                //if
                // run the input function again to ask for another input
                input();
            }
        });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        //tell the user he losed
        console.log("\x1b[32m\x1b[4m%s\x1b[0m", "You lose! The anwer is '" + keysArr[index].key + "'");
        //log the result
        appendLog("LOSE | ANSWER: " + keysArr[index].key)
    }
};

//=======================================log append function===========================================
function appendLog(log) {
    fs.appendFile("./log.txt", log + '\r\n', function (err) {
        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }

    });
}

//======================================= !!!!! initiate the game !!!!!!! ===========================================
//game starter
console.log("Welcome to the word guess game about NBA!\nPress a letter to guess the underlying word!")
// Randomly selects a word and uses the Word constructor to store it
var index = random(keysArr)
var word = new Word(keysArr[index].key)
// run the function taht save all the letter objects into array
word.objects()
// empty row
console.log("\x1b[37m%s\x1b[0m","------------------------------------------------------------------------------------")
//display hint
console.log( "# Hint: " , keysArr[index].hint)
// print the display array in terminal
console.log(word.toString())
// console.log guesses
console.log(guesses + " guesses left!")
// call input function to ask for letter input 
input();


