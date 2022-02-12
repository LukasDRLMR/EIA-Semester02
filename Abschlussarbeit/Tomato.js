"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Tomato extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(1120, 590);
            this.positionDisplay = new Endabgabe.Vector(1190, 540);
            this.positionMat = new Endabgabe.Vector(120, 660);
            this.capacity = 5;
        }
        draw() {
            //Zutat
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Tomaten", this.positionPrep.x + 20, this.positionPrep.y + 45);
            Endabgabe.crc2.restore();
            //Material
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 40, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
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
            Endabgabe.crc2.fillRect(0, 100, 10, -20 * this.capacity);
            Endabgabe.crc2.restore();
        }
        clicked(_object) {
            if (this.capacity > 0) {
                super.clicked(_object);
                Endabgabe.order.push("Tomato");
            }
        }
    }
    Endabgabe.Tomato = Tomato;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Tomato.js.map