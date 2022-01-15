"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Leaf extends A11_1_GoldenerHerbstAdvanced.Moveable {
        constructor() {
            super();
            this.position = A11_1_GoldenerHerbstAdvanced.Vector.randomY(0, A11_1_GoldenerHerbstAdvanced.crc2.canvas.height);
            this.velocity = A11_1_GoldenerHerbstAdvanced.Vector.randomXY(100, 200);
            this.type = Math.floor(Math.random() * 3);
            this.size = Math.random() + 0.5;
            let color = ["rgb(163, 104, 0)", "rgba(140, 59, 0)", "rgb(205, 212, 0)"];
            let randomColor = Math.floor(Math.random() * (3 - 0));
            this.color = color[randomColor];
            this.rotation = Math.random() * 360;
            this.rotationChange = Math.random() * (10 - -10) + -10;
        }
        draw() {
            A11_1_GoldenerHerbstAdvanced.crc2.save();
            A11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_1_GoldenerHerbstAdvanced.crc2.scale(this.size, this.size);
            A11_1_GoldenerHerbstAdvanced.crc2.moveTo(0, 0);
            A11_1_GoldenerHerbstAdvanced.crc2.rotate(this.rotation);
            A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = this.color;
            A11_1_GoldenerHerbstAdvanced.crc2.fill(A11_1_GoldenerHerbstAdvanced.leavesPaths[this.type]);
            A11_1_GoldenerHerbstAdvanced.crc2.closePath();
            A11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
        move(_timeslice) {
            let offset = new A11_1_GoldenerHerbstAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.rotation += this.rotationChange * _timeslice;
            if (this.position.x > (A11_1_GoldenerHerbstAdvanced.crc2.canvas.width + 50)) {
                A11_1_GoldenerHerbstAdvanced.moveables.splice(A11_1_GoldenerHerbstAdvanced.moveables.indexOf(this), 1);
                A11_1_GoldenerHerbstAdvanced.drawLeaves();
            }
            if (this.position.y > (A11_1_GoldenerHerbstAdvanced.crc2.canvas.height + 50)) {
                A11_1_GoldenerHerbstAdvanced.moveables.splice(A11_1_GoldenerHerbstAdvanced.moveables.indexOf(this), 1);
                A11_1_GoldenerHerbstAdvanced.drawLeaves();
            }
        }
    }
    A11_1_GoldenerHerbstAdvanced.Leaf = Leaf;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Leaf.js.map