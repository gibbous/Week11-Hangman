//File to contain the logic of your app. Running it in Terminal/Bash will start the game.
var word = require('./word.js');
var inquirer = require('inquirer');

//VARIABLES
var remainingGuesses = 10;
var lettersGuessed = [];
var answerArray = [];
var string;


var playGame = function(){

while (remainingGuesses > 0 && word !==string ){


//Get guess from player

console.log("Can you guess who is swimming nearby?  Guess their name to find them!")

    //RUNS inquirer AND ASKS THE USER TO GUESS A LETTER
    inquirer.prompt([{
      name: "guess",
      type: "input",
      message: "Guess a letter!"

    }]).then(function(answers){
      //var newGuess = new Word
      console.log(answers)
    });
    remainingGuesses--;
console.log(remainingGuesses);
console.log(word);  
//console.log(LetterSpaces.answerArray.join(" "));

var string = answerArray.join('');
    console.log(string);
 if (word == string) {
    console.log("congratulations! You caught " + word + "!");
          }
  }
}  
  

