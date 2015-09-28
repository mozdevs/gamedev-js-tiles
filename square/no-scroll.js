var map = {
    cols: 8,
    rows: 8,
    tsize: 64,
    tiles: [
        3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 2, 1, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 3, 3, 0, 0, 3, 3, 3
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col]
    }
};

Game.load = function () {
    return [
        Loader.loadImage('grass', '../assets/grass.png'),
        Loader.loadImage('sand', '../assets/sand.png'),
        Loader.loadImage('tree', '../assets/tree.png'),
    ];
};

Game.init = function () {
    this.tileImages = [
        null,
        Loader.getImage('grass'),
        Loader.getImage('sand'),
        Loader.getImage('tree')
    ];
};

Game.update = function (delta) {
};

Game.render = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (this.tileImages[tile] !== null) {
                this.ctx.drawImage(this.tileImages[tile], c * map.tsize, r * map.tsize);
            }
        }
    }
};
