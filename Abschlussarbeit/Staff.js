"use strict";
var Endabgabe;
(function (Endabgabe) {
    let WORKSTATE;
    (function (WORKSTATE) {
        WORKSTATE[WORKSTATE["CASH"] = 0] = "CASH";
        WORKSTATE[WORKSTATE["TOPPING"] = 1] = "TOPPING";
        WORKSTATE[WORKSTATE["PREPARATION"] = 2] = "PREPARATION";
        WORKSTATE[WORKSTATE["PAUSE"] = 3] = "PAUSE";
    })(WORKSTATE = Endabgabe.WORKSTATE || (Endabgabe.WORKSTATE = {}));
    let STAFFSTATE;
    (function (STAFFSTATE) {
        STAFFSTATE[STAFFSTATE["WORKING"] = 0] = "WORKING";
        STAFFSTATE[STAFFSTATE["SLEEPING"] = 1] = "SLEEPING";
        STAFFSTATE[STAFFSTATE["STRESSED"] = 2] = "STRESSED";
    })(STAFFSTATE = Endabgabe.STAFFSTATE || (Endabgabe.STAFFSTATE = {}));
    class Staff extends Endabgabe.Human {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width * 0.25, Endabgabe.crc2.canvas.height - Math.floor(Math.random() * 100));
            this.velocity = new Endabgabe.Vector(0, 0);
            this.targeted = false;
            this.state = 0;
            for (let n = 0; n < Endabgabe.staffs.length; n++) {
                if (this.state == Endabgabe.staffs[n].state) {
                    this.state++;
                }
            }
            this.mood = STAFFSTATE.WORKING;
            this.onMyWay = false;
            this.pauseStation = new Endabgabe.Vector(900, 930);
            this.cashStation = new Endabgabe.Vector(980, 900);
            this.prepStation = new Endabgabe.Vector(350, 400);
            this.toppingStation = new Endabgabe.Vector(900, 300);
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            if (this.mood == STAFFSTATE.WORKING) {
                Endabgabe.crc2.fillStyle = "rgb(0, 0, 255";
            }
            if (this.mood == STAFFSTATE.SLEEPING) {
                Endabgabe.crc2.fillStyle = "rgb(120, 0, 90)";
            }
            if (this.mood == STAFFSTATE.STRESSED) {
                Endabgabe.crc2.fillStyle = "rgb(120, 0, 25)";
            }
            if (this.targeted == true) {
                Endabgabe.crc2.fillStyle = "rgb(0, 130, 173)";
            }
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.restore();
        }
        clicked() {
            for (let i = 0; i < Endabgabe.staffs.length; i++) {
                if (Endabgabe.staffs[i].targeted == true) {
                    let one = this.state;
                    let two = Endabgabe.staffs[i].state;
                    this.state = two;
                    Endabgabe.staffs[i].state = one;
                }
            }
            this.targeted = true;
            setTimeout(() => {
                this.targeted = false;
            }, 5000);
        }
        work() {
            if (this.state == WORKSTATE.PAUSE && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.pauseStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.CASH && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.cashStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.PREPARATION && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.prepStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.TOPPING && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.toppingStation, this.position);
                this.onMyWay = true;
            }
            if (Math.floor(this.position.x) == this.pauseStation.x && this.state == WORKSTATE.PAUSE) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.cashStation.x && this.state == WORKSTATE.CASH) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.prepStation.x && this.state == WORKSTATE.PREPARATION) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.toppingStation.x && this.state == WORKSTATE.TOPPING) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
        }
    }
    Endabgabe.Staff = Staff;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Staff.js.map