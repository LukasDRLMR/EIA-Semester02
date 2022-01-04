"use strict";
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setx(_x) {
            this.x = _x;
        }
        sety(_y) {
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        randomXY(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            let direction = Math.random();
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(lenght);
        }
        randomY(_min, _max) {
            let height = Math.random() * (_max - _min) + _min;
            this.sety(height);
        }
        randomX(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            this.setx(lenght);
        }
    }
    A10_2_GoldenerHerbst.Vector = Vector;
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Vector.js.map