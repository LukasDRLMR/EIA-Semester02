"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Salad extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(1120, 200);
            this.positionDisplay = new Endabgabe.Vector(1190, 150);
            this.positionMat = new Endabgabe.Vector(120, 210);
            this.capacity = 5;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(0, 200, 100)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText("Salat", this.positionPrep.x + 25, this.positionPrep.y + 45);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 40, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(0, 200, 100)";
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
                if (_object == 1) {
                    Endabgabe.order.push("Salad");
                    for (let l = 0; l < Endabgabe.staffs.length; l++) {
                        if (Endabgabe.staffs[l].state == Endabgabe.WORKSTATE.TOPPING) {
                            Endabgabe.staffs[l].work(this.positionPrep);
                        }
                    }
                }
                if (_object == 2) {
                    console.log("Salad in Work");
                }
            }
        }
    }
    Endabgabe.Salad = Salad;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Salad.js.map