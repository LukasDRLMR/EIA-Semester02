"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Squirrel extends A11_1_GoldenerHerbstAdvanced.Moveable {
        constructor() {
            super();
            this.position = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.Vector.random(A11_1_GoldenerHerbstAdvanced.crc2.canvas.width, 0), A11_1_GoldenerHerbstAdvanced.Vector.random(A11_1_GoldenerHerbstAdvanced.crc2.canvas.height, A11_1_GoldenerHerbstAdvanced.gras));
            this.task = A11_1_GoldenerHerbstAdvanced.TASK.WAIT;
            this.bellysize = 1;
        }
        move(_timeslice, _position) {
            if (this.bellysize <= 5) {
                super.move(_timeslice);
                if (Math.random() < 0.05 && !_position && this.task == A11_1_GoldenerHerbstAdvanced.TASK.WAIT && this.bellysize < 5) {
                    this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 200) / this.bellysize, A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 200) / this.bellysize);
                }
                if (this.position.y <= A11_1_GoldenerHerbstAdvanced.gras) {
                    this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(this.velocity.x, A11_1_GoldenerHerbstAdvanced.Vector.random(0, 200));
                }
                if (this.position.y > A11_1_GoldenerHerbstAdvanced.crc2.canvas.height - 10) {
                    this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(this.velocity.x, A11_1_GoldenerHerbstAdvanced.Vector.random(-200, 0));
                }
                if (A11_1_GoldenerHerbstAdvanced.nuts.length > 0) {
                    this.takeAttention();
                }
            }
        }
        takeAttention() {
            for (let i = 0; i < A11_1_GoldenerHerbstAdvanced.nuts.length; i++) {
                let distance = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.nuts[i].position.x - this.position.x, A11_1_GoldenerHerbstAdvanced.nuts[i].position.y - this.position.y).length;
                if (this.task == A11_1_GoldenerHerbstAdvanced.TASK.WAIT) {
                    if (A11_1_GoldenerHerbstAdvanced.nuts[i].readyToBeEaten == true) {
                        if (A11_1_GoldenerHerbstAdvanced.nuts[i].targeted == false) {
                            A11_1_GoldenerHerbstAdvanced.nuts[i].targeted = true;
                            this.task = A11_1_GoldenerHerbstAdvanced.TASK.EAT;
                            this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(A11_1_GoldenerHerbstAdvanced.nuts[i].position.x - this.position.x, A11_1_GoldenerHerbstAdvanced.nuts[i].position.y - this.position.y);
                        }
                    }
                }
                if (this.task == A11_1_GoldenerHerbstAdvanced.TASK.EAT) {
                    if (distance < 10) {
                        this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(0, 0);
                        A11_1_GoldenerHerbstAdvanced.nuts[i].eaten = true;
                        this.task = A11_1_GoldenerHerbstAdvanced.TASK.WAIT;
                        this.bellysize += 1;
                    }
                }
            }
        }
        draw() {
            if (this.bellysize > 5) {
                A11_1_GoldenerHerbstAdvanced.crc2.save();
                A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x - 30, this.position.y - 50);
                A11_1_GoldenerHerbstAdvanced.crc2.scale(0.2, 0.2);
                A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(102, 54);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(179, 6);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(190, 85);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(298, 20);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(290, 107);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(395, 106);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(307, 176);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(349, 279);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(252, 201);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(167, 285);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(159, 199);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(34, 261);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(67, 171);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(0, 124);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(47, 94);
                A11_1_GoldenerHerbstAdvanced.crc2.lineTo(1, 1);
                A11_1_GoldenerHerbstAdvanced.crc2.closePath();
                A11_1_GoldenerHerbstAdvanced.crc2.translate(30, 80);
                A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(255, 255, 255)";
                A11_1_GoldenerHerbstAdvanced.crc2.fill();
                A11_1_GoldenerHerbstAdvanced.crc2.strokeStyle = "rgb(0, 0, 0)";
                A11_1_GoldenerHerbstAdvanced.crc2.lineWidth = 7;
                A11_1_GoldenerHerbstAdvanced.crc2.stroke();
                A11_1_GoldenerHerbstAdvanced.crc2.font = "90px Comic Sans";
                A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(50, 0, 0)";
                A11_1_GoldenerHerbstAdvanced.crc2.fillText("Plop", 80, 80);
                A11_1_GoldenerHerbstAdvanced.crc2.restore();
                setTimeout(this.plop.bind(this), 2000);
            }
            else {
                A11_1_GoldenerHerbstAdvanced.crc2.save();
                A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
                A11_1_GoldenerHerbstAdvanced.crc2.scale(0.3, 0.3);
                if (this.velocity.x > 0)
                    A11_1_GoldenerHerbstAdvanced.crc2.scale(-1, 1);
                A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
                A11_1_GoldenerHerbstAdvanced.crc2.ellipse(0, 0, (this.bellysize / 10 + 1) * 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
                A11_1_GoldenerHerbstAdvanced.crc2.closePath();
                A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "rgb(" + (this.bellysize / 10 + 1) * 122 + ", 63, 0)";
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
        plop() {
            this.bellysize = 1;
            // moveables.splice(moveables.indexOf(this), 1);
            // drawSquirrel(1);
        }
    }
    A11_1_GoldenerHerbstAdvanced.Squirrel = Squirrel;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Squirrel.js.map