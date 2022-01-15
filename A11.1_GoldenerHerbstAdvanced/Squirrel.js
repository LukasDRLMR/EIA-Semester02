"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Squirrel extends A11_1_GoldenerHerbstAdvanced.Moveable {
        constructor() {
            super();
            this.position = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.Vector.random(A11_1_GoldenerHerbstAdvanced.crc2.canvas.width, 0), A11_1_GoldenerHerbstAdvanced.Vector.random(A11_1_GoldenerHerbstAdvanced.crc2.canvas.height, A11_1_GoldenerHerbstAdvanced.gras));
            this.velocity = A11_1_GoldenerHerbstAdvanced.Vector.randomX(100, 200);
            this.task = A11_1_GoldenerHerbstAdvanced.TASK.WAIT;
        }
        move(_timeslice, _position) {
            super.move(_timeslice);
            if (Math.random() < 0.01 && !_position && this.task == A11_1_GoldenerHerbstAdvanced.TASK.WAIT) {
                this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 200), A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 200));
            }
            if (this.position.y <= A11_1_GoldenerHerbstAdvanced.gras) {
                this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(this.velocity.x, A11_1_GoldenerHerbstAdvanced.Vector.random(0, 200));
            }
            if (this.position.y > A11_1_GoldenerHerbstAdvanced.crc2.canvas.height - 10) {
                this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(this.velocity.x, A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 0));
            }
            if (A11_1_GoldenerHerbstAdvanced.nuts.length > 0) {
                for (let i = 0; i < A11_1_GoldenerHerbstAdvanced.nuts.length; i++) {
                    if (A11_1_GoldenerHerbstAdvanced.nuts[i].targeted == false && this.task == A11_1_GoldenerHerbstAdvanced.TASK.WAIT) {
                        A11_1_GoldenerHerbstAdvanced.nuts[i].targeted = true;
                        this.move(1 / 50, A11_1_GoldenerHerbstAdvanced.nuts[i].position);
                    }
                }
            }
            if (_position) {
                this.task = A11_1_GoldenerHerbstAdvanced.TASK.EAT;
                this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(_position.x - this.position.x, _position.y - this.position.y);
                if (this.position == _position) {
                    this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(0, 0);
                }
            }
        }
        draw() {
            A11_1_GoldenerHerbstAdvanced.crc2.save();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_1_GoldenerHerbstAdvanced.crc2.scale(0.3, 0.3);
            if (this.velocity.x > 0)
                A11_1_GoldenerHerbstAdvanced.crc2.scale(-1, 1);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(122, 63, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(-40, -75);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(122, 63, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(-10, -10);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "white";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "black";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(-10, -10);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.moveTo(0, 0);
            A11_1_GoldenerHerbstAdvanced.crc2.lineTo(20, -40);
            A11_1_GoldenerHerbstAdvanced.crc2.lineTo(40, 0);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(122, 63, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(10, 80);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(51, 27, 1)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(40, 70);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(51, 27, 1)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(50, 0);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.moveTo(0, 0);
            A11_1_GoldenerHerbstAdvanced.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            A11_1_GoldenerHerbstAdvanced.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(122, 63, 0)";
            A11_1_GoldenerHerbstAdvanced.crc2.fill();
            A11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
    }
    A11_1_GoldenerHerbstAdvanced.Squirrel = Squirrel;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Squirrel.js.map