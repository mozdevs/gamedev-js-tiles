var map = {
    cols: 8,
    rows: 8,
    tsize: 64,
    layers: [[
        3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 2, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 2, 1, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 1, 1, 1, 2, 1, 1, 3,
        3, 3, 3, 1, 2, 3, 3, 3
    ], [
        4, 3, 3, 3, 3, 3, 3, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 5, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 0, 0, 0, 0, 0, 0, 4,
        4, 4, 4, 0, 5, 4, 4, 4,
        0, 3, 3, 0, 0, 3, 3, 3
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col]
    }
};

Game.load = function () {
    return [
        Loader.loadImage('grass', '../assets/grass.png'),
        Loader.loadImage('sand', '../assets/sand.png'),
        Loader.loadImage('tree', '../assets/tree.png'),
        Loader.loadImage('tree-top', '../assets/tree_top.png'),
        Loader.loadImage('rock', '../assets/rock.png')
    ];
};

Game.init = function () {
    this.tileImages = ['grass', 'sand', 'tree', 'tree-top', 'rock']
        .map(Loader.getImage.bind(Loader));
    this.tileImages.unshift(null); // 0 => no tile
};

Game.update = function (delta) {
};

Game._drawLayer = function (layer) {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(layer, c, r);
            if (this.tileImages[tile] !== null) {
                this.ctx.drawImage(this.tileImages[tile],
                                   c * map.tsize,
                                   r * map.tsize);
            }
        }
    }
};

Game.render = function () {
    for (var layer = 0; layer < map.layers.length; layer++) {
        this._drawLayer(layer);
    }
};
