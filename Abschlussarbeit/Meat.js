"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Meat extends Endabgabe.Food {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(960, 80);
            this.positionDisplay = new Endabgabe.Vector(1030, 40);
            this.capacity = 2;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 60, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(180, 100, 0)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillText("Fleisch", this.position.x + 30, this.position.y + 60);
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
        clicked() {
            super.clicked();
        }
    }
    Endabgabe.Meat = Meat;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=meat.js.map