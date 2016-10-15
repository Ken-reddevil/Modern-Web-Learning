var time = 30;
var score = 0;
var timer = null;
var status = 0;
var button;

function addButton() {
    var box = document.getElementById("box");
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++) {
            var newButton = document.createElement("button");
            newButton.className = "button";
            newButton.addEventListener("click", check);
            box.appendChild(newButton);
        }
    }
    button = document.getElementsByClassName("button");
}

function startGame() {
    document.getElementById("start").addEventListener('click', start);
}

function st() {
    timeSet();
    document.getElementById("time").innerHTML = time;
    document.getElementById("score").innerHTML = score;
    status = 1;
    document.getElementById("status").innerHTML = "Gaming";
}

function start() {
    if (status == 0) {
        time = 30;
        score = 0;
        st();
        mouseSet();
    } else if (status == -1) {
        st();
    } else if (status == 1) {
        status = -1;
        clearInterval(timer);
        timer = null;
        document.getElementById("status").innerHTML = "Pausing";
    }
}

function timeSet() {
    timer = setInterval(sub, 1000);
}

function sub() {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
        document.getElementById("time").innerHTML = "0";
        document.getElementById("status").innerHTML = "Pressing button to restart";
        if (document.getElementsByClassName("mouse").length != 0) {
            document.getElementsByClassName("mouse")[0].className = "button";
        }
        alert("Game Over, you have got " + score);
        clearInterval(timer);
        timer = null;
        status = 0;
    }
}

function mouseSet() {
    if (document.getElementsByClassName("mouse").length == 0) {
        var i = Math.floor(Math.random() * 61);
        button[i].className = "mouse";
    }
}

function check(event) {
    if (status == 1) {
        if (event.target.className == "mouse") {
            score++;
            event.target.className = "button";
            mouseSet();
        } else {
            score--;
        }
        document.getElementById("score").innerHTML = score;
    }
}

window.onload = function() {
    addButton();
    startGame();
}