"use strict";
var A08_2_GoldenerHerbst;
(function (A08_2_GoldenerHerbst) {
    class Cloud {
        constructor() {
            this.position = new A08_2_GoldenerHerbst.Vector(0, 100);
            this.velocity = new A08_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.randomX(100, 200);
        }
        move(_timeslice) {
            let offset = new A08_2_GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > A08_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= A08_2_GoldenerHerbst.crc2.canvas.width;
        }
        draw(_size) {
            let nParticles = _size;
            let radiusParticle = 30;
            let particle = new Path2D();
            let gradient = A08_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            A08_2_GoldenerHerbst.crc2.save();
            A08_2_GoldenerHerbst.crc2.fillStyle = gradient;
            A08_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A08_2_GoldenerHerbst.crc2.save();
                let x = (Math.random() - 0.5) * 150;
                let y = -(Math.random() * 50);
                A08_2_GoldenerHerbst.crc2.translate(x, y);
                A08_2_GoldenerHerbst.crc2.fill(particle);
                A08_2_GoldenerHerbst.crc2.restore();
            }
            A08_2_GoldenerHerbst.crc2.restore();
        }
    }
    A08_2_GoldenerHerbst.Cloud = Cloud;
})(A08_2_GoldenerHerbst || (A08_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map