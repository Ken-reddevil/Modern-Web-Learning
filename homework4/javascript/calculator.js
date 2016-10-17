var show = "";
var result = "";

window.onload = function() {
    //style changes when the button is clicked
    for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
        document.getElementsByTagName('button')[i].onmousedown = function() {
            var bu = this;
            bu.className = "change";
        }
        document.getElementsByTagName('button')[i].onmouseup = function() {
            var bu = this;
            bu.className = "";
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
        try {
            eval("result = " + show);
        } catch (err) {
            alert("wrong input!");
            show = "";
            result = "";
        }
        document.getElementById("show").innerHTML = show;
        document.getElementById("result").innerHTML = result;
    }
}