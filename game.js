console.log("Connected");

var btnColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var randomNum = 0;
var nextColor = "";
var level = 0;
var started = false;

function nextSequence() {
    level++;
    $('#level-title').html("Level " + level);
    randomNum = Math.floor(Math.random() * 4);
    console.log("randomNumber: " + randomNum);
    randomChosenColor();
    started = !started;
};

function randomChosenColor() {
    var nextColor = btnColors[randomNum];
    console.log("Next Color: " + nextColor);
    gamePattern.push(nextColor);
    console.log(gamePattern);
    var selectedSquare = $("#" + nextColor);
    console.log(selectedSquare);
    
    selectedSquare.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound();
};

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

$(document).keyup(function (e){
    if (!started) {
        nextSequence();
        $('#level-title').html("Level " + level);
        started = true;
    };
});

$('.btn').click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);
});