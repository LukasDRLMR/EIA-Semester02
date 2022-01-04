"use strict";
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    class Cloud extends A10_2_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position = new A10_2_GoldenerHerbst.Vector(0, 100);
            this.velocity.randomX(100, 200);
        }
        draw() {
            let nParticles = 70;
            let radiusParticle = 30;
            let particle = new Path2D();
            let gradient = A10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            A10_2_GoldenerHerbst.crc2.save();
            A10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            A10_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A10_2_GoldenerHerbst.crc2.save();
                let x = (Math.random() - 0.5) * 150;
                let y = -(Math.random() * 50);
                A10_2_GoldenerHerbst.crc2.translate(x, y);
                A10_2_GoldenerHerbst.crc2.fill(particle);
                A10_2_GoldenerHerbst.crc2.restore();
            }
            A10_2_GoldenerHerbst.crc2.restore();
        }
    }
    A10_2_GoldenerHerbst.Cloud = Cloud;
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map