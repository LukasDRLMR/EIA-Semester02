"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Food {
        constructor() {
            this.path = new Path2D();
            this.salad = false;
            this.cabbage = false;
            this.tomato = false;
            this.onion = false;
            this.sauce = false;
            this.hot = false;
            this.doener = false;
            this.yufka = false;
            this.lahmacun = false;
        }
        clicked() {
            if (this.capacity == 5) {
                this.capacity = 0;
            }
            else {
                this.capacity += 1;
            }
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Food.js.map