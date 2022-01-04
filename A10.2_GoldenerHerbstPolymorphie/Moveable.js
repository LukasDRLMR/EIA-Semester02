"use strict";
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    class Moveable {
        constructor(_position, _velocity) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new A10_2_GoldenerHerbst.Vector(0, 0);
            }
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new A10_2_GoldenerHerbst.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_2_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > A10_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= A10_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > A10_2_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= A10_2_GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            // 
        }
    }
    A10_2_GoldenerHerbst.Moveable = Moveable;
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map