"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Nut {
        constructor() {
            this.targeted = false;
            this.eaten = false;
        }
        fall(_timeslice) {
            //
        }
        draw() {
            A11_1_GoldenerHerbstAdvanced.crc2.save();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(179, 107, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(0, -3);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 18, 0, Math.PI, true);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(54, 32, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
    }
    A11_1_GoldenerHerbstAdvanced.Nut = Nut;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Nut.js.map