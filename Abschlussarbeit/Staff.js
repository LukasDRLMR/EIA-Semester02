"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Staff extends Endabgabe.Human {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width * 0.25, Endabgabe.crc2.canvas.height);
            this.velocity = new Endabgabe.Vector(0, 0);
            this.targeted = false;
            this.state = Math.floor(Math.random() * (3 - 0 + 1));
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(0, 0, 255)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.restore();
            console.log(this.state);
        }
        clicked() {
            this.targeted = true;
            this.velocity = new Endabgabe.Vector(0, 0);
        }
        work() {
            console.log("Work");
            if (Endabgabe.WORKSTATE.PAUSE) {
                this.velocity = Endabgabe.Vector.getDifference(new Endabgabe.Vector(500, 500), this.position);
            }
            if (Endabgabe.WORKSTATE.CASH) {
                this.velocity = Endabgabe.Vector.getDifference(new Endabgabe.Vector(500, 500), this.position);
            }
            if (Endabgabe.WORKSTATE.PREPARATION) {
                this.velocity = Endabgabe.Vector.getDifference(new Endabgabe.Vector(500, 500), this.position);
            }
            if (Endabgabe.WORKSTATE.TOPPING) {
                this.velocity = Endabgabe.Vector.getDifference(new Endabgabe.Vector(500, 500), this.position);
            }
        }
    }
    Endabgabe.Staff = Staff;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Staff.js.map