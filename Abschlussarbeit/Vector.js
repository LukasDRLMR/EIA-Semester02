"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static random(_min, _max) {
            let value = Math.random() * (_max - _min) + _min;
            return value;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Vector.js.map