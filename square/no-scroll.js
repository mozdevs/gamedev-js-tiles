var map = {
    cols: 8,
    rows: 8,
    tsize: 64,
    tiles: [
        1, 3, 3, 3, 1, 1, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 1, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', '../assets/tiles.png')
    ];
};

Game.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
};

Game.update = function (delta) {
};

Game.render = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    (tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize,  // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};
