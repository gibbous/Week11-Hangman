//File to contain the logic of your app. Running it in Terminal/Bash will start the game.

//Pick a random word (array for now, constructor later)
var words = ["dory", "nemo", "marlin", "becky", "gerald", "hank", "destiny", "squirt", "crush", "bailey", "rudder", "fluke"];

var word = words[Math.floor(Math.random() * words.length)];

//display word spaces
var answerArray =[];
  for (var i = 0; i<word.length; i++){
    answerArray[i] = "_";
  }
var guessedLetters = [];
var remainingGuesses = 10;
while (remainingGuesses > 0){

console.log(answerArray.join(" "));

//Get guess from player (prompt for now, inquirer later)
var guess = prompt("Guess a letter!");
//check if guess is a valid letter
  if (guess.length !== 1){
    alert ("Please enter a single letter");
  } else {
    //check if letter is in secret word
      for (var j = 0; j < word.length; j++){
        if(word[j] === guess) {
          answerArray[j] = guess;
          remainingGuesses --;
        }
      } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
      }
    }

}

//keep track of letters that have been guessed

//update the word display

//update the letters remaining

//display winning message if player guesses the word

//display start over message if player loses