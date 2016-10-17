var time = 30;
var score = 0;
var timer = null;
var status = 0;
var button;

//add button to the screen
function addButton() {
    var box = document.getElementById("box");
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++) {
            var newButton = document.createElement("input");
            newButton.type = "radio";
            newButton.className = "button";
            newButton.checked = false;
            newButton.addEventListener("click", check);
            box.appendChild(newButton);
        }
    }
    button = document.getElementsByTagName("input");
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

//action when pressing the start|stop button
function start() {
    //if the game is not started, start gaming
    if (status == 0) {
        time = 30;
        score = 0;
        st();
        mouseSet();
    } else if (status == 1) {
        //if gaming, stop the game
        end();
    }
}

function timeSet() {
    timer = setInterval(sub, 1000);
}

function end() {
    document.getElementById("time").innerHTML = "0";
    document.getElementById("status").innerHTML = "Pressing button to restart";
    var mouse = document.getElementsByClassName("mouse");
    if (mouse.length != 0) {
        mouse[0].checked = 0;
        mouse[0].className = "button";
    }
    alert("Game Over, you have got " + score);
    clearInterval(timer);
    timer = null;
    status = 0;
}

//time function
function sub() {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
        end();
    }
}

//set the mouse hole
function mouseSet() {
    var i = Math.floor(Math.random() * 61);
    button[i].className = "mouse";
    button[i].checked = true;
}

//action when the button is clicked
function check(event) {
    //gaming
    if (status == 1) {
        //if click the mouse, add 1 to score
        if (event.target.className == "mouse") {
            score++;
            event.target.className = "button";
            event.target.checked = false;
            mouseSet();
        } else {
            //if click the empty hole, minus 1 to score
            event.target.checked = false;
            score--;
        }
        document.getElementById("score").innerHTML = score;
    }
    //if not gaming, the buttons' checked are always false
    if (status == 0 || status == -1) {
        if (event.target.checked == true && event.target.className == "button") event.target.checked = false;
    }
}

window.onload = function() {
    addButton();
    startGame();
}