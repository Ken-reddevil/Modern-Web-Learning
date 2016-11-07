(function() {

    function judge(event) {
        var id;
        if (event.target.innerHTML[0] == "W" || event.target.innerHTML == "Location") id = "todo";
        else id = "staff";
        if (event.target.className == "" || event.target.className == "descend") {
            sort(id, 1, event);
            event.target.className = "ascend";
        } else {
            sort(id, 0, event);
            event.target.className = "descend";
        }
    };

    var sort = function(id, num, event) {
        var rows = document.getElementById(id).rows;
        for (var i = 0; i < 3; i++) {
            if (rows[0].cells[i].innerHTML == event.target.innerHTML) break;
        }
        move(rows, num, i);
        for (var j = 0; j < 3; j++) {
            document.getElementById(id).rows[0].cells[j].className = "";
        }
    };

    var move = function(rows, num, col) {
        for (var i = 1; i < 3; i++) {
            for (var j = 1; j < 3; j++) {
                if (num == 1 && rows[j].cells[col].innerHTML > rows[j + 1].cells[col].innerHTML)
                    swap(rows[j], rows[j + 1]);
                if (num == 0 && rows[j].cells[col].innerHTML < rows[j + 1].cells[col].innerHTML)
                    swap(rows[j], rows[j + 1]);
            }
        }
    }

    swap = function(rows1, rows2) {
        var temp = rows1.innerHTML;
        rows1.innerHTML = rows2.innerHTML;
        rows2.innerHTML = temp;
    };

    $(function() {
        $("th").click(judge);
    });

})();