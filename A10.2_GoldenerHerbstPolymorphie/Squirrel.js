"use strict";
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    class Squirrel extends A10_2_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position = new A10_2_GoldenerHerbst.Vector(350, 300);
            this.velocity.randomX(100, 200);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01) {
                this.velocity.randomX(-200, 200);
                this.velocity.randomY(-200, 200);
            }
            if (this.position.y <= A10_2_GoldenerHerbst.gras) {
                this.velocity.randomY(0, 200);
            }
            if (this.position.y > A10_2_GoldenerHerbst.crc2.canvas.height - 10) {
                this.velocity.randomY(-200, 0);
            }
        }
        draw() {
            A10_2_GoldenerHerbst.crc2.save();
            A10_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            A10_2_GoldenerHerbst.crc2.scale(0.3, 0.3);
            if (this.velocity.x > 0)
                A10_2_GoldenerHerbst.crc2.scale(-1, 1);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(-40, -75);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(-10, -10);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "white";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "black";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(-10, -10);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.moveTo(0, 0);
            A10_2_GoldenerHerbst.crc2.lineTo(20, -40);
            A10_2_GoldenerHerbst.crc2.lineTo(40, 0);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(10, 80);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(40, 70);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.translate(50, 0);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.moveTo(0, 0);
            A10_2_GoldenerHerbst.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            A10_2_GoldenerHerbst.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            A10_2_GoldenerHerbst.crc2.fill();
            A10_2_GoldenerHerbst.crc2.restore();
        }
    }
    A10_2_GoldenerHerbst.Squirrel = Squirrel;
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map