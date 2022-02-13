"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Customer extends Endabgabe.Human {
        constructor() {
            super();
            this.moodState = ["rgb(0, 112, 0)", "rgb(219, 135, 0)", "rgb(176, 3, 0)"];
            this.orders = [
                ["Döner", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
                ["Yufka", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
                ["Lahmacun", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"]
            ];
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width - 10, Endabgabe.crc2.canvas.height * 0.5);
            this.velocity = new Endabgabe.Vector(0, 0);
            this.mood = Endabgabe.CUSTOMERMOOD.HAPPY;
            this.ordering = true;
            for (let n = 0; n < Endabgabe.customers.length; n++) {
                if (this.ordering == Endabgabe.customers[n].ordering) {
                    this.ordering = false;
                }
            }
            this.orderStation = new Endabgabe.Vector(1300, 930);
            this.onMyWay = false;
            this.readytoOrder = false;
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            if (this.mood == Endabgabe.CUSTOMERMOOD.HAPPY) {
                Endabgabe.crc2.fillStyle = this.moodState[0];
            }
            if (this.mood == Endabgabe.CUSTOMERMOOD.UNHAPPY) {
                Endabgabe.crc2.fillStyle = this.moodState[1];
            }
            if (this.mood == Endabgabe.CUSTOMERMOOD.HANGRY) {
                Endabgabe.crc2.fillStyle = this.moodState[2];
            }
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            let random;
            setInterval(function () {
                random = Math.random();
                console.log(random);
            }, 1000);
            if (random < 0.05 && this.ordering != true) {
                this.velocity = new Endabgabe.Vector(Endabgabe.Vector.random(-200, 200), Endabgabe.Vector.random(-200, 200));
            }
            if (this.position.x <= Endabgabe.crc2.canvas.width * 0.65) {
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
        }
    }
    Endabgabe.Customer = Customer;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Costumer.js.map