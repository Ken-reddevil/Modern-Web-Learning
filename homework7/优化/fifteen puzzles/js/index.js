(function() {
    //status of the game
    puzzle = { times: 0, start: 0 };

    var Pane = function() {
        this.createTiles();
        this.listenTilesClick();
        this.listenButtonClick();
    };
    var p = Pane.prototype;
    p.createTiles = function() {
        this.tiles = [];
        var that = this;
        $("#game-area div").each(function(i) {
            that.tiles.push(new Tile(this, i));
        });
        this.tiles[15] = this.blank = new Tile(null, 15);
    };
    p.listenTilesClick = function() {
        $("#game-area").click(function(event) {
            var tile = event.target.tile;
            if (tile && tile.canMove(this.blank)) {
                tile.move(this.blank);
                if (this.check() && puzzle.start) alert("You Win!");
            }
        }.bind(this));
    };
    p.listenButtonClick = function() {
        var that = this;
        $("button").click(function() {
            that.reset();
        });
    };

    var Tile = function(dom, num) {
        this.dom = dom;
        this.num = num;
        this.row = Math.floor(num / 4);
        this.column = num % 4;
        if (dom != null) {
            this.dom.tile = this;
            this.setBackground();
            this.setPosition(this.row, this.column);
        }
    };
    var t = Tile.prototype;
    var pictureLength = 125;
    t.setBackground = function() {
        $(this.dom).css("background-position", -pictureLength * this.column + "px " + -pictureLength * this.row + "px");
    };
    t.setPosition = function(row, column) {
        $(this.dom).css("left", pictureLength * column + "px");
        $(this.dom).css("top", pictureLength * row + "px");
    };
    t.canMove = function(blank) {
        return (this.column == blank.column && Math.abs(this.row - blank.row) == 1 ||
            this.row == blank.row && Math.abs(this.column - blank.column) == 1);
    };
    t.move = function(blank) {
        var attr = ["row", "column"];
        this.swapPosition(blank, attr);
    };
    t.swapPosition = function(blank, attr) {
        for (var i = 0; i < attr.length; i++) {
            var temp = blank[attr[i]];
            blank[attr[i]] = this[attr[i]];
            this[attr[i]] = temp;
        }
        this.setPosition(this.row, this.column);
        blank.setPosition(blank.row, blank.column);
    };
    p.check = function() {
        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].num != this.tiles[i].row * 4 + this.tiles[i].column) return false;
        }
        return true;
    };
    p.reset = function() {
        puzzle.start = 0;
        this.setOrder();
        puzzle.start = 1;
    };
    p.setOrder = function() {
        puzzle.times = Math.floor(Math.random() * 200) + 500;
        for (var i = 0; i < puzzle.times; i++) {
            $(this.tiles[Math.floor(Math.random() * 16)].dom).click();
        }
    };
    $(function() { new Pane(); });
})();