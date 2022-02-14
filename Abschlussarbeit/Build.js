"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Build extends Endabgabe.Food {
        constructor() {
            super();
            this.positionPrep = new Endabgabe.Vector(Endabgabe.crc2.canvas.width * 0.38, Endabgabe.crc2.canvas.height * 0.5);
        }
        clicked() {
            Endabgabe.order = [];
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 150, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(255, 255, 255)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.translate(Endabgabe.crc2.canvas.width * 0.38, Endabgabe.crc2.canvas.height * 0.44);
            if (Endabgabe.order.includes("Döner")) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.fillStyle = "rgb(180, 100, 0)";
                Endabgabe.crc2.arc(20, 0, 90, 0, 1.2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.rotate(3.2);
                Endabgabe.crc2.arc(20, -120, 90, 0, 1.2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.restore();
            }
            if (Endabgabe.order.includes("Yufka")) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.translate(-20, 60);
                Endabgabe.crc2.fillStyle = "rgb(200, 150, 20)";
                Endabgabe.crc2.arc(20, 0, 130, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.restore();
            }
            if (Endabgabe.order.includes("Lahmacun")) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.translate(-20, 60);
                Endabgabe.crc2.fillStyle = "rgb(180, 100, 100)";
                Endabgabe.crc2.arc(20, 0, 130, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.restore();
            }
            if (Endabgabe.order.includes("Meat")) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.translate(-50, 50);
                Endabgabe.crc2.fillStyle = "rgb(140, 60, 0)";
                Endabgabe.crc2.fillRect(0, -20, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, -40, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, 50, 130, 30);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.restore();
            }
            if (Endabgabe.order.includes("Salad")) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillStyle = "rgb(0, 200, 0)";
                Endabgabe.crc2.fillRect(0, -20, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, -40, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, 50, 130, 30);
            }
            if (Endabgabe.order.includes("Cabbage")) {
                Endabgabe.crc2.translate(-20, 110);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.rotate(5);
                Endabgabe.crc2.fillStyle = "rgb(220, 220, 220)";
                Endabgabe.crc2.fillRect(0, -20, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, -40, 130, 30);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, 50, 130, 30);
            }
            if (Endabgabe.order.includes("Onion")) {
                Endabgabe.crc2.translate(-20, 110);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.rotate(5);
                Endabgabe.crc2.fillStyle = "rgb(220, 120, 0)";
                Endabgabe.crc2.fillRect(0, -20, 100, 10);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, -40, 100, 10);
                Endabgabe.crc2.rotate(2);
                Endabgabe.crc2.fillRect(-80, 50, 100, 10);
            }
            if (Endabgabe.order.includes("Tomato")) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.translate(-70, 90);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.translate(70, 0);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
            }
            if (Endabgabe.order.includes("Sauce")) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.translate(-100, -110);
                Endabgabe.crc2.fillStyle = "rgba(235, 213, 171, 0.5)";
                Endabgabe.crc2.fillRect(0, 0, 150, 150);
                Endabgabe.crc2.closePath();
            }
            if (Endabgabe.order.includes("Hot")) {
                Endabgabe.crc2.translate(20, 20);
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 7; j++) {
                        Endabgabe.crc2.save();
                        Endabgabe.crc2.fillStyle = "rgb(200, 0, 0)";
                        Endabgabe.crc2.beginPath();
                        Endabgabe.crc2.arc(20 * j, 20 * i, 5, 0, Math.PI * 2);
                        Endabgabe.crc2.fill();
                        Endabgabe.crc2.closePath();
                        Endabgabe.crc2.restore();
                    }
                }
            }
            Endabgabe.crc2.restore();
        }
    }
    Endabgabe.Build = Build;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Build.js.map