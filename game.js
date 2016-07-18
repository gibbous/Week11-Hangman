//file will randomly select a word for the player


var words = ["dory", "nemo", "marlin", "becky", "gerald", "hank", "destiny", "squirt", "crush", "bailey", "rudder", "fluke"];

var secret = words[Math.floor(Math.random() * words.length)];

module.exports = secret;