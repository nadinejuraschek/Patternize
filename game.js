console.log("Connected");

var btnColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var randomNum = 0;
var nextColor = "";

function nextSequence() {
    randomNum = Math.floor(Math.random() * 4);
    console.log("randomNumber: " + randomNum);
    return randomNum;
};

function randomChosenColor() {
    nextSequence();
    var nextColor = btnColors[randomNum];
    console.log("Next Color: " + nextColor);
    gamePattern.push(nextColor);
    console.log(gamePattern);
    var selectedSquare = $("#" + nextColor);
    console.log(selectedSquare);
    selectedSquare.fadeIn(100).fadeOut(100).fadeIn(100);
};

randomChosenColor();