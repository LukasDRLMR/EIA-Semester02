"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Sauce extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(1070, 680);
            this.positionDisplay = new Endabgabe.Vector(1190, 670);
            this.positionMat = new Endabgabe.Vector(180, 800);
            this.capacity = 20;
            this.maxCapacity = 20;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.rect(this.positionPrep.x, this.positionPrep.y, 100, 70);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(180, 180, 180)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Soße", this.positionPrep.x + 80, this.positionPrep.y + 85);
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.fillStyle = "rgb(180, 180, 180)";
            Endabgabe.crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.fill(this.pathGround);
            Endabgabe.crc2.stroke(this.pathGround);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.strokeStyle = "white";
            Endabgabe.crc2.fillStyle = "rgb(70, 70, 70)";
            Endabgabe.crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            Endabgabe.crc2.strokeRect(0, 0, 10, 100);
            Endabgabe.crc2.fillRect(0, 0, 10, 100);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillRect(0, 100, 10, -5 * this.capacity);
            Endabgabe.crc2.restore();
        }
        clicked(_object) {
            if (this.capacity > 0) {
                super.clicked(_object);
                Endabgabe.order.push("Sauce");
            }
        }
    }
    Endabgabe.Sauce = Sauce;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Sauce.js.map