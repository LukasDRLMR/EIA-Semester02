"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Build extends Endabgabe.Food {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width * 0.38, Endabgabe.crc2.canvas.height * 0.5);
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 150, 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "rgb(255, 255, 255)";
            Endabgabe.crc2.fill(this.path);
            Endabgabe.crc2.stroke(this.path);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.translate(Endabgabe.crc2.canvas.width * 0.38, Endabgabe.crc2.canvas.height * 0.44);
            // if (order.includes ("Döner")) {
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
            // }
            Endabgabe.crc2.beginPath();
            for (let i = 0; i < 10; i++) {
                let random = Math.floor(Math.random() * 10);
                Endabgabe.crc2.rotate(random);
                console.log(random);
                Endabgabe.crc2.fillStyle = "rgb(0, 200, 0)";
                Endabgabe.crc2.fillRect(0, 0, 100, 20);
            }
            Endabgabe.crc2.restore();
        }
    }
    Endabgabe.Build = Build;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Build.js.map