var show = "";
var result = "";

//function to check if the equation is valid or not
function isValid() {
    //if the equation is empty, return true
    if (show == "")
        return true;
    //if the equation starts with a compute sign, return false
    if (show[0] == '+' || show[0] == '-' || show[0] == '*' || show[0] == '/' || show[0] == ')')
        return false;
    var max = show.length - 1;
    //if the equation ends with a compute sign, return false
    if (show[max] == '+' || show[max] == '-' || show[max] == '*' || show[max] == '/' || show[max] == '(' || show[max] == '.')
        return false;
    //check if the bracket matching or not
    var left_count = 0;
    var right_count = 0;
    //check the number of the dot is valid or not
    var dot_count = 0;
    for (var i = 0; i < show.length; i++) {
        //if the compute sign follows the dot, return false
        if (show[i] == '+' || show[i] == '-' || show[i] == '*' || show[i] == '/') {
            if (show[i - 1] == '.') return false;
            //the previous dot is valid
            dot_count--;
        }
        if (show[i] == '.') {
            //if the dot is not followed by a number, return false
            if (show[i + 1] > '9' || show[i + 1] < '0')
                return false;
            dot_count++;
            //the dot is not valid, return false
            if (dot_count >= 2) return false;
        }
        if (show[i] == '(') {
            //if the left bracket is followed by a compute sign, return false
            if (show[i + 1] == '+' || show[i + 1] == '-' || show[i + 1] == '*' || show[i + 1] == '/' || show[i + 1] == ')')
                return false;
            left_count++;
        }
        if (show[i] == ')') {
            if (right_count >= left_count)
                return false;
            //if the right bracket follows a compute sign, return false
            if (show[i - 1] == '+' || show[i - 1] == '-' || show[i - 1] == '*' || show[i - 1] == '/' || show[i - 1] == '.')
                return false;
            right_count++;
        }
    }
    //check if the left and right bracket match or not
    if (left_count != right_count)
        return false;
    return true;
}

window.onload = function() {
    //style changes when the button is clicked
    for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
        document.getElementsByTagName('button')[i].onmousedown = function() {
            var bu = this;
            bu.style.backgroundColor = "rgb(100, 140, 170)";
            bu.style.boxShadow = "1px 1px 1px 1px rgb(200, 200, 200)";
        }
        document.getElementsByTagName('button')[i].onmouseup = function() {
            var bu = this;
            bu.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
            bu.style.boxShadow = "2px 2px 0px 0px #000";
        }
    }
    //change the equation when some buttons are clicked
    document.getElementById("num0").onclick = function() {
        if (show.length > 25) return;
        show += "0";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num1").onclick = function() {
        if (show.length > 25) return;
        show += "1";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num2").onclick = function() {
        if (show.length > 25) return;
        show += "2";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num3").onclick = function() {
        if (show.length > 25) return;
        show += "3";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num4").onclick = function() {
        if (show.length > 25) return;
        show += "4";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num5").onclick = function() {
        if (show.length > 25) return;
        show += "5";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num6").onclick = function() {
        if (show.length > 25) return;
        show += "6";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num7").onclick = function() {
        if (show.length > 25) return;
        show += "7";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num8").onclick = function() {
        if (show.length > 25) return;
        show += "8";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num9").onclick = function() {
        if (show.length > 25) return;
        show += "9";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("divide").onclick = function() {
        if (show.length > 25) return;
        if (result != "") {
            show = result;
            result = "";
        }
        show += "/";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("multiply").onclick = function() {
        if (show.length > 25) return;
        if (result != "") {
            show = result;
            result = "";
        }
        show += "*";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("subtract").onclick = function() {
        if (show.length > 25) return;
        if (result != "") {
            show = result;
            result = "";
        }
        show += "-";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("add").onclick = function() {
        if (show.length > 25) return;
        if (result != "") {
            show = result;
            result = "";
        }
        show += "+";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("dot").onclick = function() {
        if (show.length > 25) return;
        show += ".";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("leftBracket").onclick = function() {
        if (show.length > 25) return;
        show += "(";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("rightBracket").onclick = function() {
        if (show.length > 25) return;
        show += ")";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("clear").onclick = function() {
        show = "";
        result = "";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("delete").onclick = function() {
            show = show.substr(0, show.length - 1);
            document.getElementById("show").innerHTML = show;
            document.getElementById("result").innerHTML = result;
    }
    //compute the equation if it is valid, else alert
    document.getElementById("equal").onclick = function() {
        if (!isValid()) {
            show = "";
            result = "";
            document.getElementById("show").innerHTML = show;
            document.getElementById("result").innerHTML = result;
            alert("wrong input!");
        } else {
            eval("result = " + show);
            document.getElementById("show").innerHTML = show;
            document.getElementById("result").innerHTML = result;
        }
    }
}