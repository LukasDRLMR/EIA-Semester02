"use strict";
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    class Leaf extends A10_2_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position.randomY(0, A10_2_GoldenerHerbst.crc2.canvas.height);
            this.velocity.randomXY(100, 200);
            this.type = Math.floor(Math.random() * 3);
            this.size = Math.random() + 0.5;
            let color = ["rgb(163, 104, 0)", "rgba(140, 59, 0)", "rgb(205, 212, 0)"];
            let randomColor = Math.floor(Math.random() * (3 - 0));
            this.color = color[randomColor];
            this.rotation = Math.random() * 360;
            this.rotationChange = Math.random() * (10 - -10) + -10;
        }
        draw() {
            A10_2_GoldenerHerbst.crc2.save();
            A10_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            A10_2_GoldenerHerbst.crc2.scale(this.size, this.size);
            A10_2_GoldenerHerbst.crc2.moveTo(0, 0);
            A10_2_GoldenerHerbst.crc2.rotate(this.rotation);
            A10_2_GoldenerHerbst.crc2.beginPath();
            A10_2_GoldenerHerbst.crc2.fillStyle = this.color;
            A10_2_GoldenerHerbst.crc2.fill(A10_2_GoldenerHerbst.leavesPaths[this.type]);
            A10_2_GoldenerHerbst.crc2.closePath();
            A10_2_GoldenerHerbst.crc2.restore();
        }
        move(_timeslice) {
            let offset = new A10_2_GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.rotation += this.rotationChange * _timeslice;
            if (this.position.x > (A10_2_GoldenerHerbst.crc2.canvas.width + 50)) {
                A10_2_GoldenerHerbst.moveables.splice(A10_2_GoldenerHerbst.moveables.indexOf(this), 1);
                A10_2_GoldenerHerbst.drawLeaves();
            }
            if (this.position.y > (A10_2_GoldenerHerbst.crc2.canvas.height + 50)) {
                A10_2_GoldenerHerbst.moveables.splice(A10_2_GoldenerHerbst.moveables.indexOf(this), 1);
                A10_2_GoldenerHerbst.drawLeaves();
            }
        }
    }
    A10_2_GoldenerHerbst.Leaf = Leaf;
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map