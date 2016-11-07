(function() {
    var mole = { time: 30, score: 0, timer: null, status: 0, }

    var Pane = function() {
        this.addButton();
        this.listenRadioClick();
        this.listenButtonClick();
    }
    var p = Pane.prototype;
    p.addButton = function() {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 10; j++) {
                $("#box").append(createButton());
            }
        }
    };
    p.listenRadioClick = function() {
        $("input").click(function(event) {
            var hole = event.target;
            if (mole.status == 1) {
                if (hole.className == "mouse") this.right(hole);
                else this.wrong(hole);
            } else {
                hole.checked = 0;
            }
        }.bind(this));
    };
    p.listenButtonClick = function() {
        var that = this;
        $("#start").click(function() {
            if (mole.status == 1) {
                that.stopGame();
            } else if (mole.status == 0) {
                mole.status = 1;
                that.startGame();
            }
        });
    };
    createButton = function() {
        var newButton = document.createElement("input");
        newButton.type = "radio";
        newButton.className = "button";
        newButton.checked = false;
        return newButton;
    };
    p.right = function(target) {
        target.checked = 0;
        target.className = "button";
        mole.score++;
        $("#score").html(mole.score);
        this.mouseSet();
    };
    p.wrong = function(target) {
        target.checked = 0;
        mole.score--;
        $("#score").html(mole.score);
    };
    p.mouseSet = function() {
        var ran = Math.floor(Math.random() * 61);
        $("input")[ran].className = "mouse";
        $("input")[ran].checked = 1;
    };
    p.stopGame = function() {
        clearInterval(mole.timer);
        mole.timer = null;
        alert("Game Over, you have got " + mole.score);
        this.mouseReset();
        $("#time").html("0");
        $("#status").html("Pressing button to restart");
        mole.status = 0;
    };
    p.startGame = function() {
        mole.time = 30;
        mole.score = 0;
        mole.timer = setInterval(timeMinus, 1000);
        $("#score").html(mole.score);
        $("#time").html(mole.time);
        $("#status").html("Gaming");
        this.mouseSet();
    };
    p.mouseReset = function() {
        var mouse = document.getElementsByClassName("mouse");
        if (mouse.length != 0) {
            mouse[0].checked = 0;
            mouse[0].className = "button";
        }
    };
    var timeMinus = function() {
        if (mole.time > 0) {
            mole.time--;
            $("#time").html(mole.time);
        } else {
            p.stopGame();
        }
    };

    $(function() { new Pane(); });
})();