"use strict";
var A08_2_GoldenerHerbst;
(function (A08_2_GoldenerHerbst) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
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
        randomXY(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            let direction = Math.random();
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(lenght);
        }
        randomY(_min, _max) {
            let height = Math.random() * (_max - _min) + _min;
            this.set(0, height);
        }
        randomX(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            this.set(Math.cos(0), Math.sin(0));
            this.scale(lenght);
        }
    }
    A08_2_GoldenerHerbst.Vector = Vector;
})(A08_2_GoldenerHerbst || (A08_2_GoldenerHerbst = {}));
//# sourceMappingURL=Vector.js.map