"use strict";
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    window.addEventListener("load", () => {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let array = [];
        let x = 0;
        for (let i = 0; i < 1000; i++) {
            for (let n = 0; n < 4; n++) {
                let variable = (Math.random() * (1000 - -1000 + 1)) + -1000;
                array.push(variable);
            }
            x = x + 2;
            array.push(x);
            draw(array[0], array[1], array[2], array[3], array[4]);
            array = [];
            console.log(array);
        }
        function draw(_p1x, _p1y, _p2x, _p2y, _x) {
            crc2.beginPath();
            crc2.moveTo(_x, 0);
            crc2.bezierCurveTo(_p1x, _p1y, _p2x, _p2y, _x, 1000);
            crc2.stroke();
            crc2.strokeStyle = "rgba(0, 0, 0, 0.3";
            crc2.globalCompositeOperation = "lighter";
        }
    });
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map