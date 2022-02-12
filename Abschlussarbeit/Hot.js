"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Hot extends Endabgabe.Food {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(1120, 850);
            this.positionDisplay = new Endabgabe.Vector(1190, 800);
            this.capacity = 2;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(100, 0, 0)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillText("Scharf", this.position.x + 30, this.position.y + 40);
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            Endabgabe.crc2.strokeRect(0, 0, 10, 100);
            Endabgabe.crc2.fillRect(0, 0, 10, 100);
            Endabgabe.crc2.fillStyle = "rgb(70, 70, 70)";
            Endabgabe.crc2.fillRect(0, 0, 10, 20 * this.capacity);
            Endabgabe.crc2.restore();
        }
    }
    Endabgabe.Hot = Hot;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Hot.js.map