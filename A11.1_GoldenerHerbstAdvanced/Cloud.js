"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Cloud extends A11_1_GoldenerHerbstAdvanced.Moveable {
        constructor() {
            super();
            this.position = new A11_1_GoldenerHerbstAdvanced.Vector(0, 100);
            this.velocity = A11_1_GoldenerHerbstAdvanced.Vector.randomX(100, 200);
        }
        draw() {
            let nParticles = 70;
            let radiusParticle = 30;
            let particle = new Path2D();
            let gradient = A11_1_GoldenerHerbstAdvanced.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            A11_1_GoldenerHerbstAdvanced.crc2.save();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
            A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A11_1_GoldenerHerbstAdvanced.crc2.save();
                let x = (Math.random() - 0.5) * 150;
                let y = -(Math.random() * 50);
                A11_1_GoldenerHerbstAdvanced.crc2.translate(x, y);
                A11_1_GoldenerHerbstAdvanced.crc2.fill(particle);
                A11_1_GoldenerHerbstAdvanced.crc2.restore();
            }
            A11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
    }
    A11_1_GoldenerHerbstAdvanced.Cloud = Cloud;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Cloud.js.map