/********************************
VARIABLES
********************************/
var btnColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var randomNum = 0;
var nextColor = "";
var level = 0;
var started = false;

/********************************
FUNCTIONS
********************************/
function nextSequence() {
    userClickedPattern = [];
    
    level++;
    $('#level-title').html("Level " + level);
    
    randomNum = Math.floor(Math.random() * 4);
    // console.log("randomNumber: " + randomNum);
    randomChosenColor();
    started = !started;
};

function randomChosenColor() {
    var nextColor = btnColors[randomNum];
    // console.log("Next Color: " + nextColor);
    gamePattern.push(nextColor);
    // console.log(gamePattern);
    var selectedSquare = $("#" + nextColor);
    // console.log(selectedSquare);
    
    selectedSquare.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(nextColor);
};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success!");
        
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        console.log("Wrong");
        
        playSound("wrong");
       
        $('body').addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over");
        }, 200);
        
        $('#level-title').html("Game Over! Press Any Key to Restart");
        startOver();
    }
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

/********************************
EVENTS
********************************/
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

    console.log(gamePattern);
    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});