namespace LE11_1_Modifikatoren {
    window.addEventListener("load", handleLoad);

    // export let Array: Superclass[] = [];

    function handleLoad(): void {
        createSuper();
        staticFunction();
    }

    function createSuper(): void {
        let sub: Subclass = new Subclass;
        sub.doSomething();
    }

    function staticFunction(): void {
        Superclass.doStatic();
    }
}