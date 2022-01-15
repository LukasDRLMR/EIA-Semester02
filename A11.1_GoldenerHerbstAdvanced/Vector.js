"use strict";
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static randomXY(_min, _max) {
            let vector = new Vector(0, 0);
            let lenght = Math.random() * (_max - _min) + _min;
            let direction = Math.random();
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(lenght);
            return vector;
        }
        static random(_min, _max) {
            let value = Math.random() * (_max - _min) + _min;
            return value;
        }
        static randomY(_min, _max) {
            let vector = new Vector(0, 0);
            let height = Math.random() * (_max - _min) + _min;
            vector.sety(height);
            return vector;
        }
        static randomX(_min, _max) {
            let vector = new Vector(0, 0);
            let lenght = Math.random() * (_max - _min) + _min;
            vector.setx(lenght);
            return vector;
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
    }
    A11_1_GoldenerHerbstAdvanced.Vector = Vector;
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=Vector.js.map