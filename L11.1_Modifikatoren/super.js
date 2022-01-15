"use strict";
var LE11_1_Modifikatoren;
(function (LE11_1_Modifikatoren) {
    class Superclass {
        constructor() {
            Superclass.position = 1;
        }
        static doStatic() {
            console.log(this.position);
        }
    }
    LE11_1_Modifikatoren.Superclass = Superclass;
})(LE11_1_Modifikatoren || (LE11_1_Modifikatoren = {}));
//# sourceMappingURL=super.js.map