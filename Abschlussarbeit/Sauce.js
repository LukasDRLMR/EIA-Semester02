"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Sauce extends Endabgabe.Food {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(1070, 680);
            this.positionDisplay = new Endabgabe.Vector(1190, 670);
            this.capacity = 2;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.rect(this.position.x, this.position.y, 100, 70);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(180, 180, 180)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Soße", this.position.x + 80, this.position.y + 85);
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
    Endabgabe.Sauce = Sauce;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Sauce.js.map