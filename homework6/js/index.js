//status of the game
var start = 0;

//append blocks to the game area
function addPicture() {
    var area = document.getElementById("game-area");
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var div = document.createElement("div");
            if (i == 3 && j == 3) {
                div.id = "blank";
                div.className = "r3 c3";
            } else {
                div.className = "pic row" + i + " col" + j + " r" + i + " c" + j;
                div.addEventListener('click', move);
            }
            area.appendChild(div);
        }
    }
}

//move the block if it is valid
function move(event) {
    if (start == 1) {
        var blank = document.getElementById("blank");
        var pic_x = event.target.className.substr(15, 1);
        var pic_y = event.target.className.substr(18, 1);
        var blank_x = blank.className.substr(1, 1);
        var blank_y = blank.className.substr(4, 1);
        if ((Math.abs(pic_x - blank_x) == 1 && pic_y == blank_y) ||
            (Math.abs(pic_y - blank_y) == 1 && pic_x == blank_x)) {
            var blank_name = blank.className;
            blank.className = event.target.className.substr(14, 5);
            event.target.className = event.target.className.substr(0, 14) + blank_name;
        }
        if (check()) alert("You Win!");
    }
}

//check whether the picture is right
function check() {
    var pic = document.getElementsByClassName("pic");
    for (var i = 0; i < 15;) {
        var name = pic[i].className;
        if (name[15] == name[7] && name[18] == name[12]) {
            i++;
        } else {
            return false;
        }
    }
    return true;
}

//check whether the position repeats
function repeat(pos, t) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (pos[i][j] == t) return true;
        }
    }
    return false;
}

//restart the game
function reset(event) {
    if (start == 0) {
        event.target.innerHTML = "重新开始";
        start = 1;
    }
    var pos = [
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1]
    ];
    var pic = document.getElementsByClassName("pic");
    //set the position of each block
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var temp = Math.floor(Math.random() * 16);
            while (repeat(pos, temp)) {
                temp = Math.floor(Math.random() * 16);
            }
            pos[i][j] = temp;
            if (i == 3 && j == 3) {
                document.getElementById("blank").className = "r" + Math.floor(temp / 4) + " c" + (temp % 4);
                continue;
            }
            var name = pic[4 * i + j].className;
            name = name.substr(0, 14);
            pic[4 * i + j].className = name + "r" + Math.floor((temp / 4)) + " c" + (temp % 4);
        }
    }
}

window.onload = function() {
    addPicture();
    document.getElementsByTagName("button")[0].addEventListener('click', reset);
}