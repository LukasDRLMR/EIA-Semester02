"use strict";
var LE11_1_Modifikatoren;
(function (LE11_1_Modifikatoren) {
    window.addEventListener("load", handleLoad);
    // export let Array: Superclass[] = [];
    function handleLoad() {
        createSuper();
        staticFunction();
    }
    function createSuper() {
        let sub = new LE11_1_Modifikatoren.Subclass;
        sub.doSomething();
    }
    function staticFunction() {
        LE11_1_Modifikatoren.Superclass.doStatic();
    }
})(LE11_1_Modifikatoren || (LE11_1_Modifikatoren = {}));
//# sourceMappingURL=script.js.map