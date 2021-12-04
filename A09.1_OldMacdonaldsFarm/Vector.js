"use strict";
var A09_1_OldMacdonaldsFarm;
(function (A09_1_OldMacdonaldsFarm) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        random() {
            let xPosition = Math.random() * ((A09_1_OldMacdonaldsFarm.crc2.canvas.width - 100) - 100 + 100);
            let yPosition = Math.random() * ((A09_1_OldMacdonaldsFarm.crc2.canvas.height - 100) - A09_1_OldMacdonaldsFarm.crc2.canvas.height - A09_1_OldMacdonaldsFarm.golden + 100);
            this.set(xPosition, yPosition);
        }
    }
    A09_1_OldMacdonaldsFarm.Vector = Vector;
})(A09_1_OldMacdonaldsFarm || (A09_1_OldMacdonaldsFarm = {}));
//# sourceMappingURL=Vector.js.map