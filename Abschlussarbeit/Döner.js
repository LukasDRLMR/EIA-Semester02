"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Döner extends Endabgabe.Food {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(480, 80);
            this.positionDisplay = new Endabgabe.Vector(550, 40);
            this.capacity = 10;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 40, 0, 1.2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(180, 100, 0)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Döner", this.position.x, this.position.y + 55);
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.fillStyle = "rgb(70, 70, 70)";
            Endabgabe.crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            Endabgabe.crc2.strokeRect(0, 0, 10, 100);
            Endabgabe.crc2.fillRect(0, 0, 10, 100);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillRect(0, 100, 10, -10 * this.capacity);
            Endabgabe.crc2.restore();
        }
        clicked(_object) {
            if (this.capacity > 0) {
                super.clicked(_object);
                Endabgabe.order.push("Döner");
            }
        }
    }
    Endabgabe.Döner = Döner;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=D%C3%B6ner.js.map