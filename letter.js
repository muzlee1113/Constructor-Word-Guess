

// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
const Letter = function(key){
    // A string value to store the underlying character for the letter
    this.key = key;
    // A boolean value that stores whether that letter has been guessed yet
    this.right = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.return = function(){
        if(this.right){
            var display = this.key
        }else{
            var display = "_"
        }
        // console.log(display)
        return display
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check = function(char){
        //turn the character into lowercase
        char = char.toLowerCase()
        //use if statement to check whether the guessed character equal to underlying character
        if (this.key === char){
            this.right = true;
        }
    }
}

//test
// var letter = new Letter("a")
// letter.check("A")
// letter.return()


// var letter = new Letter("b")
// letter.check("A")
// letter.return()

//export Letter constructor
module.exports = Letter
