"use strict";
var Endabgabe;
(function (Endabgabe) {
    let CUSTOMERMOOD;
    (function (CUSTOMERMOOD) {
        CUSTOMERMOOD[CUSTOMERMOOD["HAPPY"] = 0] = "HAPPY";
        CUSTOMERMOOD[CUSTOMERMOOD["UNHAPPY"] = 1] = "UNHAPPY";
        CUSTOMERMOOD[CUSTOMERMOOD["HANGRY"] = 2] = "HANGRY";
    })(CUSTOMERMOOD = Endabgabe.CUSTOMERMOOD || (Endabgabe.CUSTOMERMOOD = {}));
    let orders = [
        ["Döner", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
        ["Yufka", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
        ["Lahmacun", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"]
    ];
    class Customer extends Endabgabe.Human {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width - 10, Endabgabe.crc2.canvas.height * 0.5);
            this.velocity = new Endabgabe.Vector(0, 0);
            this.mood = CUSTOMERMOOD.HAPPY;
            this.ordering = true;
            for (let n = 0; n < Endabgabe.customers.length; n++) {
                if (this.ordering == Endabgabe.customers[n].ordering) {
                    this.ordering = false;
                }
            }
            this.orderStation = new Endabgabe.Vector(1300, 930);
            this.onMyWay = false;
            this.readytoOrder = false;
            this.ordered = false;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            if (this.mood == CUSTOMERMOOD.HAPPY) {
                Endabgabe.crc2.fillStyle = "rgb(0, 112, 0)";
            }
            if (this.mood == CUSTOMERMOOD.UNHAPPY) {
                Endabgabe.crc2.fillStyle = "rgb(219, 135, 0)";
            }
            if (this.mood == CUSTOMERMOOD.HANGRY) {
                Endabgabe.crc2.fillStyle = "rgb(176, 3, 0)";
            }
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let random = Math.random();
            if (random < 0.05 && this.ordering != true) {
                this.velocity = new Endabgabe.Vector(Endabgabe.Vector.random(-200, 200), Endabgabe.Vector.random(-200, 200));
            }
            if (this.position.x <= Endabgabe.crc2.canvas.width * 0.7) {
                this.velocity = new Endabgabe.Vector(Endabgabe.Vector.random(0, 200), this.velocity.y);
            }
            if (this.position.x > Endabgabe.crc2.canvas.width - 10) {
                this.velocity = new Endabgabe.Vector(Endabgabe.Vector.random(-200, 0), this.velocity.y);
            }
            if (this.position.y < 0) {
                this.velocity = new Endabgabe.Vector(this.velocity.x, Endabgabe.Vector.random(0, 200));
            }
            if (this.position.y > Endabgabe.crc2.canvas.height * 0.7 && this.ordering == false) {
                this.velocity = new Endabgabe.Vector(this.velocity.x, Endabgabe.Vector.random(-200, 0));
            }
            if (this.ordering == true && this.onMyWay == false) {
                this.velocity = Endabgabe.Vector.getDifference(this.orderStation, this.position);
                this.onMyWay = true;
            }
            if (this.ordering == true && Math.floor(this.position.x) == this.orderStation.x) {
                this.velocity = new Endabgabe.Vector(0, 0);
                this.onMyWay = false;
                this.readytoOrder = true;
            }
            if (this.ordering == true && this.readytoOrder == true) {
                this.order();
            }
        }
        order() {
            let randomOrder = Math.floor(Math.random() * (2 - 0 + 1));
            let randomSplice = Math.floor(Math.random() * (8 - 1 + 1) - 1);
            if (this.ordered == false) {
                this.finalOrder = orders[randomOrder];
                this.finalOrder.splice(randomSplice, 1);
                this.special = this.finalOrder.splice(randomSplice, 1);
                this.ordered = true;
            }
            if (this.ordered == true) {
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fillText(this.finalOrder[0] + " ohne " + this.special, this.position.x, this.position.y - 60);
            }
        }
    }
    Endabgabe.Customer = Customer;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Costumer.js.map