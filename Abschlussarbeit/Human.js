"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Human {
        constructor() {
            this.path = new Path2D();
        }
        move(_timeslice) {
            this.path = new Path2D();
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        clicked() {
            //
        }
        work(_Pos) {
            //
        }
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Human.js.map