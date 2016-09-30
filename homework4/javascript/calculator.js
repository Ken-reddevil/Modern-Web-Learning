var show = "";
var result = "";

function isValid() {
    if (show == "")
        return true;
    if (show[0] == '+' || show[0] == '-' || show[0] == '*' || show[0] == '/' || show[0] == ')' || show[0] == '.')
        return false;
    var max = show.length - 1;
    if (show[max] == '+' || show[max] == '-' || show[max] == '*' || show[max] == '/' || show[max] == '(' || show[max] == '.')
        return false;
    var left_count = 0,
        right_count = 0;
    for (var i = 0; i < show.length; i++) {
        if ((show[i] == '+' || show[i] == '-' || show[i] == '*' || show[i] == '/') &&
            (show[i - 1] > '9' || show[i - 1] < '0'))
            return false;
        if (show[i] == '.') {
            if (show[i + 1] > '9' || show[i + 1] < '0')
                return false;
        }
        if (show[i] == '(') {
            if (show[i + 1] == '+' || show[i + 1] == '-' || show[i + 1] == '*' || show[i + 1] == '/' || show[i + 1] == ')')
                return false;
            left_count++;
        }
        if (show[i] == ')') {
            if (right_count >= left_count)
                return false;
            if (show[i - 1] == '+' || show[i - 1] == '-' || show[i - 1] == '*' || show[i - 1] == '/' || show[i - 1] == '.')
                return false;
            right_count++;
        }
    }
    if (left_count != right_count)
        return false;
    return true;
}

window.onload = function() {
    document.getElementById("num0").onclick = function() {
        show += "0";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num1").onclick = function() {
        show += "1";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num2").onclick = function() {
        show += "2";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num3").onclick = function() {
        show += "3";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num4").onclick = function() {
        show += "4";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num5").onclick = function() {
        show += "5";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num6").onclick = function() {
        show += "6";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num7").onclick = function() {
        show += "7";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num8").onclick = function() {
        show += "8";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("num9").onclick = function() {
        show += "9";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("divide").onclick = function() {
        if (result != "") {
            show = result;
            result = "";
        }
        show += "/";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("mutiply").onclick = function() {
        show += "*";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("subtract").onclick = function() {
        show += "-";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("add").onclick = function() {
        show += "+";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("spot").onclick = function() {
        show += ".";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("leftBracket").onclick = function() {
        show += "(";
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
    document.getElementById("rightBracket").onclick = function() {
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