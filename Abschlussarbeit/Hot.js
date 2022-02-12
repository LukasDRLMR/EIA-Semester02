"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Hot extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(1120, 850);
            this.positionDisplay = new Endabgabe.Vector(1190, 800);
            this.positionMat = new Endabgabe.Vector(120, 900);
            this.capacity = 20;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 20, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(100, 0, 0)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fillText("Scharf", this.positionPrep.x + 30, this.positionPrep.y + 40);
            Endabgabe.crc2.restore();
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    Endabgabe.crc2.save();
                    Endabgabe.crc2.translate(this.positionMat.x + (50 * j), this.positionMat.y + (50 * i));
                    Endabgabe.crc2.beginPath();
                    this.pathGround.arc(0, 0, 20, 0, Math.PI * 2);
                    Endabgabe.crc2.closePath();
                    Endabgabe.crc2.fillStyle = "rgb(100, 0, 0)";
                    Endabgabe.crc2.fill(this.pathGround);
                    Endabgabe.crc2.stroke(this.pathGround);
                    Endabgabe.crc2.closePath();
                    Endabgabe.crc2.restore();
                }
            }
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
                Endabgabe.order.push("Hot");
            }
        }
    }
    Endabgabe.Hot = Hot;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Hot.js.map