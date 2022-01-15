"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Moveable {
        constructor(_position, _velocity) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new A11_1_GoldenerHerbstAdvanced.Vector(0, 0);
            }
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new A11_1_GoldenerHerbstAdvanced.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11_1_GoldenerHerbstAdvanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11_1_GoldenerHerbstAdvanced.crc2.canvas.height;
            if (this.position.x > A11_1_GoldenerHerbstAdvanced.crc2.canvas.width)
                this.position.x -= A11_1_GoldenerHerbstAdvanced.crc2.canvas.width;
            if (this.position.y > A11_1_GoldenerHerbstAdvanced.crc2.canvas.height)
                this.position.y -= A11_1_GoldenerHerbstAdvanced.crc2.canvas.height;
        }
    }
    A11_1_GoldenerHerbstAdvanced.Moveable = Moveable;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Moveable.js.map