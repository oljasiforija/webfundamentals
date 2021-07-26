var responses = [
    "yes",
    "no",
    "maybe",
    "ask a different question",
    "you dare question me",
    "ah",
    "free britney",
]
var answer = document.getElementById("answer");
var ball = document.getElementById("ball");
var input = document.getElementById("input");

function findFortune(){
    ball.src = "ball1.gif";
    setTimeout(endFortune, 1500);
}
function endFortune(){
    var randResponse = responses[Math.floor(Math.random()* responses.length)];
    answer.innerHTML = randResponse;
    console.log("fortune ended");
    ball.src = "ball.jpg";

}
