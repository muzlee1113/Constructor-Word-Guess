//require letter.js
const Letter = require('./letter')
// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


const Word = function (keys) {
    // An array of new Letter objects representing the letters of the underlying word
    this.keys = []
    this.objects = function () {
        for (let i in keys){
            var singleKey = new Letter(keys[i])
            this.keys.push(singleKey)
        };
    }
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.toString = function () {
        var displayArr = []
        for (let i in this.keys) {
            displayArr.push(this.keys[i].return())
        }
        var displayString = displayArr.toString()
        return displayString
    }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.check = function (char) {
        for (let i in this.keys) {
            this.keys[i].check(char)
        }
    }
}

// test
// var word = new Word('happy')
// word.objects()
// word.check("a")
// console.log(word.toString())
// word.check("b")
// console.log(word.toString())
// word.check("p")
// console.log(word.toString())



// export Word constructor
module.exports = Word