"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Staff extends Endabgabe.Human {
        constructor() {
            super();
            this.moodState = ["rgb(0, 0, 255", "rgb(120, 0, 90)", "rgb(120, 0, 25)", "rgb(0, 130, 173)"];
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width * 0.25, Endabgabe.crc2.canvas.height - Math.floor(Math.random() * 100));
            this.velocity = new Endabgabe.Vector(0, 0);
            this.targeted = false;
            this.state = 1;
            for (let n = 0; n < Endabgabe.staffs.length; n++) {
                if (this.state == Endabgabe.staffs[n].state) {
                    this.state++;
                }
            }
            this.mood = Endabgabe.STAFFSTATE.WORKING;
            this.onMyWay = false;
            this.pauseStation = new Endabgabe.Vector(700, 930);
            this.cashStation = new Endabgabe.Vector(1000, 900);
            this.prepStation = new Endabgabe.Vector(350, 400);
            this.toppingStation = new Endabgabe.Vector(850, 350);
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            if (this.mood == Endabgabe.STAFFSTATE.WORKING) {
                Endabgabe.crc2.fillStyle = this.moodState[0];
            }
            if (this.mood == Endabgabe.STAFFSTATE.SLEEPING) {
                Endabgabe.crc2.fillStyle = this.moodState[1];
            }
            if (this.mood == Endabgabe.STAFFSTATE.STRESSED) {
                Endabgabe.crc2.fillStyle = this.moodState[2];
            }
            if (this.targeted == true) {
                Endabgabe.crc2.fillStyle = this.moodState[3];
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
        }
        work(_Pos) {
            if (this.state == Endabgabe.WORKSTATE.PAUSE && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.pauseStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == Endabgabe.WORKSTATE.CASH && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.cashStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == Endabgabe.WORKSTATE.PREPARATION && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.prepStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == Endabgabe.WORKSTATE.TOPPING && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.toppingStation, this.position);
                this.onMyWay = true;
            }
            if (Math.floor(this.position.x) == this.pauseStation.x && this.state == Endabgabe.WORKSTATE.PAUSE) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.cashStation.x && this.state == Endabgabe.WORKSTATE.CASH) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.prepStation.x && this.state == Endabgabe.WORKSTATE.PREPARATION) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.toppingStation.x && this.state == Endabgabe.WORKSTATE.TOPPING) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
            }
            // if (stop != undefined) {
            //     if (Math.floor(this.position.x - 50) == stop.x) {
            //         this.velocity = new Vector(0, 0);
            //     }
            // }
            // if (_Pos) {
            //     stop = _Pos;
            //     if (this.onMyWay == false) {
            //         this.velocity = Vector.getDifference(new Vector(_Pos.x - 50, _Pos.y), this.position);
            //         this.onMyWay = true;
            //     }
            // }
            // console.log(stop);
        }
    }
    Endabgabe.Staff = Staff;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Staff.js.map