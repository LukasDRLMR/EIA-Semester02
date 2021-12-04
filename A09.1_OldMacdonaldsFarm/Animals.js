"use strict";
var A09_1_OldMacdonaldsFarm;
(function (A09_1_OldMacdonaldsFarm) {
    class Animal {
        constructor() {
            this.position = new A09_1_OldMacdonaldsFarm.Vector(0, 0);
            // this.position.random;
            this.type = Math.floor(Math.random() * 2);
        }
        draw() {
            A09_1_OldMacdonaldsFarm.crc2.save();
            A09_1_OldMacdonaldsFarm.crc2.translate(750, 700);
            A09_1_OldMacdonaldsFarm.shapesAnimal[0]();
            A09_1_OldMacdonaldsFarm.crc2.restore();
        }
    }
    A09_1_OldMacdonaldsFarm.Animal = Animal;
})(A09_1_OldMacdonaldsFarm || (A09_1_OldMacdonaldsFarm = {}));
//# sourceMappingURL=Animals.js.map