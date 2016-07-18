//File to control whether or not a letter appears as a "_" or as itself on-screen

var secret = require('./game.js');

var LetterSpaces = function(secret){
  this.answerArray = [];
  this.answerArray = answerArray();
    for (var i = 0; i<word.length; i++){
     answerArray[i] = "_";
  }

}
console.log(secret);
console.log("answerArray");

module.exports = LetterSpaces;