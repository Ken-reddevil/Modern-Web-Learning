var condition = 0;
var cheat = 0;


function set() {
    for (var i = 1; i <= 9; i++) {
        var wall = document.getElementById("wall" + i);
        wall.addEventListener('mouseover', fail);
        wall.addEventListener('mouseout', reset);
    }
}

function fail(event) {
    if (condition == 1) {
        event.target.className = "change";
        document.getElementById("result").innerHTML = "You Lose";
        condition = 0;
    }
}

function reset(event) {
    if (event.target.className == "change") {
        event.target.className = "wall";
    }
}

function cheatCheck(event) {
    document.getElementById("maze").onmouseleave = function() {
        if (condition == 1) cheat = 1;
    }
    document.getElementById("maze").onmouseover = function(event) {
        if (condition == 1) {
            event.target.style.cursor = "pointer";
            cheat = 0;
        } else {
            event.target.style.cursor = "auto";
        }
    }
}

function endGame() {
    document.getElementById("end").addEventListener('mouseover', end);
}

function end(evnet) {
    if (condition == 1) {
        if (cheat == 0) document.getElementById("result").innerHTML = "You Win";
        if (cheat == 1) document.getElementById("result").innerHTML = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
        condition = 0;
    }
}

function startGame() {
    document.getElementById("start").addEventListener('mouseover', start);
}

function start(event) {
    if (condition == 0) {
        document.getElementById("result").innerHTML = "";
        event.target.style.cursor = "pointer";
        condition = 1;
    }
}

window.onload = function() {
    startGame();
    cheatCheck();
    endGame();
    set();
}