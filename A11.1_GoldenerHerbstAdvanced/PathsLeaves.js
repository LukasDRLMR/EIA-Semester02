"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    A11_1_GoldenerHerbstAdvanced.shapesLeaves = [
        [
            [-20, 0, -30, 20, -20, 50], [20, 20, 10, 10, 0, 0]
        ],
        [
            [-30, 10, -40, 40, -10, 30], [-10, 60, 0, 60, 10, 30], [50, 70, 30, 0, 0, 0]
        ],
        [
            [0, 0, -40, 20, -40, 20], [-20, 20, -20, 20, -40, 50], [-40, 50, 0, 20, 0, 80], [0, 20, 60, 60, 40, 50], [20, 20, 20, 20, 40, 20]
        ]
    ];
    function createPaths() {
        A11_1_GoldenerHerbstAdvanced.leavesPaths = chooseLeavesPaths(A11_1_GoldenerHerbstAdvanced.shapesLeaves);
    }
    A11_1_GoldenerHerbstAdvanced.createPaths = createPaths;
    function chooseLeavesPaths(_curves) {
        let paths = [];
        for (let type of _curves) {
            let path = new Path2D();
            for (let coordinates of type) {
                path.bezierCurveTo(coordinates[0], coordinates[1], coordinates[2], coordinates[3], coordinates[4], coordinates[5]);
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=PathsLeaves.js.map