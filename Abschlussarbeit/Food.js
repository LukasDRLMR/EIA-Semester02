"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Food {
        constructor() {
            this.path = new Path2D();
            this.pathGround = new Path2D();
            //
        }
        clicked(_object) {
            if (_object == 1 && this.capacity > 0) {
                this.capacity -= 1;
            }
            if (_object == 2) {
                this.capacity = 0;
            }
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Food.js.map